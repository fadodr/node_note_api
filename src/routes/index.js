import { Router } from "express";
const router = Router();

import userRoute from './user';

router.use('/user', userRoute);
//router.use('/note');

export default router;