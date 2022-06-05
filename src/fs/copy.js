import fs from "fs/promises";
import { constants } from "fs";
import path from "path";

const fromPath = './files';
const toPath = './files_copy'

export const copy = () => {
    Promise.all([
        checkPathExists(fromPath),
        checkPathExists(toPath),
    ]).then((res) => {
        if (!res[0] || res[1]) {
            throw new Error('FS operation failed');
        } else {
            copyFolderRec(fromPath, toPath);
        }
    });
};

function copyFolderRec(from, to) {
    fs.mkdir(to).then(() => {
        fs.readdir(from).then((list) => {
            list.forEach(el => {
                fs.lstat(path.join(from, el)).then((stat) => {
                    if (stat.isFile()) {
                        fs.copyFile(path.join(from, el), path.join(to, el));
                    } else {
                        copyFolderRec(path.join(from, el), path.join(to, el));
                    }
                })
            })
        })
    });
}

function checkPathExists(file) {
    return fs.access(file, constants.F_OK)
        .then(() => true)
        .catch(() => false)
}

copy();
