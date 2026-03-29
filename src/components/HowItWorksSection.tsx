import { useState, useEffect, useRef } from "react";
import { UserPlus, Search, MessageCircle, Heart } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  { number: "01", title: "Create Your Profile", subtitle: "Your story, told beautifully", description: "Begin your profile the way a shaadi invitation is crafted — with pride in your family and values.", Icon: UserPlus },
  { number: "02", title: "Discover Your Match", subtitle: "Curated just for you", description: "Browse profiles curated for the Kamma community — filtered by your family's preferences.", Icon: Search },
  { number: "03", title: "Connect & Converse", subtitle: "When hearts align", description: "Share your interest with all the dignity of an elder delivering a proposal — respectfully, privately.", Icon: MessageCircle },
  { number: "04", title: "Begin Forever", subtitle: "Your journey starts here", description: "From first hello to saptapadi — your forever starts here, with our family supporting yours.", Icon: Heart },
];

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(-1);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveStep(0);
          let step = 0;
          timerRef.current = setInterval(() => {
            step += 1;
            setActiveStep(step);
            if (step >= steps.length - 1) clearInterval(timerRef.current);
          }, 900);
        } else {
          clearInterval(timerRef.current);
          setActiveStep(-1);
        }
      },
      { threshold: [0, 0.25], rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(section);
    return () => { observer.disconnect(); clearInterval(timerRef.current); };
  }, []);

  const isStepActive = (i: number) => activeStep >= 0 && i <= activeStep;

  return (
    <section ref={sectionRef} id="journey-section" className="section-padding" style={{ background: 'hsl(var(--cream-50))' }}>
      <div className="container mx-auto" style={{ maxWidth: '1100px' }}>
        <ScrollReveal>
          <div className="text-center mb-14 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-9 h-[1px]" style={{ background: 'hsl(var(--ink-400))' }} />
              <span className="eyebrow" style={{ color: 'hsl(var(--ink-400))' }}>YOUR JOURNEY</span>
              <div className="w-9 h-[1px]" style={{ background: 'hsl(var(--ink-400))' }} />
            </div>
            <h2 className="font-display font-light" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', color: 'hsl(var(--ink-900))', letterSpacing: '-0.02em' }}>
              The Path to Forever
            </h2>
            <p className="font-accent text-[20px] md:text-[22px]" style={{ color: 'hsl(var(--gold-700))' }}>
              begins with a single step
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop timeline */}
        <div className="hidden md:block" style={{ position: 'relative', width: '100%', maxWidth: '100%' }}>
          <div style={{ display: 'flex', position: 'relative', width: '100%', maxWidth: '100%', paddingTop: '12px' }}>
            {/* Connecting line — spans from center of first circle to center of last circle */}
            <div className="absolute pointer-events-none" style={{
              top: 'calc(12px + 36px)',
              left: 'calc(25% / 2)',
              right: 'calc(25% / 2)',
              height: '2px',
              zIndex: 0,
              overflow: 'hidden',
            }}>
              <div className="w-full h-full" style={{ background: 'hsla(40,52%,54%,0.15)' }} />
              <div className="absolute top-0 left-0 h-full" style={{
                width: `${activeStep >= 0 ? (activeStep / (steps.length - 1)) * 100 : 0}%`,
                background: 'hsl(var(--gold-500))',
                transition: 'width 0.8s cubic-bezier(0.25,0.1,0,1)',
                borderRadius: '2px',
              }} />
            </div>
            {steps.map((step, i) => {
              const active = isStepActive(i);
              return (
                <div key={step.number} className="flex flex-col items-center text-center relative px-3" style={{ zIndex: 1, flex: '1 1 0%', minWidth: 0 }}>
                  {/* Circle */}
                  <div className="relative mb-3">
                    <div className="flex items-center justify-center" style={{
                      width: '72px', height: '72px', borderRadius: '50%',
                      background: active
                        ? 'linear-gradient(135deg, hsl(var(--gold-500)), hsl(var(--gold-700)))'
                        : 'white',
                      border: active ? 'none' : '1.5px solid hsla(40,52%,54%,0.25)',
                      boxShadow: active
                        ? '0 8px 32px hsla(40,52%,54%,0.4), 0 0 0 6px hsla(40,52%,54%,0.1)'
                        : '0 4px 16px hsla(30,50%,4%,0.06)',
                      transform: active ? 'scale(1.08)' : 'scale(1)',
                      transition: 'all 0.6s cubic-bezier(0.25,0.1,0,1)',
                    }}>
                      <step.Icon className="w-6 h-6" style={{
                        color: active ? '#FFFDF8' : 'hsla(40,52%,54%,0.5)',
                        transition: 'color 0.5s ease',
                      }} />
                    </div>
                    {active && (
                      <div className="absolute inset-[-6px] rounded-full" style={{
                        border: '2px solid hsla(40,52%,54%,0.2)',
                        animation: 'goldPulse 2s ease-in-out infinite',
                      }} />
                    )}
                  </div>

                  <span className="font-body font-semibold mb-2" style={{
                    fontSize: '10px', letterSpacing: '0.12em',
                    color: active ? 'hsl(var(--gold-500))' : 'hsla(40,52%,54%,0.4)',
                    transition: 'color 0.5s ease',
                  }}>
                    STEP {step.number}
                  </span>

                  {/* Card */}
                  <div style={{
                    background: 'white',
                    border: '1px solid hsla(40,52%,54%,0.12)',
                    borderRadius: '20px',
                    padding: '20px 16px 24px',
                    boxShadow: active ? '0 12px 40px hsla(30,50%,4%,0.08)' : '0 2px 12px hsla(30,50%,4%,0.04)',
                    transform: active ? 'translateY(-4px)' : 'translateY(0)',
                    transition: 'all 0.5s cubic-bezier(0.25,0.1,0,1)',
                    width: '100%',
                  }}>
                    <h3 className="font-display" style={{
                      fontSize: '19px', fontWeight: 600,
                      color: 'hsl(var(--ink-900))',
                    }}>
                      {step.title}
                    </h3>
                    <p className="font-accent mt-1" style={{
                      fontSize: '13px', color: 'hsl(var(--gold-700))',
                    }}>
                      {step.subtitle}
                    </p>
                    <p className="font-body font-light mt-3" style={{
                      fontSize: '13px', lineHeight: 1.7, color: 'hsl(var(--ink-400))',
                      opacity: active ? 1 : 0.5,
                      transition: 'opacity 0.5s ease',
                    }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden max-w-md mx-auto">
          {steps.map((step, i) => {
            const active = isStepActive(i);
            return (
              <div key={step.number} className="flex gap-4 relative" style={{ paddingBottom: i < steps.length - 1 ? '24px' : '0' }}>
                {i < steps.length - 1 && (
                  <div className="absolute" style={{
                    left: '31px', top: '64px', bottom: '0', width: '2px',
                    background: active && i < activeStep ? 'hsl(var(--gold-500))' : 'hsla(40,52%,54%,0.15)',
                    transition: 'background 0.6s ease',
                  }} />
                )}
                <div className="flex-shrink-0 flex items-center justify-center relative" style={{
                  width: '64px', height: '64px', borderRadius: '50%', zIndex: 2,
                  background: active ? 'linear-gradient(135deg, hsl(var(--gold-500)), hsl(var(--gold-700)))' : 'white',
                  border: active ? 'none' : '1.5px solid hsla(40,52%,54%,0.25)',
                  boxShadow: active ? '0 8px 32px hsla(40,52%,54%,0.45), 0 0 0 6px hsla(40,52%,54%,0.1)' : '0 4px 16px hsla(30,50%,4%,0.06)',
                  transform: active ? 'scale(1.05)' : 'scale(1)',
                  transition: 'all 0.6s cubic-bezier(0.25,0.1,0,1)',
                }}>
                  <step.Icon className="w-5 h-5" style={{
                    color: active ? '#FFFDF8' : 'hsla(40,52%,54%,0.5)',
                  }} />
                </div>
                <div className="flex-1 pt-1" style={{
                  background: 'white',
                  border: '1px solid hsla(40,52%,54%,0.12)',
                  borderRadius: '16px',
                  padding: '14px 16px',
                  boxShadow: active ? '0 8px 24px hsla(30,50%,4%,0.06)' : 'none',
                  transition: 'all 0.5s ease',
                }}>
                  <span className="font-body font-semibold" style={{
                    fontSize: '9px', letterSpacing: '0.12em',
                    color: active ? 'hsl(var(--gold-500))' : 'hsla(40,52%,54%,0.4)',
                  }}>
                    STEP {step.number}
                  </span>
                  <h3 className="font-display" style={{ fontSize: '18px', fontWeight: 600, color: 'hsl(var(--ink-900))' }}>
                    {step.title}
                  </h3>
                  <p className="font-accent mt-0.5" style={{ fontSize: '13px', color: 'hsl(var(--gold-700))' }}>
                    {step.subtitle}
                  </p>
                  <p className="font-body font-light mt-2" style={{
                    fontSize: '13px', lineHeight: 1.7, color: 'hsl(var(--ink-400))',
                    maxHeight: active ? '100px' : '0', overflow: 'hidden', opacity: active ? 1 : 0,
                    transition: 'max-height 0.6s ease, opacity 0.5s ease',
                  }}>
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
