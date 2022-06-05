import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { createGunzip } from "zlib";

const gzipFilePath = "./files/archive.gz";
const filePath = "./files/fileToCompress.txt";

export const decompress = async () => {
    const readStream = createReadStream(gzipFilePath);
    const writeStream = createWriteStream(filePath);
    const unGzip = createGunzip();

    return pipeline(readStream, unGzip, writeStream);
};

decompress();
