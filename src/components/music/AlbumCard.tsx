import React from 'react';
import type { Album } from '../../types';
import { Play, Music2 } from 'lucide-react';
import { cn } from '../../lib/utils';

export interface AlbumCardProps {
  album: Album;
  className?: string;
}

export const AlbumCard: React.FC<AlbumCardProps> = ({ album, className }) => {
  return (
    <div
      className={cn(
        'group relative bg-vexo-card border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:border-vexo-red/50 hover:shadow-[0_0_35px_rgba(224,0,0,0.35)] flex flex-col',
        className
      )}
    >
      {/* Artwork Container */}
      <div className="relative aspect-square overflow-hidden bg-neutral-900">
        <img
          src={album.coverUrl}
          alt={album.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Hover Dark Backdrop & Glass Blur */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          {/* Centered Play Button */}
          <button
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-vexo-red to-vexo-red-bright text-white flex items-center justify-center shadow-[0_0_25px_rgba(224,0,0,0.7)] transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75 hover:scale-110 cursor-pointer"
            aria-label={`Play ${album.title}`}
          >
            <Play className="w-6 h-6 fill-current translate-x-0.5" />
          </button>
        </div>

        {/* Top Floating Badge */}
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-mono text-vexo-muted border border-white/10">
          {album.year}
        </div>

        {/* Floating Social Platform Icons (Top Right) */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
          <a
            href={album.spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Listen on Spotify"
            className="w-8 h-8 rounded-full bg-black/70 border border-white/15 flex items-center justify-center text-green-400 hover:scale-110 hover:bg-green-500 hover:text-black transition-all"
          >
            <Music2 className="w-4 h-4" />
          </a>
          <a
            href={album.youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Watch on YouTube"
            className="w-8 h-8 rounded-full bg-black/70 border border-white/15 flex items-center justify-center text-red-500 hover:scale-110 hover:bg-red-600 hover:text-white transition-all"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Album Info */}
      <div className="p-5 flex flex-col justify-between flex-1 bg-gradient-to-b from-vexo-card to-vexo-surface">
        <div>
          <h3 className="font-extrabold text-base text-white group-hover:text-vexo-red-bright transition-colors duration-300 line-clamp-1">
            {album.title}
          </h3>
          <p className="text-xs text-vexo-muted mt-1 font-medium line-clamp-1">
            {album.artist}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-vexo-muted">
          <span>{album.genre}</span>
          {album.trackCount && <span>{album.trackCount} Tracks</span>}
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
