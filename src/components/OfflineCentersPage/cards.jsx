import '../../styles/OfflineCenters.css';
function Cards({img,title,discription,btn1,btn2,location}) {
    return(
        <>
          <div className="col-12 col-sm-6 col-md-4">
              <div className="card h-100 text-center">
                  <img src={img} className="card-img-top w-100" alt="Card 1"/>
                  <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{discription}</p>
                    <div className="content">
                      <button type="button" className="btn btn-danger extra">{btn1}</button>
                      <button type="button" className="btn btn-danger extra">{btn2}</button>
                    </div>
                    <a href={location} className="btn btn-primary main" target="_blank">View Location</a>
                  </div>
              </div>
          </div>
        </>
    )
}
export default Cards;