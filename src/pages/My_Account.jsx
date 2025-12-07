import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../styles/My_Account.css";

const STORAGE_KEY = 'myAccountProfile_v1';

function My_Account(){
  const navigate = useNavigate();
  const [section, setSection] = useState('profile');
  const [profile, setProfile] = useState({
    fullName: 'Aya Mohamed',
    username: 'ayamohamed610',
    email: 'ayamohamed610@gmail.com',
    bio: 'Passionate learner and educator focused on continuous improvement and knowledge sharing.',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200'
  });
  const [savedProfile, setSavedProfile] = useState(null);
  const fileInputRef = useRef(null);

  // ---------- TOAST SYSTEM ----------
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  function showToast(message, type = "success") {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 2500);
  }

  function Toast({ message, type }) {
    return (
      <div className={`toast-message ${type}`}>
        {message}
      </div>
    );
  }
  // ---------- END TOAST SYSTEM ----------

  // load saved profile from localStorage on mount
  useEffect(() => {
    try{
      const raw = localStorage.getItem(STORAGE_KEY);
      if(raw){
        const parsed = JSON.parse(raw);
        setProfile(prev => ({...prev, ...parsed}));
        setSavedProfile(parsed);
      } else {
        setSavedProfile(profile);
      }
    }catch(err){
      console.error('Error reading profile from localStorage', err);
      setSavedProfile(profile);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // helper: update a single field
  function updateField(key, value){
    setProfile(prev => ({...prev, [key]: value}));
  }

  function handleImageChange(e){
    const file = e.target.files && e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      updateField('photo', reader.result);
    };
    reader.readAsDataURL(file);
  }

  function handleRemovePhoto(){
    updateField('photo', 'https://dummyimage.com/100x100/e5e7eb/666666?text=Profile');
    if(fileInputRef.current) fileInputRef.current.value = null;
  }

  // SAVE
  function handleSubmit(e){
    e.preventDefault();
    try{
      const toSave = {
        fullName: profile.fullName,
        username: profile.username,
        email: profile.email,
        bio: profile.bio,
        photo: profile.photo
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
      setSavedProfile(toSave);

      showToast("Profile saved successfully", "success");

    }catch(err){
      console.error('Failed to save', err);
      showToast("Failed to save changes ", "error");
    }
  }

  // CANCEL (don't save)
  function handleCancel(){
    const confirmCancel = window.confirm("There are unsaved changes. Discard them?");
    if(confirmCancel){
      if(savedProfile) setProfile({ ...savedProfile });
      else window.location.reload();
    }
  }

  function handleLogout(){
    navigate('/login');
  }

  return (
    <>
      <div className="Container myaccount-page">
        <div className="row">
          <main className="main-content">
            <div className="content-container">
              <aside className="sidebar">
                <nav className="sidebar-nav">
                  <a href="#" onClick={(e)=>{e.preventDefault(); setSection('profile');}} className={`sidebar-link ${section==='profile' ? 'active' : ''}`} data-section="profile">Profile</a>
                  <a href="#" onClick={(e)=>{e.preventDefault(); handleLogout();}} className="sidebar-link sign-out">Logout</a>
                </nav>
              </aside>

              <section className="content-area">
                {section === 'profile' && (
                  <div id="profile-section" className="content-section active">
                    <div className="content-card">
                      <h2 className="section-title">Profile Settings</h2>

                      <div className="profile-picture-section">
                        <div className="profile-picture">
                          <img
                            src={profile.photo}
                            alt="Profile Picture"
                            onError={(e)=>{ e.currentTarget.src = 'https://dummyimage.com/100x100/e5e7eb/666666?text=Profile'; }}
                          />
                        </div>

                        <div className="profile-picture-info">
                          <h3>Profile Photo</h3>
                          <div className="profile-picture-actions">
                            <label className="btn-primary" style={{cursor:'pointer'}}>
                              Upload new photo
                              <input ref={fileInputRef} type="file" accept="image/*" style={{display:'none'}} onChange={handleImageChange} />
                            </label>
                            <button type="button" onClick={handleRemovePhoto} className="btn-secondary">Remove</button>
                          </div>
                        </div>
                      </div>

                      <form className="profile-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                          <label htmlFor="fullName">Full Name</label>
                          <input type="text" id="fullName" value={profile.fullName} onChange={(e)=>updateField('fullName', e.target.value)} className="form-input"/>
                        </div>

                        <div className="form-group">
                          <label htmlFor="username">Username</label>
                          <input type="text" id="username" value={profile.username} onChange={(e)=>updateField('username', e.target.value)} className="form-input"/>
                        </div>

                        <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input type="email" id="email" value={profile.email} onChange={(e)=>updateField('email', e.target.value)} className="form-input"/>
                        </div>

                        <div className="form-group">
                          <label htmlFor="bio">Bio</label>
                          <textarea id="bio" rows="4" className="form-textarea" value={profile.bio} onChange={(e)=>updateField('bio', e.target.value)} />
                        </div>

                        <div className="form-actions">
                          <button type="submit" className="btn-primary">Save Changes</button>
                          <button type="button" onClick={handleCancel} className="btn-cancel">Cancel</button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </section>
            </div>
          </main>
        </div>
      </div>

      {/* Toast UI */}
      {toast.show && <Toast message={toast.message} type={toast.type} />}
    </>
  );
}

export default My_Account;
