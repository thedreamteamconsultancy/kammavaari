import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { Shield, Clock, HeartHandshake, Check, X, Crown, Sparkles, Star, Lock } from "lucide-react";

const PREMIUM_HERO = "https://i.pinimg.com/1200x/29/49/da/2949dad98469777cadd18c3fea94e9f7.jpg";
const PREMIUM_FALLBACK = "https://i.pinimg.com/736x/e8/d1/a9/e8d1a9e54b2b6e5aa5e43a13ec4e8576.jpg";

const benefitImages = [
  "https://i.pinimg.com/1200x/05/f5/54/05f554937ea0367d048cda3be9a8fa81.jpg",
  "https://i.pinimg.com/1200x/50/f0/67/50f0672e3ed17ccc1703bc91a40e5f34.jpg",
  "https://i.pinimg.com/736x/7f/76/21/7f76217aebc3af15bab86140a9ad9c76.jpg",
];

const benefits = [
  { icon: Shield, title: "100% Secure", desc: "Your data is protected with enterprise-grade encryption." },
  { icon: Clock, title: "24/7 Support", desc: "Our dedicated team is always available to help you." },
  { icon: HeartHandshake, title: "Personal RM", desc: "Get a dedicated Relationship Manager for premium plans." },
];

const testimonials = [
  { names: "Rajesh & Priya", location: "Hyderabad", plan: "Super Elite", quote: "The dedicated Relationship Manager made all the difference. Within weeks, we found each other — something we couldn't achieve on other platforms for years." },
  { names: "Suresh & Lakshmi", location: "Vijayawada", plan: "Confidential", quote: "The privacy features gave our families complete confidence. The photo privacy controls were exactly what we needed." },
  { names: "Venkat & Deepika", location: "Bangalore", plan: "Super Elite", quote: "Handpicked matches weekly and VIP profile boosting meant we connected with the right families faster. Worth every rupee!" },
];

const comparisonFeatures = [
  { feature: "Profile Visibility", regular: "Standard", confidential: "Enhanced", elite: "Maximum" },
  { feature: "Contact Views", regular: "50", confidential: "150", elite: "Unlimited" },
  { feature: "Photo Privacy Settings", regular: false, confidential: true, elite: true },
  { feature: "Advanced Matchmaking Filters", regular: false, confidential: true, elite: true },
  { feature: "Email & SMS Alerts", regular: true, confidential: true, elite: true },
  { feature: "Priority Support", regular: false, confidential: true, elite: true },
  { feature: "Profile Highlight Badge", regular: false, confidential: true, elite: true },
  { feature: "Dedicated Relationship Manager", regular: false, confidential: false, elite: true },
  { feature: "Weekly Handpicked Matches", regular: false, confidential: false, elite: true },
  { feature: "Profile Boosted in Search", regular: false, confidential: false, elite: true },
  { feature: "VIP Badge", regular: false, confidential: false, elite: true },
  { feature: "Video Call Assistance", regular: false, confidential: false, elite: true },
];

const CellValue = ({ value }: { value: boolean | string }) => {
  if (typeof value === "string") return <span className="text-sm font-semibold" style={{ color: '#0F0A05' }}>{value}</span>;
  return value ? (
    <div className="w-5 h-5 rounded-full flex items-center justify-center mx-auto" style={{ background: 'rgba(201,168,76,0.15)' }}>
      <Check className="w-3.5 h-3.5" style={{ color: '#C9A84C' }} />
    </div>
  ) : (
    <X className="w-4 h-4 mx-auto" style={{ color: '#C4B49E', opacity: 0.4 }} />
  );
};

