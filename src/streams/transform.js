import { Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {
  const reverseTransform = new Transform({
    transform(chunk, encoding, callback) {
      const transformedChunk =
        chunk.toString().split('').reverse().join('') + '\n';
      this.push(transformedChunk);
      callback();
    },
  });
  stdout.write('Type some text and press Enter\n');
  stdin.pipe(reverseTransform).pipe(stdout);
};

await transform();
