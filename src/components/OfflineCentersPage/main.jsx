import Cards from "./cards";
import center from '../../assests/Imgs/page6/center.png';
import academy from '../../assests/Imgs/page6/academy.png';
import campus from '../../assests/Imgs/page6/campus.png';
import hub from '../../assests/Imgs/page6/hub.png';
import labs from '../../assests/Imgs/page6/labs.png';
import school from '../../assests/Imgs/page6/school.png';
import '../../styles/OfflineCenters.css';

function Main() {
    const cardsData =  [
        {img: center,title: 'Cairo Innovation Center',discription: '123 Nile St, Zamalek, Cairo',btn1: 'Programming',btn2: 'Productivity Tools',location: 'https://maps.app.goo.gl/uq5n2XuZX4Q7UZFE7'},
        {img: school,title: 'Alexandria Art School',discription: '45 Corniche Rd, Alexandria',btn1: 'Graphic Design',btn2: 'Productivity Tools',location: 'https://maps.app.goo.gl/r4z2D6s2MXA2koqj7'},
        {img: academy,title: 'Giza Skill Academy',discription: '78 Pyramids Ave, Giza',btn1: 'Programming',btn2: 'Graphic Design',location: 'https://maps.app.goo.gl/6sY6s5fjQWYNSfyt9'},
        {img: hub,title: 'Luxor Learning Hub',discription: '10 Temple St, Luxor',btn1: 'Productivity Tools',btn2: 'Programming',location: 'https://maps.app.goo.gl/vgn6z3YdEmkgLNem6'},
        {img: campus,title: 'Mansoura Tech Campus',discription: '20 University Blvd, Mansoura',btn1: 'Programming',btn2: 'Graphic Design',location: 'https://maps.app.goo.gl/r7dfo3oN9mUwtS5m7'},
        {img: labs,title: 'Suez Creative Labs',discription: '35 Canal St, Suez',btn1: 'Graphic Design',btn2: 'Productivity Tools',location: 'https://maps.app.goo.gl/6RYZ5PgwxwVnNm6y6'},
    ]
    return(
        <div className="row g-4">
            {cardsData.map(card => {
                            return <Cards  
                                        img={card.img} 
                                        title={card.title} 
                                        discription={card.discription} 
                                        btn1={card.btn1} 
                                        btn2={card.btn2}
                                        location={card.location}
                                        />
                        })}
        </div>
    )
}

export default Main;