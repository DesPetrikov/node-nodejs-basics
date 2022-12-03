import {stdout} from 'node:process';
import { createReadStream } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToRead.txt');
    let content = ''
    const stream = createReadStream(filePath, 'utf-8');
    stream.on('data', chunk => content += chunk);
    stream.on('end', () => stdout.write(content))
};

await read();