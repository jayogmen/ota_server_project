// Wait for both DOM and template content to load
window.addEventListener('load', function() {
    waitForElement('#sidebar', initializeNavigation);
});

function waitForElement(selector, callback) {
    const element = document.querySelector(selector);
    if (element) {
        callback(element);
        return;
    }
    
    setTimeout(() => {
        waitForElement(selector, callback);
    }, 100);
}

function initializeNavigation(sidebar) {
    // Set active nav item based on current page
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    const navLinks = sidebar.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || 
            (currentPage === 'index.html' && href === 'index.html') ||
            (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Toggle sidebar on mobile
    const sidebarToggle = sidebar.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function(e) {
            e.preventDefault();
            sidebar.classList.toggle('active');
        });
    }
    
    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
            const isClickInside = sidebar.contains(event.target);
            const isToggleClick = sidebarToggle && sidebarToggle.contains(event.target);
            
            if (!isClickInside && !isToggleClick) {
                sidebar.classList.remove('active');
            }
        }
    });
}