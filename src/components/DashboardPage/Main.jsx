import React, { useContext } from 'react';
import Achievements from "./Achievements";
import Course from "./Course";
import SavedCenters from "./SavedCenters";
import { DataContext } from '../../context/DataContext';
// import '../../styles/style.css';
// import '../../styles/style2.css';

function Main() {
    const courses = useContext(DataContext);
    console.log(courses);

    const displayCourses = courses.map((course) => {
 
        const firstLessonId = course.items[0]?.id
        return (
            <Course
                key={course.fieldId}
                title={course.field}
                icon={course.icon}
                fieldId={course.fieldId}
                firstLessonId={firstLessonId}
            />
        );
    });

    return (
        <div className="container mb-5">
            <div className="mb-5">
                <p className="h4 mb-4 fw-bold">Your Learning Progress</p>
                <div className="row g-4">
                    {displayCourses}
                </div>
            </div>

            <div className="mb-5">
                <p className="h4 mb-4 fw-bold">Your Achievements</p>
                <div className="row g-4">
                    <Achievements title="Quizzes Completed" icon="bi bi-award fs-6" numOfThing='50' motive='Keep up the great work!' button='Take More Quizzes' />
                    <Achievements title="Learning Streak" icon="bi bi-lightbulb fs-6" numOfThing='7' motive='Ready for the next challenge?' button='Start a New Lesson' />
                    <Achievements title="Lessons Mastered" icon="bi bi-check2 fs-6" numOfThing='12' motive='Consistency is key to mastery'  />
                    <Achievements title="Learning Hours" icon="bi bi-house-door fs-6" numOfThing='180' motive='Invested in your future'  />
                </div>
            </div>

            <div className="mb-5">
                <p className="h4 mb-4 fw-bold">Your Saved Learning Center</p>
                <div className="row g-0 d-flex justify-content-evenly">
                    <SavedCenters title='Cairo Tech Hub' city='Cairo' />
                    <SavedCenters title='Alex Hub' city='Alex' />
                    <SavedCenters title='Giza Center' city='Giza' />
                </div>
            </div>
        </div>
    );
}

export default Main;
