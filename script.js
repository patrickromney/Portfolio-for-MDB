// Automatically update current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Navigation Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('hidden');
        document.body.classList.add('modal-active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        document.body.classList.remove('modal-active');
    }
}

// Close modal on background click
window.onclick = function(event) {
    const modals = ['modal-1', 'modal-2', 'modal-3', 'modal-4'];
    modals.forEach(id => {
        const modal = document.getElementById(id);
        if (event.target === modal) {
            closeModal(id);
        }
    });
};

// Contact Form Handler
function handleFormSubmit(event) {
    event.preventDefault();
    const notification = document.getElementById('formNotification');
    notification.classList.remove('hidden');
    
    // Reset form fields
    event.target.reset();

    // Hide notification after 4 seconds
    setTimeout(() => {
        notification.classList.add('hidden');
    }, 4000);
}