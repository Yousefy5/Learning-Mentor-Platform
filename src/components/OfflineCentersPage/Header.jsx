function Header() {
    return(
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
    )
}

export default Header;