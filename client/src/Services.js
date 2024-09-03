import React from 'react';
import './Service.css';

const Service = () => {
    return (
        <section className="home-testimonial">
            <div className="container-fluid">
                <div className="row d-flex justify-content-center testimonial-pos">
                    <div className="col-md-12 pt-4 d-flex justify-content-center">
                        <h3>Testimonials</h3>
                    </div>
                    <div className="col-md-12 d-flex justify-content-center">
                        <h2>Feedback from Our Esteemed Clients</h2>
                    </div>
                </div>
            </div>
            <section className="home-testimonial-bottom">
                <div className="container testimonial-inner">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-4 style-3">
                            <div className="tour-item ">
                                <div className="tour-desc bg-white">
                                    <div className="tour-text color-grey-3 text-center">&ldquo;After suffering for years with my Mercedez coz of the steering rack, i bumped into Nasyjma autos and i have never regreted it. My problem was solved for good&rdquo;</div>
                                    <div className="d-flex justify-content-center pt-2 pb-2"><img className="tm-people" src="https://images.pexels.com/photos/6625914/pexels-photo-6625914.jpeg" alt="" /></div>
                                    <div className="link-name d-flex justify-content-center">Eileen Elsa</div>
                                    <div className="link-position d-flex justify-content-center">Client</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 style-3">
                            <div className="tour-item ">
                                <div className="tour-desc bg-white">
                                    <div className="tour-text color-grey-3 text-center">&ldquo;I had made all plans to import spare parts for my VW because of the many counterfeits in the Kenyan market. How lucky was i to save time and extra cost I would have incurred. Thanks to this website.&rdquo;</div>
                                    <div className="d-flex justify-content-center pt-2 pb-2"><img className="tm-people" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
                                    <div className="link-name d-flex justify-content-center"> Ojeezy</div>
                                    <div className="link-position d-flex justify-content-center">Client</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 style-3">
                            <div className="tour-item ">
                                <div className="tour-desc bg-white">
                                    <div className="tour-text color-grey-3 text-center">&ldquo;Quality and value for money. Thank you for the good customer experience. I would recommend anyone here anyday anytime.&rdquo;</div>
                                    <div className="d-flex justify-content-center pt-2 pb-2"><img className="tm-people" src="https://images.pexels.com/photos/4946604/pexels-photo-4946604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
                                    <div className="link-name d-flex justify-content-center">Hillary</div>
                                    <div className="link-position d-flex justify-content-center">Client</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Service;