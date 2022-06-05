import crypto from 'crypto';
import fs from "fs/promises";
import { constants } from "fs";

const filePath = './files/fileToCalculateHashFor.txt';

export const calculateHash = () => {
    return checkPathExists(filePath).then((exists) => {
        if (exists) {
            return fs.readFile(filePath, { encoding: 'utf8' }).then((content) => {
                return hash(content);
            });
        } else {
            throw 'FS operation failed';
        }
    });
};

function hash(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}

function checkPathExists(file) {
    return fs.access(file, constants.F_OK)
        .then(() => true)
        .catch(() => false)
}

calculateHash().then((hash) => console.log(hash));
