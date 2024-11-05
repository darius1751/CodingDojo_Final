import { Request, Response } from "express";
import { authService } from "../services/auth.service";
export const login = async (request: Request, response: Response) => {
    try {
        const { token, user } = await authService.login(request.body);
        response.cookie('token', token, { httpOnly: true, secure: true }).json(
            user
        );
    } catch (error: any) {
        const { statusCode = 500 } = error;
        response.status(statusCode).json(error);
    }
}

export const logout = async (_request: Request, response: Response) => {
    try {
        response.clearCookie('token');
        response.json({
            ok: true,
            message: `Logout successful`
        })
    } catch (error) {
        response.status(500).json(error);
    }
}