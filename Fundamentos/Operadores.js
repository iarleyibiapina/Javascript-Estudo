//===================ARITMETICOS==================//
// operadores matematicos

let salario = 10;
function exibeA()
{
    console.log(salario + salario);// +  soma
    console.log(salario - salario);// -  subtracao
    console.log(salario * salario);// *  multiplicacao
    console.log(salario / salario);// /  divisao
    console.log(salario ** salario); // ** exponenciacao
    console.log(++salario); // incrementa em um - aumenta antes linha incremento
    console.log(salario++); // incrementa em um - aumenta apos linha incremento
    console.log(--salario); // decrementa em um - aumenta antes linha incremento
    console.log(salario--); // decrementa em um - aumenta apos linha incremento
    console.log(salario += 10); //  equivalente ao valor = valor + x;
    console.log(salario -= 10); //  equivalente ao valor = valor + x;
    console.log(salario /= 10); //  equivalente ao valor = valor + x;
    console.log(salario *= 10); //  equivalente ao valor = valor + x;
    console.log(salario **= 10); //  equivalente ao valor = valor + x;
}
// exibeA();
//=============================================================================//
//
//===================ATRIBUIÇÃO E IGUALDADE==================//
// Quando usado apenas =
// é atribuição
// Quando usado ==
// é comparação
// Quando usado ===
// é comparado tipo e valor das variaveis
salario = 20; // agora o valor é 20
salario == 20 ? true : false; // true
salario === "20" ? true : false; // false
//=============================================================================//
//
//===================TERNARIO==================//
// forma simples e encurtada de fazer um if, melhor para casos de condição simples
// ou seja quando nao ha um 'and' e 'or' na condição

// CONDIÇÃO ? 'TRUE' : 'FALSE';
let compara = salario == 20  ? "Sim é do tipo number" : "Não é do tipo number";
// console.log(compara);
//=============================================================================//
//
//===================LÓGICOS==================//
//  AND OR NOT
let ff = false;
let tt = true;
let outro = ff && ff;
//  && and
let execAnd = (paramUm, paramDois) => {
    if ( paramUm && paramDois ) {
        return "Os dois são true"
    }
    return "Um ou Dois é false"
}

// || OR
outro = ff || tt;

let execOr = (paramUm, paramDois) => {
    if ( paramUm || paramDois ) {
        return "Um ou Dois são true"
    }
    return "Os dois são false"
}

// ! NOT
// inverte valor da variavel ou condição
// (!true) = false

function execAll(){
    console.log(execAnd(ff, tt));
    console.log(execAnd(tt, tt));
    console.log(execOr(ff, tt));
    console.log(execOr(ff, ff));
    console.log(`Valor original é false ${!ff}`);
    console.log(`Valor original é true ${!tt}`);
}
// execAll();
