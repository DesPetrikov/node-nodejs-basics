import { readFile } from 'node:fs/promises';
import { createHash } from 'crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const calculateHash = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const data = await readFile(filePath, { encoding: 'utf8' });
    const hash = createHash("sha256").update(data).digest("hex");
    console.log(hash);
};

await calculateHash();
