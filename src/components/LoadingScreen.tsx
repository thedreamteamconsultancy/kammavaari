import { useState, useEffect } from "react";

const LOGO_URL = "https://res.cloudinary.com/dvmrhs2ek/image/upload/v1774700099/wjibi9xge8sdyxqhi09a.png";

const MandalaSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {Array.from({ length: 8 }).map((_, i) => (
      <ellipse
        key={`outer-${i}`}
        cx="50" cy="50" rx="4" ry="22"
        stroke="hsl(40 52% 54%)" strokeWidth="0.75"
        transform={`rotate(${i * 22.5} 50 50) translate(0 -26)`}
      />
    ))}
    {Array.from({ length: 16 }).map((_, i) => (
      <ellipse
        key={`inner-${i}`}
        cx="50" cy="50" rx="2.5" ry="12"
        stroke="hsl(40 52% 54%)" strokeWidth="0.5" opacity="0.7"
        transform={`rotate(${i * 22.5} 50 50) translate(0 -14)`}
      />
    ))}
    {Array.from({ length: 8 }).map((_, i) => (
      <path
        key={`lotus-${i}`}
        d={`M50 50 Q${50 + 6 * Math.cos((i * 45 - 22) * Math.PI / 180)} ${50 + 6 * Math.sin((i * 45 - 22) * Math.PI / 180)} ${50 + 10 * Math.cos(i * 45 * Math.PI / 180)} ${50 + 10 * Math.sin(i * 45 * Math.PI / 180)} Q${50 + 6 * Math.cos((i * 45 + 22) * Math.PI / 180)} ${50 + 6 * Math.sin((i * 45 + 22) * Math.PI / 180)} 50 50`}
        stroke="hsl(40 52% 54%)" strokeWidth="0.75"
      />
    ))}
    <circle cx="50" cy="50" r="3" stroke="hsl(40 52% 54%)" strokeWidth="0.5" />
  </svg>
);

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeOutDelay = 2200;
    const completeDelay = 2520;

    const timers = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 800),
      setTimeout(() => setPhase(4), 1400),
      setTimeout(() => setPhase(5), 1700),
      setTimeout(() => setFadeOut(true), fadeOutDelay),
      setTimeout(() => onComplete(), completeDelay),
    ];
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-4 transition-opacity duration-[400ms]"
      style={{
        backgroundColor: 'hsl(30 50% 4%)',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'auto',
        transitionDuration: '320ms',
        transitionTimingFunction: 'var(--ease-luxury)',
        willChange: 'opacity',
      }}
    >
      {/* Mandala */}
      <div
        className="transition-all duration-[600ms]"
        style={{
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'scale(1)' : 'scale(0.6)',
          transitionTimingFunction: 'var(--ease-luxury)',
          animation: phase >= 2 ? 'mandalaRotate 8s linear infinite' : 'none',
        }}
      >
        <MandalaSVG className="w-[100px] h-[100px]" />
      </div>

      {/* Logo image replaces text */}
      <div
        className="transition-all duration-[500ms]"
        style={{
          opacity: phase >= 3 ? 1 : 0,
          transform: phase >= 3 ? 'translateY(0)' : 'translateY(8px)',
          transitionTimingFunction: 'var(--ease-luxury)',
        }}
      >
        <img src={LOGO_URL} alt="Kammavaari Matrimony" style={{ height: '48px' }} />
      </div>

      {/* Tagline */}
      <p
        className="font-body text-[13px] font-light tracking-[0.18em] transition-all duration-[500ms]"
        style={{
          color: 'hsl(30 16% 69%)',
          opacity: phase >= 4 ? 0.65 : 0,
          transitionTimingFunction: 'var(--ease-luxury)',
        }}
      >
        Uniting Hearts. Honoring Tradition.
      </p>

      {/* Progress bar */}
      <div className="flex justify-center mt-2">
        <div className="w-[120px] h-[1px] bg-white/10 overflow-hidden">
          <div
            className="h-full"
            style={{
              backgroundColor: 'hsl(40 52% 54%)',
              width: phase >= 5 ? '100%' : '0%',
              transition: 'width 700ms linear',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
