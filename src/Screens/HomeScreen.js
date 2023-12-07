import React from 'react'
import '../Styles/funfact.css';
import SocialLinks from './SocialLinks';
// import {Link} from 'react-router-dom'
export default function HomeScreen() {
    return (
        <div className=" homeImage vg-page page-home" id="home">

            <div className="navbar navbar-expand-lg navbar-dark sticky" data-offset="500">
                <div className="container">
                <h2 className="fw-light mb-1" style={{color:'white'}}> <b className="fg-theme">Muhammad</b> Shahid</h2>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#main-navbar" aria-expanded="true">
                        <span className="ti-menu"></span>   
                    </button>
                    <div  className="collapse navbar-collapse" id="main-navbar">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a href="#home" className="nav-link" data-animate="scrolling">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link" data-animate="scrolling">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="#services" className="nav-link" data-animate="scrolling">Services</a>
                            </li>
                            
                            <li className="nav-item">
                                <a href="#portfolio" className="nav-link" data-animate="scrolling">Portfolio</a>
                            </li>
                            {/* <li className="nav-item">
                                <a href="#blog" className="nav-link" data-animate="scrolling">Blog</a>
                            </li> */}
                            <li className="nav-item">
                                <a href="#contact" className="nav-link" data-animate="scrolling">Contact</a>
                            </li>
                        </ul>
                        {/* <ul className="nav ml-auto">
                            <li className="nav-item">
                                <button className="btn btn-fab btn-theme no-shadow">En</button>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </div>
            <div className="caption-header text-center wow zoomInDown">
                <h5 className="fw-normal">Welcome</h5>
                <h1 className="fw-light mb-4">I'm <b className="fg-theme">Muhammad</b> Shahid</h1>
                <div className="badge">Flutter, Next Js and React ( Native & Js ) </div>
                <div className="badge my-3">Developer</div>
            </div>
            {/* <div className="floating-button"><span className="ti-mouse"></span></div> */}
            {/* <SocialLinks/> */}
        </div>
        
    )
}
