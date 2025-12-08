
import { Link } from "react-router-dom";
import "./ModuleCards.css";

function ModuleCards({
  ModuleTitle,
  title1,
  title2,
  title3,
  paragraphText1,
  paragraphText2,
  paragraphText3,
  photo1,
  photo2,
  photo3,
  theme,

  card1FieldId,
  card1ArticleId,
  card2FieldId,
  card2ArticleId,
  card3FieldId,
  card3ArticleId,
}) {
  return (
    <>
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
                borderRadius: "2px"
              }}
            ></div>
          </div>
        </div>

        <div className="row mb-5 g-4">
          {/* === CARD 1 === */}
          <div className="col-md-4 col">
            <div className="card h-100">
              <img src={photo1} className="card-img-top" alt="" />
              <div className="card-body text-center">
                <h5 className="card-title" style={{ color: theme.cardTitle }}>
                  {title1}
                </h5>
                <p className="card-text " style={{ color: theme.text }}>
                  {paragraphText1}
                </p>
                <Link
                  to={`/Content/${card1FieldId}/${card1ArticleId}`}
                  className="btn btn-primary "
                  style={{ backgroundColor: theme.primary, border: "none" }}
                >
                  View Resource
                </Link>
              </div>
            </div>
          </div>

          {/* === CARD 2 === */}
          <div className="col-md-4">
            <div className="card h-100">
              <img src={photo2} className="card-img-top" alt="" />
              <div className="card-body text-center">
                <h5 className="card-title" style={{ color: theme.cardTitle }}>
                  {title2}
                </h5>
                <p className="card-text" style={{ color: theme.text }}>
                  {paragraphText2}
                </p>
                <Link
                  to={`/Content/${card2FieldId}/${card2ArticleId}`}
                  className="btn btn-primary"
                  style={{ backgroundColor: theme.primary, border: "none" }}
                >
                  View Resource
                </Link>
              </div>
            </div>
          </div>

          {/* === CARD 3 === */}
          <div className="col-md-4">
            <div className="card h-100">
              <img src={photo3} className="card-img-top" alt="" />
              <div className="card-body text-center">
                <h5 className="card-title" style={{ color: theme.cardTitle }}>
                  {title3}
                </h5>
                <p className="card-text" style={{ color: theme.text }}>
                  {paragraphText3}
                </p>
                <Link
                  to={`/Content/${card3FieldId}/${card3ArticleId}`}
                  className="btn btn-primary"
                  style={{ backgroundColor: theme.primary, border: "none" }}
                >
                  View Resource
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModuleCards;