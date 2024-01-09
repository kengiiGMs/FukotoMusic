import crypto from 'crypto';
import multer from 'multer';
import { extname, resolve } from 'path';

export default {
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                destination: (request, file, callback) => {
                    let folderPath = '';

                    if (file.mimetype.includes('image')) {
                        folderPath = folder;
                    } else if (file.mimetype.includes('audio')) {
                        folderPath = 'musicTmp';
                    }

                    callback(null, resolve(__dirname, '..', '..', 'tmp', folderPath));
                },
                filename: (request, file, callback) => {
                    const filehash = crypto.randomBytes(16).toString('hex');
                    const fileName = `${filehash}-${file.originalname}`;
                    callback(null, fileName);
                },
            }),

            fileFilter: (request, file, callback) => {
                const allowedImageTypes = ['.png', '.jpg', '.jpeg'];
                const allowedMp3Types = ['.mp3'];

                const ext = extname(file.originalname).toLowerCase();

                if (file.mimetype.includes('image') && allowedImageTypes.includes(ext)) {
                    return callback(null, true);
                } else if (file.mimetype.includes('audio') && allowedMp3Types.includes(ext)) {
                    return callback(null, true);
                }

                return callback(new Error('Unsupported file type'), false);
            },
        };
    },
};
