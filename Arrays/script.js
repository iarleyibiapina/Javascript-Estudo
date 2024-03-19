const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// cada posição é um indice

function posicao() {
  // a primeira posiçao é 0
  console.log(arr[0]);
  // a ultima posição é o tamanho do array - 1;
  console.log(arr.length - 1);
  // pegando o ultimo elemento
  console.log(arr[arr.length - 1]);
  // metodo especial para pegar ultimo elemento -1 - ultimo
  console.log(arr.at(-1));
  // -3 -2 -1 0 1 2 3 | negativo seria de traz para frente.
}
// posicao();

// ============PROTOTYPE============= //
// prototype - metodos do objeto, pode ser visto em um nagevador.
// array possui um prototype e objeto possui um prototype.

// prototype - sao funçoes 'nativas' do array.
// é posivel criar uma função prototype para ser usada diretamente em um array

// Array.prototype.novaFunc = function () {}
// arr.novaFunc()

// ==========CALLBACK=========//

// uma função executa outra;
// uma funçao recebe como param uma funçao para executar outra função
function callback() {
  chamar = () => {
    console.log(arr);
  };

  existe = (vazio) => {
    // se nao existe, executa funçao
    vazio ?? chamar();
  };
  // existe(12);
  existe();
}
// callback();

// ==========MAP=========//

// CRIA uma cópia de um array, mas com uma função modificando seus valores.
function map() {
  let total = 0;
  const arrTwo = arr.map((elemento) => {
    // aplica uma logica para cada elemento
    // return (total += elemento);
    //   return (elemento += elemento);
    // total += elemento;
  });

  const pegandoValoresDoArrayAntigo = arr.map(
    (valor, indice, arrayOriginals) => {
      // algum codigo aqui
    }
  );

  // se usar return a ação vai ser aplicada para cada elemetno;
  // se nao usar return a ação vai 'acumular' os elementos retornando um unico valor;
  console.log(arrTwo);
  console.log(total);
}
// map();
