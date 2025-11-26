import '../styles/OfflineCenters.css';
import Main from '../components/OfflineCentersPage/main';
function OfflineCenters() {
    return (
      <>
        <div className="centers-page">
            <div className="container text-center px-5 ">
                <section
            className="hero-section py-5 "
            style={{
              backgroundColor: "#018a83",
              borderRadius: "15px",
              margin: "20px",
              marginBottom: "50px"
            }}
          >
            <div className="container text-white text-center ">
              <h2 className="fw-bold mb-3">Offline Learning Centers</h2>
              <p className="mb-0" style={{color: "white"}}>
                Discover physical learning centers across Egypt offering curated roadmaps in programming, graphic design, and productivity tools.
              </p>
            </div>
          </section>

                <div className="filters"
                style={{marginBottom: "40px"}}>
                    <div className="dropdown" style={{width: "250px"}}>
                        <select style={{width: "100%"}}>
                            <option value="" selected>All Cities</option>
                            <option value="Cairo">Cairo</option>
                            <option value="Alexandria">Alexandria</option>
                            <option value="Giza">Giza</option>
                            <option value="Suez">Suez</option>
                            <option value="Luxor">Luxor</option>
                            <option value="Mansoura">Mansoura</option>

                        </select>
                    </div>
                    <div className="dropdown" style={{width: "250px"}}>
                        <select style={{width: "100%"}}>
                            <option value="" selected>All Categories</option>
                            <option value="Programming">Programming</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Productivity Tools">Productivity Tools</option>
                        </select>
                    </div>
                    <button type="button" className="btn btn-success">Apply Filters</button>
                </div>

                <div className="row text-center mb-4">
                    <div className="col">
                        <h3>Featured Learning Centers</h3>
                    </div>
                </div>
                    <Main/>
            </div>
        </div>
        </>
    )
}

export default OfflineCenters;