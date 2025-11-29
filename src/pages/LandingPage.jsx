
import HeroSection from "../components/HomePage/HeroSection";
import LearningPaths from "../components/HomePage/LearningPaths";
import HowMentorEdWorks from "../components/HomePage/HowMentorEdWorks";
import Signup from "./Signup";
import Login from "./Login";
function LandingPage() {
  return (
    <>
      <HeroSection />
      <LearningPaths />
      <HowMentorEdWorks />    

      <div className="modal fade" id="signupModal" tabIndex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              {/* <h5 className="modal-title" id="signupModalLabel">Create Your Account</h5> */}
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Signup />
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              {/* <h5 className="modal-title" id="loginModalLabel">Welcome Back</h5> */}
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
