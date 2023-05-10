import React from 'react';
import '../css/About.css';
import '../js/options.js';
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="container">
            <section className="section-one">
                <header className="backendly-header">
                    <div className="header-left active fade-left">
                        <img src={require("../images/favicon.png")} width="50px" alt="logo" className="backendly-logo-header" />
                        <div className="backendly-h-header">
                            Backendly
                        </div>
                    </div>
                    <div className="header-right active fade-right">
                        <Link className="header-links" to="/">Home</Link>
                        <a className="header-links" href="#">How We Work</a>
                        <a className="header-links" href="#">Pricing</a>
                        <a className="header-links" href="#">Solution</a>
                        <a className="header-links" href="#">Features</a>
                    </div>
                </header>

                <div className="header-major active fade-bottom">
                    <div className="main-up">
                        <h1 className="main-h-first">Who we are?</h1>
                    </div>
                </div>
                <div className="text-boxes">
                    <div className="text-box-first active fade-left">
                        <img src={require("../images/question-mark-1.png")} alt="question" />
                        <div className="text-first">We are a team of web developers dedicated to creating stunning and effective websites for our clients. From conceptualization to launch, we work closely with our clients to ensure that their vision is realized and their online presence is optimized. With a focus on modern design principles and cutting-edge technologies, we create websites that are not only visually appealing, but also functional, user-friendly, and responsive. Let us help you establish a strong online presence and take your business to the next level.</div>
                    </div>
                    <div className="text-box-second active fade-right">
                        <div className="text-sec">At Backendly, we take pride in our work and love to showcase the websites we have created for our clients. Our portfolio includes a selection of some of our best projects, ranging from simple yet elegant designs to complex and dynamic websites. We work with a variety of clients across industries, from small startups to large corporations, and strive to create websites that not only look great, but also function smoothly and effectively. Our portfolio demonstrates our expertise in web design, development, and optimization, and we're always excited to take on new challenges and bring our clients' visions to life. </div>
                        <img src={require("../images/programming-1.png")} alt="comp" />
                    </div>
                </div>
            </section>
            <section className="footer">
                <div className="footer_nav">
                    <div className="logo">
                        <img src={require("../images/v1_206.png")} width="70" /><div className="logo_name">Backendly</div>
                    </div>
                    <div className="nav_element_group">
                        <div className="nav_element">
                            <a href="#">Privacy Policy</a>
                        </div>
                        <div className="nav_element">
                            <a href="#">Terms and Conditions</a>
                        </div>
                        <div className="nav_element">
                            <a href="#">Contact Us</a>
                        </div>
                        <div className="nav_element">
                            <a href="#">Careers</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    );
}

export default About;