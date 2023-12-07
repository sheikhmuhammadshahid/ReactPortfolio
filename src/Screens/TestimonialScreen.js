import React from 'react'
import testi_1 from '../assets/img/testimonials/testimonials_1.jpg';
import testi_2 from '../assets/img/testimonials/testimonials_2.jpg';

export default function TestimonialScreen() {
    return (

        <div className="vg-page page-testimonial">
            <div className="container">
                <h1 className="text-center fw-normal wow fadeInUp">What Clients are Saying</h1>
                <div className="row justify-content-center mt-5 wow fadeInUp">
                    <div className="col-md-9">
                        <div className="owl-carousel testi-carousel">
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="img-place">
                                            <img src={testi_1} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="caption">
                                            <div className="testi-content">There are many variations of passages of Lorem Ipsum available, but the majority have suffered</div>
                                            <div className="testi-info">
                                                <div className="thumb-profile">
                                                    <img src={testi_1} alt="" />
                                                </div>
                                                <div className="tagline">
                                                    <h5 className="mb-0">Satria Nugraha</h5>
                                                    <span className="text-muted">CEO Nutshell</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="img-place">
                                            <img src={testi_2} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="caption">
                                            <div className="testi-content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe natus expedita ab facilis ut, animi explicabo amet. Voluptatibus possimus iste enim, doloremque, fugiat accusamus nisi optio fugit ratione expedita harum?</div>
                                            <div className="testi-info">
                                                <div className="thumb-profile">
                                                    <img src={testi_2} alt="" />
                                                </div>
                                                <div className="tagline">
                                                    <h5 className="mb-0">Selena Arrini</h5>
                                                    <span className="text-muted">CEO BigTree</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
