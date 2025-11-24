import { Link, NavLink } from 'react-router-dom';
import '../styles/navbar.css'
function Navbar(){
    return(
<>        
{/* <!--Navbar--> */}
<nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand d-flex align-items-center" to="/">
      <span className="logo-text">MentorED</span>
    </Link>

    {/* <!-- Mobile button --> */}
    <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* <!-- Navbar Items --> */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/">Home</NavLink>
        </li>

        {/* <!-- Learning Tracks --> */}
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/learning-tracks">Learning Tracks</NavLink>
        </li>

        {/* <!-- Quizzes Dropdown --> */}
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/quizzes">Quizzes</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/offline-centres">Offline Centres</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "nav-link active" : "nav-link"} to="/dashboard">Dashboard</NavLink>
        </li>
      </ul>

      {/* <!-- My Account Button --> */}
      <div className="d-flex ms-lg-3 mt-lg-0" id="MyAccountBtn">
        <button className="btn btn-primary btn-sm" type="button" id="MyAccBtn">My Account</button>
      </div>
    </div>
  </div>
</nav>
{/* <!-- End Navbar --> */}

</>

    )
    



}

export default Navbar;