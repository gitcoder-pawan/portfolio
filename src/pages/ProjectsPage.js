import React from 'react'
import { useState } from 'react'
import Title from "../Components/about/Title"
import projects from "../Components/allprojects"
import ProjectItem from './ProjectItem'
const allcategories=['All', ...new Set(projects.map(item=>item.category))]

const ProjectsPage = () => {
    const [allprojects, setallprojects]=useState(projects);

    const filter=(category)=>{
        
            if (category==='All' ){
                setallprojects(projects)
                return;
            }
            const filterprojets= projects.filter(item=>{
                return(
                    item.category===category
                )
            })
            setallprojects(filterprojets)
    }

    return (

        <div className="ProjectsPage">
            <Title title={'Projects'} />

            <div className="category">
               {allcategories.map(cat=>{
                   return(
                       <button className="category-btn"
                       onClick={()=>{filter(cat)}}>{cat}</button>
                   )
               })}
            </div>

            <div className="projects-container">
               {allprojects.map(item=>{
                   console.log(item);
                   return(<ProjectItem item={item}/>)
               })}
            </div>
        </div>
    )
}

export default ProjectsPage
