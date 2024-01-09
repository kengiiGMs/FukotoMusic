import { Request, Response, json } from "express";
import { CreateMusicService } from "../../services/music/CreateMusicService";

class CreateMusicController {
    async handle(req: Request, res: Response) {
        const { name, releaseDate, album_id } = req.body;

        const dateFormat = releaseDate + "T00:00:00.000Z";

        const date = new Date(dateFormat);

        const createMusicService = new CreateMusicService();

        const files = req.files as Express.Multer.File[];

        if (!files || !files['file'] || !files['mp3']) {
            throw new Error('Error Upload File');
        } else {
            const getBanner = files['file'][0];
            const getMp3 = files['mp3'][0];

            const banner = getBanner.filename;
            const mp3 = getMp3.filename;

            const music = await createMusicService.execute({ name, date, mp3, album_id, banner });

            return res.json(music)
        }
    }
}

export { CreateMusicController }