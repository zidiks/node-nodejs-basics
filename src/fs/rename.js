import fs from "fs/promises";
import { constants } from "fs";
import path from "path";

const file = "./files/wrongFilename.txt";
const newName = "properFilename.md";

export const rename = () => {
    const newFile = path.join(
        file.split('/').slice(0, -1).join('/'),
        newName,
    );
    Promise.all([
        checkPathExists(file),
        checkPathExists(newFile),
    ]).then((res) => {
        if (!res[0] || res[1]) {
            throw 'FS operation failed';
        } else {
            fs.rename(file, newFile);
        }
    });
};

function checkPathExists(file) {
    return fs.access(file, constants.F_OK)
        .then(() => true)
        .catch(() => false)
}

rename();
