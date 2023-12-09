import { Request, Response } from "express";
import { DetailMusicSingerService } from "../../services/music/DetailMusicSingerService";

class DetailMusicSingerController {
    async handle(req: Request, res: Response) {
        const { singer_id } = req.body

        const detailMusicSingerService = new DetailMusicSingerService();

        const music = await detailMusicSingerService.execute({ singer_id });

        return res.json(music)
    }
}

export { DetailMusicSingerController }