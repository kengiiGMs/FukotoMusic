import { Request, Response } from "express";
import { UpdatePublicPlaylistService } from "../../services/playlist/UpdatePublicPlaylistService";


class UpdatePublicPlaylistController {
    async handle(req: Request, res: Response) {

        const { is_public, id_playlist } = req.body;

        const updatePublicPlaylistService = new UpdatePublicPlaylistService();

        const playlist = await updatePublicPlaylistService.execute({ is_public, id_playlist });

        return res.json(playlist)

    }
}

export { UpdatePublicPlaylistController }