//===================VARIAVEIS==================//
//
// Em js as variaveis sao case sensitivity
// A tipagem tambem é dinamica, onde uma variavel pode ser varios tipos
//
//===================VAR==================//
// forma 'primitiva' do js, geralmente usada em escopos globais
var umaVariavel = 'a';
//===================LET==================//
// let surgiu com a nova versao do js, usada geralemente em 'escopos' 
// para uma melhor dinamica e modulaçao do codigo.
let outraVariavel = 'b';
//===================CONST==================//
// Em consts, não é possivel alterar seu valor - geralmente usado como uma forma de 'Tipar' o dado
const naoAlteraValor = 10;
// console.log(naoAlteraValor++); // não é possivel;
//=============================================================================//
//
//===================TIPOS PRIMITIVOS==================//
let nnnn = "string"; // string
let iiii = 20;       // integer
let aaaa = true;     // boolean
let oooo = [];       // array
let kkkk = {};       // object
let cccc;            // undefined
let uuuu = null      // null
// retornar tipo 'typeOf'
//
//===================OBJETOS==================//
// objeto possui:
// contem {}
// sua estrutrua é: chave: valor
// podendo ter outros objetos e arrays dentro de si.
let obj = {
    nana: nnnn,
    lala: {
        lale: cccc,
        lali: uuuu
    },
    kaka: [iiii, aaaa, oooo, kkkk, cccc],
};
function exibir(){
    // é acessado por meio do 'ponto' .
    console.log(obj);
    console.log(obj.lala.lali);
    // essa referencia ou acesso pode ser jogado em outra variavel para melhor uso
    let referencia = obj.lala.lali;
    console.log(obj.lala.lali);
}
// exibir();
//===================ARRAYS==================//
// conjunto de dados acessado por meio de um indice
// esse indice começa pelo 0
// pode ser acessado pelo seu indice
// por meio do xxx[posicao]
// possui alguns metodos para ser modificado ou acessado
// acessado por meio de um for loop
let copa = [1,2,3];
// pode ter outros tipos de dados
let cope = [[],[],[]]; // aqui resulta uma matrix 3x3
let copi = [{},{},{}]; // tambem matriz mas com objetos
let posicao = "aeiou";
// quando usado em strings, pode acessar posicao do caracter
function exibirArray()
{
    console.log(posicao[1]);
    console.log(copa[0]);
    console.log(cope[1]);
    console.log(copi[2]);
}
// exibirArray();