import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const SvgLettuce = ({ className = "", style = {} }: any) => (
  <svg className={className} style={style} width="84" height="84" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 2C8 2 4.8 3.8 3 6.8 3 6.8 4.8 8 6 9c1.2 1 2 1.4 3 2.2 1 .8 1.8 1 3 1 1.2 0 2-.4 3-1.2 1-0.8 2-1.6 3-2.8 1.2-1.2 3-2.6 3-2.6C19.2 3.8 16 2 12 2z" fill="#4A7C59" />
    <path d="M4 13c2 2 4 3 8 3s6-1 8-3c0 0-1 4-8 7-7-3-8-7-8-7z" fill="#2D5A27" />
    <path d="M6 16c2 1 4 2 6 2s4-1 6-2c-2 2-4 3-6 3s-4-1-6-3z" fill="#9CAF88" opacity="0.9"/>
  </svg>
);

const SvgTomato = ({ className = "", style = {} }: any) => (
  <svg className={className} style={style} width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <circle cx="12" cy="12" r="8" fill="#FF6B35" />
    <path d="M9 5c1 1 3 1 4 0" stroke="#E55A2B" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 4v2" stroke="#F9CA24" strokeWidth="0.8" strokeLinecap="round" />
  </svg>
);

const SvgLeaf = ({ className = "", style = {} }: any) => (
  <svg className={className} style={style} width="56" height="56" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M3 21c6-6 10-10 18-15-2 7-6 11-10 14-3 2-6 1-8 1z" fill="#4A7C59" />
    <path d="M7 11c3-1 6-2 10-6" stroke="#2D5A27" strokeWidth="0.8" strokeLinecap="round" />
  </svg>
);

export default function CreativeBackground() {
  const { scrollYProgress } = useScroll();
  const yShift = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-visible">
      <motion.div style={{ y: yShift as any }} className="absolute inset-0">
        <div
          style={{
            background:
              "radial-gradient(1200px 600px at 10% 10%, rgba(250,245,240,0.85), transparent 20%), " +
              "radial-gradient(1000px 500px at 90% 90%, rgba(250,237,224,0.7), transparent 18%), " +
              "linear-gradient(180deg, rgba(245,240,232,0.95) 0%, rgba(255,243,230,0.9) 40%, rgba(255,247,235,0.88) 100%)",
            width: "110%",
            height: "120%",
            transform: "translateX(-5%)",
            filter: "blur(8px)",
          }}
        />
      </motion.div>

      <div className="absolute inset-0">
        <FloatingIcon svg={<SvgLeaf />} size={48} left="8%" bottom="-6%" duration={28} delay={0} opacity={0.18} scale={0.9} />
        <FloatingIcon svg={<SvgTomato />} size={56} left="62%" bottom="-8%" duration={36} delay={6} opacity={0.14} scale={0.85} />
        <FloatingIcon svg={<SvgLettuce />} size={72} left="40%" bottom="-12%" duration={44} delay={12} opacity={0.12} scale={0.8} />

        <FloatingIcon svg={<SvgLettuce />} size={92} left="20%" bottom="-14%" duration={26} delay={4} opacity={0.18} scale={1} />
        <FloatingIcon svg={<SvgLeaf />} size={72} left="78%" bottom="-10%" duration={30} delay={10} opacity={0.16} scale={0.95} />

        <FloatingIcon svg={<SvgTomato />} size={100} left="85%" bottom="-18%" duration={20} delay={2} opacity={0.22} scale={1.05} />
        <FloatingIcon svg={<SvgLettuce />} size={120} left="4%" bottom="-20%" duration={22} delay={8} opacity={0.2} scale={1.1} />
      </div>
    </div>
  );
}

function FloatingIcon({ svg, left = "10%", bottom = "-10%", size = 80, duration = 28, delay = 0, opacity = 0.18, scale = 1 }: any) {
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const anim = {
    animate: {
      y: ["0vh", "-140vh"],
      x: ["0rem", "2rem", "-2rem", "0rem"],
      rotate: [0, 5, -5, 0],
    },
  };

  return (
    <motion.div
      {...(!prefersReduced ? anim : {})}
      transition={{
        y: { duration, ease: "linear", repeat: Infinity, repeatType: "loop", delay },
        x: { duration: duration * 0.9, ease: "easeInOut", repeat: Infinity, repeatType: "loop", delay },
        rotate: { duration: duration, ease: "easeInOut", repeat: Infinity, repeatType: "loop", delay },
      }}
      style={{
        position: "absolute",
        left,
        bottom,
        width: size,
        height: size,
        opacity,
        transform: `translate3d(0,0,0) scale(${scale})`,
        pointerEvents: "none",
        willChange: "transform, opacity",
        filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.06))",
      }}
      aria-hidden
    >
      {svg}
    </motion.div>
  );
}
