

const hackedEmojis = {
    "angry":            "🎁",   // 😠
    "thumbsdown":       "👏",   // 👎  
    "man_facepalming":  "🎅",   // 🤦‍♂️
    "cry":              "‍😄",   // 😭
    "puke":             "🤩"    // 🤮
}

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, check if it exists in the hackedEmojis object, 
and replace it with the corresponding emoji. If not, return the original word.
*/
function emojifyWord(word) {
    if (word.startsWith(':') && word.endsWith(':')) {
        const emojiKey = word.slice(1, -1); // Remove colons
        return hackedEmojis[emojiKey] || word;
    }
    return word;
}

/* 2. Write a function to find any emoji shortcodes in a phrase.
Use your emojify function from the previous exercise!
*/
function emojifyPhrase(phrase) {
    return phrase.split(' ')
        .map(word => emojifyWord(word))
        .join(' ');
}

console.log(emojifyWord(":angry:")); // Should output: 🎁
console.log(emojifyPhrase("Those shoes :puke:")); // Should output: Those shoes 🤩


