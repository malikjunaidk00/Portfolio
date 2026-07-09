const particles = [
  { left: "6%", top: "18%", size: "7px", delay: "0s", duration: "11s" },
  { left: "14%", top: "72%", size: "5px", delay: "1.3s", duration: "13s" },
  { left: "23%", top: "34%", size: "9px", delay: "0.7s", duration: "12s" },
  { left: "38%", top: "16%", size: "6px", delay: "2.2s", duration: "14s" },
  { left: "48%", top: "78%", size: "8px", delay: "1.8s", duration: "10s" },
  { left: "62%", top: "26%", size: "5px", delay: "0.4s", duration: "13s" },
  { left: "72%", top: "68%", size: "9px", delay: "2.8s", duration: "12s" },
  { left: "84%", top: "20%", size: "6px", delay: "1.1s", duration: "15s" },
  { left: "92%", top: "56%", size: "7px", delay: "2.4s", duration: "11s" },
];

const codeChips = [
  { text: "REST", top: "17%", left: "58%", delay: "0s" },
  { text: "AI MATCH", top: "34%", left: "69%", delay: "1.2s" },
  { text: "SPRING", top: "56%", left: "61%", delay: "2.1s" },
  { text: "PyQGIS", top: "74%", left: "76%", delay: "0.8s" },
];

export default function AnimatedBackground() {
  return (
    <div className="site-animated-background pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#06110f]" aria-hidden="true">
      <div className="hero-aurora" />
      <div className="hero-grid-layer" />
      <div className="hero-scan-beam hero-scan-beam-a" />
      <div className="hero-scan-beam hero-scan-beam-b" />

      <svg
        className="hero-network"
        viewBox="0 0 1200 720"
        preserveAspectRatio="none"
        focusable="false"
      >
        <defs>
          <linearGradient id="heroLineGradient" x1="0%" x2="100%" y1="0%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.2" />
            <stop offset="48%" stopColor="#60a5fa" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.18" />
          </linearGradient>
          <radialGradient id="heroNodeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f8fafc" stopOpacity="1" />
            <stop offset="45%" stopColor="#2dd4bf" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0" />
          </radialGradient>
        </defs>
        <path className="hero-path hero-path-slow" d="M70 520 C210 380 300 450 420 300 S700 180 820 330 1020 480 1150 250" />
        <path className="hero-path hero-path-fast" d="M120 180 C260 90 430 150 560 260 S770 430 920 290 1040 170 1160 210" />
        <path className="hero-path hero-path-mid" d="M220 650 C360 520 510 590 660 460 S870 220 1120 610" />
        {[120, 260, 410, 560, 720, 880, 1030].map((x, index) => (
          <circle
            key={x}
            className="hero-node"
            cx={x}
            cy={index % 2 === 0 ? 210 + index * 36 : 500 - index * 28}
            r={index % 3 === 0 ? 7 : 5}
          />
        ))}
      </svg>

      {particles.map((particle) => (
        <span
          key={`${particle.left}-${particle.top}`}
          className="hero-particle"
          style={{
            "--particle-left": particle.left,
            "--particle-top": particle.top,
            "--particle-size": particle.size,
            "--particle-delay": particle.delay,
            "--particle-duration": particle.duration,
          }}
        />
      ))}

      {codeChips.map((chip) => (
        <span
          key={chip.text}
          className="hero-code-chip"
          style={{
            "--chip-top": chip.top,
            "--chip-left": chip.left,
            "--chip-delay": chip.delay,
          }}
        >
          {chip.text}
        </span>
      ))}

      <div className="hero-orbit hero-orbit-a" />
      <div className="hero-orbit hero-orbit-b" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,17,15,0.96),rgba(6,17,15,0.76)_44%,rgba(6,17,15,0.36)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_35%,rgba(45,212,191,0.16),transparent_36%),radial-gradient(circle_at_30%_78%,rgba(217,119,6,0.13),transparent_32%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#06110f] to-transparent" />
    </div>
  );
}
