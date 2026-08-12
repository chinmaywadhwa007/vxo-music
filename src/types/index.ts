export interface Album {
  id: string;
  title: string;
  artist: string;
  year: number | string;
  coverUrl: string;
  genre: string;
  spotifyUrl: string;
  youtubeUrl: string;
  trackCount?: number;
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  album?: string;
  coverUrl: string;
  duration: number; // in seconds
  audioUrl?: string;
  genre: string;
  plays?: number;
  likes?: number;
  isPopular?: boolean;
}

export interface Artist {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  coverUrl?: string;
  bio?: string;
  followers?: number;
  monthlyListeners?: number;
  genres: string[];
  socialLinks?: SocialLink[];
}

export interface SocialLink {
  platform: 'spotify' | 'youtube' | 'instagram' | 'twitter' | 'apple' | 'soundcloud';
  url: string;
}

export interface Event {
  id: string;
  title: string;
  artist: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  imageUrl: string;
  price: string;
  status: 'upcoming' | 'sold-out' | 'live';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
  category: 'production' | 'distribution' | 'management' | 'marketing';
}

export interface Video {
  id: string;
  title: string;
  artist: string;
  thumbnailUrl: string;
  videoUrl?: string;
  youtubeId: string;
  category: 'Official Music Videos' | 'Live Performances' | 'Behind The Scenes' | 'Visualizers';
  description?: string;
  featured?: boolean;
  duration: string;
  views: number;
  likes?: number;
  publishedAt: string;
  tags?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  referenceId?: string;
  timestamp?: string;
}
