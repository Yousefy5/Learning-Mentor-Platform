function TrackIntroduction({TrackTitle, TrackDescription}) {
  return (
    <div className="roadmap-page">
      <div className="container text-center px-5 ">
        {/* MARGIN BOTTOM OF 5 PX WAS REMOVED FROM THE NEXT LINE */}
        <div className="row text-center">
          <div className="col">
            <h3>{TrackTitle}</h3>
            <p>
                {TrackDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackIntroduction;
