import "./navbar.css"
import React from "react"
import {Link} from "react-router-dom"
function Navbar(){
     
    return(
        <div id="navbar">
            <Link to="/" style={{textDecoration:"none",color:"white"}}>HOME</Link>
            <Link to="/about"  style={{textDecoration:"none",color:"white"}}>ABOUT</Link>
            <Link to="/skill" style={{textDecoration:"none",color:"white"}}>SKILLS</Link>
            <Link to="/project" style={{textDecoration:"none",color:"white"}}>PROJECT</Link>
            <Link to="/static" style={{textDecoration:"none",color:"white"}}>STATICS</Link>
            <Link to="/contact" style={{textDecoration:"none",color:"white"}}>CONTACT</Link>
           
        </div>
    )
}
export default Navbar