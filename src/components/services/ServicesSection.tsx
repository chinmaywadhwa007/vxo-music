import React, { useState, useEffect } from 'react';
import { PageSection } from '../ui/PageSection';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { ServiceSelector } from './ServiceSelector';
import { ServicePreview } from './ServicePreview';
import { servicesApi } from '../../lib/api';
import type { ServiceItem } from '../../types/service';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const ServicesSection: React.FC = () => {
  const navigate = useNavigate();
  const [servicesList, setServicesList] = useState<ServiceItem[]>([]);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    servicesApi.getServicesList().then((res) => {
      if (isMounted && res.data && res.data.length > 0) {
        setServicesList(res.data);
        setSelectedService(res.data[0]);
        setExpandedMobileId(res.data[0].id);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const toggleMobileAccordion = (id: string) => {
    setExpandedMobileId(expandedMobileId === id ? null : id);
  };

  return (
    <PageSection id="services" variant="surface" padding="lg">
      <SectionHeading
        badge="WHAT WE DO"
        title="OUR SERVICES"
        subtitle="End-to-end music production, video creation, global distribution, and strategic artist management."
        action={
          <Button
            variant="outline"
            size="md"
            onClick={() => navigate('/services')}
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="font-extrabold text-xs uppercase tracking-wider border-vexo-red/40 hover:border-vexo-red hidden sm:flex"
          >
            VIEW ALL SERVICES
          </Button>
        }
      />

      {/* Desktop Layout: 2-Column Split (List on Left, Preview on Right) */}
      {selectedService && (
        <div className="hidden lg:grid grid-cols-12 gap-8 lg:gap-12 items-stretch mt-8">
          {/* Left Column: Numbered Service List */}
          <div className="col-span-5 flex flex-col justify-center">
            <ServiceSelector
              services={servicesList}
              selectedServiceId={selectedService.id}
              onSelectService={setSelectedService}
            />
          </div>

          {/* Right Column: Large Cinematic Image/Video Preview */}
          <div className="col-span-7">
            <ServicePreview service={selectedService} />
          </div>
        </div>
      )}

      {/* Mobile Layout: Clean Accordion / Vertical Expandable List */}
      <div className="flex lg:hidden flex-col gap-4 mt-8">
        {servicesList.map((service) => {
          const isExpanded = expandedMobileId === service.id;

          return (
            <div
              key={service.id}
              className="glass-card rounded-2xl overflow-hidden border border-white/10 transition-all duration-300"
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleMobileAccordion(service.id)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <span
                    className={`font-mono text-base font-black transition-colors ${
                      isExpanded ? 'text-vexo-red-bright' : 'text-vexo-muted'
                    }`}
                  >
                    {service.number}
                  </span>
                  <span className="font-extrabold text-base text-white">{service.title}</span>
                </div>

                <ChevronDown
                  className={`w-5 h-5 text-vexo-muted transition-transform duration-300 ${
                    isExpanded ? 'rotate-180 text-vexo-red-bright' : ''
                  }`}
                />
              </button>

              {/* Accordion Expanded Details */}
              {isExpanded && (
                <div className="px-5 pb-6 pt-2 border-t border-white/5 animate-fadeIn flex flex-col gap-4">
                  <div className="relative aspect-video rounded-xl overflow-hidden my-2">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>

                  <p className="text-xs text-vexo-muted leading-relaxed">
                    {service.fullDesc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-2">
                    {service.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-white/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-vexo-red-bright shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => navigate('/contact')}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="w-full text-xs font-extrabold uppercase tracking-wider mt-2"
                  >
                    BOOK THIS SERVICE
                  </Button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </PageSection>
  );
};

export default ServicesSection;
