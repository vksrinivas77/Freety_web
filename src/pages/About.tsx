// AboutFregcy.tsx
// 🌿 Cinematic About Page with Framer Motion + TailwindCSS
// Features:
// - Eucalyptus mist background
// - Parallax + staggered animations
// - Centralized image control
// - Fully responsive, balanced layout

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ShineButton from "../components/ShineButton";

/* ==========================
   🌿 CONFIG (easy edit zone)
========================== */
const IMAGES = {
  banner: "/assets/banner.png",
  about_us: "/assets/about_us.jpg",
  abut: "/assets/abut.png",
  img1: "/assets/10014.jpg",
  img2: "/assets/10015.jpg",
};

const eucalyptusMist = "#E8F3EF";
const softDarkGreen = "#0F5132";

/* ==========================
   ⚙️ ANIMATION VARIANTS
========================== */
const containerStagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const floatSoft = {
  animate: {
    y: [0, -8, 0],
    rotate: [0, 1.5, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};

/* ==========================
   🎞️ PARALLAX IMAGE WRAPPER
========================== */
const ParallaxImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.03, 1]);

  return (
    <div ref={ref} className="relative overflow-hidden rounded-2xl shadow-xl aspect-[16/10]">
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{ y, scale }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/0" />
    </div>
  );
};

/* ==========================
   📖 SECTION BLOCK
========================== */
type SectionProps = {
  id: string;
  heading: string;
  paragraphs?: string[];
  items?: string[];
  quoteLines?: string[];
  imageUrl: string;
  imageAlt: string;
  flip?: boolean;
  italic?: boolean;
};

