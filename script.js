// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Redirect to GitHub repositories page when clicking on a project card
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        window.open('https://github.com/Viswanadh-Karthik?tab=repositories', '_blank');
    });
});
