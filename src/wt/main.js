import { cpus } from 'node:os';
import { Worker } from'node:worker_threads';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const performCalculations = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const pathToWorker = path.join(__dirname, 'worker.js');
    const coresNumber = cpus().length;
    const workers = [];
    for(let i = 0; i < coresNumber; i++) {
        const promise = new Promise((resolve) => {
            const worker = new Worker(pathToWorker, {workerData: i + 10})
            worker.on('message', data => resolve({ status: 'resolved', data }))
            worker.on('error', () => resolve({ status: 'error', data: null }))
        })
        workers.push(promise)
    }
  Promise.all(workers).then(result => console.log(result))
};

await performCalculations();
