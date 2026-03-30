import { useState } from "react";
import { Check, Star, Lock, Shield, Sparkles, Crown, Gem } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { useAuthModal } from "@/hooks/useAuthModal";

const plans = [
  {
    name: "Regular",
    badge: "REGULAR",
    tagline: "Perfect for getting started",
    price: "₹2,999",
    period: "3 Months",
    popular: false,
    elite: false,
    icon: Sparkles,
    features: ["View up to 50 contacts", "Send personalized interests", "Basic search filters", "Email & SMS alerts"],
  },
  {
    name: "Confidential",
    badge: "MOST POPULAR ★",
    tagline: "How most families find their match",
    price: "₹5,999",
    period: "6 Months",
    popular: true,
    elite: false,
    icon: Crown,
    features: ["View up to 150 contacts", "Hide photos from public view", "Advanced matchmaking filters", "Priority customer support", "Profile highlight badge"],
  },
  {
    name: "Super Elite",
    badge: "SUPER ELITE ◆",
    tagline: "For those who deserve the best",
    price: "₹14,999",
    period: "12 Months",
    popular: false,
    elite: true,
    icon: Gem,
    features: ["Unlimited contact views", "Dedicated Relationship Manager", "Handpicked matches weekly", "Profile boosted in search", "VIP badge on profile", "Video call assistance"],
  },
];

