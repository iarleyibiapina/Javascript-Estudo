// Lógica

// faria comparaçao de valor de um array
// array[pc, user]

// 0 rock
// 1 scissor
// 2 paper

// ordem do jogador
// [pc, user]

// casos vitorias usuario
// [0, 2] U
// [2, 1] U
// [1, 0] U

// casos vitorias computador
// [1, 2] C
// [0, 1] C
// [2, 0] C

// Pegando os elementos
const computerChoiceDisplay = document.querySelector('#computer-choice');
const userChoiceDisplay     = document.querySelector('#user-choice');
const resultDisplay         = document.querySelector('#result');
// pegando pela tag, pois haverá apenas os 3 buttons de escolhas
const possibleChoices       = document.querySelectorAll('button');

// 0 - Escolha do computador
// 1 - Escolha do usuario
let escolhaJogadores = [0,0];

// para cada botão, quero um evento de clique, e pego alguns valores
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (event) => {
    // pegando o id do 'target' que no caso é o próprio elemento
    escolhaJogadores[1] = Math.floor(event.target.id);

    // converte id em mensagem 
    userChoiceDisplay.innerHTML = converteIdEmMenssagem(event.target.id);

    geraEscolhaPc();

    // console.log(`Pc - Usuario: ${escolhaJogadores}`);
    resultDisplay.innerHTML = exibeResultado();

}))

function geraEscolhaPc(){
    const randomNumber = Math.floor(Math.random() * 3);
    escolhaJogadores[0] = randomNumber;
    computerChoiceDisplay.innerHTML = converteIdEmMenssagem(randomNumber);
}

function exibeResultado(){
    if(escolhaJogadores[0] === escolhaJogadores[1]) return "Draw";

    if(comparaArray(escolhaJogadores, [0,2]) ||
       comparaArray(escolhaJogadores, [2,1]) ||
       comparaArray(escolhaJogadores, [1,0])) {
        return "User Win";
    } else if(comparaArray(escolhaJogadores, [1,2]) ||
              comparaArray(escolhaJogadores, [0,1]) ||
              comparaArray(escolhaJogadores, [2,0])){
        return "Computer Win";
    }
}

// converte os ids, em strings
function converteIdEmMenssagem(number){
    // tentei com switch, mas não consegui
    if(number == 0){
        return "Rock";
    }
    if(number == 1){
        return "Scissor";
    }
    if(number == 2){
        return "Paper";
    }
}

// Uma forma  de comparar valores de Arrays (no caso comparando string com string)
function comparaArray(arrayOne, arrayTwo) {
    return JSON.stringify(arrayOne) === JSON.stringify(arrayTwo);
}

