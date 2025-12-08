import { Link } from 'react-router-dom';
import '../styles/LearningTracks.css'


function LearningTracks() {
  return (
    <>
      <div className="roadmap-page">
        <div className="container text-center px-5">
          <div className="row text-center mb-4">
            <div className="col">
              <h3>Explore Learning Tracks</h3>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            {/* <!-- Card 1 --> */}
            <div className="col-md-4">
              <div className="learning-card">
                <i className="bi bi-code-slash"></i>
                <h5>Web Development & AI & Data science</h5>
                <p>
                  Master the building blocks of coding, from logic and
                  algorithms to data structures, and start your journey in
                  programming and development.
                </p>
                <Link to="/learning-tracks/programming-fundamentals" className="btn btn-primary">Start Learning</Link>
              </div>
            </div>

            {/* <!-- Card 2 --> */}
            <div className="col-md-4">
              <div className="learning-card">
                <i className="bi bi-brush"></i>
                <h5>Graphic Design Essentials</h5>
                <p>
                  Unleash your creativity with core design principles, refined typography, 
                  and essential industry tools like Adobe Photoshop and Illustrator to develop visuals.
                </p>
                <Link to="/learning-tracks/graphic-design-essentials" className="btn btn-primary">Start Learning</Link>
              </div>
            </div>

            {/* <!-- Card 3 --> */}
            <div className="col-md-4">
              <div className="learning-card">
                <i className="bi bi-clipboard-check"></i>
                <h5>Productivity Tools Mastery</h5>
                <p>
                  Boost your efficiency with expert-level skills in essential
                  productivity software, streamlining your workflow and
                  maximizing output.
                </p>
                <Link to="/learning-tracks/productivity-tools" className="btn btn-primary">Start Learning</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LearningTracks;
