let aObjecto = {
  nome: "um",
  atrrDois: "dois",
  atrrType: "type",
  num: 1,
  funcao() {
    // referenciando proprio objeto
    return this.num * 10;
  },
};

// console.log(aObjecto);
// console.log(aObjecto.nome);
// console.log(aObjecto.funcao());

// javascript object notation

let encodado = JSON.stringify(aObjecto);
// em json agora tudo string

// desfaz json agora objeto
let desEncodado = JSON.parse(encodado);
