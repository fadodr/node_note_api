import { Schema, model } from 'mongoose';
import validator from 'validator';
import { docToJson } from '../utils';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return validator.isEmail(v);
        },
        message: "invalid email address",
      },
    },
    password: {
      type: String,
      required: true,
    },
    resetToken: String,
    resetTokenExpiresIn: Date,
  },
  {
    timestamps: true,
    toJSON: {
      transform: docToJson,
    },
  }
);

export const User = model('User', userSchema);