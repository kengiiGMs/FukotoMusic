import crypto from "crypto";
import multer from "multer";

import { extname, resolve } from 'path';

export default {
    upload(folder: string) {
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..', '..', 'tmp', folder),
                filename: (request, file, callback) => {
                    const filehash = crypto.randomBytes(16).toString("hex");
                    const fileName = `${filehash}-${file.originalname}`

                    return callback(null, fileName)
                }
            })
        }
    }
}