import { Request, Response } from "express";
import { DeleteMusicPlaylistService } from "../../services/musicPlaylist/DeleteMusicPlaylistService";

class DeleteMusicPlaylistController {
    async handle(req: Request, res: Response) {
        const { id } = req.body;

        const deleteMusicPlaylistService = new DeleteMusicPlaylistService();

        const musicPlaylist = await deleteMusicPlaylistService.execute({ id });

        return res.json(musicPlaylist);
    }
}

export { DeleteMusicPlaylistController }