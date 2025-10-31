document.addEventListener('DOMContentLoaded', function() {
  // Search functionality
  const searchInput = document.querySelector('.search-input');
  const tableRows = document.querySelectorAll('.questions-table tbody tr');
  
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    tableRows.forEach(row => {
      const questionText = row.querySelector('.question-text').textContent.toLowerCase();
      const tags = Array.from(row.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase()).join(' ');
      const source = row.querySelector('.source').textContent.toLowerCase();
      const author = row.querySelector('.author').textContent.toLowerCase();
      
      const searchableText = `${questionText} ${tags} ${source} ${author}`;
      
      if (searchableText.includes(searchTerm)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });
  
  // Select all checkbox functionality
  const selectAllCheckbox = document.querySelector('.questions-table thead .checkbox');
  const rowCheckboxes = document.querySelectorAll('.questions-table tbody .checkbox');
  
  selectAllCheckbox.addEventListener('change', function() {
    rowCheckboxes.forEach(checkbox => {
      checkbox.checked = this.checked;
    });
  });
  
  // Individual checkbox change handler
  rowCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const checkedBoxes = document.querySelectorAll('.questions-table tbody .checkbox:checked');
      selectAllCheckbox.checked = checkedBoxes.length === rowCheckboxes.length;
      selectAllCheckbox.indeterminate = checkedBoxes.length > 0 && checkedBoxes.length < rowCheckboxes.length;
    });
  });
  
  // Filter dropdown functionality
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Toggle active state (visual feedback)
      this.classList.toggle('active');
      
      // Here you would implement actual filtering logic
      console.log(`Filter clicked: ${this.textContent.trim()}`);
    });
  });
  
  // Action buttons functionality
  const editButtons = document.querySelectorAll('.edit-btn');
  const deleteButtons = document.querySelectorAll('.delete-btn');
  
  editButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation();
      const row = this.closest('tr');
      const questionText = row.querySelector('.question-text').textContent;
      console.log(`Edit question: ${questionText}`);
      // Here you would implement edit functionality
    });
  });
  
  // ---
  // --- ||| التعديل هنا ||| ---
  // ---
  deleteButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation();
      const row = this.closest('tr');
      const questionText = row.querySelector('.question-text').textContent;
      
      // تم إلغاء نافذة التأكيد (confirm)
      // سيتم الحذف مباشرة الآن
      row.remove();
      console.log(`Deleted question: ${questionText}`);
      // Here you would implement actual delete functionality
    });
  });
  // ---
  // --- ||| نهاية التعديل ||| ---
  // ---
  
  // Create question button
  const createQuestionBtn = document.querySelector('.create-question-btn');
  
  createQuestionBtn.addEventListener('click', function() {
    console.log('Create new question clicked');
    // Here you would implement create question functionality
  });
  
  // Row hover effects
  tableRows.forEach(row => {
    row.addEventListener('mouseenter', function() {
      this.style.backgroundColor = '#f9fafb';
    });
    
    row.addEventListener('mouseleave', function() {
      this.style.backgroundColor = '';
    });
  });
  
  // Responsive navigation toggle (for mobile)
  const nav = document.querySelector('.nav');
  let isNavOpen = false;
  
  // Add mobile menu toggle if screen is small
  function handleResize() {
    if (window.innerWidth <= 768) {
      if (!document.querySelector('.mobile-menu-toggle')) {
        const toggleButton = document.createElement('button');
        toggleButton.className = 'mobile-menu-toggle';
        toggleButton.innerHTML = '☰';
        toggleButton.style.cssText = `
          display: block;
          background: none;
          border: none;
          font-size: 20px;
          cursor: pointer;
          color: #6b7280;
        `;
        
        toggleButton.addEventListener('click', function() {
          isNavOpen = !isNavOpen;
          nav.style.display = isNavOpen ? 'flex' : 'none';
        });
        
        document.querySelector('.header').insertBefore(toggleButton, nav);
        nav.style.display = 'none';
      }
    } else {
      const toggleButton = document.querySelector('.mobile-menu-toggle');
      if (toggleButton) {
        toggleButton.remove();
        nav.style.display = 'flex';
      }
    }
  }
  
  window.addEventListener('resize', handleResize);
  handleResize(); // Initial call
});