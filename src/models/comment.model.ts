import { Schema } from "mongoose";

export const CommentSchema = new Schema({
    owner: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        minLength: 20,
        required: true
    },
    rank: {
        type: Number,
        min: 1,
        max: 10,
        required: true
    }
}, { timestamps: true, versionKey: false });
