import { Transform } from "stream";

export const transform = async () => {
    const { stdin, stdout } = process;
    const transform = new Transform({
        transform: (chunk, _, callback) => {
            const reverseChunk = chunk
                .toString()
                .split("")
                .reverse()
                .slice(1)
                .join("");
            callback(null, reverseChunk + "\n");
        },
    });

    stdin.pipe(transform).pipe(stdout);
};

transform();
