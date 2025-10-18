import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ShineButton from "../components/ShineButton";

/** ===== Framer Motion Variants (typed, TS-safe) ===== */
const container: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.12 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: "easeInOut" } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

const floatY: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120, damping: 18 } },
};

const hoverLift: Variants = {
  rest: { y: 0, scale: 1, boxShadow: "0 10px 26px rgba(28,58,25,0.10)" },
  hover: { y: -6, scale: 1.01, boxShadow: "0 18px 44px rgba(28,58,25,0.16)" },
};

const About = () => {
  return (
    <div className="bg-fregcy-cream-white text-fregcy-body font-sans">
      {/* ====== HERO: OUR STORY (palette gradient + image) ====== */}
      <section className="relative overflow-hidden px-6 md:px-12 lg:px-16 py-20 md:py-24">
        {/* soft ambient using your palette */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(600px 280px at 10% 10%, rgba(45,106,79,.08), transparent 60%), radial-gradient(600px 260px at 90% 80%, rgba(255,107,53,.10), transparent 60%), linear-gradient(180deg,#FFFCF6 0%,#FFF8EE 60%,#FFF4E4 100%)",
          }}
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="md:col-span-7"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fregcy-primary-green via-fregcy-earth-sage to-fregcy-saffron"
            >
              Our Story
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg md:text-xl text-fregcy-body-light max-w-2xl"
            >
              Fregacy began with a stubborn belief: creators shouldn’t wrestle
              with tools to make magic. We keep the tech light, so your ideas
              stay heavy-hitting.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="mt-8 h-[3px] w-28 rounded-full bg-gradient-to-r from-fregcy-primary-green via-fregcy-earth-sage to-fregcy-saffron"
            />
          </motion.div>

          {/* hero image panel */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            className="md:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden border border-fregcy-soft-beige shadow-[0_18px_48px_-18px_rgba(28,58,25,.18)]">
              <img
                src="/assets/about_us.jpg"
                alt="Creating with flow"
                className="w-full h-72 md:h-[22rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
               
                <span className="px-3 py-1.5 rounded-full text-xs font-semibold text-[#9A3E1B] bg-[#FFF1E6] border border-[#FFE1CD]">
                  No fluff — just flow
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== HOW FREGACY STARTED ====== */}
      <section className="px-6 md:px-12 lg:px-16 py-14">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-start"
        >
          <motion.div
            variants={scaleIn}
            className="md:col-span-7 bg-white/80 backdrop-blur-md border border-fregcy-soft-beige p-8 rounded-2xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-fregcy-primary-green">
              How Fregacy Started
            </h2>
            <p className="mt-4 text-fregcy-body-light leading-relaxed">
              Fregacy was born out of a simple idea — to create a platform that
              makes content creation easy, enjoyable, and accessible for
              everyone. We noticed how complicated and overwhelming existing
              tools were for many creators. So, we decided to change that.
            </p>
            <p className="mt-4 text-fregcy-body-light leading-relaxed">
              From brainstorming late nights to building prototypes, our journey
              has always been driven by one mission: empower creators to focus
              on their creativity while we take care of the technology.
            </p>
            <p className="mt-4 text-fregcy-body-light leading-relaxed">
              Today, Fregacy is more than just a tool — it’s a growing community
              of creators, innovators, and dreamers.
            </p>
          </motion.div>

          {/* 🔁 REPLACED the old “Built for Creators” white card with a clean image feature panel */}
          <motion.div
            variants={floatY}
            className="md:col-span-5"
          >
            <div className="relative rounded-2xl overflow-hidden border border-fregcy-soft-beige bg-gradient-to-br from-white/80 to-fregcy-soft-beige/40 shadow-[0_18px_44px_-18px_rgba(28,58,25,.16)]">
               <img
          src="/assets/abut.png"
          alt="Fregacy team collaborating"
          className="w-full h-[20px] sm:h-[320px] md:h-[380px] object-cover transition-transform duration-700 hover:scale-[1.03]"
        />

              <div className="absolute inset-0 bg-gradient-to-t from-[#FFFCF6]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
                {["Zero-Lag", "Instant Preview", "Creator-First"].map((k) => (
                  <motion.div
                    key={k}
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                    variants={hoverLift}
                    className="rounded-xl border border-fregcy-soft-beige bg-white px-3 py-3 text-center text-sm font-medium"
                  >
                    {k}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ====== VISION & MISSION ====== */}
      <section className="px-6 md:px-12 lg:px-16 py-16 bg-gradient-to-r from-fregcy-soft-beige/40 to-fregcy-cream-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.div variants={fadeIn} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-fregcy-primary-green">
                Vision & Mission
              </h2>
              <p className="mt-3 text-fregcy-body-light">Simple words. Serious intent.</p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div
                variants={fadeUp}
                className="bg-white/85 backdrop-blur-md border border-fregcy-soft-beige p-7 rounded-2xl"
              >
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="text-xl font-semibold text-fregcy-primary-green">Our Vision</h3>
                <p className="text-fregcy-body-light mt-3">
                  To become the go-to platform for every creator — whether
                  beginner or pro. We simplify editing and storytelling so ideas
                  come to life without limits.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="bg-white/85 backdrop-blur-md border border-fregcy-soft-beige p-7 rounded-2xl"
              >
                <div className="text-4xl mb-3">⚡️</div>
                <h3 className="text-xl font-semibold text-fregcy-primary-green">Our Mission</h3>
                <p className="text-fregcy-body-light mt-3">
                  To break down the barriers of complex tools and deliver an
                  intuitive, smooth, powerful experience that fuels creativity
                  and inspires millions.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== MEET THE TEAM ====== */}
      <section className="px-6 md:px-12 lg:px-16 py-20 max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-fregcy-primary-green">Meet the Team</h2>
          <p className="text-lg text-fregcy-body-light mt-4 max-w-2xl mx-auto">
            We are a small but passionate crew of designers and engineers,
            dedicated to making creation feel effortless.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Jane Doe",
              role: "CEO & Co-founder",
              img: "/assets/member1.jpg",
            },
            {
              name: "John Smith",
              role: "CTO & Co-founder",
              img: "/assets/member2.jpg",
            },
            {
              name: "Emily Chen",
              role: "Head of Product",
              img: "/assets/member2.jpg",
            },
          ].map((member) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ y: -6, rotate: 0.2 }}
              transition={{ type: "spring", stiffness: 120, damping: 16 }}
              className="text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-fregcy-soft-beige shadow-[0_16px_36px_-16px_rgba(28,58,25,.24)]"
              />
              <h3 className="text-xl font-semibold text-fregcy-primary-green mt-4">{member.name}</h3>
              <p className="text-fregcy-body-light text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ====== JOURNEY CTA ====== */}
      <section className="text-center px-6 py-20 bg-gradient-to-r from-fregcy-primary-green/5 to-fregcy-saffron/5">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-fregcy-primary-green"
        >
          The Journey is Just Beginning
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 text-lg text-fregcy-body-light max-w-2xl mx-auto"
        >
          Join us in shaping the future of content creation. Together, we can
          build something truly remarkable.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <ShineButton variant="primary" className="flex items-center gap-2 px-8 py-4 text-lg bg-cta-gradient text-white rounded-xl">
            Get Started <ArrowRight className="w-5 h-5" />
          </ShineButton>
        </motion.div>
      </section>

      {/* ====== Footer ====== */}
      <footer className="py-8 text-center text-sm text-fregcy-body-light">© {new Date().getFullYear()} Fregacy</footer>
    </div>
  );
};

export default About;
