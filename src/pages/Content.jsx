import Nav from '../components/Nav'
import HeroSection from '../components/HeroSection'
import ProgressTracker from '../components/ProgressTracker'
import LessonContent from '../components/LessonContent'
import Footer from '../components/Footer'
import { useContext } from 'react'
import { DataContext } from '../context/DataContext';
import { useParams } from 'react-router-dom'


function Content() {
    const lessons = useContext(DataContext);
    const { fieldId,Id } = useParams();
    const targetIdF = parseInt(fieldId);
    const targetIdT = parseInt(Id);
    const lessonField = lessons.find(lesson =>{ 
         return lesson.fieldId === targetIdF});

    const tagretLesson = lessonField.items.find(item =>{
        return item.id === targetIdT});

console.log("lessonField:", lessonField);
console.log("targetLesson:", targetLesson);
console.log("items: heeeeere", lessonField.items);


    return (
        <>
            <Nav />
         {/* <HeroSection titleOfHeader={lessonField.field} titleOflesson={lessonField.items[tagretLesson].title} />
            
            <div className="progress-container"> 
                <div className="progress-grid">
                    <ProgressTracker namesOftopicInCourse={lessonField.items[tagretLesson].title} />
                    <LessonContent 
                        title={lessonField.items[tagretLesson].title}
                        desc={lessons[lessonField].items[tagretLesson].desc}
                        img={lessons[lessonField].items[tagretLesson].img}
                        id={lessons[lessonField].items[tagretLesson].id}
                        key={lessons[lessonField].items[tagretLesson].id}
                        field={lessonField.field}/>
                </div>
                </div> */}

            
            <Footer />
        </>
    )
}

export default Content; 

