function toggleSection(sectionId) {
    console.log("Toggling section:", sectionId); // Debugging line
    const section = document.getElementById(sectionId);
    if (section.classList.contains('visible')) {
        section.classList.remove('visible');
        section.style.display = 'none'; // Hide the section
    } else {
        // Hide all other sections
        document.querySelectorAll('.content.visible').forEach(content => {
            content.classList.remove('visible');
            content.style.display = 'none'; // Hide other sections
        });
        section.classList.add('visible');
        section.style.display = 'block'; // Show the selected section
    }
}

// Initially hide the FAQ and Feedback content
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('faqContent').style.display = 'none';
    document.getElementById('feedbackContent').style.display = 'none';
});