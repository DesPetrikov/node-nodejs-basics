import process from 'process';

const parseArgs = () => {
    const necessaryArgs = process.argv.slice(2);
    const pairs = [];
    for(let i = 0; i < necessaryArgs.length; i += 2) {
        pairs.push(necessaryArgs.slice(i, i + 2))
    }
    console.log(pairs.map(pair => pair.join(' is ')).join(', '));
};

parseArgs();