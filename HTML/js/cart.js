// https://www.youtube.com/watch?v=YeFzkC2awTM&t=12s
 
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}
 


function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-remove')
    console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
 
    var  quantityInputs = document.getElementsByClassName('cart-quantity-input')
    console.log(quantityInputs)
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
 
}
 
 
 
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
    updateCartTotal()
}
 
 
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value < 0) {
        input.value = 0
    } else if (input.value >= 10) {
        input.value = 9
    }
    updateCartTotal()
}
 
 
function updateCartTotal() {
    var cartRows = document.getElementsByClassName('cart-row')
    itemPrice = 0
    subtotal = 0
    tax = 0
    total = 0
    for (var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i]
        var priceLabelElement = cartRow.getElementsByClassName('price-label')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var itemPriceElement = cartRow.getElementsByClassName('item-price')[0]
        var itemPriceElement2 = cartRow.getElementsByClassName('item-price')[0]
        var price = parseFloat(priceLabelElement.innerText.replace('Price: RM', ''))
        var quantity = quantityElement.value
 
        itemPriceElement = (Math.round(price * quantity * 100) / 100)
        itemPrice = itemPriceElement.toFixed(2)
        subtotal = subtotal + itemPriceElement
        tax = subtotal * 0.06
        total = subtotal + tax
        if(itemPrice<=10)
        itemPriceElement2.innerText = 'RM0' + itemPrice
        else
        itemPriceElement2.innerText = `RM${itemPrice}`
    }
    
    subtotal = Math.round(subtotal * 100) / 100
    tax = Math.round(tax * 100) / 100
    total = Math.round(total * 100) / 100
 
    document.getElementById('subtotal-price').innerText = 'RM' + subtotal
    document.getElementById('tax').innerText = 'RM' + tax
    document.getElementById('total-price').innerText = 'RM' + total
}
 
 
 

