import { Request, Response } from "express"
import { movieService } from "../services/movie.service"
import { isMongoId } from "../helpers/isMongoId";

export const createOne = async (request: Request, response: Response) => {
    try {
        const createMovieDto = request.body;
        const { userId } = request.params;
        isMongoId(userId);
        const movie = await movieService.createOne(userId, createMovieDto);
        response.json(movie);
    } catch (error) {
        response.status(400).json(error);
    }
}

export const getAllExceptUserId = async (request: Request, response: Response) => {
    try {
        const { userId } = request.params;
        isMongoId(userId);
        const user = await movieService.getAllExceptUserId(userId);
        response.json(user);
    } catch (error) {
        response.status(400).json(error);
    }
}

export const updateOne = async (request: Request, response: Response) => {
    try {
        const { userId, id } = request.params;
        const updateMovieDto = request.body;
        isMongoId(userId);
        isMongoId(id);
        const user = await movieService.updateOne(userId, id, updateMovieDto);
        response.json(user);
    } catch (error) {
        response.status(400).json(error);
    }
}

export const deleteOne = async (request: Request, response: Response) => {
    try {
        const { userId, id } = request.params;
        isMongoId(userId);
        isMongoId(id);
        const user = await movieService.deleteOne(userId, id);
        response.json(user);
    } catch (error) {
        response.status(400).json(error);
    }
}
export const addComment = async (request: Request, response: Response) => {
    try {
        const { userId, id } = request.params;
        const createCommentDto = request.body;
        isMongoId(userId);
        isMongoId(id);
        const user = await movieService.addComment(userId, id, createCommentDto);
        response.json(user);
    } catch (error) {
        response.status(400).json(error);
    }
}