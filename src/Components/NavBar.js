import React from 'react'
import avatar from "../img/profile_img.jpg"
import { NavLink } from 'react-router-dom'
const NavBar = () => {
    
    return (
       
        <>
            <div className="NavBar">

                <nav className="nav">
                    <div className="profile">
                        <img src={avatar} alt="pawan kumar" />
                    </div>
                    <ul className="nav-items">
                        <li className="nav-item">
                            <NavLink exact to="/" activeClassName="active">Home</NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink exact to="/about" activeClassName="active">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/projects" activeClassName="active">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/contact" activeClassName="active">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact to="/blogs" activeClassName="active">Blogs</NavLink>
                        </li>
                    </ul>
                    <footer className="footer">
                        
                        <p>© Pawan kumar</p>
                    </footer>
                </nav>

            </div>
        </>
    )
}

export default NavBar;
