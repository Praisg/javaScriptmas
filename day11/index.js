const emojis = ['🎄', '🎁', '🎅', '☃️'];
let cards = [...emojis, ...emojis]; // Duplicate emojis to create pairs
let firstCard = null;
let secondCard = null;
let lockBoard = false;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createBoard() {
    const gameContainer = document.getElementById('game-board');
    shuffle(cards);
    cards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.emoji = emoji;
        card.dataset.index = index;
        card.addEventListener('click', revealCard);
        gameContainer.appendChild(card);
    });
}

function revealCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('revealed');
    this.textContent = this.dataset.emoji;

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.emoji === secondCard.dataset.emoji;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', revealCard);
    secondCard.removeEventListener('click', revealCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('revealed');
        secondCard.classList.remove('revealed');
        firstCard.textContent = '';
        secondCard.textContent = '';
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

document.addEventListener('DOMContentLoaded', createBoard);