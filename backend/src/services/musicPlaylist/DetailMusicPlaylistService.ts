import prismaClient from "../../prisma";

interface MusicPlaylistParams {
    playlist_id: string
}

class DetailMusicPlaylistService {
    async execute({ playlist_id }: MusicPlaylistParams) {
        const musicPlaylist = await prismaClient.musicPlaylist.findMany({
            where: {
                playlist_id: playlist_id
            },
            include: {
                music: true
            },
        })

        return musicPlaylist
    }
}

export { DetailMusicPlaylistService }