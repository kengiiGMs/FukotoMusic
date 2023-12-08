import prismaClient from "../../prisma";

interface playlistRequest {
    user_id: string
}


class DetailPlaylistUserService {
    async execute({ user_id }: playlistRequest) {

        const playlist = await prismaClient.playlist.findMany({
            where: {
                user_id: user_id
            }
        })

        return playlist;

    }
}

export { DetailPlaylistUserService }