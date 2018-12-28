import { userGetCollectionAction } from "../controller/UsersCollection";

import { Router } from 'express';

const router = Router();

router.get('/users', userGetCollectionAction);

export default router;