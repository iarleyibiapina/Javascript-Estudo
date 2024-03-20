//===================O==================//
//=============================================================================//

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
strings();
//=============================================================================//
