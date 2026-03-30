import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { Lock, EyeOff, Shield, Fingerprint, CheckCircle, ArrowRight, Sparkles, ToggleRight, KeyRound, UserX } from "lucide-react";

const features = [
  { icon: Lock, title: "Profile Visibility Control", desc: "Choose who can see your profile — only verified members, premium users, or specific community members. Toggle visibility on/off anytime.", image: "https://i.pinimg.com/1200x/f2/77/26/f27726df2645d4c0fd62cb8d59bee552.jpg" },
  { icon: EyeOff, title: "Photo Privacy", desc: "Keep your photos private by default. Share them only with matches you approve through our secure request system.", image: "https://i.pinimg.com/736x/d2/22/6f/d2226f65207174459f0f80ccc32c042e.jpg" },
  { icon: Shield, title: "Contact Protection", desc: "Your phone number and email are never shared without your explicit consent. All communication starts through our secure platform.", image: "https://i.pinimg.com/736x/e8/d1/a9/e8d1a9e54b2b6e5aa5e43a13ec4e8576.jpg" },
  { icon: Fingerprint, title: "Data Encryption", desc: "All personal data is encrypted at rest and in transit using AES-256 encryption, following international security best practices.", image: "https://i.pinimg.com/1200x/41/7e/3c/417e3c7cac7159bb1b7fc23d54605a13.jpg" },
];

const controls = [
  { icon: ToggleRight, title: "Profile Visibility", desc: "Show/hide your profile to specific audiences", active: true },
  { icon: EyeOff, title: "Photo Access", desc: "Approve photo viewing requests individually", active: true },
  { icon: KeyRound, title: "Contact Sharing", desc: "Control who can see your contact details", active: false },
  { icon: UserX, title: "Block & Report", desc: "Block unwanted profiles and report concerns", active: true },
];

const commitments = [
  "End-to-end encryption for all messages",
  "No data shared with third parties",
  "GDPR compliant data handling",
  "Right to delete your data anytime",
  "Regular security audits by third parties",
  "Verified team access controls & logging",
  "Two-factor authentication support",
  "Automatic session expiry for safety",
];

