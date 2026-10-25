import { SITE_CONFIG } from '../config/site.js';
import { buildWhatsAppMessage, copyToClipboard } from './whatsapp.js';

export function initFormHandler() {
  const form = document.getElementById('project-brief-form');
  const serviceSelect = document.getElementById('field-service');
  const summaryInput = document.getElementById('field-summary');
  const requirementsInput = document.getElementById('field-requirements');
  const emailInput = document.getElementById('field-email');
  const urlInput = document.getElementById('field-url');

  // Review Dialog Elements
  const reviewModal = document.getElementById('brief-review-modal');
  const reviewContent = document.getElementById('review-brief-content');
  const reviewEditBtn = document.getElementById('btn-review-edit');
  const reviewSubmitBtn = document.getElementById('btn-review-submit');
  const reviewCopyBtn = document.getElementById('btn-review-copy');
  const reviewStatusNote = document.getElementById('review-status-note');
  const configAlertBox = document.getElementById('config-alert-box');
  const copyFeedback = document.getElementById('copy-feedback');

  if (!form) return;

  // Track latest prepared message payload
  let currentMessageData = null;

  // Validation helper
  function validateField(element, errorId, validatorFn, errorMessage) {
    const errorEl = document.getElementById(errorId);
    const isValid = validatorFn(element.value);
    if (!isValid) {
      element.setAttribute('aria-invalid', 'true');
      if (errorEl) {
        errorEl.textContent = errorMessage;
        errorEl.style.display = 'block';
      }
      return false;
    } else {
      element.removeAttribute('aria-invalid');
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.style.display = 'none';
      }
      return true;
    }
  }

  // Clear single field error on input
  [serviceSelect, summaryInput, requirementsInput, emailInput, urlInput].forEach(input => {
    if (!input) return;
    input.addEventListener('input', () => {
      input.removeAttribute('aria-invalid');
      const errEl = document.getElementById(`${input.id}-error`);
      if (errEl) {
        errEl.textContent = '';
        errEl.style.display = 'none';
      }
    });
  });

  // Handle Form Submission -> Opens Review Step
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // 1. Validate required fields
    const isServiceValid = validateField(
      serviceSelect,
      'field-service-error',
      (val) => val && val.trim().length > 0,
      'Please select a service category to proceed.'
    );

    const isSummaryValid = validateField(
      summaryInput,
      'field-summary-error',
      (val) => val && val.trim().length >= 4,
      'Please provide a short summary or title for your project idea.'
    );

    const isReqValid = validateField(
      requirementsInput,
      'field-requirements-error',
      (val) => val && val.trim().length >= 10,
      'Please describe your requirements in a little more detail (at least 10 characters).'
    );

    // 2. Validate optional fields if filled
    let isEmailValid = true;
    if (emailInput && emailInput.value.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      isEmailValid = validateField(
        emailInput,
        'field-email-error',
        (val) => emailRegex.test(val.trim()),
        'Please enter a valid email address, or leave it blank.'
      );
    }

    let isUrlValid = true;
    if (urlInput && urlInput.value.trim().length > 0) {
      isUrlValid = validateField(
        urlInput,
        'field-url-error',
        (val) => {
          const trimmed = val.trim();
          return trimmed.startsWith('http://') || trimmed.startsWith('https://') || trimmed.includes('.');
        },
        'Please enter a valid website address (e.g., https://example.com).'
      );
    }

    if (!isServiceValid || !isSummaryValid || !isReqValid || !isEmailValid || !isUrlValid) {
      // Focus first error element
      const firstInvalid = form.querySelector('[aria-invalid="true"]');
      if (firstInvalid) {
        firstInvalid.focus();
      }
      return;
    }

    // Extract form data
    const formData = {
      service: serviceSelect.options[serviceSelect.selectedIndex]?.text || serviceSelect.value,
      summary: summaryInput.value.trim(),
      requirements: requirementsInput.value.trim(),
      name: document.getElementById('field-name')?.value.trim() || '',
      business: document.getElementById('field-business')?.value.trim() || '',
      email: emailInput?.value.trim() || '',
      country: document.getElementById('field-country')?.value.trim() || '',
      budget: document.getElementById('field-budget')?.options[document.getElementById('field-budget').selectedIndex]?.text || '',
      timeline: document.getElementById('field-timeline')?.options[document.getElementById('field-timeline').selectedIndex]?.text || '',
      referenceUrl: urlInput?.value.trim() || ''
    };

    // Generate formatted WhatsApp message
    currentMessageData = buildWhatsAppMessage(formData);

    // Populate review modal
    displayReviewModal(formData, currentMessageData);
  });

  // Display review modal with safety checks
  function displayReviewModal(formData, messageData) {
    if (!reviewModal) return;

    let html = `
      <div class="review-meta-grid">
        <div class="review-item"><span class="review-label">Selected Service:</span> <span class="review-value font-medium">${escapeHtml(formData.service)}</span></div>
        <div class="review-item"><span class="review-label">Project Summary:</span> <span class="review-value font-medium">${escapeHtml(formData.summary)}</span></div>
        ${formData.name ? `<div class="review-item"><span class="review-label">Name:</span> <span class="review-value">${escapeHtml(formData.name)}</span></div>` : ''}
        ${formData.business ? `<div class="review-item"><span class="review-label">Business / Brand:</span> <span class="review-value">${escapeHtml(formData.business)}</span></div>` : ''}
        ${formData.email ? `<div class="review-item"><span class="review-label">Email:</span> <span class="review-value">${escapeHtml(formData.email)}</span></div>` : ''}
        ${formData.country ? `<div class="review-item"><span class="review-label">Country:</span> <span class="review-value">${escapeHtml(formData.country)}</span></div>` : ''}
        ${formData.budget ? `<div class="review-item"><span class="review-label">Budget:</span> <span class="review-value">${escapeHtml(formData.budget)}</span></div>` : ''}
        ${formData.timeline ? `<div class="review-item"><span class="review-label">Timeline:</span> <span class="review-value">${escapeHtml(formData.timeline)}</span></div>` : ''}
        ${formData.referenceUrl ? `<div class="review-item"><span class="review-label">Reference URL:</span> <span class="review-value">${escapeHtml(formData.referenceUrl)}</span></div>` : ''}
      </div>
      <div class="review-requirements-box">
        <span class="review-label">Detailed Requirements:</span>
        <pre class="review-pre">${escapeHtml(formData.requirements)}</pre>
      </div>
    `;

    reviewContent.innerHTML = html;

    // Check configuration state
    if (messageData.isConfigured) {
      if (configAlertBox) configAlertBox.style.display = 'none';
      if (reviewSubmitBtn) {
        reviewSubmitBtn.style.display = 'inline-flex';
        reviewSubmitBtn.innerHTML = `
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
          Open WhatsApp to Send
        `;
      }
      if (reviewStatusNote) {
        reviewStatusNote.textContent = 'WhatsApp will open in a new tab with your prefilled message. Simply press Send to submit.';
      }
    } else {
      // Unconfigured state: show clear notice to visitor/owner, prevent broken link!
      if (configAlertBox) {
        configAlertBox.style.display = 'block';
        configAlertBox.innerHTML = `
          <strong>Configuration Notice:</strong> The WhatsApp contact number has not been configured in <code>src/config/site.js</code>. 
          To prevent a broken link, you can copy the complete formatted project message below and reach out directly or test the setup.
        `;
      }
      if (reviewSubmitBtn) {
        reviewSubmitBtn.style.display = 'none';
      }
      if (reviewStatusNote) {
        reviewStatusNote.textContent = 'Phone number is in setup mode. Please use "Copy Formatted Message" below.';
      }
    }

    if (copyFeedback) copyFeedback.textContent = '';
    reviewModal.showModal();
  }

  // Edit button closes modal and lets visitor tweak fields
  if (reviewEditBtn) {
    reviewEditBtn.addEventListener('click', () => {
      reviewModal.close();
      summaryInput.focus();
    });
  }

  // Submit button opens WhatsApp
  if (reviewSubmitBtn) {
    reviewSubmitBtn.addEventListener('click', () => {
      if (currentMessageData && currentMessageData.isConfigured && currentMessageData.url) {
        // Safe open in new window/tab
        window.open(currentMessageData.url, '_blank', 'noopener,noreferrer');
        reviewModal.close();
      }
    });
  }

  // Copy button
  if (reviewCopyBtn) {
    reviewCopyBtn.addEventListener('click', async () => {
      if (currentMessageData) {
        const success = await copyToClipboard(currentMessageData.rawMessage);
        if (copyFeedback) {
          copyFeedback.textContent = success ? '✓ Message copied to clipboard!' : 'Please copy the message manually.';
          setTimeout(() => {
            if (copyFeedback) copyFeedback.textContent = '';
          }, 3500);
        }
      }
    });
  }

  // Close modal when clicking outside dialog backdrop
  if (reviewModal) {
    reviewModal.addEventListener('click', (event) => {
      const rect = reviewModal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= event.clientY &&
        event.clientY <= rect.top + rect.height &&
        rect.left <= event.clientX &&
        event.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        reviewModal.close();
      }
    });
  }

  // Service Card Preselection Handler
  document.querySelectorAll('[data-select-service]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const targetServiceId = btn.getAttribute('data-select-service');
      if (serviceSelect && targetServiceId) {
        // Find matching option
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].value === targetServiceId) {
            serviceSelect.selectedIndex = i;
            break;
          }
        }
        // Trigger visual highlight on form
        const formContainer = document.getElementById('contact');
        if (formContainer) {
          formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setTimeout(() => {
            summaryInput?.focus();
          }, 600);
        }
      }
    });
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
