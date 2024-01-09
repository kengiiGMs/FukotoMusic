import prismaClient from "../../prisma";


class DetailMusicService {
    async execute() {
        const music = await prismaClient.music.findMany({ include: { album: true } });

        return music;
    }
}

export { DetailMusicService }