import { userGetCollectionAction } from "../controller/UsersCollection";

import { Router } from "express";

const ROUTER = Router();

ROUTER.get("/users", userGetCollectionAction);

export default ROUTER;
