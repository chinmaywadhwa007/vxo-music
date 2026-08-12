import React, { useState, useEffect } from 'react';
import { PageSection } from '../components/ui/PageSection';
import { SectionHeading } from '../components/ui/SectionHeading';
import { AlbumCard } from '../components/music/AlbumCard';
import { albumsApi } from '../lib/api';
import type { Album, Track } from '../types';
import { Search, Play } from 'lucide-react';

import { formatTime } from '../lib/utils';

export const MusicPage: React.FC = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [tracks, setTracks] = useState<Track[]>([]);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    let isMounted = true;
    albumsApi.getAlbums().then((res) => {
      if (isMounted && res.data) setAlbums(res.data);
    });
    albumsApi.getTracks().then((res) => {
      if (isMounted && res.data) setTracks(res.data);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const genres = ['All', 'Electronic', 'Synthwave', 'Ambient Soul', 'Fusion Electronic'];

  const filteredAlbums = albums.filter((album) => {
    const matchesGenre = selectedGenre === 'All' || album.genre.toLowerCase().includes(selectedGenre.toLowerCase());
    const matchesSearch =
      album.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      album.artist.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  return (
    <div className="pt-24 min-h-screen bg-vexo-bg">
      {/* Header Banner Section */}
      <PageSection variant="bg" padding="md">
        <SectionHeading
          badge="VEXO Discography"
          title="MUSIC CATALOG"
          subtitle="Explore official albums, singles, EPs, and original soundscapes from VEXO Music Entertainment."
        />

        {/* Filters & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Genre Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedGenre === genre
                    ? 'bg-vexo-red text-white shadow-[0_0_15px_rgba(224,0,0,0.4)]'
                    : 'bg-vexo-surface text-vexo-muted hover:text-white hover:bg-white/5 border border-white/10'
                }`}
              >
                {genre}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-vexo-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search albums or artists..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-vexo-surface border border-white/10 rounded-full pl-10 pr-4 py-2 text-xs text-white placeholder-vexo-muted outline-none focus:border-vexo-red/50 transition-colors"
            />
          </div>
        </div>

        {/* Albums Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAlbums.map((album) => (
            <AlbumCard key={album.id} album={album} />
          ))}
        </div>
      </PageSection>

      {/* Featured Tracks List */}
      <PageSection variant="surface" padding="lg">
        <SectionHeading
          badge="Popular Tracks"
          title="STREAMING TOP CHARTS"
          subtitle="Top played tracks and original productions across streaming platforms."
        />

        <div className="flex flex-col gap-3">
          {tracks.map((track, idx) => (
            <div
              key={track.id}
              className="glass-card p-3 sm:p-4 rounded-2xl flex items-center justify-between gap-3 border border-white/10 hover:border-vexo-red/40 transition-all duration-300 overflow-hidden"
            >
              <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                <span className="text-sm font-mono font-bold text-vexo-muted w-5 shrink-0">
                  0{idx + 1}
                </span>

                <img
                  src={track.coverUrl}
                  alt={track.title}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover shrink-0"
                />

                <div className="min-w-0">
                  <h4 className="font-bold text-sm text-white hover:text-vexo-red-bright transition-colors truncate">
                    {track.title}
                  </h4>
                  <p className="text-xs text-vexo-muted truncate">{track.artist}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-6 shrink-0">
                <span className="hidden md:inline-block px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-white/5 text-vexo-muted border border-white/10">
                  {track.genre}
                </span>

                <span className="text-xs font-mono text-vexo-muted">
                  {formatTime(track.duration)}
                </span>

                <button className="p-2.5 rounded-full bg-vexo-red/10 text-vexo-red-bright hover:bg-vexo-red hover:text-white transition-colors">
                  <Play className="w-4 h-4 fill-current" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </PageSection>
    </div>
  );
};

export default MusicPage;
