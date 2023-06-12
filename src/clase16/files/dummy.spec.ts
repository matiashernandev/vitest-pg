import dummy from "../files/dummy";
import { describe, test, expect, vi } from 'vitest'

describe("dummy", () => {

    const callback = vi.fn()

    describe("when shouldTrigger is false", () => {
        test("should not call callback", () => {
            dummy(false, callback);
            expect(callback).not.toHaveBeenCalled();
        });
    });

    describe("when shouldTrigger is true", () => {
        test("should call callback", () => {
            dummy(true, callback);
            expect(callback).toHaveBeenCalled();
        });
    });
});