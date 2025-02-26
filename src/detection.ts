
import { Detector } from "../detection-wasm/pkg/detection_wasm";

export class DetectionWorker {
    private timer: ReturnType<typeof setInterval> | null = null;
    private detector = Detector.new();

    constructor() {
        this.timer = setInterval(() => {
            this.detector.check();
        }, 100);
    }

    endDetection(): boolean {
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        }
        return this.detector.is_detected();
    }
}