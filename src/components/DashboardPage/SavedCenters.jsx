function SavedCenters({title,city}){
    return(
        <div className="col-12 col-md-3">
              <div className="p-3  rounded  text-start h-100">
          <div className="d-flex align-items-center mb-2 ">
          <i className="bi bi-geo-alt mx-2 fs-3"></i>
            <p className="fw-bold mb-0 h6">{title}</p>
          </div>
            <p className="text-muted medium mb-3 px-2">{city}, Egypt</p>
            <button className="btn btn-coloro2 border btn-sm w-100 btn-hov">View Details</button>
          </div>
        </div>
    )

}

export default SavedCenters