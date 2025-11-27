function ProgressTracker({namesOftopicInCourse}){


return (
   <div className="progress-item">
                    <div className="progress-circle completed">
                        <i className="fas fa-check"></i>
                    </div>
                    <span className="progress-label">Intro to HTML{namesOftopicInCourse}</span>
                </div>
                // <span class="progress-arrow"> ">" </span>
               
)

}
export default ProgressTracker