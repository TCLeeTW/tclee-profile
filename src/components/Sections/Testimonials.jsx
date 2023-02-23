import React from 'react';

function Testimonials() {
    return (
        <div className="testimonials paralax-mf bg-image" style={{backgroundImage: "url(assets/img/overlay-bg.jpg)"}}>
            <div className="overlay-mf"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                    <div className="testimonial-box">
                                        <div className="author-test">
                                            <img src="assets/img/testimonial-2.jpg" alt="" className="rounded-circle b-shadow-a"/>
                                                <span className="author">Xavi Alonso</span>
                                        </div>
                                        <div className="content-test">
                                            <p className="description lead">
                                                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-box">
                                        <div className="author-test">
                                            <img src="assets/img/testimonial-4.jpg" alt="" className="rounded-circle b-shadow-a"/>
                                                <span className="author">Marta Socrate</span>
                                        </div>
                                        <div className="content-test">
                                            <p className="description lead">
                                                Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>

                        <div id="testimonial-mf" className="owl-carousel owl-theme">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;
