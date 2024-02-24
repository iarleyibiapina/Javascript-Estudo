// 1.0
let frase = "Hello world! what a beautiful day";
let numCarac = frase.length;
let numPalavra = frase.split(" ").length;
console.log(`Numero de caracteres: ${numCarac} e palavras: ${numPalavra}`);

// 2.0
const aArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
for (let i = 0; i < aArray.length(); i++) {
  console.log(aArray[i]);
}

// 3.0
/**
 *espera 23:00 e retorna 11:00 pm
 *
 * @param {String} 24:00 horario24
 * @returns {String} 00:00 pm
 */
function formataData(horario24) {
  // primeira forma
  //   const hora = horario24.split(":")[0];
  //   const minuto = horario24.split(":")[1];

  //   segunda forma destruturando um elemento
  const [hora, minuto] = horario24.split(":");

  //   este || serve para o caso de 12 % 12 onde retornara 0 e falsy
  const hora12 = hora % 12 || 12;

  //   cria var com checagem
  let periodo = hora > 12 ? "PM" : "AM";

  return `${hora12}:${minuto} ${periodo}`;
}
console.log(formataData("20:03"));
