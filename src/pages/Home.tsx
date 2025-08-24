import React, { useState, useMemo } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import ShineButton from "../components/ShineButton";
import { Link } from "react-router-dom";

/* ---------- Reusable Section wrapper ---------- */
const Section: React.FC<
  React.PropsWithChildren<{ className?: string; delay?: number; variant?: "left" | "up" | "right" }>
> = ({ children, className = "", delay = 0, variant = "up" }) => {
  const variants = {
    left: { hidden: { opacity: 0, x: -40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] } } },
    up: { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] } } },
    right: { hidden: { opacity: 0, x: 40 }, show: { opacity: 1, x: 0, transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] } } },
  } as const;

  return (
    <motion.section
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

/* ---------- Image block ---------- */
const Picture = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.96 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: false }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    className={`w-full overflow-hidden rounded-xl ${className}`}
  >
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      loading="lazy"
      referrerPolicy="no-referrer"
    />
  </motion.div>
);

const Home = () => {
  const [foundingMembers] = useState(647);
  const [slotsLeft] = useState(353);

  /* ---------- Hero parallax float (subtle) ---------- */
  const controls = useAnimation();
  const floatKeyframes = useMemo(
    () => ({
      y: [0, -6, 0, 6, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
    }),
    []
  );

  /* ---------- Shared variants ---------- */
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.25 } },
  };
  const itemLeft = { hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } };
  const itemRight = { hidden: { opacity: 0, x: 50 }, show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } };
  const itemUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-fregacy-soft-green via-white to-fregacy-soft-purple">

      {/* ---------- Hero: Cinematic reveal ---------- */}
      <motion.section
        initial="hidden"
        animate="show"
        viewport={{ once: false, margin: "-15% 0px -15% 0px" }}
        className="relative min-h-[100svh] flex items-center"
      >
        <style>{`
    /* Shimmer overlay for headline */
    .shimmer {
      position: relative;
      overflow: hidden;
    }
    .shimmer:after {
      content: "";
      position: absolute;
      top: 0; left: -120%;
      width: 120%; height: 100%;
      background: linear-gradient(110deg, rgba(255,255,255,0) 0%, rgba(255,255,255,.6) 25%, rgba(255,255,255,0) 50%);
      transform: skewX(-20deg);
      animation: shimmer-sweep 2.2s ease-in-out 0.8s forwards;
    }
    @keyframes shimmer-sweep {
      0% { left: -120%; }
      100% { left: 140%; }
    }
    /* Underline sweep */
    .underline-sweep {
      position: relative;
    }
    .underline-sweep:after {
      content: "";
      position: absolute;
      left: 0; bottom: -10px;
      height: 8px; width: 0%;
      border-radius: 9999px;
      background: linear-gradient(90deg,#B7E4C7 0%,#FFB68A 50%,#D4C5E8 100%);
      box-shadow: 0 6px 14px -8px rgba(0,0,0,.25);
      animation: underline-reveal .9s cubic-bezier(.22,1,.36,1) .6s forwards;
    }
    @keyframes underline-reveal { to { width: 100%; } }

    @media (prefers-reduced-motion: reduce) {
      .shimmer:after { display:none !important; }
    }
  `}</style>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Headline + CTA (left) */}
          <div className="lg:col-span-6 order-2 lg:order-1 text-center lg:text-left">
            {/* Line 1: word-by-word stagger + light pop */}
            <motion.h1
              className="text-[clamp(28px,6vw,56px)] font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="block shimmer"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } }
                }}
              >
                {"Fresh Salads That".split(" ").map((w, i) => (
                  <motion.span
                    key={w + i}
                    className="inline-block mr-2"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
                    }}
                  >
                    {w}
                  </motion.span>
                ))}
              </motion.span>

              {/* Line 2: gradient text + underline sweep */}
              <motion.span
                className="block mt-1 underline-sweep bg-gradient-to-r from-[#2D6A4F] via-[#B7E4C7] to-[#2D6A4F] bg-clip-text text-transparent" initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              >
                Fuel Your Hustle
              </motion.span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-[clamp(14px,2.6vw,20px)] text-gray-600 mt-5 leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
            >
              Healthy. Convenient. Transparent. Your go-to solution for real nutritious food, made simple.
            </motion.p>

            {/* CTA with soft looped glow */}
            <motion.div
              className="mt-7"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              <Link to="/subscription">
                <motion.div
                  initial={{ boxShadow: "0 0 0px rgba(64,145,108,0)" }}
                  animate={{ boxShadow: ["0 0 0px rgba(64,145,108,0)", "0 0 22px rgba(64,145,108,.35)", "0 0 0px rgba(64,145,108,0)"] }}
                  transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.2 }}
                  className="inline-block rounded-lg"
                >
                  <ShineButton
                    variant="primary"
                    className="text-sm sm:text-base md:text-lg px-6 py-3 bg-[#2D6A4F] hover:bg-[#40916C] text-white rounded-lg shadow-lg transition"
                  >
                    Secure My Founding Spot
                  </ShineButton>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          {/* Hero image (right) delayed entrance after headline) */}
          <motion.div
            className="lg:col-span-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 60, filter: "blur(6px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
          >
            <motion.div
              initial={{ rotate: -0.6 }}
              whileHover={{ rotate: 0.6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 120, damping: 12 }}
              animate={{ y: [0, -6, 0, 6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-full overflow-hidden rounded-xl h-[48vh] sm:h-[58vh] md:h-[62vh]">
                <img
                  src="./src/assets/1002.png"
                  alt="Fresh colorful salad bowl with grains and greens"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Prevent peeking of next section */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-b from-transparent to-white" />
      </motion.section>

      {/* ---------- Meet the Salad (image left) ---------- */}

      <Section className="py-16 sm:py-20 px-4 sm:px-6 bg-white" variant="left">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <Picture src="./src/assets/1004.png" alt="Person preparing healthy salad"
            className=" h-72 sm:h-96 bg-white rounded-none [&>img]:w-full [&>img]:h-full [&>img]:object-contain [&>img]:mx-auto [&>img]:pointer-events-none [&>img]:drop-shadow-[0_16px_36px_rgba(0,0,0,0.12)] " />
          <div> <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[clamp(22px,4.2vw,40px)] font-bold mb-6" >
            Meet the Salad That Understands You ✨
          </motion.h2>
            <p className="text-lg text-gray-700 leading-relaxed"> 👋 Hi, we’re <span className="font-semibold text-[#2D6A4F]">Fregcy</span>, your new best friend in nutrition. Our mission is simple: To help you feel unstoppable, starting with how you eat. </p>
          </div> </div> </Section>

      {/* ---------- Problem Statement (image right) ---------- */}
      <Section className="py-16 sm:py-20 bg-white/80 backdrop-blur-sm px-4 sm:px-6" delay={0.05} variant="right">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-[clamp(20px,4.5vw,40px)] font-bold mb-4 sm:mb-6">
              Are You Tired of Choosing Between Convenience and Health?
            </h2>
            <p className="text-[clamp(14px,2.5vw,18px)] text-fregacy-dark-gray leading-relaxed">
              You’re not alone. In a world full of quick junk food and unhealthy
              options, <span className="font-semibold">Fregcy</span> is here to
              change the game. We don’t believe in compromises. We believe in
              fresh, flavorful, fully transparent nutrition that actually fits
              your lifestyle.
            </p>
          </div>

          <Picture src="./src/assets/1003.png"
            alt="Green salad bowl with leafy greens on neutral background"
            className="h-64 sm:h-72 md:h-96" />
        </div>
      </Section>

      {/* ---------- Testimonials ---------- */}
      <Section className="py-16 sm:py-20 bg-[#FAFAFA] px-4 sm:px-6" variant="up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[clamp(22px,4.2vw,40px)] font-bold text-gray-900 mb-10 text-center">
            Hear from Our Wellness Warriors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote:
                  "Every afternoon used to be a crash. Now I’m energized right through 6 PM—and I look forward to lunch again.",
                author: "Aarti, Consultant",
                img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
              },
              {
                quote:
                  "My productivity spiked, my bloating vanished, and for once—eating healthy didn’t feel like a job.",
                author: "Sana, Designer",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
              },
              {
                quote:
                  "I don’t even like salads. But Fregcy changed that. I finally feel like I’m eating for me.",
                author: "Karan, Software Engineer",
                img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
              },
            ].map((t, i) => (
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                viewport={{ once: false }}
                className="bg-white rounded-xl text-left relative overflow-hidden will-change-transform"
                whileHover={{ rotate: i % 2 ? -0.6 : 0.6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 110, damping: 12 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr]">
                  <Picture
                    src={t.img}
                    alt={`${t.author} enjoying healthy food`}
                    className="h-40 sm:h-full"
                  />
                  <div className="p-6">
                    <p className="text-gray-700 text-base sm:text-lg md:text-xl italic leading-relaxed">
                      {t.quote}
                    </p>
                    <span className="block mt-4 font-semibold text-[#2D6A4F] text-sm sm:text-base">
                      — {t.author}
                    </span>
                  </div>
                </div>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </Section>

      {/* ---------- CTA ---------- */}
      <Section className="py-16 sm:py-20 bg-[#FAFAFA] px-4 sm:px-6 text-center" variant="up">
        <h2 className="text-[clamp(20px,4.5vw,40px)] font-bold mb-4 sm:mb-6 text-[#1A1A1A]">
          Ready to Feel the Shift?
        </h2>

        <div className="w-full max-w-5xl mx-auto mb-8">
          <Picture
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop"
            alt="Colorful nutrient-dense salad spread"
            className="h-48 sm:h-60 md:h-72"
          />
        </div>

        <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-700">
          Claim Your Founding Member Spot Before It’s Gone <br />
          We're already at <strong>{foundingMembers}</strong>, only{" "}
          <span className="text-[#FF6B35] font-semibold">{slotsLeft}</span> slots left!
        </p>

        <ul className="max-w-2xl mx-auto text-left text-xs sm:text-base md:text-lg space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-gray-800">
          <li>Lifetime 20% discount on all purchases</li>
          <li>Early delivery to your office/home</li>
          <li>Access to the Fregcy App + customization engine</li>
          <li>Exclusive health & performance community</li>
        </ul>

        <Link to="/subscription">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
            className="inline-block"
          >
            <ShineButton
              variant="primary"
              className="text-sm sm:text-base md:text-lg px-6 py-3 
                 bg-[#FF6B35] hover:bg-[#E55A2B] text-white 
                 border-2 border-[#FF6B35] rounded-md"
            >
              Secure My Founding Spot – Before It’s Gone
            </ShineButton>
          </motion.div>
        </Link>
      </Section>
    </div>
  );
};

export default Home;
