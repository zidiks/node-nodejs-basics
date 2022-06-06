import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
    fs.readFile('./files/a.json', { encoding: 'utf8' }).then((data) => {
        unknownObject = JSON.parse(data);
        afterLoadJson(unknownObject);
    })
} else {
    fs.readFile('./files/b.json', { encoding: 'utf8' }).then((data) => {
        unknownObject = JSON.parse(data);
        afterLoadJson(unknownObject);
    })
}

function afterLoadJson(data) {
    console.log(data);
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

