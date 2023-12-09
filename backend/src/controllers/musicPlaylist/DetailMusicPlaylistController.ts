import { Request, Response } from "express";
import { DetailMusicPlaylistService } from "../../services/musicPlaylist/DetailMusicPlaylistService";

class DetailMusicPlaylistController {
    async handle(req: Request, res: Response) {
        const { playlist_id } = req.body;

        const detailMusicPlaylistService = new DetailMusicPlaylistService();

        const musicPlaylist = await detailMusicPlaylistService.execute({ playlist_id });

        return res.json(musicPlaylist);
    }
}

export { DetailMusicPlaylistController }