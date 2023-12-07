import prismaClient from "../../prisma";

interface AlbumRequest {
    singer_id: string
}

class DetailAlbumSingerService {
    async execute({ singer_id }: AlbumRequest) {

        const album = await prismaClient.album.findMany({
            where: {
                singer_id: singer_id
            },
            include: {
                singer: true
            }
        })

        return album;

    }
}

export { DetailAlbumSingerService }