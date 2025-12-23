import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import spiderman from '../assets/spiderman.jpeg'

export default function Info(){
    return (
        <>
            <img src={spiderman} className="logo" alt="Black suit spiderman"/>
            <h1>Yusuph Darbo</h1>
            <h3>Passionate Developer</h3>
            <div className="buttons">
                <button className='white-btn'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email
                </button>
                <button className='blue-btn'>
                    <FontAwesomeIcon icon={faLinkedin} />
                    Email
                </button>
            </div>
        </>
    )
}