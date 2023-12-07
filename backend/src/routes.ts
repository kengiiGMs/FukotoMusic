import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { CreateAlbumController } from "./controllers/album/CreateAlbumController";
import { DetailAlbumController } from "./controllers/album/DetailAlbumController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

/* Routes User */
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);

router.post('/album', isAuthenticated, new CreateAlbumController().handle);
router.get('/album/get', isAuthenticated, new DetailAlbumController().handle);



export { router }