import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { AlterPasswordUserController } from "./controllers/user/AlterPasswordUserController";

import { CreateSingerController } from "./controllers/singer/CreateSingerController";
import { DetailSingerController } from "./controllers/singer/DetailSingerController";

import { CreatePlaylistController } from "./controllers/playlist/CreatePlaylistController";
import { DetailPlaylistPublicController } from "./controllers/playlist/DetailPlaylistPublicController";
import { DetailPlaylistUserController } from "./controllers/playlist/DetailPlaylistUserController";
import { UpdatePublicPlaylistController } from "./controllers/playlist/UpdatePublicPlaylistController";

import { CreateMusicController } from "./controllers/music/CreateMusicController";
import { DetailMusicController } from "./controllers/music/DetailMusicController";

import { CreateMusicPlaylistController } from "./controllers/musicPlaylist/CreateMusicPlaylistController";
import { DetailMusicPlaylistController } from "./controllers/musicPlaylist/DetailMusicPlaylistController";
import { DeleteMusicPlaylistController } from "./controllers/musicPlaylist/DeleteMusicPlaylistController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

import uploadConfig from './config/multer'
import uploadConfigMp3 from './config/multermp3'


const router = Router();

const uploadUser = multer(uploadConfig.upload("userPhotos"))
const uploadSinger = multer(uploadConfig.upload("singerPhotos"))
const uploadMusic = multer(uploadConfigMp3.upload("musicPhotos"))


/* Routes User */
router.post('/users', uploadUser.single('file'), new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailUserController().handle);
router.post('/me/alterPassword', isAuthenticated, new AlterPasswordUserController().handle);


/* Routes Singer */
router.post('/singer', isAuthenticated, uploadSinger.single('file'), new CreateSingerController().handle)
router.get('/singer', isAuthenticated, new DetailSingerController().handle)

/* Routes Playlist */
router.post('/playlist', isAuthenticated, new CreatePlaylistController().handle)
router.get('/playlist/public', new DetailPlaylistPublicController().handle)
router.get('/playlist/user', isAuthenticated, new DetailPlaylistUserController().handle)
router.put('/playlist/update', isAuthenticated, new UpdatePublicPlaylistController().handle)

/* Routes Music */
router.post('/music', isAuthenticated, uploadMusic.fields([{ name: 'file', maxCount: 1 }, { name: 'mp3', maxCount: 1 }]), new CreateMusicController().handle)
router.get('/music', new DetailMusicController().handle)

/* Routes MusicPlaylist */
router.post('/musicplaylist', isAuthenticated, new CreateMusicPlaylistController().handle)
router.post('/musicplaylist/playlist', new DetailMusicPlaylistController().handle)
router.delete('/musicplaylist/delete', new DeleteMusicPlaylistController().handle)

export { router }