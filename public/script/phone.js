// JavaScript for phone-specific tasks

// Modify taskbar layout for smaller screens
document.addEventListener('DOMContentLoaded', function() {
    const taskbar = document.querySelector('.taskbar');
    if (window.innerWidth <= 600) {
        // Apply styles for smaller screens
        taskbar.style.flexDirection = 'column';
        taskbar.style.alignItems = 'center';
    } else {
        // Revert styles for larger screens
        taskbar.style.flexDirection = 'row';
        taskbar.style.alignItems = 'initial';
    }
});
