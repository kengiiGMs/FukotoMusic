import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, email, password, confirmPassword } = req.body;
        const createUserService = new CreateUserService();

        if (!req.file) {
            throw new Error("Error Upload File")
        } else {
            const { filename: banner } = req.file;

            const user = await createUserService.execute({
                name,
                email,
                password,
                confirmPassword,
                banner,
            });

            return res.json(user)
        }
    }
}

export { CreateUserController }