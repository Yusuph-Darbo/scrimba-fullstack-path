import { menuArray } from "./data.js"

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

function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render()