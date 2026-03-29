interface SectionDividerProps {
  direction: 'light-to-dark' | 'dark-to-light';
  darkColor?: string;
  lightColor?: string;
}

const SectionDivider = ({
  direction,
  darkColor = '#0F0A05',
  lightColor = '#FFFDF8',
}: SectionDividerProps) => {
  const bgGradient =
    direction === 'light-to-dark'
      ? `linear-gradient(to bottom, ${lightColor} 0%, ${darkColor} 100%)`
      : `linear-gradient(to bottom, ${darkColor} 0%, ${lightColor} 100%)`;

  return (
    <div style={{ background: bgGradient, padding: '32px 0' }}>
      <div className="flex items-center justify-center gap-4">
        <div className="w-16 h-[1px]" style={{ background: 'hsla(40,52%,54%,0.3)' }} />
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="hsla(40,52%,54%,0.4)" />
        </svg>
        <div className="flex gap-2">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'hsla(40,52%,54%,0.25)' }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'hsla(40,52%,54%,0.4)' }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: 'hsla(40,52%,54%,0.25)' }} />
        </div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="hsla(40,52%,54%,0.4)" />
        </svg>
        <div className="w-16 h-[1px]" style={{ background: 'hsla(40,52%,54%,0.3)' }} />
      </div>
    </div>
  );
};

export default SectionDivider;
