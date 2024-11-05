import { Types } from "mongoose";

export const isMongoId = (mongoId: string) => {
    const isValid = Types.ObjectId.isValid(mongoId);
    if (!isValid)
        throw {
            statusCode: 400,
            message: `${mongoId} not is valid mongoId`
        }
    return true;
}