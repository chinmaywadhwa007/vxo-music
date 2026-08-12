import type { Artist } from '../types';

export const mockFeaturedArtists: Artist[] = [
  {
    id: 'art-1',
    name: 'Artist Coming Soon',
    role: 'Electronic Producer & DJ',
    avatarUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=800&q=80',
    genres: ['Synthwave', 'Dark Electro'],
    isComingSoon: true,
  },
  {
    id: 'art-2',
    name: 'Artist Coming Soon',
    role: 'Vocalist & Producer',
    avatarUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    genres: ['Ambient Soul', 'Alternative R&B'],
    isComingSoon: true,
  },
  {
    id: 'art-3',
    name: 'Artist Coming Soon',
    role: 'Composer & Multi-Instrumentalist',
    avatarUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    genres: ['Indian Fusion', 'Cinematic Score'],
    isComingSoon: true,
  },
  {
    id: 'art-4',
    name: 'Artist Coming Soon',
    role: 'Singer & Songwriter',
    avatarUrl: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    genres: ['Indie Pop', 'Electronic'],
    isComingSoon: true,
  },
];
