import { Request, Response } from "express";
import { userService } from "../services/user.service";

export const createOne = async (request: Request, response: Response) => {
    try {
        const createUser = request.body;
        const user = await userService.createOne(createUser);
        response.json(user);
    } catch (error: any) {
        const { statusCode = 500 } = error;
        response.status(statusCode).json(error);
    }
}
export const findAll = async (_request: Request, response: Response) => {
    try {
        const users = await userService.findAll();
        response.json(users);

    } catch (error: any) {
        const { statusCode = 500 } = error;
        response.status(statusCode).json(error);
    }
}