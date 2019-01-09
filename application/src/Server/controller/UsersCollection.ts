import { Request, Response } from "express";

import {logger, USER} from "@app/module";

export async function userGetCollectionAction(request: Request, response: Response) {

    let service = USER.userServiceApp();

    response.send(
        service.findById("040a1a2c-2e00-437d-a6e6-f05b0704dfad"),
    );
}

export async function systemcleanAction(request: Request, response: Response) {

    if (global.gc) {
        global.gc();
    } else {
        logger().info("Garbage collection unavailable.  Pass --expose-gc "
          + "when launching node to enable forced garbage collection.");
    }

    response.send([]);
}
