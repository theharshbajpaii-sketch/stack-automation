import { SITE_CONFIG } from '../config/site.js';

/**
 * Builds a structured, professional WhatsApp message from form data.
 * Omits empty optional fields to keep the message clean and concise.
 */
export function buildWhatsAppMessage(formData) {
  const parts = [];

  // Greeting
  parts.push(SITE_CONFIG.whatsapp.defaultGreeting);
  parts.push(''); // Blank line

  // Core Project Brief (Required fields)
  parts.push('📋 *PROJECT BRIEF: STACK & AUTOMATION*');
  parts.push(`• *Service:* ${formData.service || 'Not specified'}`);
  parts.push(`• *Project Summary:* ${formData.summary || 'N/A'}`);
  parts.push('');

  parts.push('*Detailed Requirements:*');
  parts.push(formData.requirements || 'N/A');
  parts.push('');

  // Additional details (only if non-empty)
  const metaParts = [];
  if (formData.name && formData.name.trim()) {
    metaParts.push(`• *Name:* ${formData.name.trim()}`);
  }
  if (formData.business && formData.business.trim()) {
    metaParts.push(`• *Business / Brand:* ${formData.business.trim()}`);
  }
  if (formData.email && formData.email.trim()) {
    metaParts.push(`• *Email:* ${formData.email.trim()}`);
  }
  if (formData.country && formData.country.trim()) {
    metaParts.push(`• *Country / Location:* ${formData.country.trim()}`);
  }
  if (formData.budget && formData.budget.trim()) {
    metaParts.push(`• *Estimated Budget:* ${formData.budget.trim()}`);
  }
  if (formData.timeline && formData.timeline.trim()) {
    metaParts.push(`• *Target Timeline:* ${formData.timeline.trim()}`);
  }
  if (formData.referenceUrl && formData.referenceUrl.trim()) {
    metaParts.push(`• *Reference / Website:* ${formData.referenceUrl.trim()}`);
  }

  if (metaParts.length > 0) {
    parts.push('*Contact & Project Context:*');
    parts.push(...metaParts);
    parts.push('');
  }

  parts.push('— Sent via stackautomation.com inquiry form');

  const rawMessage = parts.join('\n');
  const encodedMessage = encodeURIComponent(rawMessage);

  // Validate phone number format (must contain digits, no + or symbols)
  const rawPhone = (SITE_CONFIG.whatsapp.phoneNumber || '').toString().trim().replace(/[^0-9]/g, '');
  const isConfigured = rawPhone.length >= 7; // Minimal sanity check for international phone

  const url = isConfigured
    ? `https://wa.me/${rawPhone}?text=${encodedMessage}`
    : null;

  return {
    isConfigured,
    rawPhone,
    rawMessage,
    encodedMessage,
    url
  };
}

/**
 * Helper to copy text to clipboard with fallback
 */
export async function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // Fallback below
    }
  }

  // Fallback for older browsers or insecure contexts
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  let successful = false;
  try {
    successful = document.execCommand('copy');
  } catch (err) {
    console.error('Fallback clipboard error', err);
  }
  document.body.removeChild(textArea);
  return successful;
}
