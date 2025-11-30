import { Link } from 'react-router-dom';

function Course({ title, icon, firstLessonId, fieldId }) {
    return (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="p-3 rounded h-100">
                <div className="d-flex align-items-center mb-2">
                    <div className="back-img me-2">
                        <i className={icon || "bi bi-code me-2"}></i>
                    </div>
                    <p className="mb-0 fs-6 ">{title || 'Web Development Fundamentals'}</p>
                </div>


                <Link to={`/Content/${fieldId}/${firstLessonId}`}>
                    <button className="btn btn-coloro btn-sm w-100 mt-3 btn-c">
                        Continue Learning
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Course;
