import { createReadStream } from "node:fs";

export const read = () => {
    const stream = createReadStream('./files/fileToRead.txt');
    stream.pipe(process.stdout);
    stream.on('error', (e) => {
        throw new Error(e.message);
    })
};

read();
