import center from '../../public/assests/Imgs/page6/center.png';
import academy from '../../public/assests/Imgs/page6/academy.png';
import campus from '../../public/assests/Imgs/page6/campus.png';
import hub from '../../public/assests/Imgs/page6/hub.png';
import labs from '../../public/assests/Imgs/page6/labs.png';
import school from '../../public/assests/Imgs/page6/school.png';
import '../styles/OfflineCenters.css';
function OfflineCenters() {
    return (
      <>
        <div className="centers-page">
            <div className="container text-center px-5 ">
                <section
            className="hero-section py-5"
            style={{
              backgroundColor: "#018a83",
              borderRadius: "15px",
              margin: "20px",
            }}
          >
            <div className="container text-white text-center">
              <h2 className="fw-bold mb-3">Offline Learning Centers</h2>
              <p className="mb-0" style={{color: "white"}}>
                Discover physical learning centers across Egypt offering curated roadmaps in programming, graphic design, and productivity tools.
              </p>
            </div>
          </section>

                <div className="filters">
                    <div className="dropdown" style={{width: "250px"}}>
                        <select style={{width: "100%"}}>
                            <option value="" disabled selected>All Cities</option>
                            <option value="Cairo">Cairo</option>
                            <option value="Alexandria">Alexandria</option>
                            <option value="Giza">Giza</option>
                            <option value="Shubra El-Kheima">Shubra El-Kheima</option>
                            <option value="Port Said">Port Said</option>
                            <option value="Suez">Suez</option>
                            <option value="Luxor">Luxor</option>
                            <option value="Aswan">Aswan</option>
                            <option value="Mansoura">Mansoura</option>
                            <option value="Tanta">Tanta</option>
                            <option value="Zagazig">Zagazig</option>
                            <option value="Ismailia">Ismailia</option>
                            <option value="Damietta">Damietta</option>
                            <option value="Faiyum">Faiyum</option>
                            <option value="Beni Suef">Beni Suef</option>
                            <option value="Minya">Minya</option>
                            <option value="Sohag">Sohag</option>
                            <option value="Qena">Qena</option>
                            <option value="Asyut">Asyut</option>
                            <option value="Hurghada">Hurghada</option>
                        </select>
                    </div>
                    <div className="dropdown" style={{width: "250px"}}>
                        <select style={{width: "100%"}}>
                            <option value="" disabled selected>All Categories</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Mobile Apps">Mobile Apps</option>
                            <option value="Design">Design</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Business">Business</option>
                            <option value="Personal Development">Personal Development</option>
                            <option value="Language Learning">Language Learning</option>
                        </select>
                    </div>
                    <button type="button" className="btn btn-success">Apply Filters</button>
                </div>


                {/* <div className="map">
                    <img src="Imgs/page6/Screenshot 2025-08-22 004311.png" alt=""/>
                </div> */}


                <div className="row text-center mb-4">
                    <div className="col">
                        <h3>Featured Learning Centers</h3>
                    </div>
                </div>
                <div className="row g-4">

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card h-100 text-center">
                            <img src={center} className="card-img-top w-100" alt="Card 1"/>
                            <div className="card-body">
                                <h5 className="card-title">Cairo Innovation Center</h5>
                                <p className="card-text">123 Nile St, Zamalek, Cairo</p>
                                <div className="content">
                                    <button type="button" className="btn btn-danger extra">Programming</button>
                                    <button type="button" className="btn btn-danger extra">Productivity Tools</button>
                                </div>
                                <a href="#" className="btn btn-primary main">View Location</a>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card h-100 text-center">
                            <img src={school} className="card-img-top w-100" alt="Card 2"/>
                            <div className="card-body">
                                <h5 className="card-title">Alexandria Art School</h5>
                                <p className="card-text">45 Corniche Rd, Alexandria</p>
                                <div className="content">
                                    <button type="button" className="btn btn-danger extra">Graphic Design</button>
                                    <button type="button" className="btn btn-danger extra">Productivity Tools</button>
                                </div>
                                <a href="#" className="btn btn-primary main">View Location</a>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card h-100 text-center">
                            <img src={academy} className="card-img-top w-100" alt="Card 3"/>
                            <div className="card-body">
                                <h5 className="card-title">Giza Skill Academy</h5>
                                <p className="card-text">78 Pyramids Ave, Giza</p>
                                <div className="content">
                                    <button type="button" className="btn btn-danger extra">Programming</button>
                                    <button type="button" className="btn btn-danger extra">Graphic Design</button>
                                </div>
                                <a href="#" className="btn btn-primary main">View Location</a>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card h-100 text-center">
                            <img src={hub} className="card-img-top w-100" alt="Card 4"/>
                            <div className="card-body">
                                <h5 className="card-title">Luxor Learning Hub</h5>
                                <p className="card-text">10 Temple St, Luxor</p>
                                <div className="content">
                                    <button type="button" className="btn btn-danger extra">Productivity Tools</button>
                                    <button type="button" className="btn btn-danger extra">Programming</button>
                                </div>
                                <a href="#" className="btn btn-primary main">View Location</a>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card h-100 text-center">
                            <img src={campus} className="card-img-top w-100" alt="Card 5"/>
                            <div className="card-body">
                                <h5 className="card-title">Mansoura Tech Campus</h5>
                                <p className="card-text">20 University Blvd, Mansoura</p>
                                <div className="content">
                                    <button type="button" className="btn btn-danger extra">Programming</button>
                                </div>
                                <a href="#" className="btn btn-primary main">View Location</a>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="card h-100 text-center">
                            <img src={labs} className="card-img-top w-100" alt="Card 6"/>
                            <div className="card-body">
                                <h5 className="card-title">Suez Creative Labs</h5>
                                <p className="card-text">35 Canal St, Suez</p>
                                <div className="content">
                                    <button type="button" className="btn btn-danger extra">Graphic Design</button>
                                </div>
                                <a href="#" className="btn btn-primary main">View Location</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
}

export default OfflineCenters;