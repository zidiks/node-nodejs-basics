import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import { createGzip } from "zlib";

const filePath = "./files/fileToCompress.txt";
const gzipFilePath = "./files/archive.gz";

export const compress = async () => {
    const writeStream = createWriteStream(gzipFilePath);
    const readStream = createReadStream(filePath);
    const gzip = createGzip();

    return pipeline(readStream, gzip, writeStream);
};

compress();
