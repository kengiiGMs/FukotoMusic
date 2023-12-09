import prismaClient from "../../prisma";

interface MusicPlaylistParams {
    playlist_id: string,
    music_id: string
}

class CreateMusicPlaylistService {
    async execute({ playlist_id, music_id }: MusicPlaylistParams) {

        const musicPlaylistAlreadyExist = await prismaClient.musicPlaylist.findFirst({
            where: {
                music_id: music_id,
                playlist_id: playlist_id
            }
        })

        if (musicPlaylistAlreadyExist) {
            throw new Error("Singer Already Exists on Playlist")
        }


        const musicPlaylist = await prismaClient.musicPlaylist.create({
            data: {
                playlist_id: playlist_id,
                music_id: music_id
            }
        })

        return musicPlaylist
    }
}

export { CreateMusicPlaylistService }