import prismaClient from "../../prisma";

interface MusicRequest {
    name: string,
    mp3: string,
    singer_id: string,
    banner: string
}

class CreateMusicService {
    async execute({ name, mp3, singer_id, banner }: MusicRequest) {
        if (!name) {
            throw new Error("Name Incorrect")
        }

        const musicAlreadyExist = await prismaClient.music.findFirst({
            where: {
                name: name
            }
        })

        if (musicAlreadyExist) {
            throw new Error("Music Already Exists")
        }

        const music = await prismaClient.music.create({
            data: {
                name: name,
                mp3: mp3,
                singer_id: singer_id,
                banner: banner
            }
        })

        return music;
    }
}

export { CreateMusicService }