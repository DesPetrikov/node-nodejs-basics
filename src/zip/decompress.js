import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import { createGunzip } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const decompress = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const destPath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const srcPath = path.join(__dirname, 'files', 'archive.gz');
  try {
    const gzip = createGunzip();
    const source = createReadStream(srcPath);
    const destination = createWriteStream(destPath);
    const pipe = promisify(pipeline);
    await pipe(source, gzip, destination);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(
        `Error: ENOENT: no such file or directory, open ${srcPath}. Make sure that you have created this file with help of npm run zip:compress `
      );
    } else {
      throw error;
    }
  }
};

await decompress();
