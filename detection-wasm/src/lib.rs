mod utils;

use wasm_bindgen::prelude::*;

// A macro to provide `println!(..)`-style syntax for `console.log` logging.
macro_rules! log {
    ( $( $t:tt )* ) => {
        web_sys::console::log_1(&format!("[wasm] {}", format!( $( $t )* )).into());
    }
}

#[wasm_bindgen]
pub struct Detector {}

#[wasm_bindgen]
impl Detector {
    pub fn new() -> Detector {
        utils::set_panic_hook();
        log!("Detector::new");
        Detector {}
    }

    pub fn is_detected(&self) -> bool {
        log!("Detector::is_detected");
        return true;
    }

    pub fn check(&self) {
        log!("Detector::check");
    }
}
