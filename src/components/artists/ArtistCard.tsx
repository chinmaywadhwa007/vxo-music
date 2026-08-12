import React from 'react';
import type { Artist } from '../../types';
import { cn, formatNumber } from '../../lib/utils';
import { SocialLinks } from '../ui/SocialLinks';
import { UserCheck } from 'lucide-react';

export interface ArtistCardProps {
  artist: Artist;
  className?: string;
}

export const ArtistCard: React.FC<ArtistCardProps> = ({ artist, className }) => {
  return (
    <div
      className={cn(
        'group relative bg-vexo-card border border-white/10 rounded-2xl overflow-hidden aspect-[3/4] transition-all duration-500 hover:border-vexo-red/50 hover:shadow-[0_0_35px_rgba(224,0,0,0.35)] select-none',
        className
      )}
    >
      {/* Portrait Image */}
      <img
        src={artist.avatarUrl}
        alt={artist.name}
        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Base & Hover Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

      {/* Top Badge: Listener Count or Coming Soon */}
      {artist.isComingSoon || artist.name === 'Artist Coming Soon' ? (
        <div className="absolute top-3 left-3 bg-vexo-red/30 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-vexo-red-bright border border-vexo-red/40 flex items-center gap-1.5 shadow-[0_0_15px_rgba(224,0,0,0.4)]">
          <span className="w-1.5 h-1.5 rounded-full bg-vexo-red-bright animate-ping" />
          <span>Artist Coming Soon</span>
        </div>
      ) : artist.monthlyListeners ? (
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-medium text-white border border-white/10 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-vexo-red-bright animate-ping" />
          <span>{formatNumber(artist.monthlyListeners)} Listeners</span>
        </div>
      ) : null}

      {/* Artist Content & Info Reveal */}
      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end transition-all duration-300">
        {/* Role & Genre Badge */}
        <div className="flex flex-wrap items-center gap-1.5 mb-2">
          {artist.genres.map((genre, idx) => (
            <span
              key={idx}
              className="px-2.5 py-0.5 rounded-full text-[10px] uppercase font-bold tracking-wider bg-vexo-red/20 text-vexo-red-bright border border-vexo-red/30 backdrop-blur-sm"
            >
              {genre}
            </span>
          ))}
        </div>

        {/* Artist Name */}
        <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-vexo-red-bright transition-colors duration-300">
          {artist.name}
        </h3>

        {/* Role Subtitle */}
        <p className="text-xs text-vexo-muted font-medium mt-0.5">
          {artist.role}
        </p>

        {/* Social Icons Reveal on Hover */}
        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 delay-75">
          {artist.socialLinks && artist.socialLinks.length > 0 ? (
            <SocialLinks links={artist.socialLinks} size="sm" variant="glass" />
          ) : (
            <SocialLinks size="sm" variant="glass" />
          )}

          <button
            className="p-2 rounded-full bg-vexo-red/20 text-vexo-red-bright hover:bg-vexo-red hover:text-white transition-colors"
            title="Follow Artist"
          >
            <UserCheck className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
