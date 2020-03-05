import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div id="hero-text">
            <h1>Caleb Vincent</h1>
            <p>And I'm a Web Developer</p>
            <Link className="btn btn-primary" to="/contact">Contact Me  </Link>|
            <Link id="galleryBtn" to="/gallery">              View Previous Work</Link>
        </div>
    )
}

export default Home;