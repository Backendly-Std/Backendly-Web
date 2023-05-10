import React from 'react';
import '../css/Home.css'
import '../js/options.js'
import { Link } from "react-router-dom";
// import "../fonts/PublicSans-VariableFont_wght.ttf";
// import "../fonts/Inter-VariableFont_slnt,wght.ttf"
// {/* <link rel="stylesheet" href="./css/App.css"></link> */}

const Home = () => {
    return (
        <div className="container">
            <section className="first-section">
                <header className="backendly-header">
                    <div className="header-left active fade-left">
                        <img src={require('../images/favicon.png')} width="50px" alt="logo" className="backendly-logo-header" />
                        <div className="backendly-h-header">
                            Backendly
                        </div>
                    </div>
                    <div className="header-right active fade-right">
                        <Link className="header-links" to="about">About</Link>
                        <a className="header-links" href="#">How We Work</a>
                        <a className="header-links" href="#">Pricing</a>
                        <a className="header-links" href="#">Solution</a>
                        <a className="header-links" href="#">Features</a>
                    </div>
                </header>
                <div className="header-main active fade-bottom">
                    <div className="main-up">
                        <h1 className="main-h-first">Minimize your tabs.</h1>
                        <h1 className="main-h-second" >Get us to build your website!</h1>
                    </div>
                    <div className="main-mid">
                        <h1 className="main-mid-h">
                            Looking for a team that can help you build a stunning website? Look no further! Our team of experienced web developers and designers are here to help you bring your vision to life.
                        </h1>
                    </div>
                    <div className="main-bottom">
                        <div className="main-bottom-left">
                            <button className="main-bottom-button">Get Started 🔥</button>
                        </div>
                        <div className="main-bottom-right">
                            <div className="main-bottom-arrow">
                                <img src={require('../images/Arrow.png')} alt="" />
                            </div>
                            <div className="main-bottom-p">
                                <p>
                                    All research start from here
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-foot active fade-left">
                    <div className="header-foot-2">
                        <div className="header-foot-mains-1">
                            <div className="header-foot-text">
                                Best Price Website - Search in
                            </div>
                            <div className="xbutton">
                                <div className="rectangle8"></div>
                                <div className="rectangle9"></div>
                            </div>
                        </div>
                        <div className="header-foot-mains-2">
                            <div className="header-foot-text">
                                Popular Design - Search
                            </div>
                            <div className="xbutton">
                                <div className="rectangle8"></div>
                                <div className="rectangle9"></div>
                            </div>
                        </div>
                        <div className="header-foot-mains-3">
                            <div className="header-foot-text">
                                Best Price Website - Search in
                            </div>
                            <div className="xbutton">
                                <div className="rectangle8"></div>
                                <div className="rectangle9"></div>
                            </div>
                        </div>
                        <div className="header-foot-mains-4">
                            <div className="header-foot-text">
                                Best Price Website - Search in
                            </div>
                            <div className="xbutton">
                                <div className="rectangle8"></div>
                                <div className="rectangle9"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="content_2">
                <div className="text reveal fade-left">
                    <h2>
                        Our web development team creates custom websites and applications to boost your productivity and streamline your browsing needs. Contact us today to learn more.
                    </h2>
                </div>
            </section>
            <section className="content_3">

                <div className="deal_title reveal fade-right">
                    Get your best deal
                </div>
                <div className="boxes reveal fade-bottom">
                    <div className="personal">
                        <div className="personal_title">
                            Personal
                            <br />
                            <span className="personal_title2">
                                Special first packet for all
                            </span>
                            <br />
                            <hr className="packets_lines" />
                        </div>
                        <div className="price">$16</div>
                        <div className="package_features">
                            <div className="ft"><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6946 0.931356C14.1467 1.45305 14.0904 2.2425 13.5687 2.69463L6.06866 9.19463C5.57308 9.62413 4.82984 9.59762 4.36612 9.1339L0.366117 5.1339C-0.122039 4.64575 -0.122039 3.85429 0.366117 3.36614C0.854272 2.87798 1.64573 2.87798 2.13388 3.36614L5.31088 6.54314L11.9313 0.805408C12.453 0.353273 13.2425 0.409662 13.6946 0.931356Z" fill="black" />
                            </svg>&nbsp; Get 15 pages on website</div>
                            <div className="ft"><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6946 0.931356C14.1467 1.45305 14.0904 2.2425 13.5687 2.69463L6.06866 9.19463C5.57308 9.62413 4.82984 9.59762 4.36612 9.1339L0.366117 5.1339C-0.122039 4.64575 -0.122039 3.85429 0.366117 3.36614C0.854272 2.87798 1.64573 2.87798 2.13388 3.36614L5.31088 6.54314L11.9313 0.805408C12.453 0.353273 13.2425 0.409662 13.6946 0.931356Z" fill="black" />
                            </svg>&nbsp; Get better animations</div>
                            <div className="ft"><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6946 0.931356C14.1467 1.45305 14.0904 2.2425 13.5687 2.69463L6.06866 9.19463C5.57308 9.62413 4.82984 9.59762 4.36612 9.1339L0.366117 5.1339C-0.122039 4.64575 -0.122039 3.85429 0.366117 3.36614C0.854272 2.87798 1.64573 2.87798 2.13388 3.36614L5.31088 6.54314L11.9313 0.805408C12.453 0.353273 13.2425 0.409662 13.6946 0.931356Z" fill="black" />
                            </svg>&nbsp; Get better optimization </div>
                        </div>
                        <button className="personal_button">Send Order</button>
                    </div>
                    <div className="premium shake">
                        <div className="premium_title">Premium <br /><span className="premium_title2">Packet for Startup & Company</span><br /><hr className="packets_lines" /></div>
                        <div className="price">$32</div>
                        <div className="package_features">
                            <div className="ft"><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6946 0.931356C14.1467 1.45305 14.0904 2.2425 13.5687 2.69463L6.06866 9.19463C5.57308 9.62413 4.82984 9.59762 4.36612 9.1339L0.366117 5.1339C-0.122039 4.64575 -0.122039 3.85429 0.366117 3.36614C0.854272 2.87798 1.64573 2.87798 2.13388 3.36614L5.31088 6.54314L11.9313 0.805408C12.453 0.353273 13.2425 0.409662 13.6946 0.931356Z" fill="black" />
                            </svg>&nbsp; Unlimited website pages</div>
                            <div className="ft"><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6946 0.931356C14.1467 1.45305 14.0904 2.2425 13.5687 2.69463L6.06866 9.19463C5.57308 9.62413 4.82984 9.59762 4.36612 9.1339L0.366117 5.1339C-0.122039 4.64575 -0.122039 3.85429 0.366117 3.36614C0.854272 2.87798 1.64573 2.87798 2.13388 3.36614L5.31088 6.54314L11.9313 0.805408C12.453 0.353273 13.2425 0.409662 13.6946 0.931356Z" fill="black" />
                            </svg>&nbsp; Unlimited download page</div>
                            <div className="ft"><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6946 0.931356C14.1467 1.45305 14.0904 2.2425 13.5687 2.69463L6.06866 9.19463C5.57308 9.62413 4.82984 9.59762 4.36612 9.1339L0.366117 5.1339C-0.122039 4.64575 -0.122039 3.85429 0.366117 3.36614C0.854272 2.87798 1.64573 2.87798 2.13388 3.36614L5.31088 6.54314L11.9313 0.805408C12.453 0.353273 13.2425 0.409662 13.6946 0.931356Z" fill="black" />
                            </svg>&nbsp; Unlimited page each group </div>
                            <div className="ft"><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6946 0.931356C14.1467 1.45305 14.0904 2.2425 13.5687 2.69463L6.06866 9.19463C5.57308 9.62413 4.82984 9.59762 4.36612 9.1339L0.366117 5.1339C-0.122039 4.64575 -0.122039 3.85429 0.366117 3.36614C0.854272 2.87798 1.64573 2.87798 2.13388 3.36614L5.31088 6.54314L11.9313 0.805408C12.453 0.353273 13.2425 0.409662 13.6946 0.931356Z" fill="black" />
                            </svg>&nbsp; Customize sorting group pages </div>
                            <div className="ft"><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6946 0.931356C14.1467 1.45305 14.0904 2.2425 13.5687 2.69463L6.06866 9.19463C5.57308 9.62413 4.82984 9.59762 4.36612 9.1339L0.366117 5.1339C-0.122039 4.64575 -0.122039 3.85429 0.366117 3.36614C0.854272 2.87798 1.64573 2.87798 2.13388 3.36614L5.31088 6.54314L11.9313 0.805408C12.453 0.353273 13.2425 0.409662 13.6946 0.931356Z" fill="black" />
                            </svg>&nbsp; Faster than personal packet </div>
                            <div className="ft"><svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6946 0.931356C14.1467 1.45305 14.0904 2.2425 13.5687 2.69463L6.06866 9.19463C5.57308 9.62413 4.82984 9.59762 4.36612 9.1339L0.366117 5.1339C-0.122039 4.64575 -0.122039 3.85429 0.366117 3.36614C0.854272 2.87798 1.64573 2.87798 2.13388 3.36614L5.31088 6.54314L11.9313 0.805408C12.453 0.353273 13.2425 0.409662 13.6946 0.931356Z" fill="black" />
                            </svg>&nbsp; 3D graphics elements </div>
                        </div>
                        <button className="premium_button">Send Order</button>
                    </div>
                    <div className="arrow">
                        <div className="arrow_title">Recommended <br /> Packet!</div>
                        <img src={require("../images/Arrow.png")} alt="arrow" />
                    </div>
                </div>
            </section>
            <section className="content_4">
                <div className="email">
                    <h2 className="reveal fade-left">
                        Join us on email for
                    </h2>
                    <div className="block-shadow reveal fade-right">
                        <h3>
                            backendlyy@gmail.com
                        </h3>
                    </div>
                    <div className="button-black active fade">
                        <p>
                            Contact Us
                        </p>
                    </div>
                </div>
            </section>
            <section className="footer">
                <div className="footer_nav">
                    <div className="logo">
                        <img src={require('../images/v1_206.png')} width="70" /><div className="logo_name">Backendly</div>
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
};

export default Home; 