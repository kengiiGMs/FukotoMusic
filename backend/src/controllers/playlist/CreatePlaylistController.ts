import { Request, Response } from "express";
import { CreatePlaylistService } from "../../services/playlist/CreatePlaylistService";


class CreatePlaylistController {
    async handle(req: Request, res: Response) {
        const { name, is_public, user_id } = req.body;

        const createPlaylistService = new CreatePlaylistService();

        const playlist = await createPlaylistService.execute({ name, is_public, user_id });

        return res.json(playlist);
    }
}

export { CreatePlaylistController }