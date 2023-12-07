import { Request, Response } from "express";
import { DetailSingerService } from "../../services/singer/DetailSingerService";

class DetailSingerController {
    async handle(req: Request, res: Response) {


        const detailSingerService = new DetailSingerService();

        const singer = await detailSingerService.execute()

        return res.json(singer)
    }
}

export { DetailSingerController }