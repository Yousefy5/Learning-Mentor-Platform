function Filter({ tempCity, setTempCity, tempCategory, setTempCategory, handleApply }) {
    return(
        <div className="filters" style={{marginBottom: "40px"}}>
            <div className="dropdown" style={{width: "250px"}}>
              <select 
                style={{width: "100%"}}
                value={tempCity}
                onChange={(e) => setTempCity(e.target.value)}
              >
                <option value="">All Cities</option>
                <option value="Cairo">Cairo</option>
                <option value="Alexandria">Alexandria</option>
                <option value="Giza">Giza</option>
                <option value="Suez">Suez</option>
                <option value="Luxor">Luxor</option>
                <option value="Port Said">Port Said</option>
                <option value="Aswan">Aswan</option>
                <option value="Tanta">Tanta</option>
                <option value="Mansoura">Mansoura</option>
              </select>
            </div>

            <div className="dropdown" style={{width: "250px"}}>
              <select 
                style={{width: "100%"}}
                value={tempCategory}
                onChange={(e) => setTempCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                <option value="Programming">Programming</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Productivity Tools">Productivity Tools</option>
              </select>
            </div>

            <button type="button" className="btn btn-success btn-custom" onClick={handleApply}>
              Apply Filters
            </button>
          </div>

    )
}

export default Filter;