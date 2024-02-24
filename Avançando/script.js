// Manipulando Arrays

let aArray = ["ab", "bb", "c", "bb", "ab", "c"];

// começo do array elemento
// coloca
aArray.shift("a");
// tira
aArray.unshift("a");

// metodos

// achar o primeiro caso em um array, caso positivo na arrow function
let apenasB = aArray.find((numeroDentroDoArray) => {
  numeroDentroDoArray == "b";
});

// acha varios casos em um array, caso positivo na arrow function
let todosSemelhantes = aArray.find((numeroDentroDoArray) => {
  numeroDentroDoArray == "b";
});

// Strings

// tirando espaços em brancos no começo e fim

const palavra = " daoskdoaskd ";
const tiraEspacaoAoRedor = palavra.trim();
// tirar todos os espaços
// const tiraEspacaoAoRedor = palavra.trim().split(" ");

// começa com 'valor' ? retorna bool
palavra.startsWith("da");
palavra.endsWith("da");

// excecoes e tratamentos de erros
let aNumber = 10;

if (aNumber > 50) {
  // estes erros nao param o pgrama, e aparecem em 'errors' no inspecionar
  throw new Error("numero invalido");
}

try {
  // tente executar
} catch (error) {
  // senao 'catch' o erro e trata aqui
}

// Callback -> uma funçao chamada em outra funçao
let callback = () => {
  return 1;
};

let functionWithCallback = (param, callback) => {
  callback();
  return param;
};

functionWithCallback("numero", callback);

// exemplo de callback
setTimeout(callback(), 3000);

// Promise - Executa codigo apos um caso;
// é um objeto que possui como param Resolve e Reject
const promessa = new Promise((resolve, reject) => {
  const condicao = true;
  if (condicao) {
    // caso de certo
    resolve("ok");
  } else {
    // caso de errado
    reject(new Error());
  }
});

// chamando função 'entao' para pegar resultado positivo
// pegando o erro com catch
promessa.catch((error) => {
  console.log(error);
});

// caso promisses assincronas, definir um tipo para 'esperar' todas

const promessa2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "testando");
});

Promisse.all([promessa, promessa2]).then((message) => {
  console.log(message);
});

// async await
