import Cards from "./cards";
// import center from '../../assests/Imgs/page6/center.png';
// import academy from '../../assests/Imgs/page6/academy.png';
// import campus from '../../assests/Imgs/page6/campus.png';
// import hub from '../../assests/Imgs/page6/hub.png';
// import labs from '../../assests/Imgs/page6/labs.png';
// import school from '../../assests/Imgs/page6/school.png';
// import img1 from '../../assests/Imgs/page6/img1.jpg';
// import img2 from '../../assests/Imgs/page6/img2.jpg';
// import img3 from '../../assests/Imgs/page6/img3.jpg';
// import img4 from '../../assests/Imgs/page6/img4.jpg';
// import img5 from '../../assests/Imgs/page6/img5.jpg';
// import img6 from '../../assests/Imgs/page6/img6.jpg';
import { useEffect, useState } from "react";
import '../../styles/OfflineCenters.css';

function Main({ city, category }) {
    // const cardsData =  [
    //     {img: center, title: 'Cairo Innovation Center', city: "Cairo", discription: '123 Nile St, Zamalek, Cairo', btn1: 'Programming', btn2: 'Productivity Tools', location: 'https://maps.app.goo.gl/AR3zFemYAvH6YSee9'},
    //     {img: school, title: 'Alexandria Art School', city: "Alexandria", discription: '45 Corniche Rd, Alexandria', btn1: 'Graphic Design', btn2: 'Productivity Tools', location: 'https://maps.app.goo.gl/r4z2D6s2MXA2koqj7'},
    //     {img: academy, title: 'Giza Skill Academy', city: "Giza", discription: '78 Pyramids Ave, Giza', btn1: 'Programming', btn2: 'Graphic Design', location: 'https://maps.app.goo.gl/6sY6s5fjQWYNSfyt9'},
    //     {img: hub, title: 'Luxor Learning Hub', city: "Luxor", discription: '10 Temple St, Luxor', btn1: 'Productivity Tools', btn2: 'Programming', location: 'https://maps.app.goo.gl/vgn6z3YdEmkgLNem6'},
    //     {img: campus, title: 'Mansoura Tech Campus', city: "Mansoura", discription: '20 University Blvd, Mansoura', btn1: 'Programming', btn2: 'Graphic Design', location: 'https://maps.app.goo.gl/r7dfo3oN9mUwtS5m7'},
    //     {img: labs, title: 'Suez Creative Labs', city: "Suez", discription: '35 Canal St, Suez', btn1: 'Graphic Design', btn2: 'Productivity Tools', location: 'https://maps.app.goo.gl/6RYZ5PgwxwVnNm6y6'},
    //     {img: img1, title: 'Alexandria Digital Campus', city: "Alexandria", discription: '90 Stanley Rd, Alexandria', btn1: 'Programming', btn2: 'Productivity Tools', location: 'https://maps.app.goo.gl/r4z2D6s2MXA2koqj7'},
    //     {img: img2, title: 'Aswan Learning Studio', city: "Aswan", discription: '22 Nubia St, Aswan', btn1: 'Graphic Design', btn2: 'Productivity Tools', location: 'https://maps.app.goo.gl/5D4BzvsHdV8YYXh69'},
    //     {img: img3, title: 'Cairo Tech Studio', city: "Cairo", discription: '56 Tahrir St, Downtown, Cairo', btn1: 'Graphic Design', btn2: 'Programming', location: 'https://maps.app.goo.gl/AR3zFemYAvH6YSee9'},
    //     {img: img4, title: 'Port Said Learning Center', city: "Port Said", discription: '12 Al-Gomhoreya St, Port Said', btn1: 'Productivity Tools', btn2: 'Programming', location: 'https://maps.app.goo.gl/RHN35gEjvrMSdpE28'},
    //     {img: img5, title: 'Tanta Digital Hub', city: "Tanta", discription: '8 El-Nokhba Sq, Tanta', btn1: 'Programming', btn2: 'Graphic Design', location: 'https://maps.app.goo.gl/MN9hUe6NCPxs8m929'},
    //     {img: img6, title: 'Mansoura Skills Center', city: "Mansoura", discription: '18 Al-Gomhoreya St, Mansoura', btn1: 'Graphic Design', btn2: 'Productivity Tools', location: 'https://maps.app.goo.gl/r7dfo3oN9mUwtS5m7'},
    // ];
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        fetch('/CentersData.json')
            .then(response => response.json())
            .then(data => setCardsData(data))
            .catch(err => console.error("Error", err));
    }, []);

    const filtered = cardsData.filter(card => {
        const cityMatch = city ? card.city === city : true;
        const categoryMatch = category 
            ? (card.btn1 === category || card.btn2 === category)
            : true;

        return cityMatch && categoryMatch;
    });

    if (filtered.length === 0) {
        return (
            <div className="text-center py-5">
                <h4 style={{ color: "#018a83" }}>No Centers Found</h4>
                <p>Try adjusting your filters.</p>
            </div>
        );
    }

    return(
        <div className="row g-4">
            {filtered.map(card => (
                <Cards  
                    img={card.img} 
                    title={card.title} 
                    city={card.city}
                    discription={card.discription} 
                    btn1={card.btn1} 
                    btn2={card.btn2}
                    location={card.location}
                />
            ))}
        </div>
    );
}

export default Main;