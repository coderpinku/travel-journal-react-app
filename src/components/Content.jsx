import React from "react";
import { GoLocation } from 'react-icons/go';
// import img1 from "../images/img2.jpg"

export default function Content(props){
    return(
        
        <div className="content">
            <div className="img">
            <img src={props.img} alt="travel" />
            </div>
            <div className="blog--content">
                <div className="location">
                    <div className="icons"><GoLocation /></div>
                <h2>{props.location}</h2>
                    <a href="#">View on Google</a>
                </div>
                <h1>{props.title}</h1>
                <span>{props.startdate} - {props.enddate}</span>
                <p>{props.description}</p>
                <button className="btn">Readmore</button>
            </div>
        </div>
           

    )
}