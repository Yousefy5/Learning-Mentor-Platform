import './HomeStyles/HowMentorEdWorks.css'

function HowMentorEdWorks(){
    return(
        
      <section className="how-it-works py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold">How MentorEd Works</h2>
            <p className="text-secondary mb-0">
              Our simplified approach guides you through your learning journey,
              from discovery to mastery.
            </p>
          </div>

          <div className="row g-4 mt-1">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm rounded-4 border-0">
                <div className="card-body p-4 text-center">
                  <div className="hiw-icon bg-warning-subtle text-warning mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-signpost"></i>
                  </div>
                  <h5 className="mb-2">Find Your Path</h5>
                  <p className="text-secondary mb-0">
                    Explore diverse learning tracks tailored to your interests
                    and career goals.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm rounded-4 border-0">
                <div className="card-body p-4 text-center">
                  <div className="hiw-icon bg-warning-subtle text-warning mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-journal-text"></i>
                  </div>
                  <h5 className="mb-2">Learn Step-by-Step</h5>
                  <p className="text-secondary mb-0">
                    Follow curated roadmaps with resources ranging from videos
                    to interactive quizzes.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card h-100 shadow-sm rounded-4 border-0">
                <div className="card-body p-4 text-center">
                  <div className="hiw-icon bg-warning-subtle text-warning mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-trophy-fill"></i>
                  </div>
                  <h5 className="mb-2">Achieve Your Goals</h5>
                  <p className="text-secondary mb-0">
                    Track your progress, test your knowledge, and earn
                    certificates of completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    );


}

export default HowMentorEdWorks;