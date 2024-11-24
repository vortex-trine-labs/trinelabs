// Dynamic Background Effect (Mouse Interaction)
document.body.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const bg = document.querySelector(".hero-section");
    if (bg) {
        bg.style.background = `radial-gradient(circle at ${x}px ${y}px, #00bcd4, #121212)`;
    }
});
// Detect if the user is on a mobile device
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Adjust Mouse Interaction for Touch Devices
if (isMobile) {
    // Replace mousemove effect with touchstart or touchmove
    document.body.addEventListener("touchmove", (e) => {
        const touch = e.touches[0];
        const x = touch.clientX;
        const y = touch.clientY;

        const bg = document.querySelector(".hero-section");
        if (bg) {
            bg.style.background = `radial-gradient(circle at ${x}px ${y}px, #00bcd4, #121212)`;
        }
    });
} else {
    // Fallback for non-mobile devices
    document.body.addEventListener("mousemove", (e) => {
        const x = e.clientX;
        const y = e.clientY;

        const bg = document.querySelector(".hero-section");
        if (bg) {
            bg.style.background = `radial-gradient(circle at ${x}px ${y}px, #00bcd4, #121212)`;
        }
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth', // Smooth scroll effect
            block: 'start' // Align the target element at the top
        });
    });
});

// Counter for Applications Submitted
let applicationCount = 0;

// Handle Form Submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Increment the application count
        applicationCount++;

        // Collect form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const projectDetails = document.getElementById("project-details").value;
        const deadline = document.getElementById("deadline").value;

        // Construct the mailto URL with subject and body
        const mailtoURL = `mailto:trine.devlop@gmail.com?subject=New Application from ${name}&body=Applicant Number: ${applicationCount}%0D%0AName: ${name}%0D%0AEmail: ${email}%0D%0AProject Details: ${projectDetails}%0D%0ADeadline: ${deadline}`;

        // Redirect to the mailto link
        window.location.href = mailtoURL;

        // Reset the form fields after submission
        contactForm.reset();
    });
}

// Scroll-to-Top Button Visibility Toggle
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
if (scrollToTopBtn) {
    window.addEventListener("scroll", () => {
        // Toggle visibility based on scroll position
        scrollToTopBtn.style.opacity = window.scrollY > 200 ? 1 : 0;
    });

    // Smooth Scroll to Top Functionality
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
