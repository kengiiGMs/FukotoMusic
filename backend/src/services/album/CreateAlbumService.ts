import prismaClient from "../../prisma";


interface AlbumRequest {
    name: string
}

class CreateAlbumService {
    async execute({ name }: AlbumRequest) {
        if (!name) {
            throw new Error("Name Incorrect")
        }

        const albumAlreadyExist = await prismaClient.album.findFirst({
            where: {
                name: name
            }
        })

        if (albumAlreadyExist) {
            throw new Error("Album Already Exists")
        }

        const album = await prismaClient.album.create({
            data: {
                name: name,
                singer_id: undefined
            }
        })

        return album;

    }
}

export { CreateAlbumService }