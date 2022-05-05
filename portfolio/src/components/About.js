import React from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function About() {

    return (
        <section className='bodySection' id='about'>
            <div className='bodyBox'>
                <div id='aboutTextContainer'>
                    <p id='aboutText'>
                        I am a full-stack developer leveraging years of experience in education to build meaningful, responsive web applications. Recently earned a certificate in full stack development from Rice University, with newly developed skills in JavaScript, CSS, React.js, and more. I am an innovative problem solver passionate about ensuring that each of my applications provides an impactful user experience.
                    </p>
                    <img id='aboutImg' alt='professional headshot of dani' src={process.env.PUBLIC_URL + "/icons/about-img.png"}></img>
                </div>
                <div id='aboutIconsContainer'>
                    <div className='aboutIconsRow'>
                        <div className='iconContainer'>
                            <Tippy className='tip' content='HTML'>
                                <img className='icon' alt='html icon' src={process.env.PUBLIC_URL + "/icons/html.png"}></img>
                            </Tippy>
                        </div>
                        <div className='iconContainer'>
                            <Tippy className='tip' content='CSS'>
                                <img className='icon' alt='css icon' src={process.env.PUBLIC_URL + "/icons/css.png"}></img>
                            </Tippy>
                        </div>
                        <div className='iconContainer'>
                            <Tippy className='tip' content='Bootstrap'>
                                <img className='icon' alt='bootstrap icon' src={process.env.PUBLIC_URL + "/icons/bootstrap.png"}></img>
                            </Tippy>
                        </div>
                        <div className='iconContainer'>
                            <Tippy className='tip' content='JavaScript'>
                                <img className='icon' alt='javascript icon' src={process.env.PUBLIC_URL + "/icons/javascript.png"}></img>
                            </Tippy>
                        </div>
                        <div className='iconContainer'>
                            <Tippy className='tip' content='JQuery'>
                                <img className='icon' alt='jquery icon' src={process.env.PUBLIC_URL + "/icons/jquery.png"}></img>
                            </Tippy>
                        </div>
                        <div className='iconContainer'>
                            <Tippy className='tip' content='GIT Version Control'>
                                <img className='icon' alt='git icon' src={process.env.PUBLIC_URL + "/icons/git.png"}></img>
                            </Tippy>
                        </div>
                    </div>
                    <div className='aboutIconsRow'>
                        <div className='iconContainer'>
                            <Tippy className='tip' content='NodeJS'>
                                <img className='icon' alt='nodejs icon' src={process.env.PUBLIC_URL + "/icons/nodejs.png"}></img>
                            </Tippy>
                        </div>
                        <div className='iconContainer'>
                            <Tippy className='tip' content='ExpressJS'>
                                <img className='icon' alt='express icon' src={process.env.PUBLIC_URL + "/icons/express.png"}></img>
                            </Tippy>
                        </div>
                        <div className='iconContainer'>
                            <Tippy className='tip' content='ReactJS'>
                                <img className='icon' alt='reactjs icon' src={process.env.PUBLIC_URL + "/icons/react.png"}></img>
                            </Tippy>
                        </div>
                        <div className='iconContainer'>
                            <Tippy className='tip' content='HandlebarsJS'>
                                <img className='icon' alt='handlebars icon' src={process.env.PUBLIC_URL + "/icons/handlebars.png"}></img>
                            </Tippy>
                        </div>
                        <div className='iconContainer'>
                            <Tippy className='tip' content='MySQL'>
                                <img className='icon' alt='mysql icon' src={process.env.PUBLIC_URL + "/icons/mysql.png"}></img>
                            </Tippy>
                        </div>
                        <div className='iconContainer'>
                            <Tippy className='tip' content='MongoDB'>
                                <img className='icon' alt='mongodb icon' src={process.env.PUBLIC_URL + "/icons/mongodb.png"}></img>
                            </Tippy>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About