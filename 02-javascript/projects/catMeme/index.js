import { catsData } from '/data.js'

const emotionRadios = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifsOnlyOption = document.getElementById('gifs-only-option')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')
const memeModalCloseBtn = document.getElementById('meme-modal-close-btn')

emotionRadios.addEventListener('change', highlightCheckedOption)

memeModalCloseBtn.addEventListener('click', closeModal)

getImageBtn.addEventListener('click', renderCat)

function highlightCheckedOption(event)
{
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios)
        {
            radio.classList.remove('highlight')
        }
        document.getElementById(event.target.id).parentElement.classList.add('highlight')
}

function closeModal()
{
    memeModal.style.display = 'none'
}

function renderCat(){
    const catObject = getSingleObject()
    memeModalInner.innerHTML = `
        <img 
        class="cat-img" 
        src="./images/${catObject.image}"
        alt="${catObject.alt}"
        >
        `
}