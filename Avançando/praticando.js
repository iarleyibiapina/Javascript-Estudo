// criando array
const aArray = [];
// adicionando elemento
aArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// removendo primeiro item
aArray.shift();
console.log(aArray);

// find()

// ache o numero par maior que 6
const numero = aArray.find((valor) => valor % 2 == 0 && valor > 6);
console.log(numero);

// filter, criando novo array com numeros acima de 5

const maiorQueCinco = aArray.filter((valor) => valor > 5);
console.log(maiorQueCinco);
