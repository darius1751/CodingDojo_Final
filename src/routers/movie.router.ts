import { Router } from "express";
import { addComment, createOne, deleteOne, updateOne, getAllExceptUserId } from "../controllers/movie.controller";

export const movieRouter = Router();
movieRouter.post('/:userId', createOne);
movieRouter.get('/except/:userId', getAllExceptUserId);
movieRouter.put('/:userId/:id', updateOne);
movieRouter.patch('/:userId/:id', updateOne);
movieRouter.put('/comment/:userId/:id', addComment);
movieRouter.patch('/comment/:userId/:id', addComment);
movieRouter.delete('/:userId/:id', deleteOne);