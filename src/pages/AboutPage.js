import React from 'react'
import Title from "../Components/about/Title"
import ImageSection from "../Components/about/ImageSection"
import aboutimg from "../img/aboutimg.jpg"
import SkillsSection from "../Components/about/SkillsSection"
import Services from "../Components/about/Services"
import pythoncode from "../img/pythoncode.jpg"
import webdev from "../img/webdev.png"
const AboutPage = () => {
    return (
        <>
        <div className="AboutPage">
            <Title title={"About Me"} />
            <ImageSection aboutimg={aboutimg}/>
            <Title title={"My Skills"} />
            <div className="skill-container">
            <SkillsSection skill={'PYTHON'} progress={'90%'} width={'90%'} />
                <SkillsSection skill={'Data Strctures & Algorithms'} progress={'65%'} width={'65%'} />
                <SkillsSection skill={'HTML'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'CSS'} progress={'85%'} width={'85%'} />
                <SkillsSection skill={'JavaScript'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'ReactJS'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Bootstrap'} progress={'65%'} width={'65%'} />
                <SkillsSection skill={'SASS'} progress={'80%'} width={'80%'} />
                
                <SkillsSection skill={'C++'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'C'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'JAVA'} progress={'50%'} width={'50%'} />

            </div>
            <Title title={'services'}/>
            <div className="service-container">
                <Services sname={'Web Developer'} simg={webdev}/>
                <Services sname={'Python coder'} simg={pythoncode}/>
            </div>
        </div>
        
        </>
    )
}

export default AboutPage;
