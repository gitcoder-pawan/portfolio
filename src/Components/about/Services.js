import React from 'react'

function Services({simg,sname}) {
    return (
        <div className="Service">
            <div className="service-img">
                <img src={simg} alt="service"/>
            </div>
            <div className="service-details">
                <h3>{sname}</h3>
            </div>
        </div>
    )
}

export default Services
