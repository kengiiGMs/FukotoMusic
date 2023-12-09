import { Request, Response } from "express";
import { DetailMusicService } from "../../services/music/DetailMusicService";

class DetailMusicController {
    async handle(req: Request, res: Response) {
        const detailMusicService = new DetailMusicService();

        const music = await detailMusicService.execute();

        return res.json(music)
    }
}

export { DetailMusicController }