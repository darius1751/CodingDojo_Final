import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const validateJWT = async (request: Request, response: Response, next: NextFunction) => {
    try {
        verify(request.cookies.token, process.env.JWT_SECRET || '');
        next();
    } catch (error) {
        response.status(401).json({ message: 'Not authorization' });
    }
}