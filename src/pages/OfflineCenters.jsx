import '../styles/OfflineCenters.css';
import Main from '../components/OfflineCentersPage/main';
import Header from '../components/OfflineCentersPage/Header';
import Filter from '../components/OfflineCentersPage/filter';
import Title from '../components/OfflineCentersPage/Title';
import { useState } from "react";

function OfflineCenters() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [tempCity, setTempCity] = useState("");
  const [tempCategory, setTempCategory] = useState("");

  const handleApply = () => {
    setSelectedCity(tempCity);
    setSelectedCategory(tempCategory);
  };

  return (
    <>
      <div className="centers-page">
        <div className="container text-center px-5 ">
          <Header/>
          <Filter 
          tempCity={tempCity}
          setTempCity={setTempCity}
          tempCategory={tempCategory}
          setTempCategory={setTempCategory}
          handleApply={handleApply}
          />
          <Title/>
          <Main city={selectedCity} category={selectedCategory} />
        </div>
      </div>
    </>
  );
}

export default OfflineCenters;
