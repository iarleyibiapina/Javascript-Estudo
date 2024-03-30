//===================ALGUNS METODOS==================//
//
//===================STRINGS==================//
let algumaString = "alguma.coisa";

let tamanhoString = algumaString.length; // .length, pega o tamanho da string
let divideString = algumaString.split("."); // .split(" "), separa elementos e cria um array onde o parametro é o identificador da divisão, ou seja, onde houver "." vai ser dividido os elementos
let posicaoLetra = algumaString.indexOf("coisa"); // .indexOf("letra"), vai procurar em que posição de uma string o parametro é achado, por exemplo, se "um letra" retorna 4, pois é como se cada caracter fosse um index e a palavra letra começa no index 4
let cortarString = algumaString.slice(2, 5); // .slice(começo, fim), é uma forma de CORTAR uma palavra, onde primeiro parametro é o inicio e o segundo o fim.

function strings() {
  console.log(tamanhoString);
  console.log(divideString);
  console.log(posicaoLetra);
  console.log(cortarString);
}
// strings();
//=============================================================================//
//
//===================ARRAYS==================//

// .length para pegar o tamanho do array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array[n] - n é a posicao do array começando por 0;
// array[array.length - 1] - Ultima posicao ou (pega ultimo elemento) de uma lista;

array.push("novo item adicionado"); // adiciona um elemento ao fim do array
array.pop("remove"); // remove   um elemento ao fim do array
array.unshift("item"); // insere   elemento no inicio do array
array.shift("item"); // remove   elemento no inicio do array

//=============================================================================//
//
//===================OBJETOS==================//
// definidos por {}
// possuem chaves e valores
// sao acessador por objeto.chave na maioria das vezes
// ou
// objeto['chave'] - nesse caso, apenas quando chave é string
// podem ter funções dentro, sendo referenciados por this

const objeto = {
  chave: 1,
  produto: "string",
  valor: 100,
  acessandoDeOutraForma: "colchete",
  funcaoDentroObjeto(param) {
    return this.valor * param;
  },
};

// mesmo sendo Const, é possivel adicionar metodos a objetos
objeto.adiciona = () => {
  console.log("adiciona metodo");
}
objeto.adicionaChar = "L";
// e tambem é possivel remover estes metodos
delete objeto.adiciona;
delete objeto.adicionaChar;

function defObjeto() {
  console.log(objeto);
  console.log(objeto.chave);
  console.log(objeto["acessandoDeOutraForma"]);
  console.log(objeto.funcaoDentroObjeto(2));
}
// defObjeto();
//=============================================================================//
//
//===================CLONANDO OBJETOS==================//
// Copia um objeto para um novo objeto, onde primeiro param é o nobo objeto
// o segundo é o objeto a ser copiado

// pode ser adicionado atributos ou metodos a este objeto
// const copiaObjeto = Object.assign({}, objeto); copiar
const copiaObjeto = Object.assign({
  umNovoAtrr: "umNovoAtrr",
  umNovoMetodo: ()=> {return 1}
}, objeto); // copia e adiciona dados

//===================SPREAD==================//
// indentificado por ...
// tambem faz a cópia de um objeto, podendo adicionar valores
const outraCopia = {... objeto};

//=============================================================================//
//
//===================DESCONSTRUIÇAO==================//
// Uma forma de 'extrair' uma chave do objeto ou array e tranformar em uma variavel
// muito util quando for utilizar apenas 1 variavel em um objeto enorme.

let { valor, funcaoDentroObjeto } = objeto;

// tambem funciona com arrays
let [a, b] = array;
// a posicao das variaveis vai depender das posicao do array

function desConstroi() {
  // esta funçao vai dar 'erro' pois nao vai haver uma referencia
  console.log(valor, funcaoDentroObjeto());
  console.log(a, b);
}
// desConstroi();
//=============================================================================//
//
