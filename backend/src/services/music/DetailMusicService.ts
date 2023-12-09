import prismaClient from "../../prisma";


class DetailMusicService {
    async execute() {
        const music = prismaClient.music.findMany({ include: { album: true, singer: true } });

        return music;
    }
}

export { DetailMusicService }