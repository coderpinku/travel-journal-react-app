import React from "react";


export default function Navbar(){
    return(
        <navbar className="navbar">
        <div className="logo">Travel Journal</div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Enquiry</a></li>
        </ul>
        </navbar>
    )
}