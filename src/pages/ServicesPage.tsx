import React from 'react';
import { PageSection } from '../components/ui/PageSection';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { AnimatedHeroBackground } from '../components/ui/AnimatedHeroBackground';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const navigate = useNavigate();

  const capabilities = [
    {
      number: '01',
      title: 'MUSIC PRODUCTION',
      description:
        'High-fidelity sonic architecture. We build tracks from the ground up, blending analog warmth with cutting-edge digital precision. Designed for artists who demand a signature sound that resonates in arenas and headphones alike.',
      cta: 'INITIATE PROJECT',
      ctaType: 'primary',
      icon: <ArrowRight className="w-4 h-4 ml-1" />,
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'VEXO Music Production Studio Desk',
      imageFirst: false,
    },
    {
      number: '02',
      title: 'MIXING & MASTERING',
      description:
        'The final polish. We ensure your tracks achieve maximum impact, dynamic range, and clarity across all playback systems. A clinical, yet artistic approach to finalizing audio for commercial release and global distribution.',
      cta: 'SUBMIT AUDIO',
      ctaType: 'secondary',
      icon: <ArrowUpRight className="w-4 h-4 ml-1" />,
      image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Studio Monitor Speaker & Mixing Control',
      imageFirst: true,
    },
    {
      number: '03',
      title: 'ARTIST MANAGEMENT',
      description:
        'Strategic career architecture. We navigate the complexities of the modern music industry, from brand positioning and contract negotiation to tour routing. We protect your vision while scaling your global reach.',
      cta: 'JOIN ROSTER',
      ctaType: 'primary',
      icon: <ArrowRight className="w-4 h-4 ml-1" />,
      image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Artist Management Studio & City Skyline',
      imageFirst: false,
    },
    {
      number: '04',
      title: 'AUDIO & VIDEO PRODUCTION',
      description:
        'Cinematic visual storytelling. From high-concept 4K music videos to live multi-cam concert films and studio visualizers, we craft compelling imagery that elevates your sonic identity.',
      cta: 'START VIDEO SHOOT',
      ctaType: 'secondary',
      icon: <ArrowUpRight className="w-4 h-4 ml-1" />,
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'VEXO Video Production Set & Camera Rig',
      imageFirst: true,
    },
    {
      number: '05',
      title: 'MUSIC DISTRIBUTION',
      description:
        'Global DSP amplification. Direct publishing on Spotify, Apple Music, YouTube Music, and 150+ digital stores with fast metadata delivery, playlist pitching, and transparent royalty accounting.',
      cta: 'PUBLISH MUSIC',
      ctaType: 'primary',
      icon: <ArrowRight className="w-4 h-4 ml-1" />,
      image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Vinyl Record & Global Publishing Platform',
      imageFirst: false,
    },
    {
      number: '06',
      title: 'DIGITAL MARKETING',
      description:
        'Data-driven audience engagement. Targeted music ad campaigns, short-form viral strategy, press outreach, and commercial brand sponsorship curation engineered to scale streaming numbers.',
      cta: 'AMPLIFY BRAND',
      ctaType: 'secondary',
      icon: <ArrowUpRight className="w-4 h-4 ml-1" />,
      image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Digital Soundwaves & Marketing Visualizer',
      imageFirst: true,
    },
    {
      number: '07',
      title: 'PRE-WEDDING CINEMATIC',
      description:
        'High fashion storytelling for your narrative. We apply our music video production standards to personal storytelling, creating moody, editorial, and unforgettable visual documents of your relationship.',
      cta: 'CONSULT US',
      ctaType: 'secondary',
      icon: <ArrowUpRight className="w-4 h-4 ml-1" />,
      image: '/satane-lage-ho-cover.png',
      imageAlt: 'Satane Lage Ho - Red Saree Cinematic',
      imageFirst: true,
      imagePosition: 'object-top',
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#050505] text-white pb-24 selection:bg-vexo-red selection:text-white">
      {/* 1. HERO HEADER SECTION WITH CINEMATIC STUDIO PHOTO BACKGROUND */}
      <div className="relative pt-20 pb-28 border-b border-white/10 overflow-hidden bg-[#050505]">
        <AnimatedHeroBackground bgImage="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=2000&q=80" />

        <Container size="md" className="relative z-10 text-center max-w-4xl mx-auto px-4">
          {/* Animated Glow Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-vexo-red/15 text-vexo-red-bright border border-vexo-red/35 shadow-[0_0_25px_rgba(224,0,0,0.4)] mb-6 animate-pulse">
            <Sparkles className="w-3.5 h-3.5" /> PRODUCTION & MEDIA SUITE
          </div>

          {/* BOLD DISPLAY TITLE */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase tracking-[0.08em] text-white mb-6 leading-none drop-shadow-[0_10px_40px_rgba(0,0,0,0.95)]">
            OUR CAPABILITIES
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-neutral-100 font-medium leading-relaxed max-w-2xl mx-auto tracking-wide mb-8 drop-shadow-[0_2px_15px_rgba(0,0,0,0.95)]">
            Premium execution for visionary artists and brands. From raw audio engineering to cinematic visual storytelling, we craft immersive entertainment experiences.
          </p>

          {/* Quick Capabilities Metrics Bar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-mono text-neutral-300 shadow-inner">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-vexo-red shadow-[0_0_8px_#FF1111]" />
              <strong className="text-white">7 CORE SERVICES</strong>
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-2">
              <strong className="text-white">ANALOG SSL CONSOLE</strong>
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="flex items-center gap-2">
              <strong className="text-white">DOLBY ATMOS MASTERING</strong>
            </span>
          </div>
        </Container>
      </div>

      {/* 2. ALTERNATING CAPABILITIES EDITORIAL LIST */}
      <PageSection padding="lg">
        <Container size="lg" className="max-w-6xl mx-auto flex flex-col gap-24 sm:gap-32">
          {capabilities.map((item) => (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-center group">
              {/* Content Column */}
              <div
                className={`lg:col-span-6 flex flex-col justify-center ${item.imageFirst ? 'lg:order-2' : 'lg:order-1'
                  }`}
              >
                {/* Large Watermark Number */}
                <span className="text-3xl sm:text-4xl font-mono font-black text-neutral-600 mb-3 tracking-widest block select-none">
                  {item.number}
                </span>

                {/* Bold Uppercase Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-white mb-5 leading-tight group-hover:text-vexo-red-bright transition-colors duration-300">
                  {item.title}
                </h2>

                {/* Editorial Description */}
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed tracking-wide mb-8 max-w-xl font-normal">
                  {item.description}
                </p>

                {/* CTA Button */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                  {item.ctaType === 'primary' ? (
                    <Button
                      variant="primary"
                      size="md"
                      onClick={() => navigate(`/contact?service=${encodeURIComponent(item.title)}`)}
                      rightIcon={item.icon}
                      className="font-bold text-xs uppercase tracking-widest px-7 py-3.5 bg-gradient-to-r from-[#FF4D4D] to-[#E00000] text-white hover:shadow-[0_0_30px_rgba(255,77,77,0.5)] transition-all duration-300 border-none rounded-sm"
                    >
                      {item.cta}
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      size="md"
                      onClick={() => navigate(`/contact?service=${encodeURIComponent(item.title)}`)}
                      rightIcon={item.icon}
                      className="font-bold text-xs uppercase tracking-widest px-7 py-3.5 bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-white transition-all duration-300 rounded-sm"
                    >
                      {item.cta}
                    </Button>
                  )}
                </div>
              </div>

              {/* Framed Cinematic Image Column */}
              <div
                className={`lg:col-span-6 ${item.imageFirst ? 'lg:order-1' : 'lg:order-2'
                  }`}
              >
                <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.8)] group-hover:border-vexo-red/40 transition-all duration-500 bg-neutral-950">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 contrast-105 ${item.imagePosition ?? 'object-center'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          ))}
        </Container>
      </PageSection>
    </div>
  );
};

export default ServicesPage;
