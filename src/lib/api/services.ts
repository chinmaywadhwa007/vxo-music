import type { Service } from '../../types';
import type { ServiceItem } from '../../types/service';
import type { ApiResponse } from './types';
import { apiFetch, USE_MOCK_DATA } from './client';
import { mockServices } from '../../data/mockData';
import { mockServicesList } from '../../data/services';

export async function getServices(): Promise<ApiResponse<Service[]>> {
  if (USE_MOCK_DATA) {
    return {
      success: true,
      data: mockServices,
      timestamp: new Date().toISOString(),
    };
  }

  try {
    return await apiFetch<Service[]>('/services');
  } catch {
    return {
      success: true,
      data: mockServices,
      timestamp: new Date().toISOString(),
    };
  }
}

export async function getServicesList(): Promise<ApiResponse<ServiceItem[]>> {
  if (USE_MOCK_DATA) {
    return {
      success: true,
      data: mockServicesList,
      timestamp: new Date().toISOString(),
    };
  }

  try {
    return await apiFetch<ServiceItem[]>('/services/detailed');
  } catch {
    return {
      success: true,
      data: mockServicesList,
      timestamp: new Date().toISOString(),
    };
  }
}

export async function getServiceById(id: string): Promise<ApiResponse<ServiceItem | null>> {
  if (USE_MOCK_DATA) {
    const service = mockServicesList.find((s) => s.id === id) || null;
    return {
      success: true,
      data: service,
    };
  }

  try {
    return await apiFetch<ServiceItem>(`/services/${id}`);
  } catch {
    const service = mockServicesList.find((s) => s.id === id) || null;
    return {
      success: true,
      data: service,
    };
  }
}
