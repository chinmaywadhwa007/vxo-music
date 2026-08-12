import type { Artist } from '../types';

export const mockFeaturedArtists: Artist[] = [
  {
    id: 'art-1',
    name: 'Kaelen Vance',
    role: 'Electronic Producer & DJ',
    avatarUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    genres: ['Synthwave', 'Dark Electro'],
    monthlyListeners: 1450000,
    socialLinks: [
      { platform: 'instagram', url: 'https://instagram.com' },
      { platform: 'spotify', url: 'https://spotify.com' },
      { platform: 'youtube', url: 'https://youtube.com' },
      { platform: 'twitter', url: 'https://twitter.com' },
    ],
  },
  {
    id: 'art-2',
    name: 'Aria Thorne',
    role: 'Vocalist & Producer',
    avatarUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    genres: ['Ambient Soul', 'Alternative R&B'],
    monthlyListeners: 980000,
    socialLinks: [
      { platform: 'instagram', url: 'https://instagram.com' },
      { platform: 'spotify', url: 'https://spotify.com' },
      { platform: 'apple', url: 'https://apple.com' },
    ],
  },
  {
    id: 'art-3',
    name: 'Rohan Sharma',
    role: 'Composer & Multi-Instrumentalist',
    avatarUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    genres: ['Indian Fusion', 'Cinematic Score'],
    monthlyListeners: 720000,
    socialLinks: [
      { platform: 'instagram', url: 'https://instagram.com' },
      { platform: 'youtube', url: 'https://youtube.com' },
      { platform: 'spotify', url: 'https://spotify.com' },
    ],
  },
  {
    id: 'art-4',
    name: 'Mira Patel',
    role: 'Singer & Songwriter',
    avatarUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    genres: ['Indie Pop', 'Electronic'],
    monthlyListeners: 610000,
    socialLinks: [
      { platform: 'instagram', url: 'https://instagram.com' },
      { platform: 'spotify', url: 'https://spotify.com' },
      { platform: 'youtube', url: 'https://youtube.com' },
    ],
  },
];
