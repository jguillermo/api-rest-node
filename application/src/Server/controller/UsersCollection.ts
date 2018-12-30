import { Request, Response } from "express";

export async function userGetCollectionAction(request: Request, response: Response) {
    response.send([
        {
            id: "1",
            name: "jose",
        },
        {
            id: "2",
            name: "Ariana",
        },
    ]);
}
