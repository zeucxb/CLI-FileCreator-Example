const fs = require('fs');
const local = process.cwd();

const file = `
    module.exports = () => {
        console.log('Executando o arquivo criado.');
    }
`;

fs.writeFile('teste.js', file, (err) => {
    if (err)
        throw err;

    console.log('File created:', `${local}/teste.js`);
    
    const newFile = require(`${local}/teste.js`);

    newFile();
});