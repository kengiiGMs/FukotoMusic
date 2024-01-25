import { Request, Response } from "express";
import { AlterUserService } from "../../services/user/AlterUserService";

class AlterUserController {
    async handle(req: Request, res: Response) {
        const { name, email } = req.body;
        const createUserService = new AlterUserService();
        console.log(req.file)
        if (!req.file) {
            throw new Error("Error Upload File")
        } else {
            const { filename: banner } = req.file;

            const user_id = req.user_id;

            const user = await createUserService.execute({
                name, email, user_id, banner
            });

            return res.json(user)
        }
    }
}

export { AlterUserController }