import { useNavigate } from 'react-router-dom';
import { useProgress } from '../../context/ProgressContext';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

function LessonContent({ currentArticle, articlesInField, targetFieldId, lessons }) {
    const navigate = useNavigate();
    const { updateProgress } = useProgress(); 

    // جيب index المقال الحالي
    const currentIndex = articlesInField.findIndex(item => item.id === currentArticle.id);
    const total = articlesInField.length;

    const goToContent = (articleId) => {
        navigate(`/Content/${targetFieldId}/${articleId}`);
    };

    const handleNext = () => {
        if (currentIndex + 1 < articlesInField.length) {
            const nextArticle = articlesInField[currentIndex + 1];
            goToContent(nextArticle.id);
            
    
            const newPercentage = ((currentIndex + 2) / total) * 100;
            updateProgress(targetFieldId, newPercentage); 
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            const prevArticle = articlesInField[currentIndex - 1];
            goToContent(prevArticle.id);
        }
    };

    return (
        <>
            <Stepper activeStep={currentIndex} alternativeLabel className='mt-4'>
                {articlesInField.map((lesson) => (
                    <Step key={lesson.id}>
                        <StepLabel className="my-step-label">{lesson.title}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <section className="lesson-section container">
                <div className="d-flex align-items-center gap-2 mt-4">
                    <i className="bi bi-book-half fs-2" style={{ 
                        color: 'var(--teal)', 
                        fontSize: '1.5rem', 
                        paddingRight: '0.5rem' 
                    }}></i>
                    <div>
                        <h2>{currentArticle.title}</h2>
                    </div>
                </div>

                <div className="lesson-content mt-3">
                    <div className="lesson-image">
                        <img 
                            src={currentArticle.img || 'default-img.jpg'} 
                            alt={currentArticle.title} 
                            className="img-fluid rounded" 
                        />
                    </div>
                    <div className="lesson-text mt-4">
                        <p className='desc'>{currentArticle.desc}</p>
                    </div>
                </div>

                <div className="lesson-nav d-flex justify-content-between mt-5">
                    <button 
                        onClick={handlePrevious} 
                        className="btn btn-hovv btn-nav btn-prev" 
                        disabled={currentIndex === 0}
                    >
                        <i className="fas fa-chevron-left"></i> Previous
                    </button>

                    <button 
                        onClick={handleNext} 
                        className="btn btn-hovv btn-nav btn-next" 
                        disabled={currentIndex === articlesInField.length - 1}
                    >
                        Next <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            </section>
        </>
    );
}

export default LessonContent;