import { joi } from "../utils";

export const signupValSchema = {
  inputVal: joi.object().keys({
    username: joi.string().alphanum().min(3).max(30).required(),
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi
      .string()
      .min(8)
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
      .required(),
  }),
};

export const loginValSchema = {
  inputVal: joi.object().keys({
    email: joi.string().required(),
    password: joi.string().required(),
  }),
};

export const forgotPwdValSchema = {
  inputVal: joi.object().keys({
    email: joi.string().required(),
  }),
};

export const resetPwdValSchema = {
  inputVal: joi.object().keys({
    password: joi
      .string()
      .min(8)
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
      .required(),
    confirmPassword: joi.string().valid(joi.ref("password")),
  }),
};
