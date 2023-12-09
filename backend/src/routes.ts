import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { CreateAlbumController } from "./controllers/album/CreateAlbumController";
import { DetailAlbumController } from "./controllers/album/DetailAlbumController";
import { DetailAlbumSingerController } from "./controllers/album/DetailAlbumSingerController";

import { CreateSingerController } from "./controllers/singer/CreateSingerController";
import { DetailSingerController } from "./controllers/singer/DetailSingerController";

import { CreatePlaylistController } from "./controllers/playlist/CreatePlaylistController";
import { DetailPlaylistPublicController } from "./controllers/playlist/DetailPlaylistPublicController";
import { DetailPlaylistUserController } from "./controllers/playlist/DetailPlaylistUserController";
import { UpdatePublicPlaylistController } from "./controllers/playlist/UpdatePublicPlaylistController";

import { CreateMusicController } from "./controllers/music/CreateMusicController";
import { DetailMusicController } from "./controllers/music/DetailMusicController";
import { DetailMusicSingerController } from "./controllers/music/DetailMusicSingerController";
import { DetailMusicAlbumController } from "./controllers/music/DetailMusicAlbumController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

/* Routes User */
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);

/* Routes Album */
router.post('/album', isAuthenticated, new CreateAlbumController().handle);
router.get('/album', isAuthenticated, new DetailAlbumController().handle);
router.post('/album/singer', isAuthenticated, new DetailAlbumSingerController().handle);

/* Routes Singer */
router.post('/singer', isAuthenticated, new CreateSingerController().handle)
router.get('/singer', isAuthenticated, new DetailSingerController().handle)

/* Routes Playlist */
router.post('/playlist', isAuthenticated, new CreatePlaylistController().handle)
router.get('/playlist/public', new DetailPlaylistPublicController().handle)
router.get('/playlist/user', isAuthenticated, new DetailPlaylistUserController().handle)
router.put('/playlist/update', isAuthenticated, new UpdatePublicPlaylistController().handle)

/* Routes Music */
router.post('/music', isAuthenticated, new CreateMusicController().handle)
router.get('/music', new DetailMusicController().handle)
router.post('/music/singer', new DetailMusicSingerController().handle)
router.post('/music/album', new DetailMusicAlbumController().handle)

/* Routes MusicPlaylist */


export { router }