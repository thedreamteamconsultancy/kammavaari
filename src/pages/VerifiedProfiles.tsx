import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { useAuthModal } from "@/hooks/useAuthModal";
import { ShieldCheck, UserCheck, BadgeCheck, Eye, ArrowRight, CheckCircle, Sparkles } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Identity Verification", desc: "Every profile goes through Aadhaar & government ID verification to ensure authenticity. Our team cross-references details with official databases for complete peace of mind.", image: "https://i.pinimg.com/736x/7a/82/52/7a8252022f3d1b0461088a17eaeda794.jpg", color: "40, 52%, 54%" },
  { icon: UserCheck, title: "Family Background Check", desc: "Our dedicated team personally verifies family details, profession, education credentials, and community standing through in-person visits and reference checks.", image: "https://i.pinimg.com/736x/2c/dd/49/2cdd49db8d0212309863abfbfb98b324.jpg", color: "25, 70%, 45%" },
  { icon: BadgeCheck, title: "Photo Authenticity", desc: "All photos are reviewed by our expert team to ensure they are recent, genuine, and accurately represent the individual. AI-powered duplicate detection prevents fake profiles.", image: "https://i.pinimg.com/1200x/9e/7b/81/9e7b815120c303564fc3205be4bacd86.jpg", color: "340, 50%, 50%" },
  { icon: Eye, title: "Regular Audits", desc: "Profiles are periodically reviewed by our quality assurance team. Inactive or suspicious accounts are flagged, investigated, and removed within 24 hours.", image: "https://i.pinimg.com/1200x/8a/8a/66/8a8a6632ad1b4b54ef1f9b273a00cc2a.jpg", color: "200, 50%, 45%" },
];

const stats = [
  { value: "100%", label: "Profiles Verified" },
  { value: "24hr", label: "Verification Time" },
  { value: "50K+", label: "Verified Members" },
  { value: "4.9★", label: "Trust Rating" },
];

const processSteps = [
  { num: "01", title: "Document Upload", desc: "Members securely upload their government-issued ID proof during registration." },
  { num: "02", title: "AI Screening", desc: "Our AI system scans for duplicate profiles, fake photos, and inconsistencies." },
  { num: "03", title: "Human Verification", desc: "A dedicated team member manually reviews every detail for accuracy." },
  { num: "04", title: "Badge Awarded", desc: "Verified profiles receive a trust badge visible to all members." },
];

const trustPoints = [
  "Government ID cross-verification",
  "Phone number OTP validation",
  "Address verification through postal check",
  "Educational certificate validation",
  "Employment & income verification",
  "Family reference checks",
];

