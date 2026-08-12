import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { VexoLogo } from '../ui/VexoLogo';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Music', path: '/music' },
    { label: 'Artists', path: '/artists' },
    { label: 'Services', path: '/services' },
    { label: 'Events', path: '/events' },
    { label: 'Videos', path: '/videos' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const servicesList = [
    { label: 'Music Production', path: '/services' },
    { label: 'Audio & Video Production', path: '/services' },
    { label: 'Artist Management', path: '/services' },
    { label: 'Music Distribution', path: '/services' },
    { label: 'Digital Marketing', path: '/services' },
    { label: 'Brand Collaborations', path: '/services' },
    { label: 'Pre-Wedding Shoot', path: '/services' },
  ];

  return (
    <footer className="bg-vexo-surface border-t border-white/10 text-vexo-white relative overflow-hidden">
      {/* Red Ambient Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-vexo-red/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-vexo-red-bright/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <Container className="py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Column 1: Brand & About VEXO */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 flex flex-col gap-5">
            {/* Official Transparent Vector VEXO Entertainment Logo */}
            <Link
              to="/"
              className="flex items-center group focus:outline-none hover:scale-105 transition-transform duration-300 w-fit"
            >
              <VexoLogo size="lg" />
            </Link>

            <p className="text-vexo-muted text-sm leading-relaxed max-w-md">
              About VEXO: A premier music entertainment hub & record label specializing in original sound production, music distribution, artist management, and immersive video production based in Jaipur, India.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/vexomusicentertainment"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-vexo-muted hover:text-pink-500 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@vexomusicentertainment"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-vexo-muted hover:text-red-500 hover:border-red-500/50 hover:bg-red-500/10 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/vexomusicentertainment"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-vexo-muted hover:text-blue-500 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com/vexomusicentertainment"
                target="_blank"
                rel="noopener noreferrer"
                title="X / Twitter"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-vexo-muted hover:text-sky-400 hover:border-sky-400/50 hover:bg-sky-400/10 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>


            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-base text-white border-l-2 border-vexo-red pl-3 uppercase tracking-wider text-xs">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-vexo-muted">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="hover:text-vexo-red-bright hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-base text-white border-l-2 border-vexo-red pl-3 uppercase tracking-wider text-xs">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-vexo-muted">
              {servicesList.map((service, idx) => (
                <li key={idx}>
                  <Link
                    to={service.path}
                    className="hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-base text-white border-l-2 border-vexo-red pl-3 uppercase tracking-wider text-xs">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3 text-sm text-vexo-muted">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-vexo-red shrink-0 mt-1" />
                <span>SKY CROWN, Office No. 205, Chordiya City, Kamla Nehru Nagar, Ajmer Road, Jaipur, Pin Code- 302021</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-vexo-red shrink-0" />
                <a href="tel:+917239999966" className="hover:text-white transition-colors">
                  +91 72399-99966
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-vexo-red shrink-0" />
                <a href="mailto:Contact@vexomusic.in" className="hover:text-white transition-colors">
                  Contact@vexomusic.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6 bg-[#050505] relative z-10">
        <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-vexo-muted">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-semibold">VEXO Music Entertainment</span>. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-vexo-muted hover:text-white hover:bg-white/5 px-3 py-1.5 rounded-full border border-white/10 transition-all duration-300"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
