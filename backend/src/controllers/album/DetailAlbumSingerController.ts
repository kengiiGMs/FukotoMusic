import { Request, Response } from "express";
import { DetailAlbumSingerService } from "../../services/album/DetailAlbumSingerService";

class DetailAlbumSingerController {
    async handle(req: Request, res: Response) {
        const { singer_id } = req.body;

        const detailAlbumSingerService = new DetailAlbumSingerService();

        const album = await detailAlbumSingerService.execute({ singer_id })

        return res.json(album)
    }
}

export { DetailAlbumSingerController }