import React from "react";
import "./style.css";
import Project from "../Project";

function Gallery() {
    return (
        <div id="hero-text">
            <h1>Gallery</h1>
            <ul>
                <li><Project /></li>
                <li><Project /></li>
                <li><Project /></li>
                <li><Project /></li>
            </ul>
        </div>
    )
}

export default Gallery;