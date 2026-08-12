import type { ContactFormData, ContactResponse } from '../../types';
import type { ApiResponse } from './types';
import { apiFetch } from './client';
import { submitContactForm } from '../../services/contactService';

export async function submitContact(
  formData: ContactFormData
): Promise<ApiResponse<ContactResponse>> {
  try {
    // Attempt sending real HTTP POST to Fastify API endpoint (/api/contact)
    return await apiFetch<ContactResponse>('/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
  } catch (error: any) {
    console.warn('[Contact API] Post to Fastify failed, falling back to mock handler.', error.message);
    const result = await submitContactForm(formData);
    return {
      success: result.success,
      data: result,
      message: result.message,
      timestamp: new Date().toISOString(),
    };
  }
}
