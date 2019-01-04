import validator from "validator";

export function toString(value: any): string {
    return validator.toString(value);
}
