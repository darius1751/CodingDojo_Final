import { model, Schema, Types } from "mongoose";
import { movieSchema } from "./movie.model";

export const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    lastname: {
        type: String,
        required: true,
        minLength: 3
    },
    credentialId: {
        type: Types.ObjectId,
        ref: 'credentials',
        required: true
    },
    movies: {
        type: [movieSchema],
        default: [],
        required: true
    }
}, { timestamps: true, versionKey: false });

export const userModel = model("users", userSchema);