// Pega o numero de caracteres e a quantidade de palavras em uma frase
let frase = "Hello world! what a beautiful day";
let numCarac = frase.length;
let numPalavra = frase.split(" ").length;
console.log(`Numero de caracteres: ${numCarac} e palavras: ${numPalavra}`);

// imprime todos os elementos do array
const aArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
for (let i = 0; i < aArray.length(); i++) {
  console.log(aArray[i]);
}