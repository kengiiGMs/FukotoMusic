import { Request, Response } from "express";
import { DetailPlaylistPublicService } from "../../services/playlist/DetailPlaylistPublicService";

class DetailPlaylistPublicController {
    async handle(req: Request, res: Response) {
        const detailPlaylistPublicService = new DetailPlaylistPublicService()
        const playlist = await detailPlaylistPublicService.execute();

        return res.json(playlist)
    }
}

export { DetailPlaylistPublicController }