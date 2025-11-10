import { menuArray } from "./data.js"

let orderArray = []

document.addEventListener('click', function(event){
    // Use closest to handle clicks on button or its children
    const addButton = event.target.closest('.add-btn')
    if(addButton){
        const itemId = parseInt(addButton.dataset.id)
        handleAddItemClick(itemId)
    }

    // Handle remove button clicks
    const removeButton = event.target.closest('.remove-btn')
    if(removeButton){
        const itemId = parseInt(removeButton.dataset.id)
        handleRemoveItemClick(itemId)
    }

    // Handle complete order click
    const completeOrderButton = event.target.closest('.complete-order-btn')
    if(completeOrderButton){
        renderPay()
    }

    // Handle pay button clicks
    const payButton = event.target.closest('.pay-btn')
    if(payButton){
        handlePayItemClick()
    }
})

function handleAddItemClick(itemId){
    const targetMenuItem = menuArray.find(item => item.id === itemId)
    
    if(targetMenuItem){
        orderArray.push(targetMenuItem)
        renderOrder()
    }
}

function handleRemoveItemClick(itemId){
    // Find the index of the item to remove
    const itemIndex = orderArray.findIndex(item => item.id === itemId)
    if(itemIndex > -1){
        orderArray.splice(itemIndex, 1)
        renderOrder()
    }
}

function handlePayItemClick(){

}

function getFeedHtml(){
    let menuHtml = ''
    
    menuArray.forEach(item => {
        menuHtml += `
            <div class="menu-item">
                <div class="menu-item-emoji">${item.emoji}</div>
                <div class="menu-item-details">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <p class="menu-item-ingredients">${Array.isArray(item.ingredients) ? item.ingredients.join(', ') : item.ingredients}</p>
                    <p class="menu-item-price">$${item.price}</p>
                </div>
                <button class="add-btn" data-id="${item.id}">+</button>
            </div>
        `
    })
    
    return menuHtml
}

function getOrderHtml(){
    if(orderArray.length === 0){
        return ''
    }
    
    let orderHtml = `
        <div class="order-header">
            <h2>Your order</h2>
        </div>
        <div class="order-items">
    `
    
    orderArray.forEach((item, index) => {
        orderHtml += `
            <div class="order-item">
                <div class="order-item-info">
                    <span class="order-item-name">${item.name}</span>
                    <button class="remove-btn" data-id="${item.id}">remove</button>
                </div>
                <span class="order-item-price">$${item.price}</span>
            </div>
        `
    })
    
    // Calculate total
    const total = orderArray.reduce((sum, item) => sum + item.price, 0)
    
    orderHtml += `
        </div>
        <div class="order-total">
            <span class="total-label">Total price:</span>
            <span class="total-price">$${total}</span>
        </div>
        <button class="complete-order-btn">Complete order</button>
    `
    
    return orderHtml
}

function renderOrder(){
    const orderSection = document.getElementById('order-section')
    if(orderSection){
        orderSection.innerHTML = getOrderHtml()
    }
}

function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
    renderOrder()
}

render()