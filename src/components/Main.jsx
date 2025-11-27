import Achievements from "../components/Achievements"
import Course from "../components/Course"
import SavedCenters from "../components/SavedCenters"
import '../../style/style.css'
import '../../style/style2.css'
import { DataContext } from '../context/DataContext';
import { useContext } from "react"
function Main(){

const courses = useContext(DataContext);
const displayCourses = courses.map((art) =>{
   return <Course key={art.fieldId} title={art.field} percentage="zabateha" icon={art.icon} />
})

return(
  
    <div className="container mb-5">
         {/* style={{width:100% ; height:100% ;}} lely div ely fo2 3shqanha body f etsrfy feha */}
          <div className="mb-5">
      <p className="h4 mb-4 fw-bold">Your Learning Progress</p>
      <div className="row g-4">
{displayCourses}
        </div>
           <div className="row g-4">
</div>
</div>

<div className="mb-5">
    <p className="h4 mb-4 fw-bold">Your Achievements</p>
    <div className="row g-4">
        <Achievements 
            title="Quizzes Completed" 
            icon = "bi bi-award fs-6" 
            numOfThing = '50' // رقم حقيقي
            motive='Keep up the great work!' 
            button='Take More Quizzes' 
        />
        <Achievements 
            title="Learning Streak" 
            icon = "bi bi-lightbulb fs-6" 
            numOfThing = '7' // رقم حقيقي
            motive='Ready for the next challenge?' 
            button='Start a New Lesson' 
        />
        <Achievements 
            title="Lessons Mastered" 
            icon = "bi bi-check2 fs-6" 
            numOfThing = '12' // رقم حقيقي
            motive='Consistency is key to mastery' 
            button='Complete the next unit' 
        />
        <Achievements 
            title="Learning Hours" 
            icon = "bi bi-house-door fs-6" 
            numOfThing = '180' 
            motive='Invested in your future' 
            button='View Activity Log' 
        />
    </div>
</div>

    
    <div className="mb-5">
      <p className="h4 mb-4 fw-bold">Your Saved Learning Center</p>
        <div className="row g-0 d-flex justify-content-evenly ">
<SavedCenters title='Cairo Tech Hub' city='Cairo' />
<SavedCenters title='Alex Hub' city='Alex' />
<SavedCenters title='Giza Center' city='Giza' />
</div>
      </div>

      
 </div>
    
)

}
export default Main