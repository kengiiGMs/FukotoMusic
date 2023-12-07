import prismaClient from "../../prisma";

class DetailAlbumService {
    async execute() {

        const album = await prismaClient.album.findMany({
            select: {
                name: true
            }
        })

        return album;

    }
}

export { DetailAlbumService }