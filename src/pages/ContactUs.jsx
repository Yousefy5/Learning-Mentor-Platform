import React from 'react';

const ContactUs = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h1 className="mb-4 text-center">Contact Us</h1>
                    <p className="text-center mb-5">
                        Have questions or suggestions? We'd love to hear from you.
                    </p>

                    <div className="card shadow-sm mb-5">
                        <div className="card-body p-4">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label">Message</label>
                                    <textarea className="form-control" id="message" rows="5" placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="button" className="btn btn-primary w-100">Send Message</button>
                            </form>
                        </div>
                    </div>

                    <div className="text-center">
                        <h3 className="h5 mb-3">Looking for Training Centers?</h3>
                        <p>
                            Check out our <a href="/offline-centers">Offline Centers Directory</a> to find verified training locations in your city.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
