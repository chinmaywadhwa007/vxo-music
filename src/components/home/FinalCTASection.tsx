import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative bg-[#050505] py-24 sm:py-32 lg:py-40 overflow-hidden border-t border-white/10 select-none">
      {/* Ambient Red Glow Backdrops */}
      <motion.div
        animate={{
          scale: shouldReduceMotion ? 1 : [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-vexo-red/25 rounded-full blur-[160px] pointer-events-none"
      />

      <div className="absolute top-0 right-0 w-96 h-96 bg-vexo-red-bright/10 rounded-full blur-[140px] pointer-events-none" />

      <Container className="relative z-10 text-center flex flex-col items-center">
        {/* Top Badge */}
        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-[0.25em] bg-vexo-red/10 text-white border border-vexo-red/40 shadow-[0_0_20px_rgba(224,0,0,0.3)] backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-vexo-red-bright animate-pulse" />
            READY TO COLLABORATE?
          </span>
        </div>

        {/* Large Iconic Headline */}
        <h2 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tight text-white leading-[0.92] mb-10 text-center">
          <span className="block">LET'S CREATE</span>
          <span className="block text-gradient-red drop-shadow-[0_10px_35px_rgba(224,0,0,0.5)]">
            SOMETHING
          </span>
          <span className="block text-white">ICONIC.</span>
        </h2>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Button
            variant="primary"
            size="lg"
            onClick={() => navigate('/contact')}
            rightIcon={<ArrowUpRight className="w-5 h-5" />}
            className="w-full sm:w-auto px-9 py-4 text-xs sm:text-sm font-extrabold tracking-wider uppercase rounded-xl shadow-[0_0_30px_rgba(224,0,0,0.6)] hover:scale-105 transition-all duration-300"
          >
            START A PROJECT
          </Button>

          <Button
            variant="secondary"
            size="lg"
            onClick={() => navigate('/contact')}
            leftIcon={<Mail className="w-4 h-4 text-vexo-red-bright" />}
            className="w-full sm:w-auto px-9 py-4 text-xs sm:text-sm font-extrabold tracking-wider uppercase rounded-xl bg-neutral-950/80 backdrop-blur-md border border-white/15 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
          >
            CONTACT VEXO
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default FinalCTASection;
