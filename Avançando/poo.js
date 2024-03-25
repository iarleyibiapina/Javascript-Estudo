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

// OUTROs

// Primeira letra maiuscula e sempre singular

class Produto {
  //construtor é quem 'chama', literal 'constroi' a classe
  //this, refere-se a propria classe, ou seja, este nome desta classe
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  descricao() {
    return `este produto é ${this.name} e tem o preco de 	  ${this.preco}`;
  }
}
//new é a instacia, 'chamando' a classe e 'construindo' novo objeto
const camisa = new Produto("zarifa", 120);

console.log(camisa.name);
console.log(camisa.descricao());

// herda classes, (tem mesmos atributos, porem com alguns atributos a mais)

class SuperProduto extends Produto {
  construtor(name, price, size) {
    super(name, price);
    this.size = size;
  }

  adjetivo(adjetivo) {
    return `O ${this.name} é muitop ${adjetivo}`;
  }

  // static, usar o metodo direto da classe sem instancia
  static ola() {
    return "ola";
  }
}
const tenis = new SuperProduto("nu", 9, "P");

console.log(tenis.size);
console.log(tenis.adjetivo(feio));
console.log(SuperProduto.ola());
