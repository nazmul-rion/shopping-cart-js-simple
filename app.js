// remove item
const removeItems = document.getElementsByClassName('remove-item');
for (const item of removeItems) {
    item.addEventListener('click', function (event) {
        event.target.parentElement.parentElement.parentElement.remove();
    })
}

// increase item 
const plusIcons = document.getElementsByClassName('quantity-plus');
for (const item of plusIcons) {
    updateQuantity(item, 'increment');
}

// decrease item 
const minusIcons = document.getElementsByClassName('quantity-minus');
for (const item of minusIcons) {
    updateQuantity(item, 'decrement');
}

// updateQuantity function
function updateQuantity(item, addOrMinus) {
    item.addEventListener('click', function (event) {
        const inputQuantitys = event.target.parentElement.parentElement.getElementsByClassName('item-quantity');
        inputQuantity = inputQuantitys[0];
        let previousQuantity = parseInt(inputQuantity.value);

        if (addOrMinus == 'increment') {
            if (previousQuantity < 99)
                currentQuantity = previousQuantity + 1;
        }

        if (addOrMinus == 'decrement') {
            if (previousQuantity > 1)
                currentQuantity = previousQuantity - 1;
        }

        inputQuantity.value = currentQuantity;
        const itemPriceClass = inputQuantity.parentElement.parentElement.getElementsByClassName('item-price');
        let itemPrice = (parseFloat(itemPriceClass[0].innerText) / previousQuantity) * currentQuantity;
        itemPriceClass[0].innerText = itemPrice.toFixed(2);
        updateTotal();
    })
}

// updateTotal function
function updateTotal() {
    const subTotalClass = document.getElementById('sub-total');
    const priceList = document.getElementsByClassName('item-price');
    let total = 0;
    for (const price of priceList) {
        total = total + parseFloat(price.innerText);
    }
    subTotalClass.innerText = total.toFixed(2);
    const taxClass = document.getElementById('tax');
    let tax = total * 0.1;
    taxClass.innerText = tax.toFixed(2);
    const totalClass = document.getElementById('total');
    totalClass.innerText = (total + tax).toFixed(2);
}

// Checkout Clicked
document.getElementById('checkout-button').addEventListener('click', function () {
    const allItems = document.getElementById('cart-items');
    allItems.remove();
})