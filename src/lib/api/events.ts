import type { Event } from '../../types';
import type { ApiResponse } from './types';
import { apiFetch, USE_MOCK_DATA } from './client';
import { mockEvents } from '../../data/mockData';

export async function getEvents(): Promise<ApiResponse<Event[]>> {
  if (USE_MOCK_DATA) {
    return {
      success: true,
      data: mockEvents,
      timestamp: new Date().toISOString(),
    };
  }

  try {
    return await apiFetch<Event[]>('/events');
  } catch {
    return {
      success: true,
      data: mockEvents,
      timestamp: new Date().toISOString(),
    };
  }
}

export async function getUpcomingEvents(): Promise<ApiResponse<Event[]>> {
  if (USE_MOCK_DATA) {
    return {
      success: true,
      data: mockEvents.filter((e) => e.status === 'upcoming' || e.status === 'live'),
      timestamp: new Date().toISOString(),
    };
  }

  try {
    return await apiFetch<Event[]>('/events/upcoming');
  } catch {
    return {
      success: true,
      data: mockEvents.filter((e) => e.status === 'upcoming' || e.status === 'live'),
      timestamp: new Date().toISOString(),
    };
  }
}

export async function getEventById(id: string): Promise<ApiResponse<Event | null>> {
  if (USE_MOCK_DATA) {
    const eventItem = mockEvents.find((e) => e.id === id) || null;
    return {
      success: true,
      data: eventItem,
    };
  }

  try {
    return await apiFetch<Event>(`/events/${id}`);
  } catch {
    const eventItem = mockEvents.find((e) => e.id === id) || null;
    return {
      success: true,
      data: eventItem,
    };
  }
}
