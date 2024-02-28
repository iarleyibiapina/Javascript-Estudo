// arrow function e template string
const variavel = (nome) => {
  return `Meu nome é ${nome}`;
};
console.log(variavel("miguel"));

// destructor / retirando uma chave
// funciona com objetos e arrays

// retira certos valores

const pessoa = {
  nome: "u",
  idade: 3,
  cidade: "f",
};

// retirando apenas idade, para nao repetir pessoa.idade quando objetos grandes
// pegando chave,
// pegando chave e atribuindo um novo nome ou variavel a ela 'novo: chave'
const { idade, cidade: uf } = pessoa;
console.log(uf);

// funciona com arrays
const nums = [1, 2, 3, 4, 5];
const [um, dois] = nums;
console.log(dois);

// na ordem do indice

// spread com arrays / 'copia' o array em outro array
const outroNums = [...nums, 6, 7, 8, 9, 10];
console.log(outroNums);

// serve de argumentos infinitos

// reduce, precisa de dois num, um valor temporario, que foi iniciado como 0 e o valor a ser passado na funcao
const soma = (...args) => args.reduce((total, numero) => total + numero, 0);
// agora a funçao pode  ser chamada com varios numeros de argumento

// valor default em um param de uma função
function paramDefault(valor = "valor padrao") {
  return valor;
}
console.log(paramDefault());
console.log(paramDefault("outro"));

// object literals enhancements
// criando objetos onde variavel = valor será chave = valor
const varAseTornarUmaChave = "valor";
const novosObjeto = { varAseTornarUmaChave };
// novosObjeto / { varAseTornarUmaChave: "valor"}

// metodo em objeto

outroObjeto = {
  funcao() {
    console.log("oi");
  },
};
console.log(outroObjeto.funcao());
