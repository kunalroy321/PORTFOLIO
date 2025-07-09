/* global Typed */
var typed = new Typed(".text", {
    strings: ["Full Stack Developer", "AI Enthusiast", "Web Developer", "Tech Explorer", "Problem Solver"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
 document.getElementById("protectedImage").addEventListener("contextmenu", function (e) {
    e.preventDefault();
    alert("Right-click is disabled on this image.");
  });
  document.getElementById("grg").addEventListener("contextmenu", function (e) {
    e.preventDefault();
    alert("Right-click is disabled on this image.");
  });
  let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Add a click event to the menu icon
menuIcon.onclick = () => {
  // Toggle the 'fa-xmark' class to change the icon from bars to an 'X'
  menuIcon.classList.toggle('fa-xmark'); 
  // Toggle the 'active' class on the navbar to show/hide it
  navbar.classList.toggle('active');
};


// ===================================================================
// ============= CLOSE MENU WHEN A LINK IS CLICKED ===================
// ===================================================================

// Get all the links inside the navbar
const navLinks = document.querySelectorAll('.navbar a');

// Add a click event to each link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // If the menu is open, close it
    if (navbar.classList.contains('active')) {
      menuIcon.classList.remove('fa-xmark');
      navbar.classList.remove('active');
    }
  });
});