const SectionBlock: React.FC<SectionProps> = ({
  id,
  heading,
  paragraphs,
  items,
  quoteLines,
  imageUrl,
  imageAlt,
  flip = false,
  italic = false,
}) => {
  return (
    <section
      id={id}
      className="relative py-16 md:py-20 bg-eucalyptus-mist overflow-hidden"
      style={{ backgroundColor: eucalyptusMist }}
    >
      {/* Floating background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -top-10 -right-8 w-40 h-40 md:w-64 md:h-64 rounded-full bg-emerald-200/25 blur-3xl"
          variants={floatSoft}
          animate="animate"
        />
        <motion.div
          className="absolute -bottom-12 -left-10 w-48 h-48 md:w-72 md:h-72 rounded-full bg-lime-200/25 blur-3xl"
          variants={floatSoft}
          animate="animate"
        />
      </div>

      <motion.div
        variants={containerStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="relative container mx-auto px-4 max-w-6xl"
      >
        <div
          className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
            flip ? "md:flex-row-reverse" : ""
          }`}
        >
          <motion.div variants={fadeUp} className={flip ? "order-2 md:order-1" : "order-1"}>
            <h2
              className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight"
              style={{ color: softDarkGreen }}
            >
              {heading}
            </h2>
            <div className="mt-5 space-y-4">
              {paragraphs?.map((p, idx) => (
                <motion.p
                  key={idx}
                  variants={fadeUp}
                  className={`text-gray-800 text-lg leading-relaxed ${
                    italic ? "italic font-serif" : ""
                  }`}
                >
                  {p}
                </motion.p>
              ))}
              {items && (
                <ul className="mt-2 space-y-2">
                  {items.map((li, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-800">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span>{li}</span>
                    </li>
                  ))}
                </ul>
              )}
              {quoteLines && (
                <blockquote className="mt-5 border-l-4 border-emerald-400 pl-4 italic font-serif text-gray-900/90 text-xl">
                  {quoteLines.map((q, i) => (
                    <p key={i} className="mb-1">
                      {q}
                    </p>
                  ))}
                </blockquote>
              )}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className={flip ? "order-1 md:order-2" : "order-2 md:order-2"}
          >
            <ParallaxImage src={imageUrl} alt={imageAlt} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

/* ==========================
   🌿 CTA SECTION
========================== */
const CTASection: React.FC = () => (
  <section className="relative py-16 md:py-20 bg-gradient-to-b from-emerald-100/70 to-white">
    <div className="container mx-auto px-4 max-w-5xl text-center">
      <motion.div variants={containerStagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <motion.h3
          variants={fadeUp}
          className="font-serif text-3xl md:text-4xl"
          style={{ color: softDarkGreen }}
        >
          Join the Legacy
        </motion.h3>
        <motion.p variants={fadeUp} className="mt-4 text-lg text-gray-700 leading-relaxed">
          This stopped being our story when you started reading. Every person choosing Fregcy over junk food casts a vote for a world where convenience doesn't mean compromise.
        </motion.p>
        <motion.p variants={fadeUp} className="mt-3 text-lg text-gray-700">
          Ready to stop settling? Welcome to Fregcy. Where self-care isn't extra work — it's the foundation.
        </motion.p>
        <motion.div variants={fadeUp} className="mt-8 flex justify-center">
          <ShineButton className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg shadow-md transition">
            Start Your Fregcy Journey
          </ShineButton>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

/* ==========================
   🌱 HERO SECTION
========================== */
const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const bgOpacity = useTransform(scrollYProgress, [0, 0.2], [0.3, 0.7]);

  return (
    <header
      className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: eucalyptusMist }}
    >
      <motion.img
        src={IMAGES.banner}
        alt="Fregcy hero"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"
        style={{ opacity: bgOpacity }}
      />
      <div className="relative z-10 text-center px-4 max-w-3xl">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-serif text-4xl md:text-6xl text-[#E8F3EF] leading-tight"
        >
          The Night That Changed Everything
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-3 text-emerald-100 text-xl italic font-serif"
        >
          How Being Really Hungry Started Our Company
        </motion.p>
      </div>
    </header>
  );
};

/* ==========================
   🌿 MAIN ABOUT COMPONENT
========================== */
const AboutFregcy: React.FC = () => (
  <main className="font-sans overflow-x-hidden" style={{ backgroundColor: eucalyptusMist }}>
    <Hero />

    <SectionBlock
      id="start"
      heading="It All Began With a Growling Stomach"
      paragraphs={[
        "Picture this: 9:47 PM on a Thursday night. Jay just crushed his workout at the office gym, feeling like he could conquer the world.",
        'For the third time this month, he had promised himself: "This is the week I finally eat right."',
        "But standing in that parking lot, reality slapped him in the face. His options?",
      ]}
      items={[
        "Pizza that looked as tired as he felt",
        "A protein bar that tasted like sweetened cardboard",
        "Greasy dine-out fast food that would undo everything he just worked for",
        "Sound familiar?",
        "This wasn't just Jay's nightmare — it was Priya's, Balaji's, and ours.",
      ]}
      imageAlt="Late-night parking lot choices"
      imageUrl={IMAGES.about_us}
    />

    <SectionBlock
      id="failure"
      heading="How Failure Made Us Unstoppable"
      paragraphs={[
        "Let's be honest – we failed spectacularly.",
        "Our first vending machine? Disaster. Our prototype app? Crashed daily. Our bank account? Empty.",
        "Everyone who heard our idea was fascinated, then destroyed us with reality checks.",
      ]}
      imageAlt="Symbolic glitching prototype"
      imageUrl={IMAGES.abut}
      flip
      italic
    />

    <SectionBlock
      id="lessons"
      heading="What Failure Actually Taught Us"
      paragraphs={[
        "Every disaster was education.",
        "Wilted salads taught us food preservation mastery. App crashes revealed what people truly needed.",
        'Brutal feedback forced the only question that mattered: "Are we making this easier for someone who just wants to eat well?"',
      ]}
      imageAlt="Team iterating late night"
      imageUrl={IMAGES.img1}
    />

    <SectionBlock
      id="mission"
      heading="Our Impossible Mission"
      paragraphs={[
        "Make healthy eating boringly normal.",
        "No more Sunday meal prep slavery. No more nutrition degree requirements.",
        "Our vision: A Fregcy within arm's reach of every office, gym, college, and train station in India.",
      ]}
      imageAlt="Healthy salad transformation"
      imageUrl={IMAGES.img2}
      flip
    />

    <SectionBlock
      id="success"
      heading="How We Measure Real Success"
      paragraphs={[
        "We don't count machines or revenue. We count transformations.",
        "Every time someone chooses Fregcy over fast food, they’re not making a purchase.",
        "They're making a statement:",
      ]}
      quoteLines={[
        '"I deserve better. My goals matter. My health is worth the extra 5 minutes."',
      ]}
      imageAlt="People choosing health"
      imageUrl={IMAGES.about_us}
    />

    <SectionBlock
      id="promises"
      heading="Our Unbreakable Promises"
      paragraphs={[
        "We promise you'll never choose between fast and healthy again.",
        "We promise transparency — what you see is what you get.",
        'We promise to keep redefining what "fast food" means.',
        "Because you deserve fuel that powers your dreams, not just fills the void.",
      ]}
      imageAlt="Transparent ingredients promise"
      imageUrl={IMAGES.abut}
      flip
    />

    <CTASection />

    <footer className="bg-white py-10">
      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Fregcy • About Us
      </div>
    </footer>
  </main>
);

export default AboutFregcy;
