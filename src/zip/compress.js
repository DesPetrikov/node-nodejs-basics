import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import { createGzip } from 'node:zlib';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const compress = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const srcPath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const destPath = path.join(__dirname, 'files', 'archive.gz');
  const gzip = createGzip();
  const source = createReadStream(srcPath);
  const destination = createWriteStream(destPath);
  const pipe = promisify(pipeline);
  await pipe(source, gzip, destination);
  
};

await compress();
