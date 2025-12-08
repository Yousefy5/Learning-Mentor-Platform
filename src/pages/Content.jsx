
import HeroSection from '../components/DashboardPage/HeroSection'
import LessonContent from '../components/DashboardPage/LessonContent'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Content() {
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { fieldId, itemId } = useParams();
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:RQjla4CO/contentarticles');
                const data = await response.json();
                
                setLessons(data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '100vh',
                fontSize: '24px' 
            }}>
                <h2>Loading...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ 
                display: 'flex',  
                justifyContent: 'center', 
                alignItems: 'center',  
                height: '100vh', 
                color: 'red'
            }}>
                <h2>Error: {error}</h2>
            </div>
        );
    }

    const targetFieldId = parseInt(fieldId);
    const targetArticleId = parseInt(itemId);
    
    // جيب كل المقالات اللي ليها نفس الـ field id
    const articlesInField = lessons.filter(lesson => lesson.contentfields_id === targetFieldId);
    
    // Debug logs
    console.log('===== DEBUG INFO =====');
    console.log('Target Field ID:', targetFieldId);
    console.log('Target Article ID:', targetArticleId);
    console.log('Total lessons from API:', lessons.length);
    console.log('Articles in this field:', articlesInField.length);
    console.log('Articles data:', articlesInField);
    console.log('=====================');
    
    if (articlesInField.length === 0) {
        return <div>Field not found - No articles with contentfields_id: {targetFieldId}</div>;
    }

    
    let currentArticle = articlesInField.find(article => article.id === targetArticleId);
    
    
    if (!currentArticle && articlesInField.length > 0) {
        currentArticle = articlesInField[0];
        window.history.replaceState(null, '', `/Content/${targetFieldId}/${currentArticle.id}`);
    }
    
    if (!currentArticle) {
        return <div>Article not found - No article with id: {targetArticleId}</div>;
    }

    return (
        <>
            <HeroSection 
                titleOflesson={currentArticle.title} 
            />
            <LessonContent 
                currentArticle={currentArticle}
                articlesInField={articlesInField}
                targetFieldId={targetFieldId}
                lessons={lessons}
            />
        </>
    )
}

export default Content;