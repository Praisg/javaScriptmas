
// Get references to DOM elements
const itemInput = document.getElementById('item-input')
const addItemButton = document.getElementById('add-item-button')
const shoppingList = document.getElementById('shopping-list')
const listArr = []

// Function to check item is not duplicate
function checkDuplicate() {
    
    const itemText = itemInput.value.trim().replace(/\s+/g, ' ').toLowerCase();
    
    var isDuplicate = false;
    for (var i = 0; i < listArr.length; i++) {
        if (listArr[i].toLowerCase() === itemText) {
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate) {
        listArr.push(itemInput.value.trim().replace(/\s+/g, ' '));
        renderList();
    } else {
        alert('Granpa You have already added this item on the list!');
    }
}

// Function to add an item to the shopping list
function renderList() {
    shoppingList.innerHTML = ''
    listArr.forEach((gift) => {
        const listItem = document.createElement('li')
        listItem.textContent = gift
        shoppingList.appendChild(listItem)
    })
    itemInput.value = ''; // Clear the input field
}

// Add event listener to button
addItemButton.addEventListener('click', checkDuplicate)

// Allow adding items by pressing Enter key
itemInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        checkDuplicate()
    }
})
