import ScrollReveal from "./ScrollReveal";

const profiles = [
  { name: "S***a, 27", details: "Software Engineer · Hyderabad", badge: "Premium Member" },
  { name: "R***h, 30", details: "Doctor · Bangalore", badge: "Premium Member" },
  { name: "P***i, 25", details: "Business Analyst · Chennai", badge: "Premium Member" },
];

const FeaturedProfiles = () => {
  return (
    <section className="section-padding" style={{ background: 'hsl(40 100% 98%)' }}>
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[1px]" style={{ background: 'hsl(28 20% 40%)' }} />
              <span className="eyebrow" style={{ color: 'hsl(28 20% 40%)' }}>Featured</span>
              <div className="w-8 h-[1px]" style={{ background: 'hsl(28 20% 40%)' }} />
            </div>
            <h2 className="font-display font-light" style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: 'hsl(30 50% 4%)' }}>
              Handpicked Profiles
            </h2>
            <p className="font-accent text-[22px] mt-2" style={{ color: 'hsl(40 58% 38%)' }}>
              privacy protected, quality assured
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {profiles.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 120}>
              <div
                className="overflow-hidden transition-all cursor-pointer"
                style={{
                  borderRadius: '20px',
                  border: '1px solid hsla(40,52%,54%,0.2)',
                  boxShadow: 'var(--shadow-dark-sm)',
                  transitionDuration: 'var(--duration-base)',
                  transitionTimingFunction: 'var(--ease-luxury)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-dark-lg)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-dark-sm)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Image placeholder */}
                <div
                  className="relative h-[220px] flex items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, hsl(0 54% 22%), hsl(0 60% 11%))',
                  }}
                >
                  <div style={{ filter: 'blur(4px)' }}>
                    <div className="w-20 h-20 rounded-full" style={{ background: 'hsla(40,52%,54%,0.2)' }} />
                  </div>
                  <span
                    className="absolute top-4 right-4 font-body font-medium"
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      background: 'hsl(40 52% 54%)',
                      color: 'hsl(30 50% 4%)',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                    }}
                  >
                    {p.badge}
                  </span>
                </div>

                {/* Card body */}
                <div style={{ padding: '20px' }}>
                  <h3 className="font-display font-semibold text-[22px]" style={{ color: 'hsl(30 50% 4%)' }}>
                    {p.name}
                  </h3>
                  <p className="font-body font-light text-[13px] mt-1" style={{ color: 'hsl(28 20% 40%)' }}>
                    {p.details}
                  </p>
                  <button
                    className="w-full mt-4 font-body font-medium text-[13px] transition-all"
                    style={{
                      border: '1px solid hsl(40 52% 54%)',
                      color: 'hsl(40 58% 38%)',
                      borderRadius: '9999px',
                      padding: '10px',
                      background: 'transparent',
                      transitionDuration: 'var(--duration-fast)',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'hsl(40 52% 54%)';
                      e.currentTarget.style.color = 'hsl(30 50% 4%)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'hsl(40 58% 38%)';
                    }}
                  >
                    Express Interest
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProfiles;
