// Retorna os numeros primos

// O numero primo é divisil apenas por 1 ou ele mesmo.
// então será iniciado em 2, pois preciso apenas verificar se ele é divisivel
// apenas por ele mesmo.
// como verificar isso? um loop vai ocorrer do 2 até meu `valor` se ocorrer uma
// divisão no caminho, então ele não é primo.

function exibeNumerosPrimos(valor)
{
    for (let numero = 2; numero <= valor; numero++){
        if (ehPrimo(numero)) console.log(numero);
    }
}

function ehPrimo(numero){
    for(let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor == 0){
            // caso divisivel por outro numero qualquer
            return false;
        }
    }
    // aqui é retornado quando apenas divisivel pelo proprio numero
    return true;
}

exibeNumerosPrimos(11);