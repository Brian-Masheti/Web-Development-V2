// Event Handling
// Select elements for event handling
const actionButton = document.getElementById('action-button');
const hoverBox = document.getElementById('hover-box');
const keypressInput = document.getElementById('keypress-input');

// Button click event: Change button text
actionButton.addEventListener('click', () => {
    actionButton.textContent = 'Clicked!';
    setTimeout(() => {
        actionButton.textContent = 'Click or Double-Click Me!';
    }, 1000);
});

// Button double-click event: Change background color
actionButton.addEventListener('dblclick', () => {
    actionButton.style.backgroundColor = '#f1c40f';
    setTimeout(() => {
        actionButton.style.backgroundColor = '#3498db';
    }, 1000);
});

// Hover event: Already handled in CSS, but add a console log for debugging
hoverBox.addEventListener('mouseenter', () => {
    console.log('Hovering over the box!');
});

// Keypress event: Display typed character in console
keypressInput.addEventListener('keypress', (e) => {
    console.log(`Key pressed: ${e.key}`);
});

// Interactive Elements
// Change button functionality
const changeButton = document.getElementById('change-button');
let isChanged = false;
changeButton.addEventListener('click', () => {
    if (!isChanged) {
        changeButton.textContent = 'Revert!';
        changeButton.style.backgroundColor = '#8e44ad';
        document.body.style.backgroundColor = '#ecf0f1';
    } else {
        changeButton.textContent = 'Change Something!';
        changeButton.style.backgroundColor = '#e74c3c';
        document.body.style.backgroundColor = '#f4f4f9';
    }
    isChanged = !isChanged;
});

// Image gallery slideshow
const galleryImages = document.querySelectorAll('.gallery-image');
const prevButton = document.getElementById('prev-image');
const nextButton = document.getElementById('next-image');
let currentImageIndex = 0;

// Show the current image
function showImage(index) {
    galleryImages.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

// Next image
nextButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    showImage(currentImageIndex);
});

// Previous image
prevButton.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    showImage(currentImageIndex);
});

// Initialize gallery
showImage(currentImageIndex);

// Tabs functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Form Validation
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');

// Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Real-time validation for name
nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
    } else {
        nameError.textContent = '';
    }
});

// Real-time validation for email
emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
    } else if (!isValidEmail(emailInput.value)) {
        emailError.textContent = 'Invalid email format';
    } else {
        emailError.textContent = '';
    }
});

// Real-time validation for password
passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
    } else {
        passwordError.textContent = '';
    }
});

// Form submission validation
contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    let isValid = true;

    // Validate name
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Validate email
    if (emailInput.value.trim() === '') {
        emailError.textContent = 'Email is required';
        isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
        emailError.textContent = 'Invalid email format';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // Validate password
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    // If valid, show success message
    if (isValid) {
        alert('Form submitted successfully!');
        contactForm.reset();
    }
});