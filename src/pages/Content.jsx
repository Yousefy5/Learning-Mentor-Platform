import HeroSection from '../components/DashboardPage/HeroSection'
import LessonContent from '../components/DashboardPage/LessonContent'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext';
import { useParams } from 'react-router-dom'


function Content() {
    const lessons = useContext(DataContext);
    const { fieldId,itemId } = useParams();
    const targetIdF = parseInt(fieldId);
    const targetIdT = parseInt(itemId);
    const lessonField = lessons.find(lesson =>{ 
         return lesson.fieldId === targetIdF});

    const tagretLesson = lessonField.items.find(item =>{
        return item.id === targetIdT});


    return (
        <>
            <HeroSection titleOfHeader ={lessonField.field} titleOflesson={tagretLesson.title} />
            <LessonContent />
        </>
    )
}

export default Content; 

