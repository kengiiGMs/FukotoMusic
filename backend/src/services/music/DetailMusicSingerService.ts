import prismaClient from "../../prisma";

interface MusicParams {
    singer_id: string
}

class DetailMusicSingerService {
    async execute({ singer_id }: MusicParams) {
        const music = await prismaClient.music.findMany({
            include: { album: true }
        });

        return music;
    }
}

export { DetailMusicSingerService }