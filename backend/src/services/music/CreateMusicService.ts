import prismaClient from "../../prisma";

interface MusicRequest {
    name: string,
    date: Date,
    mp3: string,
    album_id: string,
    banner: string
}

class CreateMusicService {
    async execute({ name, date, mp3, album_id, banner }: MusicRequest) {
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
                album_id: album_id,
                releaseDate: date,
                banner: banner
            }
        })

        return music;
    }
}

export { CreateMusicService }