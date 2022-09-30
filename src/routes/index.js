import { Router } from "express";
const router = Router();

import userRoute from './user';
import noteRoute from './note';
import { isAuth } from '../middleware';

router.use('/user', userRoute);
router.use('/note', noteRoute);

export default router;