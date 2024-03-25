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
console.log(compara);
//=============================================================================//
//


