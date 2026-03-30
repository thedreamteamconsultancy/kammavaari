import { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(() => {
    return localStorage.getItem("kv-music-muted") === "true";
  });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const audio = new Audio("/music/background.mp3");
    audio.loop = true;
    audio.volume = 0.35;
    audioRef.current = audio;

    const tryPlay = () => {
      if (muted) return;
      audio.play().then(() => setReady(true)).catch(() => {
        // Autoplay blocked — wait for first user interaction
        const resume = () => {
          if (!audioRef.current) return;
          const wasMuted = localStorage.getItem("kv-music-muted") === "true";
          if (!wasMuted) {
            audioRef.current.play().then(() => setReady(true)).catch(() => {});
          }
          document.removeEventListener("click", resume);
          document.removeEventListener("touchstart", resume);
        };
        document.addEventListener("click", resume, { once: true });
        document.addEventListener("touchstart", resume, { once: true });
      });
    };

    tryPlay();

    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;
      document.removeEventListener("click", () => {});
      document.removeEventListener("touchstart", () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    localStorage.setItem("kv-music-muted", String(muted));
    if (muted) {
      audio.pause();
    } else {
      audio.play().then(() => setReady(true)).catch(() => {});
    }
  }, [muted]);

  return (
    <button
      onClick={() => setMuted(m => !m)}
      aria-label={muted ? "Unmute background music" : "Mute background music"}
      className="fixed flex items-center justify-center"
      style={{
        bottom: '28px',
        left: '16px',
        zIndex: 40,
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '1px solid hsla(40, 52%, 54%, 0.4)',
        background: 'hsla(30, 50%, 4%, 0.55)',
        backdropFilter: 'blur(12px)',
        color: 'hsl(40, 52%, 54%)',
        transition: 'all 0.3s ease',
        opacity: 0.7,
      }}
      onMouseEnter={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.background = 'hsla(30, 50%, 4%, 0.8)'; }}
      onMouseLeave={e => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.background = 'hsla(30, 50%, 4%, 0.55)'; }}
    >
      {muted ? (
        /* Volume off icon */
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      ) : (
        /* Music note with subtle pulse */
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            animation: ready ? 'kv-music-pulse 2s ease-in-out infinite' : 'none',
          }}
        >
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      )}

      <style>{`
        @keyframes kv-music-pulse {
          0%, 100% { opacity: 0.85; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </button>
  );
};

export default MusicPlayer;
