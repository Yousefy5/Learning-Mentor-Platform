function Achievements({ title, icon, numOfThing, motive, button }) {
  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="p-3 rounded text-start h-100">
        <div className="d-flex align-items-center">
          <div className="achieveBack me-3 achieve-Back">
            <i className={icon || 'bi bi-award fs-5'}></i>
          </div>

          <p className="mb-1 fs-6">{title || 'Default Title'}</p>
        </div>

        <h3 className="fw-bold mt-3">{numOfThing || '0'}</h3>
        <p className="text-muted">{motive || 'Default Motive'}</p>

 
        {button && (
          <button className="btn btn-coloro2 px-5 border btn-sm btn-hov">
            {button}
          </button>
        )}
      </div>
    </div>
  );
}

export default Achievements