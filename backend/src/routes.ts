import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";

const router = Router();

/* Routes User */
router.post('/users', new CreateUserController().handle);

export { router }