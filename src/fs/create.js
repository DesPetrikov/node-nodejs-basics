import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const create = async () => {
  try {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, 'files', 'fresh.txt');
    await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
  } catch (error) {
    if (error.code === 'EEXIST') {
      throw new Error('FS operation failed');
    }
    throw error;
  }
};

await create();
