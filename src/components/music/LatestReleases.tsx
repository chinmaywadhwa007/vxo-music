import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageSection } from '../ui/PageSection';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { AlbumCard } from './AlbumCard';
import { albumsApi } from '../../lib/api';
import type { Album } from '../../types';
import { ArrowRight } from 'lucide-react';

export const LatestReleases: React.FC = () => {
  const navigate = useNavigate();
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    let isMounted = true;
    albumsApi.getAlbums().then((res) => {
      if (isMounted && res.data) setAlbums(res.data);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <PageSection id="music" variant="bg" padding="lg">
      <SectionHeading
        badge="Fresh Audio Drops"
        title="LATEST RELEASES"
        subtitle="Explore the newest original tracks, singles, and full albums from VEXO Music Entertainment."
        action={
          <Button
            variant="outline"
            size="md"
            onClick={() => navigate('/music')}
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="font-extrabold text-xs uppercase tracking-wider border-vexo-red/40 hover:border-vexo-red"
          >
            VIEW ALL MUSIC
          </Button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {albums.map((album) => (
          <AlbumCard key={album.id} album={album} />
        ))}
      </div>
    </PageSection>
  );
};

export default LatestReleases;
