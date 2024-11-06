import { CreateCommentDto } from "../interfaces/create-comment.dto"
import { CreateMovieDto } from "../interfaces/create-movie.dto"
import { userModel } from "../models/user.model"

const createOne = async (userId: string, createMovieDto: CreateMovieDto) => {
    try {
        const user = await userModel.findById(userId);
        user?.movies.push(createMovieDto);
        return await user?.save();
    } catch (error) {
        throw error;
    }
}
const addComment = async (userId: string, id: string, createCommentDto: CreateCommentDto) => {
    try {
        const user = await userModel.findById(userId);
        if (!user) {
            throw {
                message: `Not exist user with id: ${userId}`
            }
        }
        const movieIndex = user.movies.findIndex(({ id: movieId }) => movieId === id);
        if (movieIndex >= 0) {
            const oldMovie = user.movies[movieIndex];
            oldMovie.comments?.push(createCommentDto);
            user.movies[movieIndex].set({ ...oldMovie });
        } else {
            throw {
                message: `Not exist movie with id: ${id}`
            }
        }
        return await user.save();        
    } catch (error) {
        throw error;
    }
}
const getAllExceptUserId = async (userId: string) => {
    try {
        return await userModel.find({ _id: { $ne: userId } }, { movies: true, _id: false });
    } catch (error) {
        throw error;
    }
}

const updateOne = async (userId: string, id: string, updateMovieDto: Partial<CreateMovieDto>) => {
    try {
        const user = await userModel.findById(userId);
        if (!user) {
            throw {
                message: `Not exists user with id: ${userId}`
            }
        }
        const movieIndex = user.movies.findIndex(({ id: movieId }) => movieId === id);
        if (movieIndex >= 0) {
            const oldMovie = user.movies[movieIndex]
            user.movies[movieIndex].set({ ...oldMovie, ...(updateMovieDto as any) });
        } else {
            throw {
                message: `Not exists movie with id: ${id}`
            }
        }
        await user.save();
        return await findOneByUserId(userId);
    } catch (error) {
        console.log(`Error in update`);
        throw error;
    }
}

const deleteOne = async (userId: string, id: string) => {
    const user = await userModel.findById(userId);
    if (!user)
        throw {
            statusCode: 400,
            message: `Not exist user with id: ${userId}`
        }
    const movieIndex = user.movies.findIndex((movie) => movie.id === id)

    if (movieIndex >= 0) {
        const movieId = user.movies[movieIndex]._id;
        const movies = user.movies.filter(({ _id }) => _id !== movieId);
        await userModel.updateOne({ _id: userId }, { $set: { movies } });
    }
    else
        throw {
            statusCode: 400,
            message: `Not exist task with id: ${id}`
        }

    await user.save();
    return await findOneByUserId(userId);
}
const findOneByUserId = async (userId: string) => {
    try {
        const user = await userModel.findById(userId);
        return user;
    } catch (error) {
        throw error;
    }
}

export const movieService = {
    getAllExceptUserId,
    createOne,
    updateOne,
    deleteOne,
    addComment
}