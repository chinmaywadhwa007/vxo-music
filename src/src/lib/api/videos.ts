import type { Video } from '../../types';
import type { ApiResponse } from './types';
import { apiFetch, USE_MOCK_DATA } from './client';
import { mockVideos } from '../../data/mockData';

export async function getVideos(): Promise<ApiResponse<Video[]>> {
  if (USE_MOCK_DATA) {
    return {
      success: true,
      data: mockVideos,
      timestamp: new Date().toISOString(),
    };
  }

  try {
    return await apiFetch<Video[]>('/videos');
  } catch {
    return {
      success: true,
      data: mockVideos,
      timestamp: new Date().toISOString(),
    };
  }
}

export async function getFeaturedVideo(): Promise<ApiResponse<Video>> {
  if (USE_MOCK_DATA) {
    const featured = mockVideos.find((v) => v.featured) || mockVideos[0];
    return {
      success: true,
      data: featured,
      timestamp: new Date().toISOString(),
    };
  }

  try {
    return await apiFetch<Video>('/videos/featured');
  } catch {
    const featured = mockVideos.find((v) => v.featured) || mockVideos[0];
    return {
      success: true,
      data: featured,
      timestamp: new Date().toISOString(),
    };
  }
}

export async function getLatestVideos(limit = 3): Promise<ApiResponse<Video[]>> {
  if (USE_MOCK_DATA) {
    return {
      success: true,
      data: mockVideos.slice(1, limit + 1),
      timestamp: new Date().toISOString(),
    };
  }

  try {
    return await apiFetch<Video[]>(`/videos/latest?limit=${limit}`);
  } catch {
    return {
      success: true,
      data: mockVideos.slice(1, limit + 1),
      timestamp: new Date().toISOString(),
    };
  }
}

export async function getVideoById(id: string): Promise<ApiResponse<Video | null>> {
  if (USE_MOCK_DATA) {
    const video = mockVideos.find((v) => v.id === id) || null;
    return {
      success: true,
      data: video,
    };
  }

  try {
    return await apiFetch<Video>(`/videos/${id}`);
  } catch {
    const video = mockVideos.find((v) => v.id === id) || null;
    return {
      success: true,
      data: video,
    };
  }
}
