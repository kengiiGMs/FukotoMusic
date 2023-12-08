import prismaClient from "../../prisma"

class DetailPlaylistPublicService {
    async execute() {

        const playlist = await prismaClient.playlist.findMany({
            where: {
                is_public: true
            },
            include: {
                user: true
            },

        })

        return playlist;

    }
}

export { DetailPlaylistPublicService }