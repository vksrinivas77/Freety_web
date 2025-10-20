import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import ShineButton from "../components/ShineButton";

import saladHero from "/assets/1002.png";
import saladMeet from "/assets/1010.png";
import saladProblem from "/assets/10021.png";

/* ---------- Section wrapper ---------- */
const Section: React.FC<
  React.PropsWithChildren<{ className?: string; delay?: number; variant?: "left" | "up" | "right" }>
> = ({ children, className = "", delay = 0, variant = "up" }) => {
  const variants = {
    left: { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, delay } } },
    up: { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, delay } } },
    right: { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, delay } } },
  } as const;

  return (
    <motion.section
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

/* ---------- Image helper ---------- */
const Picture = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7 }}
    className={`w-full overflow-hidden rounded-xl ${className}`}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
  </motion.div>
);

/* ---------- Testimonials data ---------- */
const TESTIMONIALS = [
  {
    id: "t1",
    quote: "I’ve been shopping from this service for a long time now. Don’t think twice — the quality is the best!",
    author: "Louisa Morris",
    role: "Frequent Customer",
    img: "/assets/member1.jpg",
  },
  {
    id: "t2",
    quote: "This is the best product I’ve bought in years! Affordable and comfy — totally changed my routine.",
    author: "Anjali Sharma",
    role: "Designer",
    img: "/assets/member2.jpg",
  },
  {
    id: "t3",
    quote: "I had the time of my life! They received me with open arms and I felt heard. Would recommend 100%.",
    author: "Peter Smith",
    role: "Product Manager",
    img: "/assets/member1.jpg",
  },
  {
    id: "t4",
    quote: "Tasty, fresh, and fast — perfect for busy mornings. The salads saved my workday energy!",
    author: "Rohan Kapoor",
    role: "Engineer",
    img: "/assets/member2.jpg",
  },
  {
    id: "t5",
    quote: "Great service and consistent quality. My whole team orders now — highly recommended.",
    author: "Priya Singh",
    role: "Marketing Lead",
    img: "/assets/member1.jpg",
  },
];

/* ---------- Counters ---------- */
const CountersArea: React.FC<{ foundingMembers: number; slotsLeft: number }> = ({ foundingMembers, slotsLeft }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="mt-2">
      <div className="flex items-baseline gap-3 flex-wrap">
        <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-fregcy-primary-green leading-none">
          <NumberCounter from={0} to={foundingMembers} duration={1200} format={(n) => Math.round(n).toLocaleString()} play={isInView} />
        </div>
        <div className="text-sm sm:text-base md:text-lg text-fregcy-body-light self-end">we're already here</div>
      </div>

      <div className="mt-1 text-base text-fregcy-body">
        Only{" "}
        <span className="font-semibold text-fregcy-saffron">
          <NumberCounter from={0} to={slotsLeft} duration={1200} format={(n) => Math.round(n).toLocaleString()} play={isInView} />
        </span>{" "}
        slots left!
      </div>
    </div>
  );
};

const NumberCounter: React.FC<{
  from?: number;
  to: number;
  duration?: number;
  format?: (n: number) => string;
  play?: boolean;
}> = ({ from = 0, to, duration = 1500, format = (n) => String(Math.round(n)), play = true }) => {
  const [value, setValue] = useState(from);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!play) {
      setValue(from);
      startedRef.current = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }
    if (startedRef.current) return;
    startedRef.current = true;

    startRef.current = null;
    const step = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current!;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = from + (to - from) * eased;
      setValue(current);
      if (progress < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [play, from, to, duration]);

  return <>{format(value)}</>;
};

