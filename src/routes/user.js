import { Router } from "express";
const router = Router();

import { controllerHandler } from "../utils";
import { login, forgotPwd, signup, resetPwd } from "../controllers/user";
import {
  loginValSchema,
  signupValSchema,
  resetPwdValSchema,
  forgotPwdValSchema,
} from "../validations";

router.post("signup", controllerHandler(signup, signupValSchema));
router.post("login", controllerHandler(login, loginValSchema));
router.post("forgotpassword", controllerHandler(forgotPwd, forgotPwdValSchema));
router.post("resetpassword", controllerHandler(resetPwd, resetPwdValSchema));

export default router;