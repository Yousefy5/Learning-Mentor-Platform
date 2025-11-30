import TrackIntroduction from "./components/TrackIntroduction";
import ProgressBar from "./components/ProgressBar";
import ModuleCards from "./components/ModuleCards";
import { themes } from "./themes";
function GraphicDesignEssentials() {
  return (
    <>
      {/* ===== Hero Section (Keep styles exactly as they are) ===== */}
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
                and techniques of modern design — from visual theory to branding
                and digital projects.
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
                src="..\public\assests\Imgs\Graphic\Design Process-amico.svg"
                alt="Design Illustration"
                className="img-fluid"
                style={{ maxHeight: "280px" }}
              />
            </div>
          </div>
        </section>
      </div>
      {/* ===== Module 1 ===== */}
      <ModuleCards
        theme={themes.design}
        ModuleTitle="Module 1: Design Core Foundations"
        title1="Introduction to Graphic Design"
        title2="Elements & Principles of Design"
        title3="Understanding Composition & Layout"
        paragraphText1="Discover what graphic design is and how creativity meets purpose."
        paragraphText2="Learn balance, contrast, alignment, and rhythm in visual design."
        paragraphText3="Master layout techniques for professional and eye-catching designs."
        photo1="/assests/Imgs/Graphic/Edit photo-rafiki.svg"
        photo2="/assests/Imgs/Graphic/Design inspiration-amico.svg"
        photo3="/assests/Imgs/Graphic/Design inspiration-pana.svg"
      />

      {/* ===== Module 2 ===== */}
      <ModuleCards
        theme={themes.design}
        ModuleTitle="Module 2: Tools & Practical Skills"
        title1="Introduction to Adobe Photoshop"
        title2="Getting Started with Adobe Illustrator"
        title3="Working with Canva & Figma for Design Projects"
        paragraphText1="Learn the basics of photo editing, layers, and adjustments."
        paragraphText2="Design scalable vector graphics for logos and illustrations."
        paragraphText3="Use modern, fast tools to create collaborative design projects."
        photo1="/assests/Imgs/Graphic/Edit photo-amico.svg"
        photo2="/assests/Imgs/Graphic/Designer life-pana.svg"
        photo3="/assests/Imgs/Graphic/Creation process-bro.svg"
      />

      {/* ===== Module 3 ===== */}
      <ModuleCards
        theme={themes.design}
        ModuleTitle="Module 3: Visual Identity & Branding"
        title1="Introduction to Branding"
        title2="Logo Design Principles"
        title3="Color Psychology & Brand Aesthetics"
        paragraphText1="Learn how brands create visual stories through design."
        paragraphText2="Craft memorable logos that reflect identity and purpose."
        paragraphText3="Understand how color impacts emotion and brand perception."
        photo1="/assests/Imgs/Graphic/Landing page-amico.svg"
        photo2="/assests/Imgs/Graphic/Artist-pana.svg"
        photo3="/assests/Imgs/Graphic/Design community-pana.svg"
      />
    </>
  );
}

export default GraphicDesignEssentials;
