import { React, useEffect, useRef } from 'react';
import Typed from 'typed.js';

function HeroSection() {
    const subtitleRef = useRef(null);
    useEffect(() => {
        const options = {
            strings: ['Entrepreneur', 'Developer', 'Freelancer'],
            typeSpeed: 80,
            backSpeed: 50,
            loop: true,
            cursorChar: '|',
            smartBackspace: true
        };

        const typed = new Typed(subtitleRef.current, options);

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div id="hero" className="hero route bg-image"
            style={{ backgroundImage: `url(assets/img/hero-bg.jpg)` }}
        >
            <div className="overlay-itro"></div>
            <div className="hero-content display-table">
                <div className="table-cell">
                    <div className="container">
                        <h1 className="hero-title mb-4">This is TC Lee</h1>
                        <p className="hero-subtitle">
                            {/* <span className="typed" data-typed-items="Entrepreneur, Developer, Freelancer"></span> */}
                            <span ref={subtitleRef}></span>
                            {/* <span className="typed-cursor typed-cursor--blink" aria-hidden="true">|</span> */}
                        </p>
                        {/* <p className="pt-3"><a className="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
