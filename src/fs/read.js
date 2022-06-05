import fs from "fs/promises";
import { constants } from "fs";

const filePath = './files/fileToRead.txt';

export const read = async () => {
    checkPathExists(filePath).then((exists) => {
        if (exists) {
            fs.readFile(filePath, { encoding: 'utf8' }).then((content) => console.log(content));
        } else {
            throw 'FS operation failed';
        }
    });
};

function checkPathExists(file) {
    return fs.access(file, constants.F_OK)
        .then(() => true)
        .catch(() => false)
}

read();
