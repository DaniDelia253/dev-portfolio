import React from "react";

function Hero() {
    return (
        <section id='heroSection'>
            <div>
                <img src={process.env.PUBLIC_URL + "/icons/avatar.png"} alt="Dani's Animated Avatar" id='heroImg'></img>
            </div>
            <div>
                <h1 id='heroText'>Hi, I'm Dani!</h1>
            </div>
        </section>
    )
}

export default Hero