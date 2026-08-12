import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';
import { PageSection } from '../ui/PageSection';


interface StatItemProps {
  target: number;
  suffix?: string;
  label: string;
}

const StatCounterItem: React.FC<StatItemProps> = ({ target, suffix = '+', label }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds

    const frameTime = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameTime);
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Easing out curve
      const currentCount = Math.round(target * (1 - Math.pow(1 - progress, 3)));

      if (frame >= totalFrames) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(currentCount);
      }
    }, frameTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <div
      ref={ref}
      className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col items-center justify-center text-center hover:border-vexo-red/50 hover:shadow-[0_0_30px_rgba(224,0,0,0.3)] transition-all duration-300 group"
    >
      <div className="font-mono text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-2 group-hover:text-vexo-red-bright transition-colors">
        <span className="text-gradient-red">{count}</span>
        <span className="text-vexo-red-bright">{suffix}</span>
      </div>

      <p className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-vexo-muted group-hover:text-white transition-colors">
        {label}
      </p>
    </div>
  );
};

export const StatsSection: React.FC = () => {
  return (
    <PageSection variant="surface" padding="lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
        <StatCounterItem target={10} suffix="+" label="ARTISTS" />
        <StatCounterItem target={50} suffix="+" label="RELEASES" />
        <StatCounterItem target={100} suffix="+" label="PROJECTS" />
      </div>
    </PageSection>
  );
};

export default StatsSection;
