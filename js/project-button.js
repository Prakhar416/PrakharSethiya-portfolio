function filterProjects(category) {
    var projects = document.querySelectorAll('.project');
    projects.forEach(function(project) {
        if (category === 'all' || project.getAttribute('data-category') === category) {
            project.style.display = 'flex';
        } else {
            project.style.display = 'none';
        }
    });
    var buttons = document.querySelectorAll('.filter-buttons button');
    buttons.forEach(function(button) {
        button.classList.remove('active');
    });
    event.target.classList.add('active');
}

