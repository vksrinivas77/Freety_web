import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Star, Zap } from "lucide-react";
import ShineButton from "../components/ShineButton";

/* ------------------ Motion helpers (slower + smooth) ------------------ */
const edgeIn = (dir: "left" | "right", delay = 0) => ({
  hidden: { opacity: 0, x: dir === "left" ? "-18vw" : "18vw", filter: "blur(1.5px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  },
});
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Subscription: React.FC = () => {
  return (
<div className="relative w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-[#E7F5DA] via-[#DCF4C7] to-[#D9EFC1] text-gray-900">

      {/* Page-scoped utilities (colors wired to your palette) */}
      <style>{`
        /* --- brand helpers mapped to your CSS variables --- */
        .text-brand-h1 { color: var(--h1-color); }
        .text-brand-green { color: var(--primary-green); }
        .text-brand-saffron { color: var(--secondary-saffron); }
        .text-brand-turmeric { color: var(--accent-turmeric-dark); } /* darker for accents */

        .btn-green    { background: var(--primary-green); }
        .btn-green:hover { background: var(--primary-green-light); }
        .btn-saffron  { background: var(--secondary-saffron); }
        .btn-saffron:hover { background: var(--secondary-saffron-dark); }
        .btn-turmeric { background: var(--accent-turmeric); color: var(--h1-color); }
        .btn-turmeric:hover { background: var(--accent-turmeric-dark); }

        /* DARKER card tints (relative to your palette) */
        .card-soft-green   { background: rgba(45, 90, 39, 0.18); }       /* primary-green @ 18% */
        .card-soft-saffron { background: rgba(255, 107, 53, 0.18); }     /* saffron @ 18% */
        .card-soft-turm    { background: rgba(249, 202, 36, 0.22); }     /* turmeric @ 22% */

        /* Card framing stays the same */
        .plan-card {
          display:flex; flex-direction:column;
          border: 1px solid rgba(0,0,0,.06);
          border-radius: 16px;
          box-shadow: 0 8px 28px -16px rgba(0,0,0,0.20);
        }
        .plan-body { flex:1 1 auto; }
        .plan-cta { margin-top:1.25rem; }

        /* Gold glow + pulse for price chip and arrow (kept) */
        @keyframes gold-glow {
          0%, 60%, 100% { filter: drop-shadow(0 0 0 rgba(234,179,8,0)); }
          65% { filter: drop-shadow(0 0 10px rgba(234,179,8,0.55)); }
          72% { filter: drop-shadow(0 0 6px rgba(234,179,8,0.35)); }
        }
        @keyframes pulse-zoom {
          0%, 60%, 100% { transform: scale(1); }
          66% { transform: scale(1.06); }
          72% { transform: scale(1.02); }
        }
        .price-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: .45rem .8rem;
          border-radius: 9999px;
          font-weight: 800;
          font-size: 1rem;
          line-height: 1;
          /* slight gold look but still neutral on colored cards */
          background: linear-gradient(90deg,#FFF7CC 0%,#FFE08A 100%);
          color: #1A1A1A;
          box-shadow: 0 6px 18px -10px rgba(234,179,8,.45), inset 0 0 0 1px rgba(234,179,8,.35);
          animation: gold-glow 4.6s ease-in-out infinite, pulse-zoom 4.6s ease-in-out infinite;
        }
        .price-chip.delay-1 { animation-delay: .6s, .6s; }
        .price-chip.delay-2 { animation-delay: 1.2s, 1.2s; }

        .arrow-glow { animation: gold-glow 4.6s ease-in-out infinite; }

        /* Card hover/tap zoom (kept) */
        .card-zoom {
          transition: transform .25s ease, box-shadow .25s ease;
          will-change: transform;
        }
        .card-zoom:hover,
        .card-zoom:focus-within {
          transform: scale(1.02);
          box-shadow: 0 20px 46px -20px rgba(0,0,0,.28);
        }
        @media (hover: none) {
          .card-zoom:active { transform: scale(1.02); }
        }

        /* Buttons single-line */
        .btn-solid { display:inline-flex; align-items:center; justify-content:center; gap:.5rem; white-space:nowrap; text-wrap:nowrap; }

        /* Steps & perks flair (kept) */
        .step-card {
          position: relative;
          transition: transform .25s ease, box-shadow .25s ease, background-color .25s ease;
          will-change: transform;
        }
        .step-card:hover, .step-card:focus-within {
          transform: translateY(-6px);
          box-shadow: 0 18px 40px -18px rgba(0,0,0,.25);
          background-color: rgba(255,255,255,.96);
        }
        .spark:before, .spark:after {
          content: '';
          position: absolute;
          border-radius: 9999px;
          background: radial-gradient(closest-side, rgba(255,215,99,.55), rgba(255,215,99,0));
          pointer-events: none;
        }
        .spark:before { width: 22px; height: 22px; top: -8px; right: -8px; }
        .spark:after  { width: 14px; height: 14px; bottom: -6px; left: -6px; }
        .connector {
          position: absolute; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, rgba(0,0,0,.06), rgba(0,0,0,.12), rgba(0,0,0,.06));
        }
        .perk-badge {
          width: 38px; height: 38px; border-radius: 10px;
          display: inline-flex; align-items: center; justify-content: center;
          font-size: 18px;
        }

        /* Image tile hover (kept) */
        .tile:hover img { transform: scale(1.05); }
        .tile img { transition: transform .3s ease; }

        @media (prefers-reduced-motion: reduce) {
          .price-chip, .arrow-glow { animation: none !important; }
          .card-zoom, .tile img, .step-card { transition: none !important; }
        }
      `}</style>

      {/* Banner (unchanged, keeps your vibe) */}
      <section className="relative overflow-hidden ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-28 sm:pb-20 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            className="text-[clamp(26px,6vw,48px)] font-extrabold text-fregcy-h1"
          >
            Never Run Out of Energy Again 🔋
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            className="mt-3 text-[clamp(14px,2.5vw,18px)] text-fregcy-body"
          >
            Fregcy Salad Subscriptions: Healthy Fuel, on Autopilot
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.6 }}
            className="mt-4 text-[15px] sm:text-[16px] text-fregcy-body max-w-3xl mx-auto"
          >
            No more meal planning. No more energy crashes. Just one decision that keeps giving, daily.
          </motion.p>
        </div>
      </section>
      {/* Plans */}
    <section className="py-10 sm:py-14">
  <div className="max-w-6xl mx-auto px-4 sm:px-6">
    <motion.h2
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.4 }}
      className="text-center text-[clamp(20px,4.5vw,34px)] font-bold text-brand-h1"
    >
      Choose Your Energy Plan ⚡
    </motion.h2>

    <div className="mt-7 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
      {/* Weekend Warrior (GREEN) */}
      <motion.article
        variants={edgeIn("left", 0.06)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.35 }}
        className="plan-card p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#e9fdf1] via-[#ccf4da] to-[#b8f0c9] shadow-[0_10px_30px_-8px_rgba(33,140,84,0.35)] hover:shadow-[0_16px_40px_-8px_rgba(33,140,84,0.45)] transition-all duration-300"
      >
        <div className="plan-body">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-[#218c54]" />
            <h3 className="text-xl font-bold text-[#195c39]">The Weekend Warrior</h3>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-[#195c39] font-semibold">₹799/month</span>
            <span className="price-chip">
              ₹53 per salad
            </span>
          </div>

          <p className="mt-2 text-[14px] text-[#234d36]">2 salads every weekend</p>
          <p className="mt-1 text-[13px] text-[#295940]">
            Perfect for dabblers, gym lovers, or health newbies starting small.
          </p>
          <ul className="mt-4 space-y-2 text-[13px] text-[#234d36]">
            <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-[#218c54]" /> 14–15 salads/month</li>
            <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-[#218c54]" /> Save ₹47 each</li>
          </ul>
        </div>

        <div className="plan-cta mt-4">
          <ShineButton className="btn-solid w-full px-4 py-2.5 sm:px-5 sm:py-3 bg-[#218c54] hover:bg-[#1a6f43] text-white rounded-xl shadow-md transition-all duration-300">
            Start Small, Win Big
            <span className="arrow-glow inline-flex ml-2">
              <ArrowRight className="w-4 h-4" color="#ffcf40" />
            </span>
          </ShineButton>
        </div>
      </motion.article>

      {/* Daily Hero (SAFFRON) */}
      <motion.article
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.35 }}
        className="plan-card p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#fff2e1] via-[#ffe4bd] to-[#ffd89a] shadow-[0_10px_30px_-8px_rgba(255,165,0,0.35)] hover:shadow-[0_16px_40px_-8px_rgba(255,165,0,0.45)] transition-all duration-300"
      >
        <div className="plan-body">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#d67f00]" />
            <h3 className="text-xl font-bold text-[#b86000]">The Daily Hero</h3>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-[#b86000] font-semibold">₹1,299/month</span>
            <span className="price-chip">
            
              ₹58 per salad
            </span>
          </div>

          <p className="mt-2 text-[14px] text-[#854f00]">1 salad every weekday</p>
          <p className="mt-1 text-[13px] text-[#704200]">
            For busy office pros who want energy without the mental load.
          </p>
          <ul className="mt-4 space-y-2 text-[13px] text-[#703d00]">
            <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-[#d67f00]" /> 20–22 salads/month</li>
            <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-[#d67f00]" /> Save ₹52 daily</li>
            <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-[#d67f00]" /> Skip days freely + customizations</li>
            <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-[#d67f00]" /> Early access to new recipes</li>
          </ul>
        </div>

        <div className="plan-cta mt-4">
          <ShineButton className="btn-solid w-full px-4 py-2.5 sm:px-5 sm:py-3 bg-   hover:bg-[#b46000] text-white rounded-xl shadow-md transition-all duration-300">
            Be My Daily Hero
            <span className="arrow-glow inline-flex ml-2">
              <ArrowRight className="w-4 h-4" color="#fff7cc" />
            </span>
          </ShineButton>
        </div>
      </motion.article>

      {/* Power Player (TURMERIC) */}
      <motion.article
        variants={edgeIn("right", 0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.35 }}
        className="plan-card p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#fff3cc] via-[#ffe899] to-[#ffdd66] shadow-[0_10px_30px_-8px_rgba(255,215,0,0.35)] hover:shadow-[0_16px_40px_-8px_rgba(255,215,0,0.45)] transition-all duration-300"
      >
        <div className="plan-body">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-[#b48b00]" />
            <h3 className="text-xl font-bold text-[#856200]">The Power Player</h3>
          </div>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-[#856200] font-semibold">₹2,499/month</span>
            <span className="price-chip">
            
              ₹63 per salad
            </span>
          </div>

          <p className="mt-2 text-[14px] text-[#5c4a00]">2 salads every weekday</p>
          <p className="mt-1 text-[13px] text-[#6e5500]">
            For high-performers who eat clean and high protein with intensity.
          </p>
          <ul className="mt-4 space-y-2 text-[13px] text-[#6e5500]">
            <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-[#b48b00]" /> 40–42 salads/month</li>
            <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-[#b48b00]" /> Save ₹57 daily</li>
            <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-[#b48b00]" /> Ideal for lunch + snack</li>
            <li className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 text-[#b48b00]" /> Priority pickup perks</li>
          </ul>
        </div>

        <div className="plan-cta mt-4">
          <ShineButton className="btn-solid w-full px-4 py-2.5 sm:px-5 sm:py-3 bg-[#b48b00] hover:bg-[#8f7000] text-white rounded-xl shadow-md transition-all duration-300">
            Fuel My Power Mode
            <span className="arrow-glow inline-flex ml-2">
              <ArrowRight className="w-4 h-4" color="#fff8e1" />
            </span>
          </ShineButton>
        </div>
      </motion.article>
    </div>
  </div>
</section>


      {/* How It Works */}
      <section className="py-10 sm:py-14 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.45 }}
            className="text-center text-[clamp(18px,4vw,28px)] font-bold text-brand-h1"
          >
            ⚙️ How It Works (It’s That Easy)
          </motion.h3>

          <div className="relative mt-8 grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 connector" />
            <motion.div variants={edgeIn("left", 0.02)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.35 }} className="step-card spark rounded-xl bg-white border border-black/5 p-4 shadow-sm">
              <p className="text-[15px] font-semibold text-brand-h1">Pick Your Plan</p>
              <p className="text-[13px] text-fregcy-body mt-1">Based on your lifestyle & hunger.</p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.35 }} className="step-card spark rounded-xl bg-white border border-black/5 p-4 shadow-sm">
              <p className="text-[15px] font-semibold text-brand-h1">Tell Us What You Like</p>
              <p className="text-[13px] text-fregcy-body mt-1">Preferences, allergies, favorites.</p>
            </motion.div>
            <motion.div variants={edgeIn("right", 0.02)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.35 }} className="step-card spark rounded-xl bg-white border border-black/5 p-4 shadow-sm">
              <p className="text-[15px] font-semibold text-brand-h1">Get Daily Pickup Alerts</p>
              <p className="text-[13px] text-fregcy-body mt-1">“Your salad is ready at Machine #3.”</p>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.35 }} className="step-card spark rounded-xl bg-white border border-black/5 p-4 shadow-sm">
              <p className="text-[15px] font-semibold text-brand-h1">Grab & Go</p>
              <p className="text-[13px] text-fregcy-body mt-1">Scan, collect, and eat.</p>
            </motion.div>
            <motion.div variants={edgeIn("left", 0.03)} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.35 }} className="step-card spark rounded-xl bg-white border border-black/5 p-4 shadow-sm">
              <p className="text-[15px] font-semibold text-brand-h1">Feel the Upgrade</p>
              <p className="text-[13px] text-fregcy-body mt-1">From energy to digestion to mood.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Subscriber Perks */}
      <section className="py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.45 }}
            className="text-center text-[clamp(18px,4vw,28px)] font-bold text-brand-h1"
          >
            🎁 Subscriber Perks
          </motion.h3>

          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🚀", title: "Early access to new salads", hue: "#D8F3DC" },
              { icon: "🎨", title: "Free customizations", hue: "#FFE0D1" },
              { icon: "📆", title: "Skip or pause anytime", hue: "#EDE9FE" },
              { icon: "🎉", title: "Free birthday salad", hue: "#FDE68A" },
              { icon: "📊", title: "Monthly wellness summary", hue: "#E0E7FF" },
              { icon: "💬", title: "Real-time WhatsApp community support", hue: "#DCFCE7" },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.35 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="step-card rounded-xl bg-white border border-black/5 p-4 shadow-sm flex items-start gap-3"
              >
                <span className="perk-badge" style={{ backgroundColor: p.hue }} aria-hidden title={p.title}>
                  {p.icon}
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-brand-h1">{p.title}</p>
                  <p className="text-[13px] text-fregcy-body mt-1">Little upgrades that add up — automatically.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Machine Locations */}
      <section className="py-10 sm:py-14 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="text-[clamp(18px,4vw,28px)] font-bold text-center text-brand-h1"
          >
            Machine Locations (Beta Testing)
          </motion.h3>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <motion.a
              variants={edgeIn("left", 0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.35 }}
              href="https://maps.google.com?q=TCS+Bangalore+Building+3"
              target="_blank"
              rel="noopener noreferrer"
              className="tile relative block rounded-xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop"
                alt="TCS Bangalore (Building 3)"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-full bg-white/90 text-sm font-semibold">
                  TCS Bangalore (Building 3)
                </span>
              </div>
            </motion.a>

            <motion.a
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.35 }}
              href="https://maps.google.com?q=IIM+Bangalore"
              target="_blank"
              rel="noopener noreferrer"
              className="tile relative block rounded-xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1509223183745-34c53b3a1de1?q=80&w=800&auto=format&fit=crop"
                alt="IIM Bangalore"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-full bg-white/90 text-sm font-semibold">
                  IIM Bangalore
                </span>
              </div>
            </motion.a>

            <motion.a
              variants={edgeIn("right", 0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.35 }}
              href="https://maps.google.com?q=Anytime+Fitness+Koramangala"
              target="_blank"
              rel="noopener noreferrer"
              className="tile relative block rounded-xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop"
                alt="Anytime Fitness, Koramangala"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/35" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-full bg-white/90 text-sm font-semibold">
                  Anytime Fitness, Koramangala
                </span>
              </div>
            </motion.a>
          </div>

          <p className="mt-3 text-[13px] text-fregcy-body-light text-center">
            Next Launch: Q1 2026 – 25+ new locations
          </p>
        </div>
      </section>

      {/* FAQ + Final CTA */}
      <section className="py-10 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="text-center text-[clamp(18px,4vw,28px)] font-bold text-brand-h1"
          >
            Frequently Asked Questions
          </motion.h3>

          <div className="mt-6 space-y-4">
            {[
              { q: "Can I change my subscription anytime?", a: "Yes. Upgrade, downgrade, pause, or cancel anytime through the app." },
              { q: "What if I'm traveling?", a: "Pause your subscription with one tap. Resume when you're back." },
              { q: "Do you deliver?", a: "Currently pickup only, but delivery is coming to select areas soon." },
              { q: "What about allergies?", a: "Tell us your restrictions. We'll customize every salad accordingly." },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.35 }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="rounded-2xl bg-white border border-black/5 p-4 shadow-sm"
              >
                <p className="font-semibold text-brand-h1">{item.q}</p>
                <p className="text-[14px] text-fregcy-body mt-1">{item.a}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <ShineButton className="btn-solid inline-flex items-center gap-2 bg-fregcy-primary-green hover:bg-fregcy-green-light text-white px-6 py-3">
              Start Your Subscription Today
              <span className="arrow-glow inline-flex"><ArrowRight className="w-4 h-4" color="var(--turmeric-dark)" /></span>
            </ShineButton>
            <p className="mt-3 text-[13px] text-fregcy-body-light">
              The best time to start eating better was yesterday. The second best time is right now.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscription;
