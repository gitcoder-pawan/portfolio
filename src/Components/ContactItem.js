import React from 'react'

const ContactItem = ({ icon, text1, text2, title }) => {
    return (
        <>
            <div className="contact-item">
                <div className="contact">
                    <img src={icon} alt="" />
                    <div className="right-details">
                        <h6>{title}</h6>
                        <p>{text1}</p>
                        <p>{text2}</p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ContactItem
