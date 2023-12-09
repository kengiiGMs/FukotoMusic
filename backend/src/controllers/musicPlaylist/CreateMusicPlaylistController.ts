import { Request, Response } from "express";
import { CreateMusicPlaylistService } from "../../services/musicPlaylist/CreateMusicPlaylistService";

class CreateMusicPlaylistController {
    async handle(req: Request, res: Response) {
        const { music_id, playlist_id } = req.body;

        const createMusicPlaylistService = new CreateMusicPlaylistService();

        const musicPlaylist = await createMusicPlaylistService.execute({ music_id, playlist_id });

        return res.json(musicPlaylist)

    }
}

export { CreateMusicPlaylistController }