import prismaClient from "../../prisma";

interface MusicParams {
    album_id: string
}

class DetailMusicAlbumService {
    async execute({ album_id }: MusicParams) {
        const music = await prismaClient.music.findMany({
            where: { album_id: album_id },
            include: { album: true }
        });

        return music;
    }
}

export { DetailMusicAlbumService }