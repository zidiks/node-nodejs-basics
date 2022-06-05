import * as fs from 'fs/promises';
import { constants } from 'fs';

const path = './files/fresh.txt';

export const create = () => {
    checkPathExists(path).then((exists) => {
        if (exists) {
            throw 'FS operation failed';
        } else {
            fs.writeFile(path, 'I am fresh and young')
        }
    });
};

function checkPathExists(file) {
    return fs.access(file, constants.F_OK)
        .then(() => true)
        .catch(() => false)
}

create();
