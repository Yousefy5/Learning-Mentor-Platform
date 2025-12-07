import TrackIntroduction from "./components/TrackIntroduction";
import ProgressBar from "./components/ProgressBar";
import ModuleCards from "./components/ModuleCards";
import { useEffect, useState } from "react";
import { themes } from "./themes";
function GraphicDesignEssentials() {
  const [modules, setModules] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {

    fetch("https://x8ki-letl-twmt.n7.xano.io/api:Y-s1sFXN/learning_tracks")
      .then(res => res.json())
      .then(data => {
      const grahpicTracks = data.find(item => item.id === 3); //To take only data from python roadmap in the database
      setTracks(grahpicTracks);
          })
      .catch(err => console.error(err));

  fetch("https://x8ki-letl-twmt.n7.xano.io/api:fsvFqTVK/courses")
    .then(res => res.json())
    .then(data => {
      const filtered = data.filter(item => item.roadmap_id === 3)
      .sort((a, b) => a.id - b.id);

      const chunked = [];
      for (let i = 0; i < filtered.length; i += 3) {
        chunked.push(filtered.slice(i, i + 3));
      }

      setModules(chunked);
    });
}, []);

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
              <h2 className="fw-bold">{tracks.title}</h2>
              <p className="mb-3">
                Start your creative journey to becoming a professional graphic
                designer. This roadmap covers the essential principles, tools,
                and techniques of modern design — from visual theory to branding
                and digital projects.
              </p>

              {/* Progress Bar */}
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
      {modules.map((module, index) => (
      <ModuleCards
        key={index}
        theme={themes.design}
        ModuleTitle={`Module ${index + 1}`}
        items={module.map(item => ({
          title: item.title,
          description: item.description,
          photo: item.ImgPath
        }))}
      />
)
)}
</>
)}

export default GraphicDesignEssentials;
