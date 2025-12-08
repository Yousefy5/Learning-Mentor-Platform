import './HomeStyles/HeroSection.css'


function HeroSection() {
  return (

    <section className="hero bg-mint py-5">
      <div className="container">
        <div className="row align-items-center gy-4">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold mb-3">
              Your Mentor for
              <br />
              Learning in Egypt
              <br />
              and the Arab World
            </h1>

            <form className="hero-search" role="search">
              <div
                className="input-group rounded-pill overflow-hidden shadow-sm"
                style={{ maxWidth: "420px" }}
              >
              </div>
            </form>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src="/assests/Imgs/page1/tech-company-amico.svg"
              alt="Learning illustration"
              className="img-fluid rounded-3"
              style={{ maxWidth: "400px" }}
            />
          </div>
        </div>
      </div>
    </section>



  );

}

export default HeroSection;