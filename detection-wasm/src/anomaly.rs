pub struct MouseSmoothingAnomalyDetector {
    window_size: usize,
    alpha: f64,
    threshold: f64,
    initialized_ema: bool,
    ema_x: f64,
    ema_y: f64,
    events: Vec<MouseEvent>,
}

#[derive(Clone)]
struct MouseEvent {
    screen_x: f64,
    screen_y: f64,
    timestamp: f64,
}

impl MouseSmoothingAnomalyDetector {
    pub fn new(
        window_size: usize,
        alpha: f64,
        threshold: f64,
    ) -> Result<MouseSmoothingAnomalyDetector, String> {
        if window_size == 0 {
            return Err("windowSize must be positive".into());
        }
        if alpha <= 0.0 || alpha > 1.0 {
            return Err("alpha must be in the range (0, 1]".into());
        }
        if threshold < 0.0 {
            return Err("threshold must be non-negative".into());
        }

        Ok(MouseSmoothingAnomalyDetector {
            window_size,
            alpha,
            threshold,
            initialized_ema: false,
            ema_x: 0.0,
            ema_y: 0.0,
            events: Vec::new(),
        })
    }

    pub fn add_event(&mut self, screen_x: f64, screen_y: f64, timestamp: f64) -> bool {
        let event = MouseEvent {
            screen_x,
            screen_y,
            timestamp,
        };

        // Update sliding window for SMA
        self.events.push(event.clone());
        if self.events.len() > self.window_size {
            self.events.remove(0);
        }

        // Initialize or update EMA
        if !self.initialized_ema {
            self.ema_x = screen_x;
            self.ema_y = screen_y;
            self.initialized_ema = true;
        } else {
            self.ema_x = self.alpha * screen_x + (1.0 - self.alpha) * self.ema_x;
            self.ema_y = self.alpha * screen_y + (1.0 - self.alpha) * self.ema_y;
        }

        // Compute SMA
        let (sum_x, sum_y) = self.events.iter().fold((0.0, 0.0), |acc, e| {
            (acc.0 + e.screen_x, acc.1 + e.screen_y)
        });
        let len = self.events.len() as f64;
        let sma_x = sum_x / len;
        let sma_y = sum_y / len;

        // Compute Euclidean differences
        let diff_ema = ((screen_x - self.ema_x).powi(2) + (screen_y - self.ema_y).powi(2)).sqrt();
        let diff_sma = ((screen_x - sma_x).powi(2) + (screen_y - sma_y).powi(2)).sqrt();

        // Check for anomaly
        diff_ema > self.threshold || diff_sma > self.threshold
    }
}
