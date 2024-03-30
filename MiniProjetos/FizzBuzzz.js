// divisivel por 3          => fizz
// divisivel por 5          => buzz
// divisivel por 3 e 5      => FizzBuzz
// não divisivel por 3 ou 5 => retorna o valor de entrada
// nao é numero             => retorna mensagem de erro

// let valor = 3;
// let valor = 5;
let valor = 15;
// let valor = 16;
// let valor = "string";

function fizzBuzz(valor){
    // pior para melhor caso
    if(typeof valor != "number") return "Valor não é um numero";
    //
    if(valor % 3 != 0 && valor % 5 != 0) return `Valor não é FizzBuzz ${valor}`;
    //
    if (valor % 3 == 0 && valor  % 5 == 0) {
        return "FizzBuzz";
    } 
    //
    if(valor % 3 == 0){
        return "Fizz";
    }
    //
    if (valor % 5 == 0) {
        return "Buzz";
    }
}
console.log(fizzBuzz(valor));