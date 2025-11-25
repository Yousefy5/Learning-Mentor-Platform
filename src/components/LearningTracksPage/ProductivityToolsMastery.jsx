import ModuleCard from './ModuleCard';

export default function ProductivityToolsMastery(){

    return (
        <>
      <div className="roadmap-page">
        <section
          className="hero-section py-5"
          style={{
            backgroundColor: "#E0F7FA", // Light cyan background
            borderRadius: "15px",
            margin: "20px",
          }}
        >
          <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between text-start">
            {/* Left Content */}
            <div className="col-lg-6 mb-4 mb-lg-0 ps-lg-5 pe-lg-3">
              <h2 className="fw-bold text-dark">Productivity Tools: <br/> Master Efficiency</h2>
              <p className="mb-4 text-secondary">
                Learn the best tools and techniques to boost your productivity and achieve more in less time. This practical course covers everything from time management to task automation.
              </p>

              <button className="btn text-white px-4 py-2 mb-4" style={{ backgroundColor: "#00897B", borderRadius: "5px", border: "none" }}>
                Enroll Now
              </button>

              {/* Progress Bar */}
              <div className="d-flex align-items-center gap-3">
                <div
                  className="progress flex-grow-1"
                  style={{
                    height: "8px",
                    backgroundColor: "#B2EBF2", // Lighter teal for track
                    borderRadius: "4px"
                  }}
                >
                  <div
                    className="progress-bar"
                    style={{ width: "75%", backgroundColor: "#00796B", borderRadius: "4px" }} // Darker teal for fill
                  ></div>
                </div>
                <span className="fw-bold text-dark">75%</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-5 text-center">
              <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "15px" }}>
                  <img
                    src="/assests/Imgs/productivtypage/Selection.png"
                    alt="Productivity Illustration"
                    className="img-fluid"
                    style={{ maxHeight: "280px" }}
                  />
              </div>
            </div>
          </div>
        </section>

        {/* Track Overview */}
        <section className="container my-5 text-start">
            <h3 className="fw-bold mb-3">Track Overview</h3>
            <p style={{ maxWidth: "100%"}} className="text-secondary  mb-4">
                Dive deep into the world of productivity with this comprehensive course. You'll discover effective strategies for managing your time, prioritizing tasks, leveraging technology, and maintaining focus. Whether you're a student, professional, or just looking to improve your daily efficiency, this course will equip you with the necessary knowledge and skills.
            </p>
            <h5 className="fw-bold mb-2">Who is this course for?</h5>
            <ul className="text-secondary" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
                <li>Students looking to improve their study habits</li>
                <li>Professionals seeking to enhance work efficiency</li>
                <li>Anyone looking to achieve their goals faster and more effectively</li>
            </ul>
        </section>

        {/* Tools Covered */}
        <section className="container my-5 text-start">
            <h3 className="fw-bold mb-4">Tools Covered</h3>
            <div style={{display: "grid" , gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))"}} className="row g-4">
                {[
                    { 
                        name: "Notion", 
                        desc: "For organizing notes, tasks, and personal projects in one place",
                        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-list-task" viewBox="0 0 16 16"><path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/><path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1zM5.5 11a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1z"/><path fillRule="evenodd" d="M2 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V7.5a.5.5 0 0 0-.5-.5H2zM3 7.5H2v1h1v-1z"/><path fillRule="evenodd" d="M2 10.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zM3 11H2v1h1v-1z"/></svg>
                    },
                    { 
                        name: "Microsoft Word", 
                        desc: "document creation, reports, and written planning",
                        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-file-earmark-word" viewBox="0 0 16 16"><path d="M5.485 6.879a.5.5 0 1 0-.97.242l1.5 6a.5.5 0 0 0 .967.01L8 9.402l1.018 3.73a.5.5 0 0 0 .967-.01l1.5-6a.5.5 0 1 0-.97-.242l-1.036 4.145L8.468 7.5a.5.5 0 0 0-.936 0L6.52 11.025 5.485 6.879z"/><path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/></svg>
                    },
                    { 
                        name: "Obsidian", 
                        desc: "For connected note-taking and building your personal knowledge base",
                        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-diagram-3" viewBox="0 0 16 16"><path fillRule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/></svg>
                    },
                    { 
                        name: "Google Keep", 
                        desc: "Quick notes, checklists, and reminders on the go",
                        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-lightbulb" viewBox="0 0 16 16"><path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/></svg>
                    },
                    { 
                        name: "Google Calendar", 
                        desc: "Schedule organization and event planning.",
                        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-calendar-check" viewBox="0 0 16 16"><path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/></svg>
                    },
                    { 
                        name: "Forest", 
                        desc: "Focus enhancement and distraction prevention.",
                        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-tree" viewBox="0 0 16 16"><path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5zM6.437 4.758A.5.5 0 0 0 6 4.5h-.066L8 1.401 10.066 4.5H10a.5.5 0 0 0-.424.765L11.598 8.5H11.5a.5.5 0 0 0-.447.724L12.69 12.5H3.309l1.638-3.276A.5.5 0 0 0 4.5 8.5h-.098l2.022-3.235a.5.5 0 0 0 .013-.507z"/></svg>
                    }
                ].map((tool, index) => (
                    <div key={index} className="">
                        <div className="d-flex align-items-start p-4 bg-light rounded shadow-sm h-100" style={{ backgroundColor: "#F8F9FA" }}>
                            {/* Icon */}
                            <div className="me-3 d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: "50px", height: "50px", color: "#00796B" }}>
                                {tool.icon}
                            </div>
                            <div>
                                <h5 className="fw-bold mb-1">{tool.name}</h5>
                                <p className="text-secondary mb-0 small">{tool.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* Modules */}
        {[
            {
                title: "Module 1: Personal Productivity Essentials",
                cards: [
                    { title: "Introduction to Productivity Tools", img: "Graphic/Design Process-amico.svg", type: "video", duration: "1.5 hours" },
                    { title: "Task & Time Management Basics", img: "Graphic/Design Process-amico.svg", type: "article", duration: "2 hours" },
                    { title: "Digital Note-Taking & Organization", img: "Graphic/Design Process-amico.svg", type: "book", duration: "1.5 hours" }
                ]
            },
            {
                title: "Module 2: Collaboration & Communication Tools",
                cards: [
                    { title: "Google Workspace & Microsoft 365", img: "Graphic/Design Process-amico.svg", type: "video", duration: "2.5 hours" },
                    { title: "Team Communication with Slack & Microsoft Teams", img: "Graphic/Design Process-amico.svg", type: "article", duration: "1 hour" },
                    { title: "Project Management Platforms: Trello & Asana", img: "Graphic/Design Process-amico.svg", type: "video", duration: "3 hours" }
                ]
            },
            {
                title: "Module 3: Automation & Workflow Optimization",
                cards: [
                    { title: "Introduction to Automation", img: "Graphic/Design Process-amico.svg", type: "video", duration: "1.5 hours" },
                    { title: "Managing Focus & Distractions", img: "Graphic/Design Process-amico.svg", type: "book", duration: "2 hours" },
                    { title: "Calendar & Scheduling Mastery", img: "Graphic/Design Process-amico.svg", type: "article", duration: "1.5 hours" }
                ]
            }
        ].map((module, mIndex) => (
            <section key={mIndex} className="container my-5 text-start">
                <h4 className="fw-bold mb-4 text-center">{module.title}</h4>
                <div className="row g-4">
                    {module.cards.map((card, cIndex) => (
                        <ModuleCard 
                            key={cIndex}
                            title={card.title}
                            img={card.img}
                            type={card.type}
                            duration={card.duration}
                            mIndex={mIndex}
                            cIndex={cIndex}
                        />
                    ))}
                </div>
            </section>
        ))}

      </div>
        </>
    );


}