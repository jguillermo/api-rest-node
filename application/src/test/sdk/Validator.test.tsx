import { BadRequest } from "@sdk/Exception";
import { validateId } from "@sdk/Validator";
import "jest";

describe("validaciones", () => {
    test("id", () => {
        expect(() => { validateId("123"); }).toThrowError(BadRequest);
        expect(() => { validateId("123"); }).toThrowError("El id no es correcto");

        expect(() => { validateId("123", "este id no vale"); }).toThrowError(BadRequest);
        expect(() => { validateId("123", "este id no vale"); }).toThrowError("este id no vale");

        expect(true).toEqual(validateId("9a5d0a0f-b5a1-4cd6-997e-91358f4137cf"));
    });
});
