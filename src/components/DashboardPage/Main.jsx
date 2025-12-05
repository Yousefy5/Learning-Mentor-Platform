import React, { useContext } from 'react';
import Achievements from "./Achievements";
import Course from "./Course";
import SavedCenters from "./SavedCenters";
import { DataContext } from '../../context/DataContext';
import { useProgress } from '../../context/ProgressContext';

function Main() {
    const courses = useContext(DataContext);
    const { getProgress } = useProgress(); 

    const displayCourses = courses.map((course) => {
        const firstLessonId = course.items[0]?.id;
        const fieldPercentage = getProgress(course.fieldId); 
        
        return (
            <Course
                key={course.fieldId}
                title={course.field}
                icon={course.icon}
                fieldId={course.fieldId}
                firstLessonId={firstLessonId}
                percentage={fieldPercentage} 
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
                    <Achievements title="Quizzes Completed" icon="bi bi-award fs-6" numOfThing='50' motive='Keep up the great work!' button='Take More Quizzes' link="/quizzes"/>
                    <Achievements title="Learning Streak" icon="bi bi-lightbulb fs-6" numOfThing='7' motive='Ready for the next challenge?' button='Start a New Lesson' link="/learning-tracks"/>
                    <Achievements title="Lessons Mastered" icon="bi bi-check2 fs-6" numOfThing='12' motive='Consistency is key to mastery'  />
                    <Achievements title="Learning Hours" icon="bi bi-house-door fs-6" numOfThing='180' motive='Invested in your future'  />
                </div>
            </div>

            <div className="mb-5">
                <p className="h4 mb-4 fw-bold">Your Saved Learning Center</p>
                <div className="row g-0 d-flex justify-content-evenly">
                    <SavedCenters title='Cairo Tech Studio' city='Cairo' link="https://maps.app.goo.gl/AR3zFemYAvH6YSee9"/>
                    <SavedCenters title='Alexandria Digital Campus' city='Alexandria' link="https://maps.app.goo.gl/r4z2D6s2MXA2koqj7"/>
                    <SavedCenters title='Giza Skill Academy' city='Giza' link="https://maps.app.goo.gl/6sY6s5fjQWYNSfyt9"/>
                </div>
            </div>
        </div>
    );
}

export default Main;

//da 3shan ama ygelk api f3ln thoty keyam vta3to fe courses msh context ely fo2 lesa msh shghal
    // const [courses, setCourses] = useState([]);
    // const [achievements, setAchievements] = useState([]);
    // const [savedCenters, setSavedCenters] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => { */}
    {/* //     const fetchData = async () => { */}
       {/* try { */}
    //             setLoading(true);
                
    //             // Fetch courses data
    //             const coursesResponse = await fetch('/api/courses');
    //             if (!coursesResponse.ok) throw new Error('Failed to fetch courses');
    //             const coursesData = await coursesResponse.json();
    //             setCourses(coursesData);
                
    //             // Fetch achievements data
    //             const achievementsResponse = await fetch('/api/achievements');
    //             if (!achievementsResponse.ok) throw new Error('Failed to fetch achievements');
    //             const achievementsData = await achievementsResponse.json();
    //             setAchievements(achievementsData);

    //             // Fetch saved learning centers
    //             const centersResponse = await fetch('/api/saved-centers');
    //             if (!centersResponse.ok) throw new Error('Failed to fetch learning centers');
    //             const centersData = await centersResponse.json();
    //             setSavedCenters(centersData);

    //             setLoading(false);
    //         } catch (err) {
    //             setError(err.message);
    //             setLoading(false);
    //             console.error('Error fetching data:', err);
    //         }
    //     };

    //     fetchData();
    // }, []);

    // const displayCourses = courses.map((course) => {
    //     const firstLessonId = course.items[0]?.id;
    //     return (
    //         <Course
    //             key={course.fieldId}
    //             title={course.field}
    //             icon={course.icon}
    //             fieldId={course.fieldId}
    //             firstLessonId={firstLessonId}
    //         />
    //     );
    // });
        // const [achievements, setAchievements] = useState([]);
    // const [savedCenters, setSavedCenters] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setLoading(true);
                
    //             const achievementsResponse = await fetch('/api/achievements');
    //             if (!achievementsResponse.ok) throw new Error('Failed to fetch achievements');
    //             const achievementsData = await achievementsResponse.json();
    //             setAchievements(achievementsData);

            
    //             const centersResponse = await fetch('/api/saved-centers');
    //             if (!centersResponse.ok) throw new Error('Failed to fetch learning centers');
    //             const centersData = await centersResponse.json();
    //             setSavedCenters(centersData);

    //             setLoading(false);
    //         } catch (err) {
    //             setError(err.message);
    //             setLoading(false);
    //             console.error('Error fetching data:', err);
    //         }
    //     };

    //     fetchData();
    // }, []);
