const calendarContainer = document.getElementById('calendar');

for (let i = 1; i <= 24; i++) {
  let box = document.createElement('li');
  box.classList.add('calendar-box');
  let number = document.createElement('p');
  number.innerHTML = i;
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');
  let description = document.createElement('p');
  description.innerHTML = "Open me!";
  
  // Add click event listener
  box.addEventListener('click', () => {
    // Add 'opened' class to style the opened box
    box.classList.add('opened');
    // Change description text
    description.innerHTML = "Opened!";
    // Store opened state in localStorage
    localStorage.setItem(`day-${i}`, 'opened');
  });

  // Check if this day was previously opened
  if (localStorage.getItem(`day-${i}`) === 'opened') {
    box.classList.add('opened');
    description.innerHTML = "Opened!";
  }

  box.appendChild(number);
  box.appendChild(icon);
  box.appendChild(description);
  calendarContainer.appendChild(box);
}
