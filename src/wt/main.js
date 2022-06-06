import { Worker } from "worker_threads";
import { cpus } from "os";

const workerPromise = (workerData) => () =>
    new Promise((resolve) => {
        const worker = new Worker('./worker.js', {
            workerData,
        });

        worker.on("error", (error) => {
            resolve({ data: null, status: "error" });
        });

        worker.on("message", (result) => {
            resolve({ data: result, status: "resolved" });
        });
    });

export const performCalculations = async () => {
    const workers = [];

    for (let index = 0; index < cpus().length; index++) {
        workers.push(workerPromise(10 + index));
    }

    return Promise.all(workers.map((worker) => worker()));
};

performCalculations().then((res) => console.log(res));
