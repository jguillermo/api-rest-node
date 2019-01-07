"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("@app/module");
function userGetCollectionAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        let service = module_1.USER.userServiceApp();
        response.send([
            service.findById("365d624e-8bd9-4644-86f8-ee6b98dfd036"),
            service.findById("040a1a2c-2e00-437d-a6e6-f05b0704dfad"),
        ]);
    });
}
exports.userGetCollectionAction = userGetCollectionAction;
function systemcleanAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        if (global.gc) {
            global.gc();
        }
        else {
            console.log('Garbage collection unavailable.  Pass --expose-gc '
                + 'when launching node to enable forced garbage collection.');
        }
        response.send([]);
    });
}
exports.systemcleanAction = systemcleanAction;
