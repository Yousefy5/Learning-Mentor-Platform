document.addEventListener('DOMContentLoaded', function() {
  // Get all sidebar links and content sections
  const sidebarLinks = document.querySelectorAll('.sidebar-link');
  const contentSections = document.querySelectorAll('.content-section');

  // Handle sidebar navigation
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const sectionId = this.getAttribute('data-section');
      
      // 
      // START: (الطلب رقم 5) 
      // تم إلغاء الـ confirm والـ alert
      //
      if (sectionId === 'signout') {
        // In a real application, this would handle the sign out process
        console.log('Sign Out clicked');
        // window.location.href = '/login';
        return;
      }
      // END: (الطلب رقم 5)
      //

      // Remove active class from all links and sections
      sidebarLinks.forEach(l => l.classList.remove('active'));
      contentSections.forEach(s => s.classList.remove('active'));

      // Add active class to clicked link
      this.classList.add('active');

      // Show corresponding content section
      const targetSection = document.getElementById(sectionId + '-section');
      if (targetSection) {
        targetSection.classList.add('active');
      }
    });
  });

  // Handle profile form submission
  const profileForm = document.querySelector('.profile-form');
  if (profileForm) {
    profileForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(this);
      const profileData = {
        fullName: formData.get('fullName'),
        username: formData.get('username'),
        email: formData.get('email'),
        bio: formData.get('bio')
      };

      // In a real application, this would send data to the server
      console.log('Profile data to save:', profileData);
      
      // Show success message
      showNotification('Profile updated successfully!', 'success');
    });
  }

  // Handle cancel button
  const cancelBtn = document.querySelector('.btn-cancel');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', function() {
      // Reset form to original values
      const form = document.querySelector('.profile-form');
      if (form) {
        form.reset();
        // Restore original values
        document.getElementById('fullName').value = 'Ali Ohmhred';
        document.getElementById('username').value = 'aliohmhred610';
        document.getElementById('email').value = 'aliohmhred610@gmail.com';
        document.getElementById('bio').value = 'Passionate learner and educator focused on continuous improvement and knowledge sharing.';
      }
      showNotification('Changes cancelled', 'info');
    });
  }

  // Handle profile picture upload
  const uploadBtn = document.querySelector('.profile-picture-actions .btn-primary');
  if (uploadBtn) {
    uploadBtn.addEventListener('click', function() {
      // Create file input
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = 'image/*';
      
      fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
          // In a real application, this would upload the file
          const reader = new FileReader();
          reader.onload = function(e) {
            const profileImg = document.querySelector('.profile-picture img');
            profileImg.src = e.target.result;
          };
          reader.readAsDataURL(file);
          showNotification('Profile picture updated!', 'success');
        }
      });
      
      fileInput.click();
    });
  }

  // Handle profile picture removal
  const removeBtn = document.querySelector('.profile-picture-actions .btn-secondary');
  if (removeBtn) {
    removeBtn.addEventListener('click', function() {
      
      // 
      // START: (الطلب رقم 5) 
      // تم إلغاء نافذة الـ confirm
      //
      const profileImg = document.querySelector('.profile-picture img');
      profileImg.src = 'https://dummyimage.com/100x100/e5e7eb/666666?text=Profile';
      showNotification('Profile picture removed', 'info');
      // END: (الطلب رقم 5)
      //
    });
  }

  // Utility function to show notifications
  function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '12px 24px',
      borderRadius: '6px',
      color: 'white',
      fontWeight: '500',
      zIndex: '1000',
      transform: 'translateX(100%)',
      transition: 'transform 0.3s ease'
    });

    // Set background color based on type
    const colors = {
      success: '#10b981',
      error: '#ef4444',
      info: '#3b82f6',
      warning: '#f59e0b'
    };
    notification.style.backgroundColor = colors[type] || colors.info;

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }

  // 
  // (الطلب رقم 2) 
  // هذا الكود الخاص بالاستجابة موجود بالفعل ويعمل بكفاءة
  //
  function handleResponsiveNav() {
    const sidebar = document.querySelector('.sidebar');
    const sidebarNav = document.querySelector('.sidebar-nav');
    
    if (window.innerWidth <= 768) {
      // Mobile: horizontal scrolling navigation
      sidebarNav.style.overflowX = 'auto';
      sidebarNav.style.whiteSpace = 'nowrap';
    } else {
      // Desktop: vertical navigation
      sidebarNav.style.overflowX = 'visible';
      sidebarNav.style.whiteSpace = 'normal';
    }
  }

  // Initial call and resize listener
  handleResponsiveNav();
  window.addEventListener('resize', handleResponsiveNav);
});