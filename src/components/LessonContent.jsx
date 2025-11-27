
import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { DataContext } from '../context/DataContext';

function LessonContent() { 

    const { fieldId, id } = useParams(); 
    const articles = useContext(DataContext); 
    const navigate = useNavigate();
  
    const [content, setContent] = useState(0); 


    const targetFieldId = parseInt(fieldId);
    const targetArticleId = parseInt(id);


    const fieldData = articles.find(article => article.fieldId === targetFieldId);

  
    const lessonsInField = fieldData ? fieldData.items : [];

 
    const currentLesson = lessonsInField.find(item => item.id === targetArticleId);

    const currentIndex = lessonsInField.findIndex(item => item.id === targetArticleId);

    
    const handleNext = () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex < lessonsInField.length) {
            const nextArticleId = lessonsInField[nextIndex].id;

            navigate(`/learning/${targetFieldId}/${nextArticleId}`);
        }
    };

    const handlePrevious = () => {
        const prevIndex = currentIndex - 1;
        if (prevIndex >= 0) {
            const prevArticleId = lessonsInField[prevIndex].id;
          
            navigate(`/learning/${targetFieldId}/${prevArticleId}`);
        }
    };
    
  
    if (articles.length === 0) {
        return <div className="alert alert-info">يتم تحميل بيانات الكورسات...</div>;
    }

    if (!currentLesson) {

        return <div className="alert alert-danger">عفواً، لم يتم العثور على الدرس المطلوب (404).</div>;
    }

    return (
        <section className="lesson-section container">

            <div className="d-flex align-items-center gap-2 mt-4">
             
                <i className={currentLesson.icon || "fas fa-book-open"} style={{ color: 'var(--teal)', fontSize: '1.5rem' }}></i>
                <div>
                  
                    <h2>{currentLesson.title}</h2>
                    <p className="lesson-meta">
                        {currentLesson.desc} || الدرس رقم {currentIndex + 1}
                    </p>
                </div>
            </div>
            
            <div className="lesson-content mt-3">
                <div className="lesson-image">
                    {/* استخدام بيانات currentLesson */}
                    <img src={currentLesson.img || 'default-img.jpg'} alt={currentLesson.title} className="img-fluid rounded" />
                </div>
                <div className="lesson-text mt-4">
                    {/* استخدام بيانات currentLesson */}
                    <p>{currentLesson.desc}</p>
                </div>
            </div>
            
            <div className="lesson-nav d-flex justify-content-between mt-5">
                <button 
                    onClick={handlePrevious} 
                    className="btn btn-secondary btn-nav btn-prev" 
                    disabled={currentIndex === 0} 
                >
                    <i className="fas fa-chevron-left"></i> السابق
                </button>
                
                <button 
                    onClick={handleNext} 
                    className="btn btn-primary btn-nav btn-next" 
                    disabled={currentIndex === lessonsInField.length - 1}
                >
                    التالي<i className="fas fa-chevron-right"></i>
                </button>
            </div>
        </section>
    );
}

export default LessonContent;