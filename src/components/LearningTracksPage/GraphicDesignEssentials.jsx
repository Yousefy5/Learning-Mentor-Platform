
import ModuleCards from "./components/ModuleCards";
import { themes } from "./themes";

function GraphicDesignEssentials() {
  return (
    <>
      {/* ===== Hero Section ===== */}
      <div className="roadmap-page">
        <section
          className="hero-section py-5"
          style={{
            backgroundColor: "#ff6f61",
            borderRadius: "15px",
            margin: "20px",
          }}
        >
          <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between text-white text-start">
            {/* Left Content */}
            <div className="col-lg-6 mb-4 mb-lg-0 ps-lg-5 pe-lg-3">
              <h2 className="fw-bold">Graphic Design Essentials</h2>
              <p className="mb-3">
                Start your creative journey to becoming a professional graphic
                designer. This roadmap covers the essential principles, tools,
                and techniques of modern design.
              </p>

              {/* Progress Bar */}
              <div className="d-flex align-items-center gap-2 mt-2">
                <div
                  className="progress flex-grow-1"
                  style={{
                    height: "8px",
                    backgroundColor: "rgba(255,255,255,0.3)",
                  }}
                >
                  <div
                    className="progress-bar"
                    style={{ width: "75%", background: "#9554a1" }}
                  ></div>
                </div>
                <span className="fw-semibold text-white">75%</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-5 text-center">
              <img
                src="../public/assests/Imgs/Graphic/Design Process-amico.svg"
                alt="Design Illustration"
                className="img-fluid"
                style={{ maxHeight: "280px" }}
              />
            </div>
          </div>
        </section>
      </div>

      {/* ===== Module 1: Design Core Foundations ===== */}
      <ModuleCards
        theme={themes.design}
        ModuleTitle="Module 1: Design Core Foundations"
        
        title1="Introduction to Graphic Design"
        paragraphText1="Discover what graphic design is and how creativity meets purpose."
        photo1="../public/assests/Imgs/Graphic/Edit photo-rafiki.svg"
        card1FieldId={2}
        card1ArticleId={10}
        
        title2="Elements & Principles of Design"
        paragraphText2="Learn balance, contrast, alignment, and rhythm in visual design."
        photo2="../public/assests/Imgs/Graphic/Design inspiration-amico.svg"
        card2FieldId={2}
        card2ArticleId={11}
        
        title3="Layout Design and Visual Hierarchy"
        paragraphText3="Master layout techniques for professional and eye-catching designs."
        photo3="../public/assests/Imgs/Graphic/Design inspiration-pana.svg"
        card3FieldId={2}
        card3ArticleId={16}
      />

      {/* ===== Module 2: Tools & Practical Skills ===== */}
      <ModuleCards
        theme={themes.design}
        ModuleTitle="Module 2: Tools & Practical Skills"
        
        title1="Introduction to Adobe Photoshop"
        paragraphText1="Learn the basics of photo editing, layers, and adjustments."
        photo1="../public/assests/Imgs/Graphic/Edit photo-amico.svg"
        card1FieldId={2}
        card1ArticleId={12}
        
        title2="Getting Started with Adobe Illustrator"
        paragraphText2="Design scalable vector graphics for logos and illustrations."
        photo2="../public/assests/Imgs/Graphic/Designer life-pana.svg"
        card2FieldId={2}
        card2ArticleId={13}
        
        title3="Design Tools Mastery: Adobe Creative Suite"
        paragraphText3="Master industry-standard design software efficiently."
        photo3="../public/assests/Imgs/Graphic/Creation process-bro.svg"
        card3FieldId={2}
        card3ArticleId={18}
      />

      {/* ===== Module 3: Visual Identity & Branding ===== */}
      <ModuleCards
        theme={themes.design}
        ModuleTitle="Module 3: Visual Identity & Branding"
        
        title1="Color Theory and Psychology in Design"
        paragraphText1="Understand how color impacts emotion and brand perception."
        photo1="../public/assests/Imgs/Graphic/Landing page-amico.svg"
        card1FieldId={2}
        card1ArticleId={14}
        
        title2="Logo Design and Brand Identity"
        paragraphText2="Craft memorable logos that reflect identity and purpose."
        photo2="../public/assests/Imgs/Graphic/Artist-pana.svg"
        card2FieldId={2}
        card2ArticleId={17}
        
        title3="Typography Principles for Digital Media"
        paragraphText3="Master typography for impactful and readable designs."
        photo3="../public/assests/Imgs/Graphic/Design community-pana.svg"
        card3FieldId={2}
        card3ArticleId={15}
      />
    </>
  );
}

export default GraphicDesignEssentials;