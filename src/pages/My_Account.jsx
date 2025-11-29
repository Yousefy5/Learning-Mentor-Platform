import { Link } from 'react-router-dom';
import Navbar from "./component/Navbar";
import Footer from "../components/Footer";
import "../assets/styles/My_Account.css";

function My_Account(){
   return (
   <>
    <Navbar/>
     <div className="Container">
     <div className="row">
      
       <main className="main-content">
        <div className="content-container">
          <aside className="sidebar">
            <nav className="sidebar-nav">
              <Link to="#" className="sidebar-link active" data-section="profile">Profile</Link>
              <Link to="#" className="sidebar-link" data-section="security">Security</Link>
              <Link to="#" className="sidebar-link" data-section="notifications">Notifications</Link>
              <Link to="#" className="sidebar-link" data-section="billing">Billing</Link>
              <Link to="#" className="sidebar-link sign-out" data-section="signout">Sign Out</Link>
            </nav>
          </aside>

          <section className="content-area">
            <div id="profile-section" className="content-section active">
              <div className="content-card">
                <h2 className="section-title">Profile Settings</h2>

                <div className="profile-picture-section">
                  <div className="profile-picture">
                    <img 
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200" 
                      alt="Profile Picture"
                      onerror="this.src='https://dummyimage.com/100x100/e5e7eb/666666?text=Profile'"
                    />
                  </div>
                  <div className="profile-picture-info">
                    <h3>Profile Photo</h3>
                    <div className="profile-picture-actions">
                      <button className="btn-primary">Upload new photo</button>
                      <button className="btn-secondary">Remove</button>
                    </div>
                  </div>
                </div>

                <form className="profile-form">
                  <div className="form-group">
                    <label for="fullName">Full Name</label>
                    <input type="text" id="fullName" name="fullName" value="Ali Ohmhred" className="form-input"/>
                  </div>

                  <div className="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" value="aliohmhred610" className="form-input"/>
                  </div>

                  <div className="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" value="aliohmhred610@gmail.com" className="form-input"/>
                  </div>

                  <div className="form-group">
                    <label for="bio">Bio</label>
                    <textarea id="bio" name="bio" rows="4" className="form-textarea" placeholder="Tell us about yourself...">Passionate learner and educator focused on continuous improvement and knowledge sharing.</textarea>
                  </div>

                  <div className="form-actions">
                    <button type="submit" className="btn-primary">Save Changes</button>
                    <button type="button" className="btn-cancel">Cancel</button>
                  </div>
                </form>
              </div>
            </div>

            <div id="security-section" className="content-section">
              <div className="content-card">
                <h2 className="section-title">Security Settings</h2>
                <p>Manage your password and security preferences.</p>
              </div>
            </div>

            <div id="notifications-section" className="content-section">
              <div className="content-card">
                <h2 className="section-title">Notification Preferences</h2>
                <p>Control how and when you receive notifications.</p>
              </div>
            </div>

            <div id="billing-section" className="content-section">
              <div className="content-card">
                <h2 className="section-title">Billing & Subscription</h2>
                <p>Manage your subscription and payment methods.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
     </div>
  </div>
<Footer/>
<script src="../../services/My_Account.js"></script>   </>
  )
}

export default My_Account;

