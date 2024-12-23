// The keyboard has been rendered for you
import { renderKeyboard } from '/keyboard'
document.getElementById('keyboard-container').addEventListener('click', checkGuess)

// Some useful elements
const guessContainer = document.getElementById('guess-container')
const snowmanParts = document.getElementsByClassName('snowman-part')

// Set the word to guess
const word = "gift"
// 6 guesses for the 6 parts of the snowman
let guesses = 6
let currentGuess = Array(word.length).fill('_')
let usedLetters = new Set()

function checkGuess(e) {
    if (!e.target.matches('button') || e.target.disabled) return
    
    const letter = e.target.textContent.toLowerCase()
    e.target.disabled = true // Disable used letter (stretch goal)
    usedLetters.add(letter)
    
    let isCorrectGuess = false
    
    // Check if letter is in word
    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            currentGuess[i] = letter
            isCorrectGuess = true
        }
    }
    
    // Update display
    guessContainer.textContent = currentGuess.join(' ')
    
    // If wrong guess, remove snowman part
    if (!isCorrectGuess) {
        guesses--
        if (snowmanParts[guesses]) {
            snowmanParts[guesses].style.display = 'none'
        }
    }
    
    // Check win condition
    if (currentGuess.join('') === word) {
        // Restore snowman and add sunglasses
        Array.from(snowmanParts).forEach(part => part.style.display = 'block')
        document.getElementById('sunglasses').style.display = 'block'
        guessContainer.textContent = 'You Win!'
        addNewGameButton()
    }
    
    // Check lose condition
    if (guesses === 0) {
        guessContainer.textContent = 'You Lose!'
        addNewGameButton()
    }
}

function addNewGameButton() {
    const newGameBtn = document.createElement('button')
    newGameBtn.textContent = 'New Game'
    newGameBtn.onclick = resetGame
    guessContainer.appendChild(newGameBtn)
}

function resetGame() {
    guesses = 6
    currentGuess = Array(word.length).fill('_')
    usedLetters.clear()
    Array.from(snowmanParts).forEach(part => part.style.display = 'block')
    document.getElementById('sunglasses').style.display = 'none'
    guessContainer.textContent = currentGuess.join(' ')
    document.querySelectorAll('#keyboard-container button').forEach(btn => btn.disabled = false)
}

renderKeyboard()
