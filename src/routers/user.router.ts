import { Router } from "express";
import { createOne, findAll } from "../controllers/user.controller";

export const userRouter = Router();
userRouter.get('/', findAll);
userRouter.post('/', createOne);