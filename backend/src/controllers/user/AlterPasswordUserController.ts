import { Request, Response } from "express";
import { AlterPasswordUserService } from "../../services/user/AlterPasswordUserService";

class AlterPasswordUserController {
    async handle(req: Request, res: Response) {
        const { password, confirmPassword } = req.body;
        const createUserService = new AlterPasswordUserService();

        const user_id = req.user_id;

        const user = await createUserService.execute({
            password, confirmPassword, user_id
        });

        return res.json(user)

    }
}

export { AlterPasswordUserController }