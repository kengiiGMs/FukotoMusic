import { Request, Response } from "express";
import { CreateSingerService } from "../../services/singer/CreateSingerService";

class CreateSingerController {
    async handle(req: Request, res: Response) {
        const { name } = req.body;

        const createSingerService = new CreateSingerService();

        if (!req.file) {
            throw new Error("Error Upload File")
        } else {
            const { filename: banner } = req.file;

            const singer = await createSingerService.execute({ name, banner })

            return res.json(singer)
        }
    }
}

export { CreateSingerController }