import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export default function BlockchainHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const count = 28;
    nodesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 3 + 2,
    }));

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;
      const threshold = 160;

      // edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < threshold) {
            const alpha = (1 - dist / threshold) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(201,162,39,${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(201,162,39,0.7)";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + 4, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(201,162,39,0.15)";
        ctx.lineWidth = 1;
        ctx.stroke();

        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      }

      animRef.current = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Vault icon overlay */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div
          className="w-24 h-24 rounded-2xl flex items-center justify-center"
          style={{ backgroundColor: "rgba(11,31,58,0.8)", border: "1px solid rgba(201,162,39,0.4)" }}
        >
          <VaultIcon />
        </div>
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#C9A227" }}>
          Secured Asset Entity
        </span>
      </div>
    </div>
  );
}

function VaultIcon() {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
      <rect x="6" y="8" width="32" height="28" rx="3" stroke="#C9A227" strokeWidth="2"/>
      <circle cx="22" cy="22" r="8" stroke="#C9A227" strokeWidth="2"/>
      <circle cx="22" cy="22" r="3" fill="#C9A227"/>
      <line x1="22" y1="14" x2="22" y2="17" stroke="#C9A227" strokeWidth="2" strokeLinecap="round"/>
      <line x1="22" y1="27" x2="22" y2="30" stroke="#C9A227" strokeWidth="2" strokeLinecap="round"/>
      <line x1="14" y1="22" x2="17" y2="22" stroke="#C9A227" strokeWidth="2" strokeLinecap="round"/>
      <line x1="27" y1="22" x2="30" y2="22" stroke="#C9A227" strokeWidth="2" strokeLinecap="round"/>
      <rect x="36" y="19" width="4" height="6" rx="1" fill="#C9A227"/>
    </svg>
  );
}
