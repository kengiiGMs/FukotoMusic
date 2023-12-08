import { Request, Response } from "express";
import { DetailPlaylistUserService } from "../../services/playlist/DetailPlaylistUserService";

class DetailPlaylistUserController {
    async handle(req: Request, res: Response) {

        const user_id = req.user_id;

        const detailPlaylistUserService = new DetailPlaylistUserService();

        const playlist = await detailPlaylistUserService.execute({ user_id })

        return res.json(playlist)
    }
}

export { DetailPlaylistUserController }