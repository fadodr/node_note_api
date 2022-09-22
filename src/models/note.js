import mongoose, { Schema } from 'mongoose';
import { docToJson } from '../utils';

const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
}, {
    timestamps: true,
    toJSON: {
        transform: docToJson
    }
});
export const Note = mongoose.model('Note', noteSchema);