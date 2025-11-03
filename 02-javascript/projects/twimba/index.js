import { tweetsData } from './data.js';
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render ()