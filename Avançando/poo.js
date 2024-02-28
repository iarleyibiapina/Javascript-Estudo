class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  falar() {
    console.log(`meu nome é ${this.nome}`);
  }
}

let joao = new Pessoa("joao", 20);
console.log(joao);
console.log(joao.falar());

class Profissao extends Pessoa {
  // herda metodos e atributos
  constructor(nome, idade, profissao) {
    // herda construtor
    super(nome, idade);
    // usando este construtor
    this.profissao = profissao;
  }
  getProfissao() {
    // pegando funcao da classe pai
    // super.funcao()
    console.log(`minha profissao é ${this.nome}`);
  }
}

const wallet = new Profissao("lenh", 44, "alva");
console.log(wallet);
console.log(wallet.falar());
console.log(wallet.getProfissao());
