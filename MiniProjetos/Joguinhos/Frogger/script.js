// Pegando elementos HTML
const timeLeftDisplay  = document.querySelector("#time-left");
const resultDisplay    = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares          = document.querySelectorAll(".grid div");
const logsLeft         = document.querySelectorAll(".log-left");
const logsRight        = document.querySelectorAll(".log-right");
const carsLeft         = document.querySelectorAll(".car-left");
const carsRight        = document.querySelectorAll(".car-right");
// const
const width = 9;
// let
let timerId;
let outcomeTimeId;
let currentTime = 20;
let currentIndex = 76;
// 
moveFrog = (e) => {
    squares[currentIndex].classList.remove("frog");
    // 
    switch(e.key) 
    {
        case "ArrowLeft":
            if(currentIndex % width !== 0) currentIndex -= 1;
            break;    
        case "ArrowRight":
            if (currentIndex % width < width - 1) currentIndex += 1
            break;
        case "ArrowUp":
            if(currentIndex - width >= 0) currentIndex -= width;
            break;
        case "ArrowDown":
            if(currentIndex + width < width * width) currentIndex += width;
            break;
    }
    squares[currentIndex].classList.add("frog");
}
// 
autoMoveElements = () => {
    currentTime--;
    timeLeftDisplay.textContent = currentTime;
    // 
    logsLeft.forEach(logLeft   => moveLogLeft(logLeft))
    logsRight.forEach(logRight => moveLogRight(logRight))
    carsLeft.forEach(carLeft   => moveCarLeft(carLeft))
    carsRight.forEach(carRight => moveCarRight(carRight))
    // 
}
// 
checkOutComes = () => {
    lose();
    win();
}
// 
moveLogLeft = (logLeft) => {
    switch(true) {
        case logLeft.classList.contains('l1') :
            logLeft.classList.remove('l1')
            logLeft.classList.add('l2')
            break
        case logLeft.classList.contains('l2') :
            logLeft.classList.remove('l2')
            logLeft.classList.add('l3')
            break
        case logLeft.classList.contains('l3') :
            logLeft.classList.remove('l3')
            logLeft.classList.add('l4')
            break
        case logLeft.classList.contains('l4') :
            logLeft.classList.remove('l4')
            logLeft.classList.add('l5')
            break
        case logLeft.classList.contains('l5') :
            logLeft.classList.remove('l5')
            logLeft.classList.add('l1')
            break
    }
}
// 
moveLogRight = (logRight) => {
    switch(true) {
        case logRight.classList.contains('l1') :
            logRight.classList.remove('l1')
            logRight.classList.add('l5')
            break
        case logRight.classList.contains('l2') :
            logRight.classList.remove('l2')
            logRight.classList.add('l1')
            break
        case logRight.classList.contains('l3') :
            logRight.classList.remove('l3')
            logRight.classList.add('l2')
            break
        case logRight.classList.contains('l4') :
            logRight.classList.remove('l4')
            logRight.classList.add('l3')
            break
        case logRight.classList.contains('l5') :
            logRight.classList.remove('l5')
            logRight.classList.add('l4')
            break
    }
}
// 
moveCarLeft = (carLeft) => {
    switch(true) {
        case carLeft.classList.contains('c1') :
            carLeft.classList.remove('c1')
            carLeft.classList.add('c2')
            break
        case carLeft.classList.contains('c2') :
            carLeft.classList.remove('c2')
            carLeft.classList.add('c3')
            break
        case carLeft.classList.contains('c3') :
            carLeft.classList.remove('c3')
            carLeft.classList.add('c1')
            break
    }
}
// 
moveCarRight = (carRight) => {
    switch(true) {
        case carRight.classList.contains('c1') :
            carRight.classList.remove('c1')
            carRight.classList.add('c3')
            break
        case carRight.classList.contains('c2') :
            carRight.classList.remove('c2')
            carRight.classList.add('c1')
            break
        case carRight.classList.contains('c3') :
            carRight.classList.remove('c3')
            carRight.classList.add('c2')
            break
    }
}
// 
lose = () => {
    if(
        squares[currentIndex].classList.contains('c1') ||
        squares[currentIndex].classList.contains('l4') || 
        squares[currentIndex].classList.contains('l5') || 
        currentTime <= 0
    ) {
        resultDisplay.textContent = "Lose";
        clearInterval(timerId);
        clearInterval(outcomeTimeId);
        squares[currentIndex].classList.remove('frog');
        document.removeEventListener("keyup", moveFrog);
    }
}
// 
win = () => {
    if(squares[currentIndex].classList.contains('ending-block')){
        resultDisplay.textContent = "Win";
        clearInterval(timerId);
        clearInterval(outcomeTimeId);
        document.removeEventListener("keyup", moveFrog);
    }
}
// init game
startPauseButton.addEventListener("click", () => {
    if(timerId) 
    {
        clearInterval(timerId);
        clearInterval(outcomeTimeId);
        outcomeTimeId = null;
        timerId = null;
        document.removeEventListener("keyup", moveFrog);
    } else {
        timerId = setInterval(autoMoveElements, 1000);
        outcomeTimeId = setInterval(checkOutComes, 50);
        document.addEventListener("keyup", moveFrog);
    }
});