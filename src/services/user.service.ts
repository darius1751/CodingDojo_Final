import { CreateUserDto } from "../interfaces/create-user-dto.interface";
import { userModel } from "../models/user.model"
import { authService } from "./auth.service";

const findOneByCredentialId = async (credentialId: string) => {
    const user = await userModel.findOne({ credentialId });
    if (!user)
        throw new Error(`Not exist credentials user`);
    return user;
}
const createOne = async ({ name, lastname, credentials }: CreateUserDto) => {
    try {
        const credentialId = await authService.createAuth(credentials);
        return userModel.create({
            name,
            lastname,
            credentialId
        });
    } catch (error) {
        throw error;
    }
}
const findAll = async () => {
    return await userModel.find();
}
export const userService = {
    findOneByCredentialId,
    createOne,
    findAll
}