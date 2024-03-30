//=============================================================================//
//===================X==================//

//===================LOOPS==================//
/*
For
While
Do...while
For...in
For...of
*/
//===================FOR==================//
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// aqui eu defino o começo, o limite, e como será incrementado

function exibe(){
    for(let indice = 0; indice < arr.length; indice++){
        console.log(`Valor: ${arr[indice]} e indice atual: ${indice}`);
    }
    // condiçoes epeciais
    //  continue - 'pula' o estado para o próximo incremento
    //  break - para o loop
    for(let indice = 0; indice < arr.length; indice++){
        // outra condição de if em uma linha
        // verifica se o valor do INDICE é par (tambem pode ser feito com o valor do array)
    // se for par, continua para o próximo incremento
    if (arr[indice] % 2 == 0) continue;
    if (arr[indice] >= 11) break;
    // a ordem do console.log e dos ifs importam
    console.log(`Valor: ${arr[indice]} e indice atual: ${indice}`);
    }
}
// exibe();

//=============================================================================//
//
//===================WHILE==================//

// Aqui a condição é satisfeita dentro do loop;
// Eu não sei quantas iterações serão necessárias para satisfazer a condição
// Defino  um 'limite' apenas
// VERIFICA depois EXECUTA

function execWhile(){
let tt = true;
let ciclo = 0;
let temp = 0;

function tentativa(){
    ciclo++;
    for(let indice = 0; indice < arr.length; indice++){
        temp += arr[indice];
    }
    return temp;
}

while(tt){
    tentativa() > 150 ? tt = false : tentativa();
}
//
console.log(`O valor atingindo foi: ${temp}`);
console.log(`O numero de ciclos foram: ${ciclo}`);
console.log(`A chave para o while agora é: ${tt}`);
}
// execWhile();
//=============================================================================//
//
//===================Do While==================//

// desta fez o procedimento é:
// EXECUTA depois VERIFICA
function execDoWhile(){
    let tt = true;
    let ciclo = 0;
    let temp = 0;
    
    function tentativa(){
        ciclo++;
        for(let indice = 0; indice < arr.length; indice++){
            temp += arr[indice];
        }
        return temp;
    }
    
    do {
        tentativa() > 150 ? tt = false : tentativa();
    } while(tt);
    //
    console.log(`O valor atingindo foi: ${temp}`);
    console.log(`O numero de ciclos foram: ${ciclo}`);
    console.log(`A chave para o while agora é: ${tt}`);
}
// execDoWhile();
//=============================================================================//
//
//===================FOR IN==================//
// faz iteração em um objeto ou array, por meio das chaves
const pessoa = {
    nome: "creudo",
    idade: 20,
    cidade: "for",
}
function execForIn(){
    for (let chave in pessoa) {
        console.log(`Chave: ${chave} e valor é ${pessoa[chave]}`);	
    }
}
// execForIn();
//=============================================================================//
//
//===================FOR OF==================//
//  faz iteração em um array ou objeto por meio do seu valor
const anotherArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

function execForOf(){
    for (let chave of anotherArr) {
        console.log(`Valor é : ${chave}`);	
    }
}
execForOf();