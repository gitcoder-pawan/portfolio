import React from 'react'
import Title from "../Components/about/Title"
import ContactItem from "../Components/ContactItem"
import mail from "../img/mail.png"
import phone from "../img/phone.png"
import location from "../img/location.png"
const ContactPage = () => {
    return (
        <>


            <div className="ContactPage">
                <Title title={"contact me"} className="c-title" />
                <div className="contact-section">
                    <div className="map-section">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d63897.350499980224!2d86.95077033460714!3d25.224004598744674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39f04af5788530a3%3A0xb61aab57a83c51a0!2sDudhila%2C%20Bhagalpur%2C%20Bihar%20812006!3m2!1d25.2256069!2d86.94193109999999!5e0!3m2!1sen!2sin!4v1614445421615!5m2!1sen!2sin" 
                        
                        
                       
                        width="100%" height="400" style={{ border: 0 }} allowFullscreen="" loading="lazy"></iframe>
                    </div>
                    <div className="contact-details">
                        <ContactItem icon={mail} text1={"pawan11072000@gmail.com"} text2={""} title={"E-mail"} />
                        <ContactItem icon={phone} text1={"+91 6205244673"} text2={"+91 8407060775"} title={"Phone"} />
                        <ContactItem icon={location} text1={"kolkata , West Bengal"} text2={"Bhagalpur , Bihar"} title={"Location"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactPage
