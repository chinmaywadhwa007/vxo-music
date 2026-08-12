import type { Artist } from '../../types';
import type { ApiResponse } from './types';
import { apiFetch, USE_MOCK_DATA } from './client';
import { mockFeaturedArtists } from '../../data/artists';
import { mockArtists } from '../../data/mockData';

export async function getArtists(): Promise<ApiResponse<Artist[]>> {
  const combined = [...mockFeaturedArtists, ...mockArtists.filter((a) => !mockFeaturedArtists.some((f) => f.id === a.id))];

  if (USE_MOCK_DATA) {
    return {
      success: true,
      data: combined,
      timestamp: new Date().toISOString(),
    };
  }

  try {
    return await apiFetch<Artist[]>('/artists');
  } catch {
    return {
      success: true,
      data: combined,
      timestamp: new Date().toISOString(),
    };
  }
}

export async function getFeaturedArtists(): Promise<ApiResponse<Artist[]>> {
  if (USE_MOCK_DATA) {
    return {
      success: true,
      data: mockFeaturedArtists,
      timestamp: new Date().toISOString(),
    };
  }

  try {
    return await apiFetch<Artist[]>('/artists/featured');
  } catch {
    return {
      success: true,
      data: mockFeaturedArtists,
      timestamp: new Date().toISOString(),
    };
  }
}

export async function getArtistById(id: string): Promise<ApiResponse<Artist | null>> {
  if (USE_MOCK_DATA) {
    const artist = [...mockFeaturedArtists, ...mockArtists].find((a) => a.id === id) || null;
    return {
      success: true,
      data: artist,
    };
  }

  try {
    return await apiFetch<Artist>(`/artists/${id}`);
  } catch {
    const artist = [...mockFeaturedArtists, ...mockArtists].find((a) => a.id === id) || null;
    return {
      success: true,
      data: artist,
    };
  }
}
