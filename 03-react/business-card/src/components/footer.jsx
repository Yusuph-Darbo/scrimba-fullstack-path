import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSquareTwitter,
  faSquareFacebook,
  faSquareInstagram,
  faSquareGithub
} from '@fortawesome/free-brands-svg-icons'

export default function Footer (){
    return (
        <footer>
            <ul>
                <li>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                        <FontAwesomeIcon icon={faSquareTwitter} />
                    </a>
                </li>
                <li>
                    <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                        <FontAwesomeIcon icon={faSquareFacebook} />
                    </a>
                </li>
                <li>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <FontAwesomeIcon icon={faSquareInstagram} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <FontAwesomeIcon icon={faSquareGithub} />
                    </a>
                </li>
            </ul>
        </footer>
    )
}