// page with multiple components goes here
import React from 'react';
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Contact from "../components/Contact";
// import Gallery from "../components/Gallery";
import './App.css';

function Page() {
    return (
        <div>
                <Home />
                <Contact />
                {/* <Gallery /> */}
        </div>
    );
}

export default Page;
