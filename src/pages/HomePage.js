import React from 'react'
import {faFacebook, faGithub, faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const HomePage = () => {
    return (
        <>
        <div className="HomePage">
            <header className="hero">
                <div className="hero-text">
                    <h1><p className="wave">🖐</p> I am <span>Pawan Kumar</span></h1>
                    <p>An Enthusiastic undrgraduate web Developer skilled in Frontend Develpment & a Python programmer.</p>
                    <div className="icons">
                        <a href="https://www.facebook.com/pawan.dhawan.790/" className="icon-holder"  target="_blank">
                            <FontAwesomeIcon icon={faFacebook} className="icon fb"/>
                        </a>

                        <a href="https://github.com/gitcoder-pawan" className="icon-holder"  target="_blank">
                            <FontAwesomeIcon icon={faGithub} className="icon fb"/>
                        </a>

                        <a href="https://www.instagram.com/_pawan_kumar_maurya_/" className="icon-holder"  target="_blank">
                            <FontAwesomeIcon icon={faInstagram} className="icon fb"/>
                        </a>
                    </div>
                </div>
            </header>
        </div>
        </>
    )
}

export default HomePage
