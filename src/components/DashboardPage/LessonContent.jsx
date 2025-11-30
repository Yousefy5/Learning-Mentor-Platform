import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
function LessonContent() {
    const { fieldId, itemId } = useParams();
    const articles = useContext(DataContext);
    const navigate = useNavigate();

    const targetFieldId = parseInt(fieldId);
    const targetArticleId = parseInt(itemId);

    const fieldData = articles.find(article => article.fieldId === targetFieldId);
    const lessonsInField = fieldData ? fieldData.items : [];

    const currentLesson = lessonsInField.find(item => item.id === targetArticleId);
    const currentIndex = lessonsInField.findIndex(item => item.id === targetArticleId);

    const goToContent = (articleId) => {
        navigate(`/Content/${targetFieldId}/${articleId}`);
    };

    const handleNext = () => {
        if (currentIndex + 1 < lessonsInField.length) {
            goToContent(lessonsInField[currentIndex + 1].id);
        }
    };

    const handlePrevious = () => {
        if (currentIndex - 1 >= 0) {
            goToContent(lessonsInField[currentIndex - 1].id);
        }
    };

    if (articles.length === 0) return <div className="alert alert-info">Not Found</div>;
    if (!currentLesson) return <div className="alert alert-danger">Not Found (404).</div>;



    return (
        <>

        <Stepper activeStep={currentIndex} alternativeLabel className='mt-4'>
  {lessonsInField.map((lesson) => (
    <Step key={lesson.id}>
      <StepLabel  className="my-step-label"> {lesson.title}</StepLabel>
    </Step>
  ))}
</Stepper>

        <section className="lesson-section container">
            <div className="d-flex align-items-center gap-2 mt-4">
                <i className="bi bi-book-half fs-2" style={{ color: 'var(--teal)', fontSize: '1.5rem' , paddingRight:'0.5rem' }}></i>
                <div>
                    <h2>{currentLesson.title}</h2>
                   
                </div>
            </div>

            <div className="lesson-content mt-3">
                <div className="lesson-image">
                    <img src={currentLesson.img || 'default-img.jpg'} alt={currentLesson.title} className="img-fluid rounded" />
                </div>
                <div className="lesson-text mt-4">
                    <p className='desc'>{currentLesson.desc}</p>
                </div>
            </div>

            <div className="lesson-nav d-flex justify-content-between mt-5">
                <button onClick={handlePrevious} className="btn  btn-hovv btn-nav btn-prev" disabled={currentIndex === 0}>
                    <i className="fas fa-chevron-left"></i> Previous
                </button>

                <button onClick={handleNext} className="btn btn-hovv btn-nav btn-next" disabled={currentIndex === lessonsInField.length - 1}>
          Next<i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </section>
        </>
    );
}

export default LessonContent;
