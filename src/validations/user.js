import { joi } from '../utils';

export const signupValSchema = {
  inputVal: joi.object().keys({
    name: joi
      .string()
      .required()
      .messages({ 'any.required': 'name is required' }),
    username: joi.string().alphanum().min(3).max(30).required().messages({
      'any.required': 'username is required',
      'string.min': 'username must be a min of 3 characters',
      'string.max': 'username must be a max of 30 characters',
      'string.alphanum': 'username should contain only alphabets and numbers',
    }),
    email: joi.string().email().required().messages({
      'any.required': 'email is required',
      'string.email': 'invalid email',
    }),
    password: joi.string().min(8)
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
      .required()
      .messages({
        'any.required': 'password is required',
        'string.min': 'password must have a min length of {#limit} characters',
        'string.pattern.base':
          'password must contain uppercase, lowercase, numbers and special characters',
      }),
  }),
};

export const loginValSchema = {
  inputVal: joi.object().keys({
    email: joi
      .string()
      .required()
      .messages({ "any.required": "email is required" }),
    password: joi
      .string()
      .required()
      .messages({ "any.required": "password is required" }),
  }),
};

export const forgotPwdValSchema = {
  inputVal: joi.object().keys({
    email: joi
      .string()
      .required()
      .messages({ "any.required": "email is required" }),
  }),
};

export const resetPwdValSchema = {
  inputVal: joi.object().keys({
    password: joi
      .string()
      .min(8)
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
      .required()
      .messages({
        "any.required": "password is required",
        "string.min": "password must have a min length of {#limit} characters",
        "string.pattern.base":
          "password must contain uppercase, lowercase, numbers and special characters",
      }),
    confirmPassword: joi.string().valid(joi.ref("password")).messages({
      "any.required": "confirmPassword is required",
      "any.only": "confirmPassword does not match password",
    }),
  }),
};