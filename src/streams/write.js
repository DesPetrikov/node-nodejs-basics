import { stdin as input, stdout } from 'node:process';
import { createWriteStream } from 'node:fs';
import readline from 'node:readline/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const write = async () => {
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt');
  stdout.write(
    'Write some text in the command line, then check fileToWrite.txt\n'
  );
  const writeStream = createWriteStream(filePath);
  const rl = readline.createInterface({ input });
  rl.on('line', (line) => {
    writeStream.write(`${line}\n`);
  });
};

await write();
