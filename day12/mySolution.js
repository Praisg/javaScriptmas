document.addEventListener('DOMContentLoaded', () => {
    // Task 1: Render a button that logs 'You have been hacked 🏴‍☠️' to the console
    const hackButton = document.createElement('button');
    hackButton.textContent = 'Hack';
    hackButton.addEventListener('click', () => {
        console.log('You have been hacked 🏴‍☠️');
    });
    document.body.appendChild(hackButton);

    // Task 2: Change the product title h2 to "Do not buy this"
    const productTitle = document.querySelector('.prod-title');
    if (productTitle) {
        productTitle.textContent = 'Do not buy this';
    }
});