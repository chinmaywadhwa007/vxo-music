import type { Album, Track } from '../../types';
import type { ApiResponse } from './types';
import { apiFetch, USE_MOCK_DATA } from './client';
import { mockAlbums } from '../../data/albums';
import { mockTracks } from '../../data/mockData';

export async function getAlbums(): Promise<ApiResponse<Album[]>> {
  if (USE_MOCK_DATA) {
    return {
      success: true,
      data: mockAlbums,
      timestamp: new Date().toISOString(),
    };
  }

  try {
    return await apiFetch<Album[]>('/albums');
  } catch {
    return {
      success: true,
      data: mockAlbums,
      timestamp: new Date().toISOString(),
    };
  }
}

export async function getAlbumById(id: string): Promise<ApiResponse<Album | null>> {
  if (USE_MOCK_DATA) {
    const album = mockAlbums.find((a) => a.id === id) || null;
    return {
      success: true,
      data: album,
    };
  }

  try {
    return await apiFetch<Album>(`/albums/${id}`);
  } catch {
    const album = mockAlbums.find((a) => a.id === id) || null;
    return {
      success: true,
      data: album,
    };
  }
}

export async function getTracks(): Promise<ApiResponse<Track[]>> {
  if (USE_MOCK_DATA) {
    return {
      success: true,
      data: mockTracks,
    };
  }

  try {
    return await apiFetch<Track[]>('/tracks');
  } catch {
    return {
      success: true,
      data: mockTracks,
    };
  }
}
