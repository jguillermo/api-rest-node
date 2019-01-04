import validator from "validator";
import { BadRequest } from "./Exception";

export function validateId(value: string, text = "El id no es correcto"): boolean {
    if (!validator.isUUID(value)) {
        throw new BadRequest(text);
    }
    return true;
}
