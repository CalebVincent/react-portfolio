import React from "react";
import { Link } from 'react-router-dom';
import "./style.css"

function Contact() {
    return (
        <div id="hero-text">
            <h1>Contact</h1>
            <h3>Email : vincent_806@yahoo.com</h3>
            <hr />
            <h3>LinkedIn : <Link href="https://www.linkedin.com/in/caleb-vincent-77909b196/">https://www.linkedin.com/in/caleb-vincent-77909b196/</Link></h3>
            <hr />
            <h3>Github : <Link href="https://github.com/calebvincent">https://github.com/calebvincent</Link></h3>
            <hr />
            <h3>Phone : (806) 781-1504</h3>
        </div>
    )
}

export default Contact;