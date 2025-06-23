import { Conncetion } from "mongoose";

declare global {
    var mongoose: {
        conn: Conncetion | null;
        promise: Promise<Conncetion> | null;
    }
}
export { }