import { Request, Response, json } from "express";
import { CreateMusicService } from "../../services/music/CreateMusicService";

class CreateMusicController {
    async handle(req: Request, res: Response) {
        const { name, releaseDate, singer_id, album_id } = req.body;

        const dateFormat = releaseDate + "T00:00:00.000Z";

        const date = new Date(dateFormat);

        const createMusicService = new CreateMusicService();

        const music = await createMusicService.execute({ name, date, singer_id, album_id });

        return res.json(music)

    }
}

export { CreateMusicController }