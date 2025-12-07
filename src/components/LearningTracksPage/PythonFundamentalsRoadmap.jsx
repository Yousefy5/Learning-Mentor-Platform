import TrackIntroduction from "./components/TrackIntroduction.jsx";
import ModuleCards from "./components/ModuleCards.jsx";
import ProgressBar from "./components/ProgressBar.jsx";
import { useEffect, useState } from "react";
import { themes } from "./themes.js";

function PythonFundamentalsRoadmap() {
  
  const [modules, setModules] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {

    fetch("https://x8ki-letl-twmt.n7.xano.io/api:Y-s1sFXN/learning_tracks")
      .then(res => res.json())
      .then(data => {
      const pythonTrack = data.find(item => item.id === 5); //To take only data from python roadmap in the database
      setTracks(pythonTrack);
          })
      .catch(err => console.error(err));

  fetch("https://x8ki-letl-twmt.n7.xano.io/api:fsvFqTVK/courses")
    .then(res => res.json())
    .then(data => {
      const filtered = data.filter(item => item.roadmap_id === 1)
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
      {tracks && (
  <TrackIntroduction
    TrackTitle={tracks.title}
    TrackDescription={tracks.description}
  />
)}
      {modules.map((module, index) => (
      <ModuleCards
        key={index}
        theme={themes.python}
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
export default PythonFundamentalsRoadmap;
