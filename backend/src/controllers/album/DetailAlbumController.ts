import { Request, Response } from "express";
import { DetailAlbumService } from "../../services/album/DetailAlbumService";

class DetailAlbumController {
    async handle(req: Request, res: Response) {


        const detailAlbumService = new DetailAlbumService();

        const album = await detailAlbumService.execute()

        return res.json(album)
    }
}

export { DetailAlbumController }