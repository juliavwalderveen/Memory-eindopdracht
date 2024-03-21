console.log("hello worlddd")

const cardArray = [
    {
        name: 'Denemarken',
        img:'Denemarken foto 1.jpg',
    },
    {
        name: 'Hongarije',
        img:'Hongarije foto 2.jpg',
    },
    {
        name: 'Ierland',
        img:'Ierland foto 3.jpg',
    },
    {
        name: 'Italie1',
        img:'Italie foto 4.jpg',
    },
    {
        name: 'Italie2',
        img:'Italie foto 5.jpg',
    },
    {
        name: 'Marokko1',
        img:'Marokko foto 6.jpg',
    },
    {
        name: 'Marokko2',
        img:'Marokko foto 7.jpg',
    },
    {
        name: 'Oostenrijk',
        img:'Oostenrijk foto 8.jpg',
    },
    {
        name: 'Polen',
        img:'Polen foto 9.jpg',
    },
    {
        name: 'Slovenie1',
        img:'Slovenie foto 10.jpg',
    },
    {
        name: 'Slovenie2',
        img:'Slovenie foto 11.jpg',
    },
    {
        name: 'Spanje',
        img:'Spanje foto 12.jpeg',
    },
    {
        name: 'Tsjechie',
        img:'Tsjechie foto 13.jpg',
    },
    {
        name: 'Zweden1',
        img:'Zweden foto 14.jpg',
    },
    {
        name: 'Zweden2',
        img:'Zweden foto 15.jpg',
    },
    {
        name: 'Zweden3',
        img:'Zweden foto 16.jpg',
    },
    {
        name: 'Denemarken',
        img:'Denemarken foto 1.jpg',
    },
    {
        name: 'Hongarije',
        img:'Hongarije foto 2.jpg',
    },
    {
        name: 'Ierland',
        img:'Ierland foto 3.jpg',
    },
    {
        name: 'Italie1',
        img:'Italie foto 4.jpg',
    },
    {
        name: 'Italie2',
        img:'Italie foto 5.jpg',
    },
    {
        name: 'Marokko1',
        img:'Marokko foto 6.jpg',
    },
    {
        name: 'Marokko2',
        img:'Marokko foto 7.jpg',
    },
    {
        name: 'Oostenrijk',
        img:'Oostenrijk foto 8.jpg',
    },
    {
        name: 'Polen',
        img:'Polen foto 9.jpg',
    },
    {
        name: 'Slovenie1',
        img:'Slovenie foto 10.jpg',
    },
    {
        name: 'Slovenie2',
        img:'Slovenie foto 11.jpg',
    },
    {
        name: 'Spanje',
        img:'Spanje foto 12.jpeg',
    },
    {
        name: 'Tsjechie',
        img:'Tsjechie foto 13.jpg',
    },
    {
        name: 'Zweden1',
        img:'Zweden foto 14.jpg',
    },
    {
        name: 'Zweden2',
        img:'Zweden foto 15.jpg',
    },
    {
        name: 'Zweden3',
        img:'Zweden foto 16.jpg',
    }
]

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector("#grid");
const resultaat = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];


function createBord() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'Achterkant.svg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
        card.classList.add('card');
    }
}
createBord()

function checkMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds [1];
    console.log("check for match!");
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute("src", "Achterkant.svg");
        cards[optionTwoId].setAttribute("src", "Achterkant.svg");
        alert("you clicked the same image!");
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert("it's a match!");
        console.log("hola")
        cards[optionOneId].setAttribute("src", "white.png");
        cards[optionTwoId].setAttribute("src", "white.png");
        cards[optionOneId].removeEventListener("click", flipCard);
        cards[optionTwoId].removeEventListener("click", flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute("src", "Achterkant.svg");
        cards[optionTwoId].setAttribute("src", "Achterkant.svg");
        alert("Try again");
    }

    resultaat.textContent = cardsWon.length;

    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == (cardArray.length/2)) {
        resultaat.textContent = "gefeliciteerd!";
    }

}

function flipCard() {
    const cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

let minutesLabel = document.getElementById("minuten");
let secondsLabel = document.getElementById("secondes");
let totalSeconds = 0;
setInterval(setTime, 1000);

function setTime() {
    ++totalSeconds;
    secondsLabel.innerHTML = pad(totalSeconds % 60);
    minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    if (document.querySelector("#result").textContent === "gefeliciteerd!") {
        clearInterval(timerInterval); // Stop het interval
    }
}

function pad(val) {
    let valString = val + "";
    if (valString.length < 2) {
    return "0" + valString;
    } 
    else {
    return valString;
    }
}

function endTimer() {
    if (score == "gefeliciteerd") {

    }
}