import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Info(){
    return (
        <>
            <img src="./assets/spiderman.jpeg"/>
            <h1>Laura Smith</h1>
            <h3>Passionate Developer</h3>
            <div class="buttons">
                <button>
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email
                </button>
                <button>
                    <FontAwesomeIcon icon={faLinkedin} />
                    Email
                </button>
            </div>
        </>
    )
}