const snowGlobe = document.querySelector('.snow-globe')

function createSnowflake() {
    // Create a new snowflake element
    const snowflake = document.createElement('div')
    snowflake.classList.add('snowflake')
    snowflake.textContent = '❄️'

    // Randomize the snowflake properties
    const size = Math.random() * 1.5 + 0.5 + 'em'
    const left = Math.random() * 100 + '%'
    const duration = Math.random() * 5 + 5 + 's'

    // Apply the random properties
    snowflake.style.fontSize = size
    snowflake.style.left = left
    snowflake.style.animationDuration = duration

    // Append the snowflake to the snow globe
    snowGlobe.appendChild(snowflake)

    // Remove the snowflake after it falls
    setTimeout(() => {
        snowflake.remove()
    }, parseFloat(duration) * 1000)
}

setInterval(createSnowflake, 100) // Let's create a snowflake every 100 milliseconds!

/* Stretch goals: 
- Give some variety to your snowflakes, so they are not all the same. Perhaps every 25th one could be a snowman ☃️?
- Remove each snowflake after a set time - this will stop the scene from being lost in a blizzard!
- Add a button that makes the snow start falling, it could trigger a CSS-animated shake of the snow globe. Then make the snow become less frequent until it slowly stops - until the button is pressed again.  
- Change the direction of the snowflakes so they don’t all fall vertically.
- Make the style your own! 
*/