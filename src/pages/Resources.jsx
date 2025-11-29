import React from 'react';

const Resources = () => {
    return (
        <div className="container py-5">
            <h1 className="mb-4 text-center">Learning Resources</h1>
            <p className="text-center lead mb-5">
                Explore our curated collection of multi-format resources designed to help you succeed.
            </p>

            <div className="row g-4">
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body text-center">
                            <i className="bi bi-play-circle display-4 text-primary mb-3"></i>
                            <h3 className="h5 card-title">Video Tutorials</h3>
                            <p className="card-text">
                                Watch in-depth video guides from top creators in the industry. Visual learning made easy.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body text-center">
                            <i className="bi bi-book display-4 text-success mb-3"></i>
                            <h3 className="h5 card-title">E-Books & Articles</h3>
                            <p className="card-text">
                                Read comprehensive guides, documentation, and blog posts to deepen your understanding.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body text-center">
                            <i className="bi bi-code-square display-4 text-warning mb-3"></i>
                            <h3 className="h5 card-title">Practice Projects</h3>
                            <p className="card-text">
                                Apply what you've learned with real-world projects and hands-on coding challenges.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
