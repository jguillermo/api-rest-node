import { systemcleanAction, userGetCollectionAction } from "../controller/UsersCollection";

import { Router } from "express";

const ROUTER = Router();

ROUTER.get("/users", userGetCollectionAction);

ROUTER.get("/clean", systemcleanAction);

export default ROUTER;
