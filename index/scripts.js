function viewWork() {
    // Navigate to Portfolio Section
    window.location.href = "myworks.html"; // Navigate to My Works page
}

function contactMe() {
    // Redirect to the default email client with a predefined subject and body
    window.location.href = "mailto:trine.devlop@gmail.com?subject=Inquiry from Vortex Trine Labs&body=Hello, I would like to get in touch regarding your services.";
}

function fullstackDevelopment() {
    // Navigate to the Fullstack Development Page
    window.location.href = "fullstack/fullstack.html"; // Use relative path instead of absolute path
}

function studentProjects() {
    // Navigate to the Projects for Students Page
    window.location.href = "project-support/project-support.html"; // Use relative path instead of absolute path
}


// Mouse Interaction Effect (Optional)
document.body.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const bg = document.querySelector(".hero-section");
    bg.style.background = `radial-gradient(circle at ${x}px ${y}px, #00bcd4, #121212)`;
});
