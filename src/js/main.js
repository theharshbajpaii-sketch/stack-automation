import { initNavigation } from './navigation.js';
import { initFormHandler } from './formHandler.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize navigation & mobile menu
  initNavigation();

  // Initialize interactive project enquiry brief form
  initFormHandler();

  // Update footer copyright year dynamically
  const currentYearEl = document.getElementById('current-year');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // Accessible FAQ accordion enhancements
  const faqItems = document.querySelectorAll('.faq-item details');
  faqItems.forEach((details) => {
    details.addEventListener('toggle', () => {
      if (details.open) {
        // Optional: close other accordions for a cleaner single-open accordion UX
        faqItems.forEach((other) => {
          if (other !== details && other.open) {
            other.removeAttribute('open');
          }
        });
      }
    });
  });

  // Smooth scroll handler for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          // Update URL hash cleanly without jumping
          history.pushState(null, '', targetId);
        }
      }
    });
  });
});
