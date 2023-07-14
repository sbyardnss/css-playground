import "./Nav.css"

import { Link, Navigate, useNavigate } from "react-router-dom"
import { useContext, useEffect, useRef, useState } from "react"
import "../Nav/Nav.css"

export const Nav = () => {
    const navMenu = useRef(null)
    const [unread, setUnread] = useState(0)
    const navigate = useNavigate()

    const check = (e) => {
        if (e.target.checked === true) {
            // document.getElementById(e.target.id).checked = false
            return false
        }
        else {
            // document.getElementById(e.target.id).checked = true
            return true
        }
    }
    const closeMenuOnNavigate = () => {
        document.getElementById("active").checked = false
    }
    return (
        <header className="navigation" id="navMenu">
            <div id="logo">
                <Link className="logo__icon" to="/">
                    <h1 id="/" className="navigation__name">CSS Playground</h1>
                    {/* <img id="graffiti_logo" src={graffiti}></img> */}
                </Link>
            </div>
            {/* <div id="navList" ref={(navMenu)}> */}
            <div id="navList" >
                <input type="checkbox" id="active" onClick={() => check} />
                <label htmlFor="active" className="menu-btn" ><span></span></label>
                <label htmlFor="inactive" className="close"></label>
                <ul id="navLinks">
                    <li className="tempListItem"><Link id="/rotation" className="navigation_link" to="/rotation" onClick={() => closeMenuOnNavigate()}>Rotations </Link></li>
                </ul>
            </div>
        </header>
    )
}