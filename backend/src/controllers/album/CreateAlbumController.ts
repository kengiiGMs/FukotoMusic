import { Request, Response } from "express";
import { CreateAlbumService } from "../../services/album/CreateAlbumService";

class CreateAlbumController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;

        const createAlbumService = new CreateAlbumService();

        const album = await createAlbumService.execute({ name })

        return res.json(album)
    }
}

export { CreateAlbumController }