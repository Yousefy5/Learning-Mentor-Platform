import { Link } from 'react-router-dom';
function Course({ title, icon, firstLessonId, fieldId,percentage }) {
    return (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="p-1 rounded h-100">
                <div className="d-flex align-items-center mb-2">
                    <div className="back-img me-2">
                        <i className={icon || "bi bi-code me-2"}></i>
                    </div>
                    <p className="my-2 fs-6 ">{title || 'Web Development Fundamentals'}</p>
                </div>
      <div className="progress " role="progressbar" aria-label="Animated striped example" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100" style={{height:12}}>
    <div 
        className="progress-bar" 
        style={{ 
            width: `${percentage}%`, 
            backgroundColor: '#008C8C' 
        }}
    />
</div>
        <p className='text-muted mt-2'> {percentage}% Completed</p>
                <Link to={`/Content/${fieldId}/${firstLessonId}`}>
                    <button className="btn btn-coloro btn-sm w-100 mt-2 btn-c">
                        Continue Learning
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Course;
