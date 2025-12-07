import "./ModuleCards.css";

function ModuleCards({ ModuleTitle, items, theme }) {
  return (
    <div className="roadmap-page">
      <div className="row mb-3">
        <div className="col-12">
          <h4 className="text-module" style={{ color: theme.header }}>
            {ModuleTitle}
          </h4>

          <div
            style={{
              width: "60px",
              height: "3px",
              background: theme.header,
              margin: "0px auto",
              borderRadius: "2px",
            }}
          ></div>
        </div>
      </div>

      <div className="row mb-5">
        {items.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100">
              <img src={item.photo} className="card-img-top" alt={item.title} />

              <div className="card-body text-center">
                <h5 className="card-title" style={{ color: theme.cardTitle }}>
                  {item.title}
                </h5>

                <p className="card-text" style={{ color: theme.text }}>
                  {item.description}
                </p>

                <a
                  href="#"
                  className="btn btn-primary"
                  style={{
                    backgroundColor: theme.primary,
                    border: "none",
                  }}
                >
                  View Resource
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModuleCards;
