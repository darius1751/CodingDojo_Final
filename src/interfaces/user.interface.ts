import { Credential } from "./credential-dto.interface";

export interface CreateUserDto {
    name: string,
    lastname: string,
    credentials: Credential
}