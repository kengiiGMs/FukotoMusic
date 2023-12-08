import prismaClient from "../../prisma";

interface playlistRequest {
    name: string,
    is_public: boolean,
    user_id: string
}

class CreatePlaylistService {
    async execute({ name, is_public, user_id }: playlistRequest) {
        if (!name) {
            throw new Error("Name Incorrect")
        }

        const playlistAlreadyExist = await prismaClient.playlist.findFirst({
            where: {
                name: name
            }
        })

        if (playlistAlreadyExist) {
            throw new Error("Playlist Already Exists")
        }

        const playlist = await prismaClient.playlist.create({
            data: {
                name: name,
                is_public: is_public,
                user_id: user_id
            }
        })

        return playlist;
    }
}

export { CreatePlaylistService }