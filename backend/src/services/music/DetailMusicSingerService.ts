import prismaClient from "../../prisma";

interface MusicParams {
    singer_id: string
}

class DetailMusicSingerService {
    async execute({ singer_id }: MusicParams) {
        const music = prismaClient.music.findMany({
            where: { singer_id: singer_id },
            include: { album: true, singer: true }
        });

        return music;
    }
}

export { DetailMusicSingerService }