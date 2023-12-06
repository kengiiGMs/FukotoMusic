import { PrismaClient } from "@prisma/client"
import prismaClient from "../../prisma"

interface UserRequest {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}


class CreateUserService {
    async execute({ name, email, password, confirmPassword }: UserRequest) {

        if (!email) {
            throw new Error("Email Incorrect")
        }

        if (password != confirmPassword) {
            throw new Error("Error, the passwords are different")
        }

        const userAlreadyExist = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: password
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        if (userAlreadyExist) {
            throw new Error("User Already Exists")
        }

        return user;

    }
}

export { CreateUserService }