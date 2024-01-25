import prismaClient from "../../prisma";
import { hash } from "bcryptjs"

interface UserRequest {
    user_id: string,
    password: string,
    confirmPassword: string
}

class AlterPasswordUserService {
    async execute({ user_id, password, confirmPassword }: UserRequest) {

        if (password != confirmPassword) {
            throw new Error("Error, the passwords are different")
        }

        const passwordHash = await hash(password, 8)

        const user = await prismaClient.user.update({
            where: {
                id: user_id
            },
            data: {
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true
            }


        })

        return user
    }
}

export { AlterPasswordUserService }