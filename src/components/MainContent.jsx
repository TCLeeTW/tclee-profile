import React from 'react';
import About from "./Sections/About"
import Service from "./Sections/Service"
import Counter from "./Sections/Counter"
import Portfolio from "./Sections/Portfolio"
import Testimonials from './Sections/Testimonials';
import Blog from './Sections/Blog';
import Contact from './Sections/Contact';

function MainContent() {
    return (<div>
        <About/>
        <Service/>
        <Counter/>
        <Portfolio/>
        <Testimonials/>
        <Blog/>
        <Contact/>

    </div>

    );
}

export default MainContent