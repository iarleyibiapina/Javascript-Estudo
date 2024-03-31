const squares  = document.querySelectorAll('.square');
const mole     = document.querySelector('.mole');
const timeLeft = document.querySelector('#id-left span');
const score    = document.querySelector('#score');
//
let result = 0;
let hitPosition;
let currrentTime = 60;
let timerId = null;
//
function randomSquare()
{
    squares.forEach(square => {
        square.classList.remove('mole');
    });
    //
    let randomPosition = squares[Math.floor(Math.random() * 9)]; 
    //
    randomPosition.classList.add('mole');
    //
    hitPosition = randomSquare.id
}
// 
function moveMole()
{
    timerId = setInterval(randomSquare, 500);
}
// 
let countDownTimeId = setInterval(countDown, 1000);
function countDown()
{
    currrentTime--;
    timeLeft.textContent = currrentTime;
    if (currrentTime == 0){
        clearInterval(countDownTimeId);
        clearInterval(timerId);
        alert(`L - O - S - E - R = final score ${result}`)
        window.location.reload();
    }
}
// 
squares.forEach(square => {
    square.addEventListener('mousedown', ()=>{
        if(square.classList.contains('mole')){
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    });
});
// inicia o game
moveMole()
