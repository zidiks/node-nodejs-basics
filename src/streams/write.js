import { createWriteStream } from "fs";

const filePath = './files/fileToWrite.txt';

export const write = async () => {
    const stream = createWriteStream(filePath);
    process.stdin.pipe(stream);
    stream.on('error', (e) => {
        throw new Error(e.message);
    });
};

write();