const PrivacySettings = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <div className="min-h-screen" style={{ background: 'hsl(var(--cream-50))' }}>
      <Header />

      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-hidden" style={{ height: '70vh', minHeight: '480px' }}>
        <div className="absolute inset-0" style={{ background: 'hsl(var(--ink-900))' }} />
        <img
          src="https://i.pinimg.com/736x/20/10/94/201094000a95d72820f7dbaee55456f9.jpg"
          alt="Privacy"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.08, filter: 'saturate(0.3)' }}
        />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 55%, hsla(40,52%,54%,0.1), transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-32" style={{ background: 'linear-gradient(to top, hsl(var(--cream-50)), transparent)' }} />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}>
              <Shield className="w-4 h-4" style={{ color: 'hsl(var(--gold-500))' }} />
              <span className="font-body text-[11px] tracking-[0.12em] uppercase" style={{ color: 'hsl(var(--gold-500))' }}>Your Safety</span>
            </div>
            <h1 className="font-display font-light text-white mb-4" style={{ fontSize: 'clamp(36px, 6vw, 72px)', letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              Privacy{' '}
              <span className="font-accent" style={{ color: 'hsl(var(--gold-500))' }}>First</span>
            </h1>
            <p className="font-body font-light text-[17px] mx-auto" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '520px', lineHeight: 1.7 }}>
              Your privacy is sacred — we protect it like family. Complete control over who sees your information.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Privacy controls demo */}
      <section className="relative py-20 px-4" style={{ marginTop: '-40px', zIndex: 10 }}>
        <div className="container mx-auto max-w-4xl">
          <div className="p-8 md:p-10" style={{
            background: 'white',
            borderRadius: '28px',
            boxShadow: '0 20px 60px hsla(30,50%,4%,0.1)',
            border: '1px solid hsla(40,52%,54%,0.1)',
          }}>
            <h3 className="font-display font-semibold text-[20px] mb-6" style={{ color: 'hsl(var(--ink-900))' }}>Your Privacy Controls</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {controls.map((c, i) => (
                <div key={c.title} className="flex items-center gap-4 p-4" style={{
                  borderRadius: '16px',
                  background: 'hsl(var(--cream-50))',
                  border: '1px solid hsla(40,52%,54%,0.06)',
                }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'hsla(40,52%,54%,0.08)' }}>
                    <c.icon className="w-5 h-5" style={{ color: 'hsl(var(--gold-500))' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="font-display font-semibold text-[14px] block" style={{ color: 'hsl(var(--ink-900))' }}>{c.title}</span>
                    <span className="font-body text-[12px]" style={{ color: 'hsl(var(--ink-300))' }}>{c.desc}</span>
                  </div>
                  <div className="w-11 h-6 rounded-full flex-shrink-0 relative" style={{
                    background: c.active ? 'hsl(var(--gold-500))' : 'hsl(var(--ink-200))',
                    transition: 'background 300ms',
                  }}>
                    <div className="absolute top-[3px] w-[18px] h-[18px] rounded-full bg-white transition-all" style={{
                      left: c.active ? '22px' : '3px',
                      boxShadow: '0 1px 4px rgba(0,0,0,0.15)',
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature cards with tabs */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-display font-light" style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'hsl(var(--ink-900))' }}>
                How We Protect You
              </h2>
            </div>
          </ScrollReveal>

          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {features.map((f, i) => (
              <button
                key={f.title}
                onClick={() => setActiveFeature(i)}
                className="font-body text-[13px] px-5 py-2.5 rounded-full transition-all duration-300"
                style={{
                  background: activeFeature === i ? 'hsl(var(--gold-500))' : 'white',
                  color: activeFeature === i ? 'hsl(var(--ink-900))' : 'hsl(var(--ink-400))',
                  border: `1px solid ${activeFeature === i ? 'hsl(var(--gold-500))' : 'hsla(40,52%,54%,0.15)'}`,
                  fontWeight: activeFeature === i ? 600 : 300,
                  cursor: 'pointer',
                }}
              >
                {f.title}
              </button>
            ))}
          </div>

          {/* Active feature */}
          <div className="flex flex-col md:flex-row gap-8 items-center" style={{
            background: 'white',
            borderRadius: '28px',
            overflow: 'hidden',
            border: '1px solid hsla(40,52%,54%,0.1)',
            boxShadow: '0 8px 40px hsla(30,50%,4%,0.06)',
          }}>
            <div className="w-full md:w-2/5" style={{ minHeight: '300px' }}>
              <img
                src={features[activeFeature].image}
                alt={features[activeFeature].title}
                className="w-full h-full object-cover"
                style={{ minHeight: '300px' }}
              />
            </div>
            <div className="w-full md:w-3/5 p-8 md:p-10">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{ background: 'hsla(40,52%,54%,0.08)' }}>
                {(() => { const Icon = features[activeFeature].icon; return <Icon className="w-6 h-6" style={{ color: 'hsl(var(--gold-500))' }} />; })()}
              </div>
              <h3 className="font-display font-semibold text-[26px] mb-4" style={{ color: 'hsl(var(--ink-900))' }}>{features[activeFeature].title}</h3>
              <p className="font-body font-light text-[15px] leading-[1.9]" style={{ color: 'hsl(var(--ink-400))' }}>{features[activeFeature].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-24" style={{ background: 'hsl(var(--ink-900))' }}>
        <div className="container mx-auto max-w-4xl px-4">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.15)' }}>
                <Sparkles className="w-3.5 h-3.5" style={{ color: 'hsl(var(--gold-500))' }} />
                <span className="font-body text-[11px] tracking-[0.12em] uppercase" style={{ color: 'hsl(var(--gold-500))' }}>Our Pledge</span>
              </div>
              <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
                Privacy Commitments
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {commitments.map((c, i) => (
              <ScrollReveal key={c} delay={i * 50}>
                <div className="flex items-center gap-4 p-5 transition-all hover:translate-x-1" style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(201,168,76,0.1)',
                  borderRadius: '16px',
                }}>
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: 'hsl(var(--gold-500))' }} />
                  <span className="font-body font-light text-[14px]" style={{ color: 'rgba(255,255,255,0.75)' }}>{c}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" style={{ background: 'hsl(var(--cream-50))' }}>
        <div className="container mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="font-display font-light mb-4" style={{ fontSize: 'clamp(26px, 4vw, 40px)', color: 'hsl(var(--ink-900))' }}>
              Your Privacy, Our Priority
            </h2>
            <p className="font-body font-light text-[15px] mb-8" style={{ color: 'hsl(var(--ink-400))', lineHeight: 1.7 }}>
              Join a platform where your personal information is treated with the utmost respect and protection.
            </p>
            <button
              className="inline-flex items-center gap-2 font-body font-semibold text-[14px] transition-all"
              style={{
                background: 'linear-gradient(135deg, hsl(var(--gold-500)), hsl(var(--gold-600)))',
                color: 'hsl(var(--ink-900))', padding: '14px 36px', borderRadius: '999px', border: 'none', cursor: 'pointer',
                boxShadow: '0 8px 32px rgba(201,168,76,0.3)',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Register Securely <ArrowRight className="w-4 h-4" />
            </button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PrivacySettings;
