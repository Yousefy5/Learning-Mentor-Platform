// import HeroSection from '../components/DashboardPage/HeroSection'
// import LessonContent from '../components/DashboardPage/LessonContent'
// import { useContext } from 'react'
// import { DataContext } from '../context/DataContext';
// import { useParams } from 'react-router-dom'


// function Content() {
//     const lessons = useContext(DataContext);
//     const { fieldId,itemId } = useParams();
//     const targetIdF = parseInt(fieldId);
//     const targetIdT = parseInt(itemId);
//     const lessonField = lessons.find(lesson =>{ 
//          return lesson.fieldId === targetIdF});

//     const tagretLesson = lessonField.items.find(item =>{
//         return item.id === targetIdT});


//     return (
//         <>
//             <HeroSection titleOfHeader ={lessonField.field} titleOflesson={tagretLesson.title} />
//             <LessonContent />
//         </>
//     )
// }

// export default Content; 
// import HeroSection from '../components/DashboardPage/HeroSection'
// import LessonContent from '../components/DashboardPage/LessonContent'
// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom'
// import lessonsData from '../data/Data.json'

// function Content() {
//     const [lessons, setLessons] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const { fieldId, itemId } = useParams();
    
//     useEffect(() => {
//         setLessons(lessonsData.learningArticles);
//         setLoading(false);
//     }, []);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     const targetIdF = parseInt(fieldId);
//     const targetIdT = parseInt(itemId);
    
//     const lessonField = lessons.find(lesson => { 
//         return lesson.fieldId === targetIdF;
//     });

//     if (!lessonField) {
//         return <div>Field not found</div>;
//     }

//     const targetLesson = lessonField.items.find(item => {
//         return item.id === targetIdT;
//     });

//     if (!targetLesson) {
//         return <div>Lesson not found</div>;
//     }

//     return (
//         <>
//             <HeroSection titleOfHeader={lessonField.field} titleOflesson={targetLesson.title} />
//             <LessonContent />
//         </>
//     )
// }

// export default Content;
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
                
             
                const data = await import('../../Data/Data.json');
                setLessons(data.learningArticles);
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

    const targetIdF = parseInt(fieldId);
    const targetIdT = parseInt(itemId);
    
    const lessonField = lessons.find(lesson => lesson.fieldId === targetIdF);
    
    if (!lessonField) {
        return <div>Field not found</div>;
    }

    const targetLesson = lessonField.items.find(item => item.id === targetIdT);

    if (!targetLesson) {
        return <div>Lesson not found</div>;
    }

    return (
        <>
            <HeroSection 
                titleOfHeader={lessonField.field} 
                titleOflesson={targetLesson.title} 
            />
            <LessonContent />
        </>
    )
}

export default Content;