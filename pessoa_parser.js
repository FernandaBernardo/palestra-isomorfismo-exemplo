if (typeof module === 'object') {
  Pessoa = require('./pessoa');
}

const parser = {
  parse: function(txt) {
    return txt.split('\n').map((linha) => {
      let [nome, dataTxt] = linha.split(';');
      return new Pessoa(nome, new Date(dataTxt));
    });
  }
};

if (typeof module === 'object') {
  module.exports = parser;
}