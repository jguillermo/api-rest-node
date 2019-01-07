"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
const Exception_1 = require("./Exception");
function validateId(value, text = "El id no es correcto") {
    if (!validator_1.default.isUUID(value)) {
        throw new Exception_1.BadRequest(text);
    }
    return true;
}
exports.validateId = validateId;
