import React from 'react';
import '../styles/footer.css'; // Re-using footer styles or general styles if available, or just bootstrap classes

const AboutUs = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h1 className="mb-4 text-center">About Learning Mentor</h1>

                    <section className="mb-5">
                        <h2 className="h4 mb-3">Our Mission</h2>
                        <p className="lead">
                            We are dedicated to empowering Egyptian and Arab learners by providing curated, bilingual learning roadmaps in programming, design, and productivity. Our goal is to make high-quality education accessible and clear for everyone.
                        </p>
                    </section>

                    <section className="mb-5">
                        <h2 className="h4 mb-3">What We Offer</h2>
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="card-body">
                                        <h5 className="card-title">Curated Learning Paths</h5>
                                        <p className="card-text">Structured tracks in Programming, Graphic Design, and Productivity Tools, catering to both beginners and career-seekers.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="card-body">
                                        <h5 className="card-title">Bilingual Interface</h5>
                                        <p className="card-text">Fully accessible in Arabic and English to support native learning with global relevance.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="card-body">
                                        <h5 className="card-title">Interactive Learning</h5>
                                        <p className="card-text">Placement quizzes, practice questions, and progress tracking to ensure you master every step.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card h-100 border-0 shadow-sm">
                                    <div className="card-body">
                                        <h5 className="card-title">Offline Centers</h5>
                                        <p className="card-text">A directory of verified training centers across Egypt for hands-on, in-person learning experiences.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
