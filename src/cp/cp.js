import { fork } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const spawnChildProcess = async (args) => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const pathToChild = path.join(__dirname, 'files', 'script.js');
  fork(pathToChild, args)
};

spawnChildProcess();
