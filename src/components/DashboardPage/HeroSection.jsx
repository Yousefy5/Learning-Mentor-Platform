import { DataContext } from "../../context/DataContext";
// import { useContext } from "react"
function HeroSection({titleOflesson}){
return (<>
    <section className="hero-section mb-2">
        <div className="container">
            <h1>{ titleOflesson }</h1>
            <p className="subtitle">"Learn, grow, and achieve your goals with our step-by-step lessons 💡"</p>
        </div>
    </section>
</>
)


}
export default HeroSection
