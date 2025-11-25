import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <>
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand d-flex align-items-center" to="/">
                        <span className="logo-text fw-bold fs-4">MentorED</span>
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/page2.html">Learning Tracks</a>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Quizzes</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/page6.html">Offline Centres</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/page7.html">Dashboard</a>
                            </li>
                        </ul>

                        <div className="d-flex ms-lg-3 mt-lg-0">
                            <button className="btn btn-primary btn-sm" type="button">My Account</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main>
                {children}
            </main>

            {/* Footer */}
            <footer className="footer mt-auto">
                <div className="container-fluid d-flex flex-column flex-md-row justify-content-between align-items-center py-3 border-top">
                    <div className="d-flex gap-3 mb-2 mb-md-0">
                        <a href="#" className="text-decoration-none text-secondary">About Us</a>
                        <a href="#" className="text-decoration-none text-secondary">Resources</a>
                        <a href="#" className="text-decoration-none text-secondary">Legal</a>
                        <a href="#" className="text-decoration-none text-secondary">Contact Us</a>
                    </div>
                    <div className="d-flex gap-3">
                        <a href="#" className="text-secondary"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="text-secondary"><i className="bi bi-twitter"></i></a>
                        <a href="#" className="text-secondary"><i className="bi bi-linkedin"></i></a>
                        <a href="#" className="text-secondary"><i className="bi bi-instagram"></i></a>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Layout;
