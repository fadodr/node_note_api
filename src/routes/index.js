import { Router } from "express";
const router = Router();

import userRoute from './user';
import noteRoute from './note';

router.use('/user', userRoute);
router.use('/note', noteRoute);

export default router;