// Controls the 6 columns
const colourDisplay = document.querySelector('.colourDisplay')
// Controls the colour input by user
const colourPicker = document.getElementById('colour')
// Controls the options e.g. monochrome
const colourType = document.getElementById('colours')
const colourText = document.getElementById('colourText')
const btn = document.getElementById('btn')

btn.addEventListener('click', async function() {
    const hex = colourPicker.value.replace('#', '')
    // Get selected colour mode
    const mode = colourType.value

    const res = await fetch(
        `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${mode}&count=6`
    )

    const data = await res.json()

    console.log(data)

    // Update the display
    updateColours(data.colors)
})

window.addEventListener('DOMContentLoaded', () => {
    loadDefaultColours()
})

async function loadDefaultColours() {
    const defaultHex = "000000"
    const defaultMode = "monochrome"

    const res = await fetch(
        `https://www.thecolorapi.com/scheme?hex=${defaultHex}&mode=${defaultMode}&count=6`
    )
    
    const data = await res.json()

    updateColours(data.colors)
}

function updateColours(colours) {
    colourDisplay.innerHTML = "" // clear old colours
    colourText.innerHTML = ""

    colours.forEach(c => {
        const div = document.createElement('div')
        const p = document.createElement('p')
        div.style.backgroundColor = c.hex.value
        div.classList.add('colourBox')
        colourDisplay.appendChild(div)    
        p.textContent = c.hex.value
        colourText.appendChild(p)
    })
}
