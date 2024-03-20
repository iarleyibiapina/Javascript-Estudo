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
