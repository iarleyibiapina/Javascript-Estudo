// Fundamentos
// Javascript possui tipagem dinamica
var criandoUmaVariavel = "valor";
let criandoUmaVariavelComLet = "valor";
const criandoUmaVariavelQueNaoPodeTerSeuValorAlterado = 1;
// inválido se
// criandoUmaVariavelQueNaoPodeTerSeuValorAlterado++;
let boolean = true;

// Saber tipo de uma variavel
typeof criandoUmaVariavel;

var aArray = [];
var aObject = {};
var aUndefined = null;
var aNaN = "not a number";

// Priorizar usar const, para 'tipar' de forma bem crua uma variavel
const VALOR_IMPORTANTE = Math.PI;

// converte para Number
let aNumber = "123";
let aNumberConverter = Number(aNumber);

// if
if (typeof aNumberConverter === "number") {
  console.log("true");
} else {
  console.log("false");
}
if (aNumber) {
} else if (aNaN) {
} else {
}
// if ternario
// (condição verdadeira) ? (caso sim) : (caso nao);
boolean ? "true" : "false";

let dia = "terça";
switch (dia) {
  case "segunda":
    console.log("segunda");
    break;
  case "terça":
    console.log("terça");
    break;
  default:
    console.log("Sabado");
    break;
}

// repetiçao
let y;
for (let i = 0; i < 10; i++) {
  y += i;
}

// melho em logicas, onde nao se sabe o fim
let mel = true;
while (y < 20) {
  mel = false;
}

// foreach(X in Y) - em arrays
// foreach(X of Y) - em objetos

// funcoes

function simples() {
  console.log("fun is fun");
}
simples();

function comParam(param) {
  console.log(param);
}
comParam();

let outraComVariavelComArrow = () => {
  console.log("arrow function dentro de uma variavel");
};
// chama funçao commo variavel normal
outraComVariavelComArrow;

// escopos
let global,
  i = "uso em qualquer escopo";

function escopos() {
  let local,
    i = "uso somente neste escopo";
}

// 'içamento'
// chamar função mesmo quando definida depois

// truthy e falsy, quando alguns valores mesmo não sendo booleanos podem definidas como verdadeiro ou falsos
// ex: uma string, se vazia = falso, se preenchida = true

// funcoes com arrays

// adiciona elemento ao começo
aArray.push(1);
// tira ultimo elemento do array
aArray.pop(1);

// Concatena
let aString = "um";
aString + " mais texto";

// interpolação ou template string
// util para utilizar strings e js
// é definido por crase ` e utiliza elementos js via ${}
const diaDaSemana = `hoje é ${dia}`;

// Strings tambem possui seus metodos
// acessando um caracter
dia[2];
// pegando tamanho da palavra
dia.length();
dia.toUpperCase();

// Funçoes com data
let data = Date();

// metodos com matematica

// arredondar para inteiro
Math.round();
// raiz quadrada
Math.sqrt();
// potencia
Math.pow();
