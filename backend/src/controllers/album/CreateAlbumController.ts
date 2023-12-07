import { Request, Response } from "express";
import { CreateAlbumService } from "../../services/album/CreateAlbumService";

class CreateAlbumController {
    async handle(req: Request, res: Response) {
        const { name, singer_id } = req.body;

        const createAlbumService = new CreateAlbumService();

        const album = await createAlbumService.execute({ name, singer_id })

        return res.json(album)
    }
}

export { CreateAlbumController }