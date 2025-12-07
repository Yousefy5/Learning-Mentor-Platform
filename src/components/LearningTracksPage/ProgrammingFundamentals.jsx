import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import './ProgrammingFundamentals.css'


function ProgrammingFundamentals(){
 
   const [tracks, setTracks] = useState([]);
 
   useEffect(() => {
     fetch("https://x8ki-letl-twmt.n7.xano.io/api:Y-s1sFXN/learning_tracks")
       .then(res => res.json())
       .then(data => {
         setTracks(data);
       })
       .catch(err => console.error(err));
   }, []);
 
   return (
     <>
       <div className="roadmap-page">
         <div className="container text-center px-5">
           <div className="row text-center mb-4">
             <div className="col">
               <h3>Explore Learning Tracks</h3>
             </div>
           </div>
 
           <div className="row justify-content-center g-4">
             {tracks.filter(track => track.type === "progTrack")
             .map(track => (
               <div className="col-md-4" key={track.id}>
                 <div className="learning-card">
                   <i className={track.img_link}></i>
                   <h5>{track.title}</h5>
                   <p>{track.description}</p>
                   <Link to={track.path} className="btn btn-primary"> Start Learning</Link>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>  
       </>
 );
 }





export default ProgrammingFundamentals