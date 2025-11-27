function Nav(){

return(
     <div className="container-fluid p-0">

 <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">

            <div className="container-fluid">

                <a className="navbar-brand d-flex align-items-center" href="#">
                    <span className="logo-text">MentorED</span>
                </a>

              
                <button className="navbar-toggler" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
      
                <div className="collapse navbar-collapse " id="navbarNav">

                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Learning Tracks</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Quizzes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Offline Centres</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Dashboard</a>
                        </li>
                    </ul>

                 

                    <div className="d-flex ms-lg-3 mt-lg-0" id="MyAccountBtn">
                        <button className="btn btn-primary btn-sm " type="button" id="MyAccBtn">My Account</button>
                    </div>

                  
                </div>
         

            </div>
        </nav>
</div>
)

}

export default Nav