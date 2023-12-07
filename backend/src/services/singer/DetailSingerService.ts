import prismaClient from "../../prisma";

class DetailSingerService {
    async execute() {

        const singer = await prismaClient.singer.findMany({
            select: {
                name: true
            }
        })

        return singer;

    }
}

export { DetailSingerService }