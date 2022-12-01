import { cp } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const copy = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const srcDir = path.join(__dirname, 'files');
    const destDir = path.join(__dirname, 'files_copy');
    try {
        await cp(srcDir, destDir, {errorOnExist: true, force: false, recursive: true})
    } catch (error) {
        if (error.code === 'ENOENT' || error.code === 'ERR_FS_CP_EEXIST') {
            throw new Error('FS operation failed')
        }
        throw error;
    }
    
};

copy();