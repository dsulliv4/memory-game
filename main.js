const cardArray = [
    {
        name: 'fries',
        img: 'imgs/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'imgs/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'imgs/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'imgs/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'imgs/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'imgs/pizza.png'
    },
    {
        name: 'fries',
        img: 'imgs/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'imgs/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'imgs/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'imgs/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'imgs/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'imgs/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())



const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'imgs/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoid) {
        cards[optionOneId].setAttribute('src', 'imgs/blank.png')
        cards[optionTwoId].setAttribute('src', 'imgs/blank.png')
        alert('You have clicked the same image!')
    }

    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'imgs/white.png')
        cards[optionTwoId].setAttribute('src', 'imgs/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'imgs/blank.png')
        cards[optionTwoId].setAttribute('src', 'imgs/blank.png')
        alert('Sorry try again!')
    }
    
    resultDisplay.innerHTML = cardsWon.length
    cardsChosen=[]
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2){
        resultDisplay.innerHTML = 'Congratulations, you found them all!'
    }
}

function flipCard() {
    let cardId= this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}