import React from 'react'
const ImageSection = ({aboutimg}) => {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={aboutimg} alt="pawan kuamr" />
            </div>
            <div className="about_info">
                <h4>I am <span>Pawan Kumar</span></h4>
                <p>A Frontend Developer pursuing to become a Fullstack Developer. Creating websites is my passion since childhood. Also a Python progammer & learning Django framework for Backend Development. Loves to learn things from scratch & work efficiently in peaceful  environment.</p>

                <div className="about_details">
                    <div className="left-details">
                        <p>Full Name</p>
                        <p>Specialist</p>
                        <p>E-mail</p>
                        <p>Qulification</p>
                        <p>Languages</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Address</p>
                    </div>
                    <div className="right-details">
                        <p>: Pawan Kumar</p>
                        <p>: Web Developer & Python Programmer</p>
                        <p>: pawan11072000@gmail.com</p>
                        <p>: B.Tech ( CSE ) - 3rd yr</p>
                        <p>: English & Hindi</p>
                        <p>: 21</p>
                        <p>: Indian</p>
                        <p>: kolkata, west Bengal</p>

                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1VIGAjDywDQeAjq8tTmEWFsy-d-z3m_eA/view?usp=drivesdk" target="_blank"><button className="cv-btn">Download CV</button></a>
            </div>


        </div>
    )
}

export default ImageSection