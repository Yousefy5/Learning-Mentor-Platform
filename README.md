# MentorED — Learning Mentor Platform 🎓

> **Your Personal Gateway to Mastering Tech, Design, and Productivity in the Arab World.**  
> *Empowering Egyptian and Arab learners with curated roadmaps, skills assessment, and local offline resources.*

![Project Badge](https://img.shields.io/badge/Status-Development-green) ![React](https://img.shields.io/badge/React-19.0-blue) ![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 📖 Table of Contents
- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [Folder Structure](#-folder-structure)
- [Workflows & Usage](#-workflows--usage)
- [Data Models](#-data-models)
- [Deployment](#-deployment)
- [Future Roadmap](#-future-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 💡 About the Project

**MentorED** is a comprehensive web platform designed to guide learners through the complex landscape of self-education. Whether you are starting a career in **Programming**, optimizing your workflow with **Productivity Tools**, or unleashing creativity in **Graphic Design**, MentorED provides the structured path you need.

Unlike generic learning sites, MentorED focuses on the **Egyptian and Arab context**, offering a unique directory of **Offline Learning Centers** in cities like Cairo, Alexandria, and Mansoura, bridging the gap between digital learning and physical community.

---

## ✨ Key Features

### 1. 🛣️ Curated Learning Tracks
Structured roadmaps covering high-demand fields:
- **Programming Fundamentals**: Python, Web Development (HTML/CSS/JS).
- **Graphic Design Essentials**: UI/UX Principles, Color Theory, Adobe Suite.
- **Productivity Mastery**: Time blocking, Note-taking (Zettelkasten), Agile Scrum.

### 2. 🧠 Skill Assessment & Practice
- **Placement Quiz**: Evaluate your current level to get personalized recommendations.
- **Practice Quizzes**: Interactive quizzes with immediate feedback to reinforce knowledge (e.g., JavaScript basics, CSS properties).

### 3. 🏢 Offline Centers Directory
A searchable database of physical training centers across Egypt.
- **Filter**: Search by City (e.g., Cairo, Giza) or Category (Programming, Design).
- **Details**: Location links (Google Maps), available courses, and center highlights.

### 4. 📊 Progress Tracking (Beta)
- Track completed modules and quiz scores.
- **Dashboard**: personalized view of your learning journey (in development).

---

## 🛠 Tech Stack

The project is built with modern frontend technologies focusing on performance and user experience.

- **Core**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/) (Fast HMR & Bundling)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **UI Framework**: [Bootstrap 5](https://getbootstrap.com/) & [React Bootstrap](https://react-bootstrap.netlify.app/)
- **Icons**: Bootstrap Icons & FontAwesome
- **Styling**: Vanilla CSS + Bootstrap Utilities
- **State Management**: React Context API (`DataContext`, `ProgressProvider`)
- **AI Integration**: *Currently disabled/removed (previously Google Gemini)*

---

## 🏗 Project Architecture

The application follows a **Component-Based Architecture**.

- **Frontend**: Single Page Application (SPA) served via Vite.
- **Data Layer**:
  - **Context API**: Manages global state for Learning Paths and User Progress.
  - **Local JSON**: Static data for offline centers (`public/CentersData.json`).
- **Routing**: Client-side routing handling navigation between Landing, Tracks, and Quizzes.

---

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/AHMEDABDELMAGED22/learning-pentor-platform.git
    cd learning-pentor-platform
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` to view the app.

---

## 📂 Folder Structure

```
Learning-Mentor-Platform/
├── public/                 # Static assets (images, JSON data)
│   ├── CentersData.json    # Database for offline centers
│   └── ...
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── HomePage/       # Components for Landing Page
│   │   ├── LearningTracksPage/ # Roadmap implementations
│   │   └── OfflineCentersPage/ # Cards and Filters
│   ├── context/            # Global State (DataContext, ProgressContext)
│   ├── pages/              # Main Route Views
│   │   ├── LandingPage.jsx
│   │   ├── LearningTracks.jsx
│   │   ├── OfflineCenters.jsx
│   │   ├── PracticeQuiz.jsx
│   │   └── ...
│   ├── styles/             # CSS Files
│   ├── Project.jsx         # Main App Component (Router Setup)
│   └── main.jsx            # Entry Point
├── package.json            # Dependencies & Scripts
└── vite.config.js          # Vite Configuration
```

---

## 🔄 Workflows & Usage

### 1. Taking a Learning Path
1.  Navigate to **"Learning Tracks"** from the Navbar.
2.  Select a domain (e.g., *Programming Fundamentals*).
3.  Choose a specific path (e.g., *Web Development*).
4.  Browse resources and track your completion.

### 2. Finding an Offline Center
1.  Go to **"Offline Centers"**.
2.  Use the filter bar to select your **City** and **Interest**.
3.  Click "Apply" to see matching centers.
4.  Click the location icon to open Google Maps.

### 3. Practice Quiz
1.  Go to **"Quizzes"** -> **"Practice Quiz"**.
2.  Answer multiple-choice questions.
3.  Receive a score and feedback immediately upon completion.

---

## 💾 Data Models

### Learning Track Item (`DataContext.jsx`)
```json
{
  "id": 1,
  "title": "Responsive Web Design",
  "desc": "Master the art of creating websites...",
  "img": "https://images.unsplash.com/..."
}
```

### Offline Center (`public/CentersData.json`)
```json
{
  "title": "Cairo Innovation Center",
  "city": "Cairo",
  "description": "123 Nile St, Zamalek",
  "btn1": "Programming",
  "btn2": "Productivity Tools",
  "location": "https://maps.app.goo.gl/..."
}
```

---

## 🔮 Future Roadmap

- [ ] **User Authentication**: Complete profile system with persistent history.
- [ ] **Backend Integration**: Move from static JSON to a DB (MongoDB/Firebase).
- [ ] **AI Mentor**: Re-integrate Generative AI for personalized study plans.
- [ ] **Arabic Localization**: Full translation for native Arabic speakers.

---

## 🤝 Contributing

We welcome contributions to improve education accessibility!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 🛡 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 🔒 Security & Privacy

- This application currently runs client-side.
- **No personal data** is permanently stored on a server in this version.
- User progress is managed locally or temporarily in session.

---

> Built with ❤️ for Learners.
