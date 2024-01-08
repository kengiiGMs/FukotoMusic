import prismaClient from "../../prisma";


interface SingerRequest {
    name: string,
    banner: string
}

class CreateSingerService {
    async execute({ name, banner }: SingerRequest) {
        if (!name) {
            throw new Error("Name Incorrect")
        }

        const singerAlreadyExist = await prismaClient.singer.findFirst({
            where: {
                name: name
            }
        })

        if (singerAlreadyExist) {
            throw new Error("Singer Already Exists")
        }

        const singer = await prismaClient.singer.create({
            data: {
                name: name,
                banner: banner
            }
        })

        return singer;

    }
}

export { CreateSingerService }