import mongoose, { Schema } from 'mongoose';
import validator from 'validator';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique : true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return validator.isEmail(v)
            },
            message: 'invalid email address'
        }
    },
    password: {
        type: String,
        required: true
    }
});

export const User = mongoose.model('User', userSchema);