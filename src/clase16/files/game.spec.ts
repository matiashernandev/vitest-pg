import game from "../files/game";

describe("game", () => {
    test("game should return the right object", () => {
        const expectedObj = {
            id: 1,
            name: "Sarasa",
            description: "First game"
        };

        const result = game("Sarasa")

        expect(result).toEqual(expectedObj)



    });
});