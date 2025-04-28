// Typing Effect
const text = ["Undergraduate", "Developer", "UI Enthusiast"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';
(function type() {
    if (count === text.length) {
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing-text').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 1000); 
    } else {
        setTimeout(type, 150); 
    }
})();

//Show alert on form submission
const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    alert('Thank you for reaching out! I will get back to you soon.');
    form.reset(); 
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  for (let i = 0; i < revealElements.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = revealElements[i].getBoundingClientRect().top;
    const revealPoint = 150; // Adjust to reveal sooner/later

    if (revealTop < windowHeight - revealPoint) {
      revealElements[i].classList.add('active');
    } else {
      revealElements[i].classList.remove('active');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);

// Custom Cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.top = e.clientY + 'px';
  cursor.style.left = e.clientX + 'px';
});

// Function to check if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

window.addEventListener('scroll', function() {
    const aboutSection = document.getElementById('about');
    
    if (isInViewport(aboutSection)) {
        if (!document.getElementById("skills-text").classList.contains("visible")) {
            document.getElementById("skills-text").innerText = "Python, Java, HTML, CSS, SQL";
            document.getElementById("tools-text").innerText = "VS Code, Figma";

            document.getElementById("skills-text").classList.add("visible");
            document.getElementById("tools-text").classList.add("visible");
        }
    }
});


