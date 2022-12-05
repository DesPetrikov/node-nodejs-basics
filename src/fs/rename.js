import path from 'node:path';
import { fileURLToPath } from 'node:url';
import fs from 'node:fs/promises';

const rename = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const oldFileName = path.join(__dirname, 'files', 'wrongFilename.txt');
  const newFileName = path.join(__dirname, 'files', 'properFilename.md');
  try {
    await fs.rename(oldFileName, newFileName);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed');
    }
    throw error;
  }
};

await rename();
