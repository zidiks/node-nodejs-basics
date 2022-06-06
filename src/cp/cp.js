import { fork } from "child_process";

const scriptPath = './files/script.js';

export const spawnChildProcess = async (args) => {
    const childProcess = fork(scriptPath, args, { silent: true });

    childProcess.on("spawn", () => console.log('Spawn child process'))
    childProcess.on("exit", (code) => console.log('Exit with: ' + code));
    childProcess.stdout.pipe(process.stdout);
    childProcess.stdout.on("data", (chunk) => console.log(`Message from child process: ${chunk}`));
    process.stdin.pipe(childProcess.stdin);
};

await spawnChildProcess();


