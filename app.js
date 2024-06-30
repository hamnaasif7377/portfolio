// Dark mode toggle
const darkModeToggle = document.querySelector('#dark-mode-toggle');

darkModeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});

// Contact form validation
const contactForm = document.querySelector('#contact-form');
const emailInput = document.querySelector('#email');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  if (!isValidEmail(emailInput.value)) {
    alert('Please enter a valid email address.');
    return;
  }
  
  // Simulate sending email (in a real scenario, you'd handle this server-side)
  alert('Email sent successfully!');
  contactForm.reset();
});

function isValidEmail(email) {
  // Basic email validation using regex
  return /\S+@\S+\.\S+/.test(email);
}
