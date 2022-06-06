import fs from "fs/promises";
import { constants } from "fs";

const folderPath = './files';

export const list = () => {
    checkPathExists(folderPath).then((exists) => {
        if (exists) {
            fs.readdir(folderPath).then((fileNames) => {
                fileNames.forEach((name) => console.log(name));
            })
        } else {
            throw new Error('FS operation failed');
        }
    });
};

function checkPathExists(file) {
    return fs.access(file, constants.F_OK)
        .then(() => true)
        .catch(() => false)
}

list();
