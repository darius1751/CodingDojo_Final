import { compare, hash } from "bcrypt";
import { LoginDto } from "../interfaces/login-dto.interface";
import { authModel } from "../models/auth.model";
import { sign } from "jsonwebtoken";
import { userService } from "./user.service";
import { Auth } from "../interfaces/auth.interface";

const login = async ({ email, password }: LoginDto) => {
    const auth = await authModel.findOne({ email });
    if (!auth) {
        throw {
            statusCode: 400,
            message: `Error in login`
        }
    }
    const isValid = await compare(password, auth.password);
    if (isValid) {
        const user = await userService.findOneByCredentialId(auth.id);
        const token = sign({ id: user.id, email }, process.env.JWT_SECRET || '', { expiresIn: '15m' });
        return {
            user,
            token
        }
    }
    throw {
        statusCode: 400,
        message: `Error in login`
    }
}

const existsEmail = async (email: string) => {
    const auth = await authModel.findOne({ email });
    if (auth)
        throw {
            statusCode: 400,
            message: `The email: ${email} exists in DB`
        }
}

const createAuth = async ({ email, password }: Auth) => {
    try {
        await existsEmail(email);
        if (password.trim().length < 8) {
            console.log({ password })
            throw {
                statusCode: 400,
                message: `Password not valid include min 8 characters`
            }
        }
        const newPassword = await hash(password, 10);
        const newAuth = await authModel.create({ email, password: newPassword });
        return newAuth.id;
    } catch (error) {
        throw error;
    }
}
export const authService = {
    login,
    createAuth
}