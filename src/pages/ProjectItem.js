import React from 'react'

const ProjectItem = ({ item }) => {
    return (
        <div className="project-item">

            <img src={item.image} alt="xyz" />

            <div className="content">
                <h3>{item.title}</h3>
                {item.category==='web development'? 
                <a href={item.link1} >Visit</a>:''}
                <a href={item.link2} >GitHub link</a>
            </div>

        </div>
    )
}

export default ProjectItem
