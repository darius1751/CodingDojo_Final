import { model, Schema } from "mongoose";
export const authSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
}, { timestamps: true, versionKey: false });
export const authModel = model('credentials', authSchema);
