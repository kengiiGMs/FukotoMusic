import prismaClient from "../../prisma";

interface UserRequest {
    user_id: string,
    name: string,
    email: string,
    banner: string
}

class AlterUserService {
    async execute({ user_id, name, email, banner }: UserRequest) {

        const userAlreadyExist = await prismaClient.user.findFirst({
            where: {
                email: email,
                NOT: {
                    id: user_id
                }
            },
        })

        if (userAlreadyExist) {
            throw new Error("User Already Exists")
        }

        const user = await prismaClient.user.update({
            where: {
                id: user_id
            },
            data: {
                name: name,
                email: email,
                banner: banner
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

export { AlterUserService }