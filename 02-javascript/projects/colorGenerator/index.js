const colourDisplay = document.querySelector('.colourDisplay')
const colourPicker = document.getElementById('colour')

colourPicker.addEventListener('input', async function(event) {
    const hex = event.target.value.replace("#", "");
})