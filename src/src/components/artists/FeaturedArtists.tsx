import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageSection } from '../ui/PageSection';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { ArtistCard } from './ArtistCard';
import { artistsApi } from '../../lib/api';
import type { Artist } from '../../types';
import { Users } from 'lucide-react';

export const FeaturedArtists: React.FC = () => {
  const navigate = useNavigate();
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    let isMounted = true;
    artistsApi.getFeaturedArtists().then((res) => {
      if (isMounted && res.data) setArtists(res.data);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <PageSection id="artists" variant="surface" padding="lg">
      <SectionHeading
        badge="VEXO Roster"
        title="FEATURED ARTISTS"
        subtitle="Discover the visionary producers, vocalists, and composers driving our sonic movement."
        action={
          <Button
            variant="ghost"
            size="md"
            onClick={() => navigate('/artists')}
            leftIcon={<Users className="w-4 h-4 text-vexo-red-bright" />}
            className="font-extrabold text-xs uppercase tracking-wider hover:text-white"
          >
            VIEW ROSTER
          </Button>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {artists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
    </PageSection>
  );
};

export default FeaturedArtists;
