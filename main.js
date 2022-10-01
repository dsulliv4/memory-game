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
const cardsChosen = []

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
    console.log('check for match!')

}

function flipCard() {
    let cardId= this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch, 500)
    }
}