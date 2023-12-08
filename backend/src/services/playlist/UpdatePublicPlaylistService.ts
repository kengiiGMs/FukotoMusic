import prismaClient from "../../prisma";

interface PlaylistParams {
    is_public: boolean,
    id_playlist: string
}

class UpdatePublicPlaylistService {
    async execute({ is_public, id_playlist }: PlaylistParams) {
        const playlist = await prismaClient.playlist.update({
            where: {
                id: id_playlist
            },
            data: {
                is_public: is_public
            }
        })

        return playlist
    }
}

export { UpdatePublicPlaylistService }