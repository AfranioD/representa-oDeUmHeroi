const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo.toLowerCase()) {
      case 'mago':
        ataque = 'usou magia';
        break;
      case 'guerreiro':
        ataque = 'usou espada';
        break;
      case 'monge':
        ataque = 'usou artes marciais';
        break;
      case 'ninja':
        ataque = 'usou shuriken';
        break;
      default:
        ataque = 'usou um ataque desconhecido';
        break;
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`);
  }
}

function obterDadosHeroi() {
  rl.question('Digite o nome do herói: ', (nome) => {
    rl.question('Digite a idade do herói: ', (idade) => {
      rl.question('Digite o tipo do herói (mago, guerreiro, monge, ninja): ', (tipo) => {
        const heroi = new Heroi(nome, idade, tipo);
        heroi.atacar();
        rl.close();
      });
    });
  });
}

// Inicia o processo de obtenção de dados
obterDadosHeroi();
