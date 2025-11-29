import React from 'react';

const Legal = () => {
    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <h1 className="mb-4">Legal Information</h1>

                    <section className="mb-5">
                        <h2 className="h4">Terms of Service</h2>
                        <p>
                            Welcome to Learning Mentor. By using our platform, you agree to comply with and be bound by the following terms and conditions of use.
                            Our content is for educational purposes only. We strive for accuracy but cannot guarantee that all information is always up to date.
                        </p>
                    </section>

                    <section className="mb-5">
                        <h2 className="h4">Privacy Policy</h2>
                        <p>
                            Your privacy is important to us. We collect minimal data necessary to track your learning progress and improve your experience.
                            We do not sell your personal information to third parties.
                        </p>
                    </section>

                    <section>
                        <h2 className="h4">Copyright</h2>
                        <p>
                            The content provided on this platform, including roadmaps and quizzes, is the property of Learning Mentor or its content suppliers
                            and is protected by international copyright laws.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Legal;
