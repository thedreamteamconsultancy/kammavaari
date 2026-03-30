import { Search, Sparkles } from "lucide-react";
import { useAuthModal } from "@/hooks/useAuthModal";

const SearchWidget = () => {
  const { openAuth } = useAuthModal();
  return (
    <div
      className="max-w-2xl mx-auto"
      style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(24px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '20px',
        padding: '20px',
      }}
    >
      <p className="flex items-center justify-center gap-2 mb-4 font-body text-[13px] font-light" style={{ color: 'rgba(255,255,255,0.55)' }}>
        <Sparkles className="w-3 h-3" style={{ color: 'hsl(40 52% 54%)' }} />
        Your perfect match is just a search away
        <Sparkles className="w-3 h-3" style={{ color: 'hsl(40 52% 54%)' }} />
      </p>
      <div className="flex flex-col md:flex-row gap-3">
        <select
          className="flex-1 font-body text-[14px] font-light transition-all"
          defaultValue=""
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '12px',
            color: 'white',
            padding: '13px 16px',
            outline: 'none',
          }}
          onFocus={e => e.currentTarget.style.borderColor = 'hsla(40,52%,54%,0.5)'}
          onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
        >
          <option value="" disabled style={{ color: '#666' }}>I'm looking for</option>
          <option value="Bride" style={{ color: '#333' }}>Bride</option>
          <option value="Groom" style={{ color: '#333' }}>Groom</option>
        </select>
        <select
          className="flex-1 font-body text-[14px] font-light transition-all"
          defaultValue=""
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '12px',
            color: 'white',
            padding: '13px 16px',
            outline: 'none',
          }}
          onFocus={e => e.currentTarget.style.borderColor = 'hsla(40,52%,54%,0.5)'}
          onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
        >
          <option value="" disabled style={{ color: '#666' }}>Age from</option>
          {Array.from({ length: 43 }, (_, i) => (
            <option key={i} value={18 + i} style={{ color: '#333' }}>{18 + i}</option>
          ))}
        </select>
        <select
          className="flex-1 font-body text-[14px] font-light transition-all"
          defaultValue=""
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '12px',
            color: 'white',
            padding: '13px 16px',
            outline: 'none',
          }}
          onFocus={e => e.currentTarget.style.borderColor = 'hsla(40,52%,54%,0.5)'}
          onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'}
        >
          <option value="" disabled style={{ color: '#666' }}>Age to</option>
          {Array.from({ length: 43 }, (_, i) => (
            <option key={i} value={18 + i} style={{ color: '#333' }}>{18 + i}</option>
          ))}
        </select>
        <button
          className="font-body text-[14px] font-semibold flex items-center justify-center gap-2 transition-all whitespace-nowrap"
          style={{
            background: 'hsl(40 52% 54%)',
            color: 'hsl(30 50% 4%)',
            borderRadius: '12px',
            padding: '13px 28px',
            border: 'none',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'hsl(40 66% 71%)';
            e.currentTarget.style.boxShadow = 'var(--shadow-gold-sm)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'hsl(40 52% 54%)';
            e.currentTarget.style.boxShadow = 'none';
          }}
          onClick={() => openAuth('signup')}
        >
          <Search className="w-4 h-4" />
          Let's Begin
        </button>
      </div>
    </div>
  );
};

export default SearchWidget;
