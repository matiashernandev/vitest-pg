import calculator from "../files/calculator";

const { add, subtract, multiply, divide } = calculator

describe("calculadora", () => {
    test("Add 1 to 2 should return 3", () => {
        expect(add(1, 2)).toBe(3)
    });

    test("Subtract 2 from 10 should return 8", () => {
        expect(subtract(10, 2)).toBe(8)
    });

    test("Multiply  2 with 8 should return 16", () => {
        expect(multiply(2, 8)).toBe(16)
    });

    test("Multiply should be idempotent", () => {
        const a = 5;
        const b = 1;

        const result1 = multiply(a, b);
        const result2 = multiply(a, b);

        expect(result1).toBe(result2);

    });

    test("Divide 8 with 2 should return 4", () => {
        expect(divide(8, 2)).toBe(4)
    });
});