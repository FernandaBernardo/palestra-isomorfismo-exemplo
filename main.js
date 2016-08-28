if (typeof module === 'object') {
  const parser = require('./pessoa_parser');
  const fs = require('fs');
  fs.readFile('pessoas.txt', (err, content) => {
    let pessoas = parser.parse(content.toString());
    console.log(pessoas);
  });
} else {
  document.getElementById('processar').addEventListener('click', () => {
    let pessoas = parser.parse(document.getElementById('pessoas').value);
    console.log(pessoas);
  });
}