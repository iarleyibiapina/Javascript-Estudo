// transformar isso
const pessoas = [
  { nome: "um", sobrenome: "mu", idade: 28 },
  { nome: "dois", sobrenome: "soid", idade: 32 },
  { nome: "tres", sobrenome: "sret", idade: 40 },
];
// nisso
const esperado = {
  28: ["um mu", "dois soid"],
  32: ["tres sret"],
};
// primeiro item deste acumulador é um objeto vazio
const pessoasPorIdade = pessoas.reduce((acc, cur) => {
  if (!acc[cur.idade]) {
    acc[cur.idade] = [];
  }
  acc[cur.idade].push(`${cur.nome} ${cur.sobrenome}`);

  return acc;
}, {});

console.log(pessoasPorIdade);
