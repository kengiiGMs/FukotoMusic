import { Request, Response } from "express";
import { DetailMusicAlbumService } from "../../services/music/DetailMusicAlbumService";

class DetailMusicAlbumController {
    async handle(req: Request, res: Response) {
        const { album_id } = req.body;

        const detailMusicAlbumService = new DetailMusicAlbumService();

        const music = await detailMusicAlbumService.execute({ album_id });

        return res.json(music)
    }
}

export { DetailMusicAlbumController }