const PricingSection = () => {
  const [activePlan, setActivePlan] = useState(1);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const { openAuth } = useAuthModal();

  const isDark = (plan: typeof plans[0]) => plan.popular || plan.elite;

  const renderCard = (plan: typeof plans[0], idx: number) => {
    const isHovered = hoveredPlan === idx;

    return (
      <div
        className="relative flex flex-col h-full transition-all"
        style={{
          background: plan.popular
            ? 'linear-gradient(160deg, #3D1208 0%, #2D0A0A 60%, #1A0808 100%)'
            : plan.elite
              ? 'linear-gradient(160deg, #0F0A05 0%, #1A1208 100%)'
              : 'white',
          border: plan.popular
            ? '1.5px solid rgba(201,168,76,0.45)'
            : plan.elite
              ? '1.5px solid rgba(201,168,76,0.3)'
              : '1.5px solid rgba(201,168,76,0.2)',
          borderRadius: '24px',
          padding: '24px 20px',
          boxShadow: plan.popular
            ? '0 16px 48px rgba(45,10,10,0.4)'
            : isHovered
              ? '0 16px 40px hsla(30,50%,4%,0.12)'
              : '0 4px 20px rgba(15,10,5,0.04)',
          transform: isHovered && !plan.popular ? 'translateY(-4px)' : plan.popular ? 'scale(1.02)' : 'none',
          transitionDuration: '0.4s',
          transitionTimingFunction: 'cubic-bezier(0.25,0.1,0,1)',
        }}
        key={plan.name}
        onMouseEnter={() => setHoveredPlan(idx)}
        onMouseLeave={() => setHoveredPlan(null)}
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-[20%] right-[20%] h-[2px]" style={{
          background: plan.popular
            ? 'linear-gradient(90deg, transparent, hsl(var(--gold-500)), transparent)'
            : 'linear-gradient(90deg, transparent, hsla(40,52%,54%,0.2), transparent)',
          borderRadius: '0 0 4px 4px',
        }} />

        {plan.popular && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 font-body font-semibold flex items-center gap-1.5" style={{
            fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #C9A84C, #B8923A)', color: '#0F0A05',
            padding: '5px 16px', borderRadius: '9999px', boxShadow: '0 4px 16px rgba(201,168,76,0.4)',
            whiteSpace: 'nowrap',
          }}>
            <Star className="w-3 h-3 fill-current" /> Most Popular
          </div>
        )}

        {!plan.popular && (
          <span className="font-body font-medium mb-1" style={{
            fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase',
            color: isDark(plan) ? 'rgba(201,168,76,0.7)' : '#9B7A2A',
          }}>
            {plan.badge}
          </span>
        )}

        {/* Icon + Name row */}
        <div className="flex items-center gap-3 mt-2 mb-1">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{
            background: isDark(plan) ? 'rgba(201,168,76,0.08)' : 'hsla(40,52%,54%,0.06)',
            border: `1px solid ${isDark(plan) ? 'rgba(201,168,76,0.2)' : 'hsla(40,52%,54%,0.12)'}`,
          }}>
            <plan.icon className="w-5 h-5" style={{ color: 'hsl(var(--gold-500))' }} />
          </div>
          <h3 className="font-display font-light" style={{ fontSize: 'clamp(24px,2.5vw,30px)', color: isDark(plan) ? 'white' : '#2C1F10' }}>
            {plan.name}
          </h3>
        </div>

        <p className="font-accent text-[12px] mb-3" style={{ color: isDark(plan) ? 'rgba(201,168,76,0.7)' : '#9B7A2A' }}>
          {plan.tagline}
        </p>

        {/* Price */}
        <div className="mb-3">
          <span className="font-display" style={{ fontSize: 'clamp(32px,3vw,40px)', fontWeight: 300, color: isDark(plan) ? '#C9A84C' : 'hsl(40 58% 38%)' }}>
            {plan.price}
          </span>
          <span className="font-body font-light text-[12px] ml-1.5" style={{ color: isDark(plan) ? 'rgba(255,255,255,0.5)' : '#7A6550' }}>
            / {plan.period}
          </span>
        </div>

        <div className="mb-3" style={{ height: '1px', background: isDark(plan) ? 'rgba(201,168,76,0.15)' : 'rgba(201,168,76,0.12)' }} />

        <ul className="space-y-2 flex-1 mb-4">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2 font-body font-light text-[12px] leading-[1.5]" style={{ color: isDark(plan) ? 'rgba(255,255,255,0.8)' : '#5C4510' }}>
              <div className="w-[16px] h-[16px] rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{
                background: isDark(plan) ? 'rgba(201,168,76,0.12)' : 'rgba(201,168,76,0.1)',
              }}>
                <Check className="w-2.5 h-2.5" style={{ color: '#C9A84C' }} />
              </div>
              {f}
            </li>
          ))}
        </ul>

        <button
          className="w-full font-body font-semibold text-[13px] transition-all"
          style={{
            height: '44px', borderRadius: '12px', cursor: 'pointer',
            background: plan.popular ? 'linear-gradient(135deg, #C9A84C, #B8923A)' : 'transparent',
            color: plan.popular ? '#0F0A05' : isDark(plan) ? '#C9A84C' : '#9B7A2A',
            border: plan.popular ? 'none' : `1.5px solid ${isDark(plan) ? 'rgba(201,168,76,0.45)' : '#C9A84C'}`,
            boxShadow: plan.popular ? '0 6px 20px rgba(201,168,76,0.35)' : 'none',
          }}
          onClick={() => openAuth('signup')}
        >
          Choose Plan
        </button>
      </div>
    );
  };

  return (
    <section style={{ background: 'hsl(40 100% 98%)', padding: 'clamp(40px,5vw,60px) clamp(16px,5vw,80px)' }}>
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-8 h-[1px]" style={{ background: 'hsl(28 20% 40%)' }} />
              <span className="eyebrow" style={{ color: 'hsl(28 20% 40%)' }}>Exclusive Membership</span>
              <div className="w-8 h-[1px]" style={{ background: 'hsl(28 20% 40%)' }} />
            </div>
            <h2 className="font-display font-light" style={{ fontSize: 'clamp(32px, 5vw, 56px)', color: 'hsl(30 50% 4%)' }}>
              Invest in Your Forever
            </h2>
          </div>
        </ScrollReveal>

        {/* Trust Strip */}
        <ScrollReveal delay={50}>
          <div className="flex flex-row flex-wrap justify-center gap-2 mb-6" style={{ padding: '4px clamp(8px,3vw,40px)' }}>
            {[
              { icon: <Lock className="w-3 h-3" style={{ color: '#C9A84C' }} />, text: 'Secure Payments' },
              { icon: <Check className="w-3 h-3" style={{ color: '#C9A84C' }} />, text: 'Cancel Anytime' },
              { icon: <Star className="w-3 h-3" style={{ color: '#C9A84C' }} />, text: '50,000+ Members' },
              { icon: <Shield className="w-3 h-3" style={{ color: '#C9A84C' }} />, text: 'Privacy Protected' },
            ].map(item => (
              <span key={item.text} className="flex items-center gap-1.5 font-body text-[10px] whitespace-nowrap" style={{
                color: '#9B7A2A', padding: '5px 12px', borderRadius: '999px',
                background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.12)',
              }}>
                {item.icon} {item.text}
              </span>
            ))}
          </div>
        </ScrollReveal>

        {/* Mobile Tab Switcher */}
        <div className="md:hidden flex justify-center mb-5">
          <div className="flex" style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: '999px', padding: '3px' }}>
            {plans.map((plan, i) => (
              <button
                key={plan.name}
                onClick={() => setActivePlan(i)}
                className="font-body transition-all whitespace-nowrap"
                style={{
                  padding: '7px 14px', borderRadius: '999px', border: 'none', cursor: 'pointer',
                  fontSize: '11px',
                  background: activePlan === i ? '#C9A84C' : 'transparent',
                  color: activePlan === i ? '#0F0A05' : '#9B7A2A',
                  fontWeight: activePlan === i ? 600 : 400,
                }}
              >
                {plan.name}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: single card */}
        <div className="md:hidden max-w-sm mx-auto">
          <ScrollReveal>{renderCard(plans[activePlan], activePlan)}</ScrollReveal>
        </div>

        {/* Desktop: 3 columns */}
        <div className="hidden md:grid grid-cols-3 gap-4 max-w-4xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 100}>
              {renderCard(plan, i)}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
