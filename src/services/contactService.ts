import type { ContactFormData, ContactResponse } from '../types';

/**
 * API-ready service for processing contact and project booking submissions.
 * Currently uses mock asynchronous delivery with network latency simulation.
 */
export const submitContactForm = async (data: ContactFormData): Promise<ContactResponse> => {
  // Simulate network delay (1.2s)
  await new Promise((resolve) => setTimeout(resolve, 1200));

  // Client-side fallback check
  if (!data.name || !data.email || !data.message) {
    throw new Error('Please fill in all required fields.');
  }

  // Generate unique tracking reference ID (e.g., VEXO-2026-8942)
  const randomId = Math.floor(1000 + Math.random() * 9000);
  const referenceId = `VEXO-2026-${randomId}`;

  // Log payload for development debugging
  console.log('[ContactService] Mock Submission Received:', {
    ...data,
    referenceId,
    timestamp: new Date().toISOString(),
  });

  return {
    success: true,
    message: 'Your project request has been submitted successfully! Our team will contact you within 24 hours.',
    referenceId,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };
};