/* ---------- Testimonials (wide) ---------- */
const TestimonialsWide: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  // use DOM timers so types are consistent in the browser
  const intervalRef = useRef<number | null>(null);

  const stepDelay = 3500;
  useEffect(() => {
    if (paused) return;
    intervalRef.current = window.setInterval(() => {
      setIndex((s) => (s + 1) % TESTIMONIALS.length);
    }, stepDelay);
    return () => {
      if (intervalRef.current !== null) window.clearInterval(intervalRef.current);
    };
  }, [paused, stepDelay]);

  const move = (dir: number) => setIndex((s) => (s + dir + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div
      className="relative w-full max-w-3xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* slides */}
      <div className="relative w-full h-[280px] sm:h-[300px] md:h-[300px]">
        {TESTIMONIALS.map((t, i) => {
          const isActive = i === index;
          return (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : 40 }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 rounded-2xl overflow-hidden shadow-xl bg-white flex ${isActive ? "z-20" : "z-10 pointer-events-none"
                }`}
            >
              {/* image */}
              <div className="w-[34%] h-full shrink-0">
                <img src={t.img} alt={t.author} className="w-full h-full object-cover" />
              </div>

              {/* text */}
              <div className="flex-1 h-full flex flex-col justify-between p-5 sm:p-6">
                <p className="italic text-fregcy-body text-sm sm:text-base leading-relaxed">“{t.quote}”</p>
                <div className="flex items-center justify-between mt-3">
                  <div>
                    <div className="font-semibold text-fregcy-primary-green">{t.author}</div>
                    <div className="text-xs text-fregcy-body-light">{t.role}</div>
                  </div>
                  <div aria-hidden className="flex gap-1 items-center">
                    {Array.from({ length: 5 }).map((_, sIndex) => (
                      <span
                        key={sIndex}
                        className={`text-lg ${sIndex < 4 ? "text-fregcy-saffron" : "text-fregcy-body-light"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* arrows OUTSIDE */}
      <div className="hidden sm:block">
        <button
          aria-label="Previous testimonial"
          onClick={() => move(-1)}
          className="absolute -left-12 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/95 shadow-md flex items-center justify-center hover:bg-fregcy-primary-green hover:text-white transition text-fregcy-green-dark"
          style={{ backdropFilter: "blur(6px)" }}
        >
          <span className="text-2xl select-none">‹</span>
        </button>
        <button
          aria-label="Next testimonial"
          onClick={() => move(1)}
          className="absolute -right-12 top-1/2 -translate-y-1/2 z-50 w-11 h-11 rounded-full bg-white/95 shadow-md flex items-center justify-center hover:bg-fregcy-primary-green hover:text-white transition text-fregcy-green-dark"
          style={{ backdropFilter: "blur(6px)" }}
        >
          <span className="text-2xl select-none">›</span>
        </button>
      </div>

      {/* mobile controls */}
      <div className="sm:hidden mt-3 flex items-center justify-center gap-4">
        <button
          aria-label="Previous testimonial"
          onClick={() => move(-1)}
          className="px-4 py-2 rounded-full bg-white shadow text-fregcy-green-dark"
        >
          ‹
        </button>
        <div className="flex gap-1">
          {TESTIMONIALS.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${i === index ? "bg-fregcy-primary-green" : "bg-fregcy-body-light/40"}`}
            />
          ))}
        </div>
        <button
          aria-label="Next testimonial"
          onClick={() => move(1)}
          className="px-4 py-2 rounded-full bg-white shadow text-fregcy-green-dark"
        >
          ›
        </button>
      </div>
    </div>
  );
};

/* ---------- keyframes for float (typed via const so TS accepts ease) ---------- */
const floatKeyframes = {
  y: [0, -6, 0, 6, 0],
  transition: { duration: 6, repeat: Infinity as const, ease: "easeInOut" as const },
} as const;

/* ---------- Page ---------- */
const Home: React.FC = () => {
  const [foundingMembers] = useState(647);
  const [slotsLeft] = useState(353);

  return (
    <div className="relative overflow-hidden bg-eucalyptus-mist">
      {/* ---------- HERO ---------- */}
      <motion.section
        initial="hidden"
        animate="show"
        className="relative min-h-[100svh] flex items-center"
      >
        <style>{`
          .shimmer{position:relative;overflow:hidden}
          .shimmer:after{content:"";position:absolute;top:0;left:-120%;width:120%;height:100%;background:linear-gradient(110deg,rgba(255,255,255,0)0%,rgba(255,255,255,0.55)25%,rgba(255,255,255,0)50%);transform:skewX(-20deg);animation:shimmer-sweep 2.2s ease-in-out 0.8s forwards}
          @keyframes shimmer-sweep{0%{left:-120%}100%{left:140%}}
          .underline-sweep{position:relative}
          .underline-sweep:after{content:"";position:absolute;left:0;bottom:-10px;height:8px;width:0;border-radius:9999px;background:linear-gradient(90deg,#4A7C59 0%,#FF8C69 50%,#D4C5E8 100%);box-shadow:0 6px 14px -8px rgba(0,0,0,0.25);animation:underline-reveal .9s cubic-bezier(.22,1,.36,1) .6s forwards}
          @keyframes underline-reveal{to{width:100%}}
          @media (prefers-reduced-motion: reduce){.shimmer:after,.underline-sweep:after{display:none!important}}
        `}</style>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1 text-center lg:text-left">
            <motion.h1
              className="text-[clamp(26px,6vw,52px)] font-bold leading-tight text-fregcy-h1"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <motion.span
                className="block shimmer"
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } } }}
              >
                {"Fresh Salads That".split(" ").map((w, i) => (
                  <motion.span key={w + i} className="inline-block mr-2" variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}>
                    {w}
                  </motion.span>
                ))}
              </motion.span>

              <motion.span
                className="block mt-1 underline-sweep bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(90deg,#2D5A27 0%, #4A7C59 50%, #2D5A27 100%)" }}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                Fuel Your Hustle
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-[clamp(13px,2.4vw,18px)] mt-4 leading-relaxed max-w-xl mx-auto lg:mx-0 text-fregcy-body font-semibold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.55 }}
            >
              Healthy. Convenient. Transparent.
              <br className="md:hidden" />
              <span className="text-fregcy-saffron font-bold"> Your go-to solution for real nutritious food, made simple.</span>
            </motion.p>

            <motion.div className="mt-6" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.75 }}>
              <Link to="/subscription" aria-label="Secure founding spot">
                <motion.div
                  initial={{ boxShadow: "0 0 0px rgba(64,145,108,0)" }}
                  animate={{ boxShadow: ["0 0 22px rgba(64,145,108,.22)", "0 0 0px rgba(64,145,108,0)"] }}
                  transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.2 }}
                  className="inline-block rounded-lg"
                >
                  <ShineButton
                    variant="primary"
                    className="text-sm sm:text-base md:text-lg px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-lg transition bg-cta-gradient text-white whitespace-nowrap"
                  >
                    Secure My Founding Spot
                  </ShineButton>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 60, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.9 }}
          >
            <motion.div
              initial={{ rotate: -0.6 }}
              whileHover={{ rotate: 0.6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              animate={floatKeyframes}
            >
              <div className="w-full overflow-hidden rounded-xl h-[44vh] sm:h-[52vh] md:h-[60vh]">
                <img src={saladHero} alt="Fresh colorful salad bowl with grains and greens" className="w-full h-full object-cover" loading="eager" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* ---------- Meet the Salad ---------- */}
      <Section className="py-12 sm:py-16 px-4 sm:px-6 bg-sage-wind " variant="left">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <Picture
            src={saladMeet}
            alt="Person preparing healthy salad"
            className="w-full max-w-md sm:max-w-lg h-auto rounded-2xl object-cover drop-shadow-lg"
          />

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[clamp(20px,3.8vw,150px)] font-bold mb-4 md:mb-5 text-fregcy-h1"
            >
              Meet the Salad That Understands You ✨
            </motion.h2>
            <p className="text-base sm:text-lg text-fregcy-body leading-relaxed">
              👋 Hi, we’re <span className="font-semibold text-fregcy-primary-green">Fregcy</span>, your new best friend in nutrition.
              <br />
              <span className="text-fregcy-saffron font-bold">Our mission is simple: To help you feel unstoppable, starting with how you eat.</span>
            </p>
          </div>
        </div>
      </Section>

      {/* ---------- Problem Statement ---------- */}
      <Section className="py-12 sm:py-16 bg- backdrop-blur-sm px-4 sm:px-6 bg-ivory-glow" delay={0.05} variant="right">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div>
            <h2 className="text-[clamp(18px,3.8vw,150px)] font-extrabold mb-3 sm:mb-4 text-fregcy-green-dark font-[Poppins]">
              Are You Tired of Choosing Between Convenience and Health?
            </h2>
            <p className="text-[clamp(15px,2.2vw,17px)] leading-relaxed text-fregcy-green-dark">
              You’re not alone. In a world full of quick junk food and unhealthy options,
              <span className="font-semibold text-fregcy-primary-green"> Fregcy </span> is here to change the game.
              <br className="md:hidden" />
              <span className="font-bold text-fregcy-saffron">
                Fresh, flavourful, fully transparent nutrition that actually fits your lifestyle.
              </span>
            </p>
          </div>
          <Picture src={saladProblem} alt="Green salad bowl with leafy greens on neutral background" className="w-full max-w-md sm:max-w-lg h-auto rounded-2xl object-cover drop-shadow-lg" />
        </div>
      </Section>

      {/* ---------- Testimonials ---------- */}
      <Section className="py-16 px-4 sm:px-6 " variant="up">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h3 className="text-[clamp(26px,4vw,42px)] font-extrabold leading-tight text-fregcy-h1 mb-10">
            <span className="block md:hidden">Hear from Our Wellness Warriors</span>
            <span className="hidden md:block">Hear from Our Wellness Warriors</span>
          </h3>
          <div className="w-full max-w-4xl">
            <TestimonialsWide />
          </div>
        </div>
      </Section>

{/* ---------- Founding Member Section (Organic Floating Style) ---------- */}
<Section
  className="relative py-20 sm:py-28 px-6 sm:px-10 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#FAFDFB] to-[#F5F8F6]"
  variant="up"
>
 {/* Floating decorative veggies (random placement) */}
<motion.img
  src="/assets/leaf1.png"
  alt=""
  className="absolute top-[5%] left-[8%] w-32 sm:w-44 opacity-80"
  animate={{ y: [0, 12, 0], rotate: [0, 3, -3, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
/>

<motion.img
  src="/assets/tomoto1.png"
  alt=""
  className="absolute bottom-[10%] right-[6%] w-36 sm:w-52 opacity-85"
  animate={{ y: [0, -14, 0], rotate: [0, -4, 4, 0] }}
  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
/>

<motion.img
  src="/assets/basil.png"
  alt=""
  className="absolute top-[30%] right-[20%] w-28 sm:w-40 opacity-70"
  animate={{ y: [0, 10, 0], rotate: [0, 6, -6, 0] }}
  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
/>

<motion.img
  src="/assets/leaf2.png"
  alt=""
  className="absolute bottom-[25%] left-[15%] w-32 sm:w-48 opacity-75"
  animate={{ y: [0, -8, 0], rotate: [0, -3, 3, 0] }}
  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
/>

<motion.img
  src="/assets/tomto1.png"
  alt=""
  className="absolute top-[60%] left-[50%] w-44 sm:w-46 opacity-70"
  animate={{ y: [0, 10, 0], rotate: [0, 2, -2, 0] }}
  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
/>

  {/* Content area */}
  <div className="relative max-w-5xl mx-auto text-center z-10">
    {/* Title */}
    <motion.h2
      className="text-[clamp(26px,5vw,46px)] font-extrabold text-fregcy-h1 mb-4 leading-tight"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      Ready to Feel the Shift?
    </motion.h2>

    {/* Subtitle */}
    <motion.p
      className="text-sm sm:text-base md:text-lg text-fregcy-body mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.8 }}
    >
      Claim Your Founding Member Spot Before It’s Gone
    </motion.p>

    {/* Counter */}
    <motion.div
      className="flex justify-center mb-10"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
      <CountersArea foundingMembers={foundingMembers} slotsLeft={slotsLeft} />
    </motion.div>

    {/* Feature List */}
    <motion.ul
      className="grid gap-4 text-left sm:text-center text-sm sm:text-base md:text-lg leading-relaxed text-fregcy-body max-w-2xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.15, duration: 0.6 },
        },
      }}
    >
      {[
        { icon: "🎯", text: "Lifetime 20% discount on all purchases" },
        { icon: "🚚", text: "Early delivery to your office/home" },
        { icon: "📱", text: "Access to the Fregcy App + customization engine" },
        { icon: "🎁", text: "Exclusive health & performance community" },
      ].map((item, index) => (
        <motion.li
          key={index}
          className="flex sm:justify-center items-center gap-3"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <span className="text-lg sm:text-xl flex-shrink-0">{item.icon}</span>
          <span>{item.text}</span>
        </motion.li>
      ))}
    </motion.ul>

    {/* CTA Button */}
    <motion.div
      className="mt-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.7 }}
    >
      <Link to="/subscription">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 180 }}>
          <ShineButton
            variant="primary"
            className="px-8 py-3 rounded-full bg-cta-gradient text-white border-2 border-fregcy-saffron text-base md:text-lg font-semibold shadow-md"
          >
            Secure My Founding Spot – Before It’s Gone
          </ShineButton>
        </motion.div>
      </Link>
    </motion.div>
  </div>
</Section>

    </div>
  );
};

export default Home;
