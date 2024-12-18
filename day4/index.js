import { films } from './data.js'

// Some useful elements
const guessInput = document.getElementById('guess-input')
const messageContainer = document.getElementsByClassName('message-container')[0]
const emojiCluesContainer = document.getElementsByClassName('emoji-clues-container')[0]
const guessForm = document.getElementById('guess-form')
const guessButton = document.querySelector('button[type="submit"]')

let currentFilm = null
let guessesRemaining = 3
let usedFilms = []

function getRandomFilm() {
    if (usedFilms.length === films.length) {
        messageContainer.textContent = "That's all folks!"
        guessButton.disabled = true
        return null
    }
    let film
    do {
        film = films[Math.floor(Math.random() * films.length)]
    } while (usedFilms.includes(film))
    usedFilms.push(film)
    return film
}

function displayFilm(film) {
    emojiCluesContainer.innerHTML = ''
    film.emoji.forEach(emoji => {
        const span = document.createElement('span')
        span.textContent = emoji
        emojiCluesContainer.appendChild(span)
    })
}

function handleGuess(event) {
    event.preventDefault()
    const guess = guessInput.value.trim().toLowerCase()
    if (guess === currentFilm.title.toLowerCase()) {
        messageContainer.textContent = "Correct! You win!"
        setTimeout(() => {
            nextFilm()
        }, 3000)
    } else {
        guessesRemaining--
        if (guessesRemaining > 0) {
            messageContainer.textContent = `Incorrect! You have ${guessesRemaining} more guesses remaining.`
        } else {
            messageContainer.textContent = `The film was ${currentFilm.title}!`
            setTimeout(() => {
                nextFilm()
            }, 3000)
        }
    }
}

function nextFilm() {
    guessesRemaining = 3
    guessInput.value = ''
    currentFilm = getRandomFilm()
    if (currentFilm) {
        displayFilm(currentFilm)
        messageContainer.textContent = "You have 3 guesses remaining."
    }
}

guessForm.addEventListener('submit', handleGuess)

// Start the game
nextFilm()