let totalItems = 0;
let totalPrice = 0.00;

function addItem() {
    const itemName = document.getElementById('itemName').value;
    const itemPrice = parseFloat(document.getElementById('itemPrice').value);

    if (itemName && !isNaN(itemPrice) && itemPrice > 0) {
        const shoppingList = document.getElementById('shoppingList');
        const listItem = document.createElement('li');
        listItem.textContent = `${itemName}: $${itemPrice.toFixed(2)}`;
        shoppingList.appendChild(listItem);

        totalItems++;
        totalPrice += itemPrice;

        updateTotals();
    } else {
        alert('please enter valid item name and item price.');
    }
}

function updateTotals() {
    document.getElementById('totalItems').textContent = totalItems;
    document.getElementById('totalPrice').textContent = totalPrice.toFixed(2);
}
