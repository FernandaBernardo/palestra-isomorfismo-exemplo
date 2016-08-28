class Pessoa {
  constructor(nome, dataNascimento) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
  }

  get idade() {
    return (new Date() - this.dataNascimento) / (1000 * 60 * 60 * 24 * 365);
  }

  get primeiroNome() {
    return this.nome.split(' ')[0];
  }
}

if (typeof module === 'object') {
  module.exports = Pessoa;
}