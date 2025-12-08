import { Link } from 'react-router-dom';
import './ProgrammingFundamentals.css'


function ProgrammingFundamentals(){
    return(
        <>
            
<div className="roadmap-page">
  <div className="container text-center px-5">

    <div className="row text-center mb-4">
      <div className="col">
        <h3>Programming Fundamentals</h3>
      </div>
    </div>


    <div className="row justify-content-center g-4">
      {/* <!-- Card 1 --> */}
      <div className="col-md-5">
        <div className="learning-card">
          <i className="bi bi-code-slash"></i>
          <h5>Data Science Using Python</h5>
          <p>
            Embark on your journey to becoming a proficient Python developer.
            This roadmap covers essential Python programming skills, from core syntax and logic to data structures and real-world projects.
          </p>
          <Link to="/content/5/1" className="btn btn-primary">Start Learning</Link>
        </div>
      </div>

      {/* <!-- Card 2 --> */}
      <div className="col-md-5">
        <div className="learning-card">
          <i className="bi bi-clipboard-check"></i>
          <h5>Web Development</h5>
          <p>Embark on your journey to becoming a full-stack web developer. This roadmap covers essential technologies from HTML to React, structured for clear progress and practical application.</p>
          <Link to="/content/1/1" className="btn btn-primary">Start Learning</Link>
        </div>
      </div>
    </div>
  </div>
</div>

        
        
        
        
        </>



    );




}

export default ProgrammingFundamentals