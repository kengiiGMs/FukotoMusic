import prismaClient from "../../prisma";

interface MusicPlaylistParams {
    id: string
}

class DeleteMusicPlaylistService {
    async execute({ id }: MusicPlaylistParams) {
        const musicPlaylist = await prismaClient.musicPlaylist.delete({
            where: {
                id: id
            },
        })

        return musicPlaylist
    }
}

export { DeleteMusicPlaylistService }