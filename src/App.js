import React, { useState } from 'react'
import "./App.scss";
import NavBar from "./Components/NavBar";
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import BlogsPage from "./pages/BlogsPage"
import ProjectsPage from "./pages/ProjectsPage"
import {Redirect, Route, Switch } from 'react-router-dom';

const App = () => {
    const [navToggle,setnavToggle]=useState(false);

    const navClick=()=>setnavToggle(!navToggle)
    return (
        <div className="App">
            <div className={`sidebar ${navToggle? 'nav-toggle':''}`}>
                <NavBar />
            </div>

            <div className="nav-btn" onClick={navClick}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <div className="main-content">
                <div className="content">
                    <Switch>
                        <Route exact path="/"><HomePage /></Route>
                        <Route exact path="/about"><AboutPage/></Route>
                        <Route exact path="/contact"><ContactPage/></Route>
                        <Route exact path="/projects"><ProjectsPage/></Route>
                        <Route exact path="/blogs"><BlogsPage/></Route>
                        <Redirect to="/"/>
                    </Switch>
                </div>
                </div>
        </div>
    )
}

export default App
