// ALGUNS DADOS MOCADOS;
const arr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const data = [
  {
    name: "SUJEITO",
    age: 23,
    salary: 4000,
    active: true,
    team: "front",
    bonus: 0,
  },
  {
    name: "Jose",
    age: 16,
    salary: 3000,
    active: false,
    team: "front",
    bonus: 0,
  },
  {
    name: "Fulano",
    age: 41,
    salary: 6000,
    active: true,
    team: "back",
    bonus: 0,
  },
  {
    name: "Ciclano",
    age: 30,
    salary: 4000,
    active: false,
    team: "mobile",
    bonus: 0,
  },
  {
    name: "Beltrano",
    age: 61,
    salary: 3000,
    active: true,
    team: "back",
    bonus: 0,
  },
  {
    name: "Santano",
    age: 18,
    salary: 2000,
    active: true,
    team: "mobile",
    bonus: 0,
  },
];
//=============================================================================//
//
//===================FIND==================//
//Find percorre lista, e quando bater com  condição, retorna o primeiro
// objeto encontrado; (pegar 1)
// vai retornar dados quando idade maior que 27;
function find() {
  const user = data.find((elemento) => {
    return elemento.age >= 27;
  });
  return user;
}
// console.log(find());
//=============================================================================//
//
//===================FIND INDEX==================//
// findIndex, retorna a posição, com base no parametro.
// retorna e finaliza no primeiro padrão
function findIndex() {
  return data.findIndex((elemento) => {
    return elemento.name === "Fulano";
    // deve retornar '2'
  });
}
console.log(findIndex());
//=============================================================================//
//
//===================BÁSICO==================//
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
  console.log(arr.reverse());
  // inverte a ordem do array
}
// posicao();
//=============================================================================//
//
//===================PROTOTYPE==================//
// prototype - metodos do objeto, pode ser visto em um nagevador.
// array possui um prototype e objeto possui um prototype.

// prototype - sao funçoes 'nativas' do array.
// é posivel criar uma função prototype para ser usada diretamente em um array

// Array.prototype.novaFunc = function () {}
// arr.novaFunc()

//===================CALLBACK==================//

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
//=============================================================================//
//
//===================MAP==================//

// Percorre um array
// CRIA uma cópia de um array, mas com uma função acessando cada valor do array original.
// Pode alterar o valor do array
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

const users = data.map((user, index) => {
  // return "Olá " + user.name
  // retorna o nome de cada item.

  // tambem pode alterar o valor do array original
  if (user.salary <= 3000) {
    user.salary += 900;
    user.bonus++;
  }

  return {
    name: user.name,
    salary: user.salary,
    bonus: user.bonus,
  };
});
// vai retornar essa nova formatação e alteração feita tambem no original.

// map();
//=============================================================================//
//
//===================REDUCE==================//

// Reduz o array a um unico valor
// Reduzir o array (ou retornar apenas um valor),
// Primeiro parametro - Valor inicial, podendo ser um {} ou [] - Qualquer dado
// Segundo  parametro - Valor atual ou temporario, servindo de auxiliar do Primeiro param
// Terceiro parametro - Array original
function reduce() {
  // é possivel passar um terceiro parametro que seria o equivalente ao indice
  return arr.reduce((acumulador, numeroAtual) => {
    return acumulador + numeroAtual;
  }, 0);
  // este zero é um valor inicial, podendo ser qualquer outro valor
}

// Outro exemplo...
const userReduce = reduce((total, user) => {
  return (total += user.salary);
  // retorna falso, pois tem alguns usuarios false, precisa ser todos.
}, 0);
// console.log(reduce());
//=============================================================================//
//
//===================SOME==================//
// some(), retorna boolenao caso parametro passado, condiz com algum item no array

const userFal = data.some((user) => {
  return user.active === false;
  // retorna verdadeiro, caso usuario falso no array.
});
//=============================================================================//
//
//===================EVERY==================//
// every() , parecido com o some, porem retorna verdadeiro quando TODOS os
// itens passar na condição

const userAct = data.every((user) => {
  return user.active === true;
  // retorna falso, pois tem alguns usuarios false, precisa ser todos.
});
//=============================================================================//
