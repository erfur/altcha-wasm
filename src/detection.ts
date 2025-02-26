
import { Detector } from "../detection-wasm/pkg/detection_wasm";

export class DetectionWorker {
    private timer: ReturnType<typeof setInterval> | null = null;
    private detector = Detector.new();

    endDetection(): boolean {
        if (this.timer !== null) {
            clearInterval(this.timer);
            this.timer = null;
        }

        this.detector.end_detection();

        return this.detector.is_detected();
    }
}