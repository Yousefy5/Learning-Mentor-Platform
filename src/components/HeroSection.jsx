import { DataContext } from "../context/DataContext"
import { useContext } from "react"
function HeroSection({titleOfHeader,titleOflesson}){
return (<>
    <section className="hero-section">
        <div className="container">
            <h1>{ titleOfHeader ||'Mastering Modern Web Development: Frontend to Backend'}</h1>
            <p className="subtitle">{ titleOflesson || 'Lesson 3: Advanced CSS Layouts (Flexbox & Grid) '}</p>
        </div>
    </section>
</>
)


}
export default HeroSection
