import React from "react";

function Contact() {
    return (
        <section className='bodySection' id='contact'>
            <div className='bodyBox'>
                <h2 className='sectionHeader'>Contact Me:</h2>
                <div id='contactContainer'>
                    <div className='contactIconContainer'>
                        <div className='contactRow'>
                            <img className='icon contactIcon' alt='email icon' src={process.env.PUBLIC_URL + "/icons/email.png"}></img>
                            <a className='contactLink' href="mailto: danidavis321@gmail.com">Email</a>
                        </div>
                        <div className='contactRow'>
                            <img className='icon contactIcon' alt='github icon' src={process.env.PUBLIC_URL + "/icons/git.png"}></img>
                            <a className='contactLink' href="https://github.com/DaniDelia253" target='_blank' rel="noreferrer">GitHub</a>
                        </div>
                        <div className='contactRow'>
                            <img className='icon contactIcon' alt='linkedin icon' src={process.env.PUBLIC_URL + "/icons/linkedin.png"}></img>
                            <a className='contactLink' href="https://www.linkedin.com/in/danidelia253/" target='_blank' rel="noreferrer">LinkedIn</a>
                        </div>
                        <div className='contactRow'>
                            <img className='icon contactIcon' alt='resume icon' src={process.env.PUBLIC_URL + "/icons/resume.png"}></img>
                            <a className='contactLink' href={process.env.PUBLIC_URL + "/resume.pdf"} target="_blank" rel="noreferrer" download="Dani-Davis-Resume" alt="resume" id="resume-button">Resume</a>
                        </div>
                    </div>
                    <div className='contactLinkContainer'>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact