import { Request, Response } from "express";
import { CreateAlbumService } from "../../services/album/CreateAlbumService";

class CreateAlbumController {
    async handle(req: Request, res: Response) {
        const { name, singer_id } = req.body;

        const createAlbumService = new CreateAlbumService();

        if (!req.file) {
            throw new Error("Error Upload File")
        } else {
            const { filename: banner } = req.file;

            const album = await createAlbumService.execute({ name, singer_id, banner })

            return res.json(album)
        }

    }
}

export { CreateAlbumController }