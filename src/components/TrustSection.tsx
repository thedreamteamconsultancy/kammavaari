import { useEffect, useRef, useState } from "react";
import { Users, Heart, Calendar, ShieldCheck } from "lucide-react";

const stats = [
  { value: 50000, suffix: "+", label: "Kamma Families", Icon: Users },
  { value: 8500, suffix: "+", label: "Happy Marriages", Icon: Heart },
  { value: 15, suffix: "+", label: "Years of Service", Icon: Calendar },
  { value: 100, suffix: "%", label: "Verified Profiles", Icon: ShieldCheck },
];

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(easeOut(progress) * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const TrustSection = () => {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'hsl(var(--maroon-900))', padding: '64px 0' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, hsla(40,52%,54%,0.03) 0px, hsla(40,52%,54%,0.03) 1px, transparent 1px, transparent 12px)',
        }}
      />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center relative" style={{ padding: '32px clamp(12px,3vw,24px)' }}>
              {i < stats.length - 1 && (
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] hidden md:block"
                  style={{ height: '60%', background: 'hsla(40,52%,54%,0.15)' }}
                />
              )}
              {(i === 0 || i === 2) && (
                <div
                  className="absolute right-0 top-1/2 -translate-y-1/2 w-[1px] md:hidden"
                  style={{ height: '60%', background: 'hsla(40,52%,54%,0.15)' }}
                />
              )}

              <stat.Icon
                className="mx-auto mb-3"
                style={{ width: '20px', height: '20px', color: 'hsla(40,52%,54%,0.5)' }}
              />

              <div
                className="font-display font-light"
                style={{
                  fontSize: 'clamp(36px, 6vw, 64px)',
                  background: 'linear-gradient(90deg, hsl(var(--gold-700)) 0%, hsl(var(--gold-300)) 45%, hsl(var(--gold-500)) 55%, hsl(var(--gold-700)) 100%)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'goldShimmer 3.5s linear infinite',
                }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p
                className="font-body font-light mt-2"
                style={{
                  fontSize: 'clamp(10px, 1.5vw, 13px)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'hsl(var(--ink-200))',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