const PremiumPlans = () => {
  return (
    <div className="min-h-screen" style={{ background: '#FFFDF8' }}>
      <Header />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden" style={{ height: '60vh', minHeight: '340px' }}>
        <div className="absolute inset-0">
          <img
            src={PREMIUM_HERO} alt="" className="w-full h-full object-cover" loading="eager"
            onError={(e) => { const el = e.currentTarget; if (!el.dataset.fallbackUsed) { el.dataset.fallbackUsed = 'true'; el.src = PREMIUM_FALLBACK; } }}
          />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(15,10,5,0.75) 0%, rgba(15,10,5,0.5) 40%, rgba(15,10,5,0.8) 100%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(15,10,5,0.6) 100%)' }} />
        <div className="relative z-10 container mx-auto px-4 text-center w-full">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="w-5 h-5" style={{ color: '#C9A84C' }} />
              <span className="eyebrow" style={{ color: '#C9A84C' }}>Exclusive Membership</span>
              <Crown className="w-5 h-5" style={{ color: '#C9A84C' }} />
            </div>
            <h1 className="font-display leading-tight" style={{ fontSize: 'clamp(40px, 6vw, 80px)', letterSpacing: '-0.02em' }}>
              <span className="font-light text-white">Premium </span>
              <span className="font-semibold italic" style={{ color: '#C9A84C' }}>Plans</span>
            </h1>
            <p className="font-accent text-[17px] mt-3 max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Invest in your future. Find your life partner faster.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Strip */}
      <div className="flex flex-row flex-wrap justify-center gap-2 md:gap-4 py-6 px-4">
        {[
          { icon: <Lock className="w-3 h-3" style={{ color: '#C9A84C' }} />, text: "Secure Payments" },
          { icon: <Check className="w-3 h-3" style={{ color: '#C9A84C' }} />, text: "Cancel Anytime" },
          { icon: <Star className="w-3 h-3" style={{ color: '#C9A84C' }} />, text: "50,000+ Members" },
        ].map(b => (
          <span key={b.text} className="flex items-center gap-1.5 font-body text-[11px] whitespace-nowrap" style={{
            color: '#9B7A2A', padding: '6px 14px', borderRadius: '999px',
            background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.12)',
          }}>
            {b.icon} {b.text}
          </span>
        ))}
      </div>

      <PricingSection />

      {/* Comparison Table */}
      <section className="section-padding">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-8 h-[1px]" style={{ background: '#7A6550' }} />
                <span className="eyebrow" style={{ color: '#7A6550' }}>Side by Side</span>
                <div className="w-8 h-[1px]" style={{ background: '#7A6550' }} />
              </div>
              <h2 className="font-display font-light" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', color: '#0F0A05', letterSpacing: '-0.02em' }}>
                Compare <span className="font-semibold italic" style={{ color: '#9B7A2A' }}>Plans</span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="max-w-4xl mx-auto overflow-x-auto rounded-[20px]" style={{ border: '1px solid rgba(201,168,76,0.15)' }}>
              <table className="w-full border-collapse">
                <thead>
                  <tr style={{ background: 'hsl(0 54% 22%)' }}>
                    <th className="text-left py-4 px-4 text-sm font-medium" style={{ color: 'rgba(255,255,255,0.7)' }}>Feature</th>
                    <th className="py-4 px-4 text-center text-sm font-bold" style={{ color: '#E8CC85' }}>Regular<p className="text-xs font-light mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>₹2,999</p></th>
                    <th className="py-4 px-4 text-center text-sm font-bold" style={{ color: '#C9A84C' }}>
                      <div className="flex items-center justify-center gap-1"><Star className="w-3 h-3 fill-current" />Confidential</div>
                      <p className="text-xs font-light mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>₹5,999</p>
                    </th>
                    <th className="py-4 px-4 text-center text-sm font-bold" style={{ color: '#E8CC85' }}>
                      <div className="flex items-center justify-center gap-1"><Sparkles className="w-3 h-3" />Super Elite</div>
                      <p className="text-xs font-light mt-0.5" style={{ color: 'rgba(255,255,255,0.5)' }}>₹14,999</p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((row, i) => (
                    <tr key={row.feature} style={{ background: i % 2 === 0 ? 'rgba(201,168,76,0.02)' : 'white' }}>
                      <td className="py-3.5 px-4 text-sm border-b" style={{ color: '#0F0A05', borderColor: 'rgba(201,168,76,0.08)' }}>{row.feature}</td>
                      <td className="py-3.5 px-4 text-center border-b" style={{ borderColor: 'rgba(201,168,76,0.08)' }}><CellValue value={row.regular} /></td>
                      <td className="py-3.5 px-4 text-center border-b" style={{ background: 'rgba(201,168,76,0.03)', borderColor: 'rgba(201,168,76,0.08)' }}><CellValue value={row.confidential} /></td>
                      <td className="py-3.5 px-4 text-center border-b" style={{ borderColor: 'rgba(201,168,76,0.08)' }}><CellValue value={row.elite} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Premium — Image Background Cards */}
      <section className="section-padding" style={{ background: '#FBF5EB' }}>
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-8 h-[1px]" style={{ background: '#7A6550' }} />
                <span className="eyebrow" style={{ color: '#7A6550' }}>The Advantage</span>
                <div className="w-8 h-[1px]" style={{ background: '#7A6550' }} />
              </div>
              <h2 className="font-display font-light" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', color: '#0F0A05', letterSpacing: '-0.02em' }}>
                Why Go <span className="font-semibold italic" style={{ color: '#9B7A2A' }}>Premium?</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 120}>
                <div className="group relative overflow-hidden cursor-pointer h-full" style={{ borderRadius: '20px', height: 'clamp(220px, 30vw, 280px)' }}>
                  <img
                    src={benefitImages[i]} alt={b.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ filter: 'brightness(0.35) saturate(0.8)', transition: 'transform 0.6s ease, filter 0.6s ease' }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 transition-opacity duration-[600ms]" style={{ background: 'linear-gradient(to top, rgba(15,10,5,0.92) 0%, rgba(15,10,5,0.55) 50%, rgba(15,10,5,0.2) 100%)' }} />
                  <div className="absolute bottom-0 left-0 right-0 p-6" style={{ zIndex: 2 }}>
                    <div className="inline-block rounded-xl transition-all duration-500" style={{ background: 'rgba(10,5,2,0.6)', backdropFilter: 'blur(6px)', padding: '12px 16px' }}>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mb-3" style={{ background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)' }}>
                        <b.icon className="w-6 h-6" style={{ color: '#C9A84C' }} />
                      </div>
                      <h3 className="font-display font-semibold text-[20px] text-white mb-1">{b.title}</h3>
                      <p className="font-body font-light text-[13px] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.72)' }}>{b.desc}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-6 right-6 h-[2px] transition-transform duration-[400ms] origin-left scale-x-0 group-hover:scale-x-100" style={{ background: 'linear-gradient(to right, #C9A84C, transparent)' }} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — cinematic */}
      <section className="relative overflow-hidden" style={{ background: '#0F0A05' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: `url(https://i.pinimg.com/1200x/e3/3e/5c/e33e5c4a608444b2dd0210796113dcad.jpg) center/cover`, filter: 'brightness(0.35)', opacity: 0.4 }} />
        <div className="absolute inset-0" style={{ background: 'rgba(15,10,5,0.75)' }} />
        <div className="relative section-padding" style={{ zIndex: 1 }}>
          <div className="container mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-3 mb-3">
                  <div className="w-8 h-[1px]" style={{ background: '#C9A84C' }} />
                  <span className="eyebrow" style={{ color: '#C9A84C' }}>Love Stories</span>
                  <div className="w-8 h-[1px]" style={{ background: '#C9A84C' }} />
                </div>
                <h2 className="font-display font-light text-white" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', letterSpacing: '-0.02em' }}>
                  Premium Members <span className="font-semibold italic" style={{ color: '#C9A84C' }}>Love Us</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map((t, i) => (
                <ScrollReveal key={t.names} delay={i * 150}>
                  <div className="rounded-3xl p-6 hover-lift flex flex-col h-full relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.15)', backdropFilter: 'blur(8px)' }}>
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full" style={{ background: 'rgba(201,168,76,0.15)', color: '#C9A84C' }}>{t.plan}</span>
                    </div>
                    <div className="font-display text-4xl font-bold leading-none mb-3" style={{ color: 'rgba(201,168,76,0.2)' }}>"</div>
                    <p className="font-body font-light text-[14px] leading-relaxed flex-1 mb-5" style={{ color: 'rgba(255,255,255,0.7)' }}>{t.quote}</p>
                    <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(201,168,76,0.1)' }}>
                      <div className="w-10 h-10 rounded-full flex items-center justify-center font-display font-semibold text-[14px]" style={{ background: 'linear-gradient(135deg, #5A1A1A, #3D0A0A)', border: '2px solid #C9A84C', color: '#E8CC85' }}>
                        {t.names[0]}
                      </div>
                      <div>
                        <h4 className="font-body font-medium text-sm text-white">{t.names}</h4>
                        <p className="font-body text-xs" style={{ color: 'rgba(201,168,76,0.6)' }}>{t.location}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PremiumPlans;
