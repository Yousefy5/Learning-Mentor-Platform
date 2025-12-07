import './HomeStyles/LearningPaths.css';
import { Link } from "react-router-dom";

function LearningPaths() {
  return (
    <>
      <section className="learning-paths py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Explore Our Learning Paths</h2>
            <p className="text-secondary mb-3">
              Dive into expertly curated roadmaps designed to help you master
              new skills and advance your career.
            </p>
            <Link
              to="/learning-tracks"
              className="btn btn-outline-secondary rounded-pill px-4"
            >
              View All Tracks
            </Link>
          </div>

          <div className="row g-4 mt-1">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border rounded-4">
                <div className="card-body">
                  <div className="d-flex gap-3 align-items-start">
                    <div>
                      <div className="lp-icon bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-code-slash"></i>
                      </div>
                    </div>
                    <div>
                      <h5 className="card-title mb-1">
                        Introduction to Programming
                      </h5>
                      <p className="card-text text-secondary small mb-3">
                        Start your coding journey with fundamental concepts and
                        practical exercises.
                      </p>
                      <Link to="/learning-tracks/programming-fundamentals" className="btn btn-sm btn-outline-secondary">
                        Start Learning
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border rounded-4">
                <div className="card-body">
                  <div className="d-flex gap-3 align-items-start">
                    <div>
                      <div className="lp-icon bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-brush"></i>
                      </div>
                    </div>

                    <div>
                      <h5 className="card-title mb-1">
                        Mastering Graphic Design Tools
                      </h5>
                      <p className="card-text text-secondary small mb-3">
                        Unleash your creativity with comprehensive guides on
                        standard design software.
                      </p>
                      <Link to="/learning-tracks/graphic-design-essentials" className="btn btn-sm btn-outline-secondary">
                        Start Learning
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border rounded-4">
                <div className="card-body">
                  <div className="d-flex gap-3 align-items-start">
                    <div>
                      <div className="lp-icon bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-clipboard-check"></i>
                      </div>
                    </div>
                    <div>
                      <h5 className="card-title mb-1">
                        Productivity Tools & Strategies
                      </h5>
                      <p className="card-text text-secondary small mb-3">
                        Boost your efficiency with expert techniques and
                        essential productivity tools.
                      </p>
                      <Link to="/learning-tracks/productivity-tools" className="btn btn-sm btn-outline-secondary">
                        Start Learning
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border rounded-4">
                <div className="card-body">
                  <div className="d-flex gap-3 align-items-start">
                    <div>
                      <div className="lp-icon bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-laptop"></i>
                      </div>
                    </div>
                    <div>
                      <h5 className="card-title mb-1">
                        Web Development Fundamentals
                      </h5>
                      <p className="card-text text-secondary small mb-3">
                        Build interactive websites from scratch using HTML, CSS,
                        and JavaScript.
                      </p>
                      <Link to="/learning-tracks/programming-fundamentals/web-development" className="btn btn-sm btn-outline-secondary">
                        Start Learning
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border rounded-4">
                <div className="card-body">
                  <div className="d-flex gap-3 align-items-start">
                    <div>
                      <div className="lp-icon bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-columns-gap"></i>
                      </div>
                    </div>
                    <div>
                      <h5 className="card-title mb-1">
                        UI/UX Design Principles
                      </h5>
                      <p className="card-text text-secondary small mb-3">
                        Learn to create intuitive and aesthetically pleasing
                        user interfaces and experiences.
                      </p>
                      <Link to="/learning-tracks/graphic-design-essentials" className="btn btn-sm btn-outline-secondary">
                        Start Learning
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm border rounded-4">
                <div className="card-body">
                  <div className="d-flex gap-3 align-items-start">
                    <div>
                      <div className="lp-icon bg-success-subtle text-success rounded-circle d-flex align-items-center justify-content-center">
                        <i className="bi bi-bar-chart-line"></i>
                      </div>
                    </div>
                    <div>
                      <h5 className="card-title mb-1">
                        Data Analysis with Python
                      </h5>
                      <p className="card-text text-secondary small mb-3">
                        Transform raw data into actionable insights using
                        powerful Python libraries.
                      </p>
                      <Link to="/learning-tracks/programming-fundamentals/python-fundamentals" className="btn btn-sm btn-outline-secondary">
                        Start Learning
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LearningPaths;