const VerifiedProfiles = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { openAuth } = useAuthModal();

  return (
    <div className="min-h-screen" style={{ background: 'hsl(var(--cream-50))' }}>
      <Header />

      {/* Hero with parallax-style layers */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ height: '70vh', minHeight: '480px' }}>
        <div className="absolute inset-0" style={{ background: 'hsl(var(--ink-900))' }} />
        <img
          src="https://i.pinimg.com/1200x/fa/67/7f/fa677fb036bc9c22b696224c3fb0ea40.jpg"
          alt="Verification"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.12, filter: 'saturate(0.4) blur(1px)' }}
        />
        {/* Radial glow */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 55%, hsla(40,52%,54%,0.1), transparent 70%)' }} />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, hsl(var(--cream-50)), transparent)' }} />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
              <ShieldCheck className="w-4 h-4" style={{ color: 'hsl(var(--gold-500))' }} />
              <span className="font-body text-[11px] tracking-[0.12em] uppercase" style={{ color: 'hsl(var(--gold-500))' }}>Our Promise</span>
            </div>
            <h1 className="font-display font-light text-white mb-4" style={{ fontSize: 'clamp(36px, 6vw, 72px)', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              Every Profile,{' '}
              <span className="font-accent" style={{ color: 'hsl(var(--gold-500))' }}>Verified</span>
            </h1>
            <p className="font-body font-light text-[17px] mx-auto" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '520px', lineHeight: 1.7 }}>
              Trust built on transparency, not just technology. Every member is verified through a rigorous multi-step process.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Floating stats cards */}
      <section className="relative" style={{ marginTop: '-60px', zIndex: 10 }}>
        <div className="container mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 80}>
                <div className="text-center py-6 px-4" style={{
                  background: 'white',
                  borderRadius: '20px',
                  boxShadow: '0 12px 40px hsla(30,50%,4%,0.08)',
                  border: '1px solid hsla(40,52%,54%,0.1)',
                }}>
                  <span className="font-display font-semibold block" style={{ fontSize: 'clamp(24px, 3vw, 36px)', color: 'hsl(var(--gold-600))' }}>{s.value}</span>
                  <span className="font-body font-light text-[11px] tracking-[0.1em] uppercase" style={{ color: 'hsl(var(--ink-300))' }}>{s.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <p className="font-body font-light" style={{ fontSize: '18px', lineHeight: 2, color: 'hsl(var(--ink-400))' }}>
              At Kammavaari Matrimony, every profile undergoes a rigorous multi-step verification process. We believe that trust is the foundation of every successful match — and we leave nothing to chance.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Features — premium cards with hover 3D */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div
                  className="group relative overflow-hidden transition-all duration-500"
                  style={{
                    borderRadius: '28px',
                    background: 'white',
                    border: '1px solid hsla(40,52%,54%,0.1)',
                    boxShadow: '0 8px 32px hsla(30,50%,4%,0.05)',
                  }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden" style={{ height: '220px' }}>
                    <img src={f.image} alt={f.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to top, white 5%, transparent 60%)` }} />
                    <div className="absolute top-5 left-5 w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)', boxShadow: '0 4px 16px rgba(0,0,0,0.1)' }}>
                      <f.icon className="w-5 h-5" style={{ color: `hsl(${f.color})` }} />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-7 pt-2">
                    <h3 className="font-display font-semibold text-[22px] mb-3" style={{ color: 'hsl(var(--ink-900))' }}>{f.title}</h3>
                    <p className="font-body font-light text-[14px] leading-[1.8]" style={{ color: 'hsl(var(--ink-400))' }}>{f.desc}</p>
                  </div>
                  {/* Hover accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] transition-all duration-500 opacity-0 group-hover:opacity-100" style={{ background: `linear-gradient(90deg, hsl(${f.color}), transparent)` }} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Process Timeline */}
      <section className="py-24" style={{ background: 'hsl(var(--ink-900))' }}>
        <div className="container mx-auto max-w-5xl px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.15)' }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: 'hsl(var(--gold-500))' }} />
                <span className="font-body text-[11px] tracking-[0.12em] uppercase" style={{ color: 'hsl(var(--gold-500))' }}>Our Process</span>
              </div>
              <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
                How We Verify
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row gap-4">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100}>
                <button
                  onClick={() => setActiveStep(i)}
                  className="w-full text-left transition-all duration-500"
                  style={{
                    padding: '28px 24px',
                    borderRadius: '20px',
                    background: activeStep === i ? 'rgba(201,168,76,0.08)' : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${activeStep === i ? 'rgba(201,168,76,0.3)' : 'rgba(255,255,255,0.06)'}`,
                    cursor: 'pointer',
                    transform: activeStep === i ? 'scale(1.02)' : 'scale(1)',
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500" style={{
                      background: activeStep === i
                        ? 'linear-gradient(135deg, hsl(var(--gold-500)), hsl(var(--gold-700)))'
                        : 'rgba(255,255,255,0.05)',
                      boxShadow: activeStep === i ? '0 4px 20px rgba(201,168,76,0.3)' : 'none',
                    }}>
                      <span className="font-display font-semibold text-[13px]" style={{ color: activeStep === i ? 'hsl(var(--ink-900))' : 'rgba(255,255,255,0.4)' }}>{step.num}</span>
                    </div>
                    <h3 className="font-display font-semibold text-[17px] transition-colors duration-300" style={{ color: activeStep === i ? 'white' : 'rgba(255,255,255,0.5)' }}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-body font-light text-[13px] leading-[1.7] transition-all duration-300" style={{
                    color: activeStep === i ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.3)',
                    maxHeight: activeStep === i ? '100px' : '0',
                    overflow: 'hidden',
                    marginTop: activeStep === i ? '4px' : '0',
                  }}>
                    {step.desc}
                  </p>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust commitments */}
      <section className="py-20 px-4" style={{ background: 'hsl(var(--cream-50))' }}>
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display font-light" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'hsl(var(--ink-900))' }}>
                Our Trust Framework
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {trustPoints.map((p, i) => (
              <ScrollReveal key={p} delay={i * 60}>
                <div className="flex items-center gap-4 p-5 transition-all hover:translate-x-1" style={{
                  background: 'white',
                  borderRadius: '16px',
                  border: '1px solid hsla(40,52%,54%,0.08)',
                  boxShadow: '0 2px 12px hsla(30,50%,4%,0.03)',
                }}>
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(var(--gold-500))' }} />
                  <span className="font-body font-light text-[14px]" style={{ color: 'hsl(var(--ink-600))' }}>{p}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, hsl(var(--ink-900)), hsl(var(--ink-800)))' }}>
        <div className="container mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="font-display font-light text-white mb-4" style={{ fontSize: 'clamp(26px, 4vw, 40px)' }}>
              Join 50,000+ Verified Members
            </h2>
            <p className="font-body font-light text-[15px] mb-8" style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>
              Start your journey with confidence. Register today and get verified within 24 hours.
            </p>
            <button
              className="inline-flex items-center gap-2 font-body font-semibold text-[14px] transition-all"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--gold-500)), hsl(var(--gold-600)))',
                color: 'hsl(var(--ink-900))',
                padding: '14px 36px',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 8px 32px rgba(201,168,76,0.3)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(201,168,76,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(201,168,76,0.3)'; }}
              onClick={() => openAuth('signup')}
            >
              Register Free <ArrowRight className="w-4 h-4" />
            </button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default VerifiedProfiles;
