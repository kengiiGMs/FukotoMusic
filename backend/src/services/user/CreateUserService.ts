import prismaClient from "../../prisma"
import { hash } from "bcryptjs"

interface UserRequest {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
    banner: string
}


class CreateUserService {
    async execute({ name, email, password, confirmPassword, banner }: UserRequest) {

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

        if (userAlreadyExist) {
            throw new Error("User Already Exists")
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash,
                banner: banner
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })

        return user;

    }
}

export { CreateUserService }