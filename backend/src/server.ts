import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { router } from './routes';
import path from 'path';

const app = express();

app.use(express.json())
app.use(cors())
app.use(router);


app.use('/files/user', express.static(path.resolve(__dirname, '..', 'tmp', 'userPhotos')))
app.use('/files/singer', express.static(path.resolve(__dirname, '..', 'tmp', 'singerPhotos')))
app.use('/files/music', express.static(path.resolve(__dirname, '..', 'tmp', 'musicPhotos')))
app.use('/files/album', express.static(path.resolve(__dirname, '..', 'tmp', 'albumPhotos')))
app.use('/files/music/play', express.static(path.resolve(__dirname, '..', 'tmp', 'musicTmp')))


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            erro: err.message
        })
    }

    return res.status(400).json({
        status: 'error',
        message: 'Internal Server Error.'
    })
})

app.listen(3333, () => console.log('Servidor Online!'))