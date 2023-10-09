const sections = document.querySelectorAll(".content");
let currentSection = sections.length - 1; // Start from the bottommost section


document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800, // Duration of the animation (in milliseconds)
        once: true, // Whether the animation should only happen once
    });
});


// Function to smoothly scroll to a specific section
function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: "smooth" });
    currentSection = index; // Update the current section index
}

// Button event listeners
const nextButtons = document.querySelectorAll(".button");

nextButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (index < sections.length - 1) {
            scrollToSection(index + 1); // Go to the section below (scroll up)
        }
    });
});

// Initially scroll to the bottommost section (Season 4)

const audioElement = document.getElementById("background-music");

// Set the volume (0.1 for 10% volume)
audioElement.volume = 0.1;