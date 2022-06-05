import fs from "fs/promises";
import { constants } from "fs";

const filePath = "./files/fileToRemove.txt";

export const remove = () => {
    checkPathExists(filePath).then((exists) => {
        if (exists) {
            fs.unlink(filePath);
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

remove();
