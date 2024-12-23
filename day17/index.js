const form = document.getElementsByClassName('signup-form')[0];

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const message = document.getElementsByClassName('message')[0];
    message.style.display = 'inline';
    message.setAttribute('aria-live', 'polite');
});