import {  Schema } from "mongoose";
import { CommentSchema } from "./comment.model";

export const movieSchema = new Schema({
    title: {
        type: String,
        unique: true,
        minLength: 5,
        required: true
    },
    year: {
        type: Number,
        min: 0,
        required: true
    },
    director: {
        type: String,
        minLength: 5,
        required: true
    },
    genre: {
        type: String,
        minLength: 3,
        required: true
    },
    url_image: {
        type: String,
        // match: /^\w+\.(gif|webp|jpeg|png|jpg)$/,
        required: true
    },
    comments: {
        type: [CommentSchema],
        required: false,
        default: []
    }
}, { timestamps: true, versionKey: false });
