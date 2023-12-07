import { Request, Response } from "express";
import { CreateSingerService } from "../../services/singer/CreateSingerService";

class CreateSingerController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;

        const createSingerService = new CreateSingerService();

        const singer = await createSingerService.execute({ name })

        return res.json(singer)
    }
}

export { CreateSingerController }