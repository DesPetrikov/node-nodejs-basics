import process from 'process';

const parseEnv = () => {
    const necessaryVars = Object.entries(process.env).filter(prop => prop[0].startsWith('RSS_'))
    console.log(necessaryVars.map(prop => prop.join('=')).join('; '));
};

parseEnv();