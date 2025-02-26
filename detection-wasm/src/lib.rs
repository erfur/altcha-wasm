mod anomaly;
mod utils;

use std::cell::RefCell;
use std::rc::Rc;
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;

// A macro to provide `println!(..)`-style syntax for `console.log` logging.
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!("[wasm] {}", format!( $( $t )* )).into());
    }
}

#[wasm_bindgen]
pub struct Detector {
    document: web_sys::Document,
    listener: RefCell<Option<Closure<dyn FnMut(web_sys::MouseEvent)>>>,
    detection_result: Rc<RefCell<bool>>,
}

#[wasm_bindgen]
impl Detector {
    pub fn new() -> Detector {
        utils::set_panic_hook();
        log!("Detector::new");

        // Get the window object
        let window = web_sys::window().expect("no global `window` exists");
        let document = window.document().expect("should have a document on window");

        let mut anomaly_detector = anomaly::MouseSmoothingAnomalyDetector::new(10, 0.3, 500.0)
            .expect("failed to create MouseSmoothingAnomalyDetector");

        let detection_result = Rc::new(RefCell::new(false));

        // Create closure for mouse move event
        let mousemove_callback = {
            let detection_result = Rc::clone(&detection_result);
            Closure::wrap(Box::new(move |event: web_sys::MouseEvent| {
                let x = event.client_x();
                let y = event.client_y();
                let timestamp = event.time_stamp();
                log!("Mouse moved to: x={}, y={}", x, y);

                if anomaly_detector.add_event(x as f64, y as f64, timestamp) {
                    log!("Anomaly detected!");
                    *detection_result.borrow_mut() = true;
                }
            }) as Box<dyn FnMut(_)>)
        };

        // Add event listener
        document
            .add_event_listener_with_callback(
                "mousemove",
                mousemove_callback.as_ref().unchecked_ref(),
            )
            .expect("failed to add event listener");

        Detector {
            document,
            listener: RefCell::new(Some(mousemove_callback)),
            detection_result,
        }
    }

    pub fn end_detection(&self) {
        if let Some(listener) = self.listener.take() {
            self.document
                .remove_event_listener_with_callback("mousemove", listener.as_ref().unchecked_ref())
                .expect("failed to remove event listener");

            log!("Detector::drop - removed event listener");
        }
    }

    pub fn is_detected(&self) -> bool {
        log!("Detector::is_detected");
        *self.detection_result.borrow()
    }
}

impl Drop for Detector {
    fn drop(&mut self) {
        self.end_detection();
    }
}
