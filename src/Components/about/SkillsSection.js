import React from 'react'

const SkillsSection = ({skill, progress, width, color1}) => {
    return (
        <div className="Skills-section">
            <h5 style={{color:'coor1'}}>{skill}</h5>
            <div className="skill-bar">
                <p>{progress}</p>
                <div className="outer-bar">
                    <div className="inner-bar" style={{width:width}}></div>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection
