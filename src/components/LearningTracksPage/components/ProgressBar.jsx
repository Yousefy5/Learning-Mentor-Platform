
function ProgressBar(){
    return(
        <>
        <div className="roadmap-page">
        <div className="container text-center px-5 "></div>
        <div className="row mb-5">
            <div className="col-12">
                <h6>Your Progress: 0% Completed</h6>
                <div className="progress">
                    <div className="progress-bar" style={{width: "0%"}}></div>
                </div>
            </div>
        </div>
        </div>
    </>
    );


}

export default ProgressBar;