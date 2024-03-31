const cardArray = [
    {
        name: "fries",
        img: "assets/fries.png",
    },
    {
        name: "cheeseburger",
        img: "assets/cheeseburger.png",
    },
    {
        name: "hotdog",
        img: "assets/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "assets/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "assets/milkshake.png",
    },
    {
        name: "pizza",
        img: "assets/pizza.png",
    },
    {
        name: "fries",
        img: "assets/fries.png",
    },
    {
        name: "cheeseburger",
        img: "assets/cheeseburger.png",
    },
    {
        name: "hotdog",
        img: "assets/hotdog.png",
    },
    {
        name: "ice-cream",
        img: "assets/ice-cream.png",
    },
    {
        name: "milkshake",
        img: "assets/milkshake.png",
    },
    {
        name: "pizza",
        img: "assets/pizza.png",
    }
];

// metodo para 'ordernar' um array. mas vai ser ordenado em posições aleatórias
cardArray.sort(() => .5 - Math.random());

const gridHtml = document.querySelector("#grid");
const resultHtml = document.querySelector("#result");
let cardChoosen = [];
let cardChoosenIds = [];
const cardsWon = [];

function createBoard()
{
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement("img");
        card.setAttribute("src", 'assets/blank.png');
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        gridHtml.appendChild(card);
    }
}

createBoard();

function checkMatch()
{
    const cards = document.querySelectorAll("#grid img");
    const idOne = cardChoosenIds[0];
    const idTwo = cardChoosenIds[1];
    if(idOne == idTwo) alert ("Mesma carta");
    
    if(cardChoosen[0] == cardChoosen[1]){
        cards[idOne].setAttribute("src", "assets/white.png");
        cards[idOne].removeEventListener("click", flipCard);
        cards[idTwo].setAttribute("src", "assets/white.png");
        cards[idTwo].removeEventListener("click", flipCard);
        cardsWon.push(cardChoosen);
    } else {
        cards[idOne].setAttribute("src", "assets/blank.png");        
        cards[idTwo].setAttribute("src", "assets/blank.png");        
        alert("another");
    }
    resultHtml.innerHTML = cardsWon.length;
    cardChoosen    = [];
    cardChoosenIds = [];

    if(cardsWon.length == (cardArray.length / 2)){
        resultHtml.innerHTML = "U win";
    }
}

function flipCard()
{
    // nesse contexto, o 'this' refere a carta
    let cardId = this.getAttribute("data-id");

    // agora, pegando os atributos do elemento clicado por meio do id
    cardChoosen.push(cardArray[cardId].name);
    cardChoosenIds.push(cardId);

    // trocando para a imagem do elemento clicado
    this.setAttribute("src", cardArray[cardId].img);

    if(cardChoosen.length === 2){
        setTimeout(checkMatch, 500);
    }
}


