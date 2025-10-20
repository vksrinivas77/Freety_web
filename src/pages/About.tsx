import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShineButton from "../components/ShineButton";

/* ==========================
   🌿 CONFIG (images)
========================== */
const IMAGES = {
  banner: "/assets/Finallogo.png",
  about_us: "/assets/about_us.jpg",
  abut: "/assets/abut.png",
  img1: "/assets/10014.jpg",
  img2: "/assets/10015.jpg",
};

/* ==========================
   📚 CONTENT
========================== */
type Block = {
  id: string;
  heading: string;
  color: string;
  headingColor: string;
  body: string;
  imageUrl: string;
};

const BLOCKS: Block[] = [
  {
    id: "b1",
    heading: "It All Began With a Growling Stomach",
    color: "from-emerald-50 to-green-100",
    headingColor: "#166534",
    imageUrl: IMAGES.about_us,
    body: `Picture this: 9:47 PM on a Thursday night.
Jay just crushed his workout at the office gym. Endorphins pumping, sweat still cooling, feeling like he could conquer the world.
For the third time this month, he had promised himself: "This is the week I finally eat right."
But standing in that parking lot, reality slapped him in the face.
His options?
Pizza that looked as tired as he felt
A protein bar that tasted like sweetened cardboard
Greasy dineout fastfood that would undo everything he just worked for
Sound familiar?
This wasn't just Jay's nightmare. It was Priya's reality when she worked past 10 PM again. It was Balaji's frustration when the office cafeteria shut down at 5 PM sharp.
It was our story. Every. Single. Day.
The same cycle of good intentions meeting impossible choices.`,
  },
  {
    id: "b2",
    heading: "How Failure Made Us Unstoppable",
    color: "from-orange-50 to-yellow-100",
    headingColor: "#92400e",
    imageUrl: IMAGES.abut,
    body: `Let's be honest – we failed spectacularly.
Our first vending machine? Disaster.
Our prototype app? Crashed daily.
Our bank account? Empty.
Everyone who heard our idea was fascinated... then destroyed us with reality checks:
"Food safety regulations?"
"Keeping produce fresh?"
"Who maintains the machines?"`,
  },
  {
    id: "b3",
    heading: "What Failure Actually Taught Us",
    color: "from-sky-50 to-indigo-100",
    headingColor: "#1e3a8a",
    imageUrl: IMAGES.img1,
    body: `Every disaster was education:
Wilted salads taught us food preservation mastery.
App crashes revealed what people actually needed.
Brutal feedback forced the only question that mattered:
"Are we making this easier for someone who just wants to eat well?"
Today, every Fregcy salad exists because we failed forward.
Your perfect lunch is built on our painful lessons.`,
  },
  {
    id: "b4",
    heading: "Our Impossible Mission",
    color: "from-pink-50 to-rose-100",
    headingColor: "#9d174d",
    imageUrl: IMAGES.img2,
    body: `Make healthy eating boringly normal.
No more Sunday meal prep slavery.
No more nutrition degree requirements.
No more choosing between fast and good.
Our vision: A Fregcy within arm's reach of every office, gym, college, and train station in India.
Why? To eliminate every excuse between you and who you're becoming.`,
  },
  {
    id: "b5",
    heading: "How We Measure Real Success",
    color: "from-yellow-50 to-amber-100",
    headingColor: "#78350f",
    imageUrl: IMAGES.about_us,
    body: `We don't count machines deployed or revenue generated.
We count people's transformations. Every time someone chooses Fregcy over fast food, they're not making a purchase.
They're making a statement: "I deserve better. My goals matter. My health is worth the extra 5 minutes."`,
  },
  {
    id: "b6",
    heading: "Our Unbreakable Promises",
    color: "from-emerald-50 to-emerald-100",
    headingColor: "#065f46",
    imageUrl: IMAGES.abut,
    body: `We promise you'll never choose between fast and healthy again.
Because that choice shouldn't exist.
We promise complete transparency.
What you see is exactly what you get. No fine print. No hidden ingredients.
We promise to keep redefining what "fast food" means.
Because you deserve fuel that powers your dreams, not just fills the void.`,
  },
];

/* ==========================
   ⚙️ TIMING
========================== */
const CYCLE_MS = 20000;
const FADE_IN_MS = 700;
const FADE_OUT_MS = 500;
const TYPING_MS = CYCLE_MS - FADE_IN_MS - FADE_OUT_MS;

/* ==========================
   ⌨️ TYPING HOOK
========================== */
function useTyping(text: string, durationMs: number, showFull: boolean) {
  const [out, setOut] = useState("");
  useEffect(() => {
    if (!text) return;
    if (showFull) {
      setOut(text);
      return;
    }
    setOut("");
    const len = text.length;
    const speed = Math.max(8, Math.floor(durationMs / Math.max(len, 1)));
    let i = 0;
    const id = window.setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= len) window.clearInterval(id);
    }, speed);
    return () => window.clearInterval(id);
  }, [text, durationMs, showFull]);
  return out;
}

/* ==========================
   🎞️ VARIANTS
========================== */
const blockVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(3px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: FADE_IN_MS / 1000, ease: [0.25, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    filter: "blur(4px)",
    transition: { duration: FADE_OUT_MS / 1000, ease: [0.25, 1, 0.3, 1] },
  },
};

/* ==========================
   🏁 HERO
========================== */
const Hero: React.FC = () => (
  <header className="relative min-h-[55vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
    <motion.img
      src={IMAGES.banner}
      alt="Fregcy banner"
      className="absolute inset-0 w-full h-full object-cover"
      initial={{ scale: 1.08, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
    <div className="relative z-10 text-center px-6">
      <h1 className="font-serif text-3xl md:text-4xl text-[#E8F3EF] font-bold">
        The Night That Changed Everything
      </h1>
      <p className="mt-2 text-emerald-100 italic text-base md:text-lg">
        How Being Really Hungry Started Our Company
      </p>
    </div>
  </header>
);

/* ==========================
   🎬 STORY REEL (enhanced pause + full show)
========================== */
const StoryReel: React.FC = () => {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);

  const current = BLOCKS[idx];
  const flip = idx % 2 === 1;
  const typed = useTyping(current.body, TYPING_MS, showFullText);

  // rotation loop
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIdx((p) => (p + 1) % BLOCKS.length);
      setShowFullText(false);
    }, CYCLE_MS);
    return () => clearInterval(id);
  }, [paused]);

  // pause on click + show full text
  const handlePause = () => {
    setPaused(true);
    setShowFullText(true);
    if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
    pauseTimerRef.current = setTimeout(() => {
      setPaused(false);
      setShowFullText(false);
    }, 4000);
  };

  return (
    <section
      onClick={handlePause}
      className={`relative h-[92vh] md:h-[88vh] flex items-center justify-center overflow-hidden bg-gradient-to-br ${current.color}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current.id}
          variants={blockVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`absolute inset-0 flex flex-col md:flex-row ${
            flip ? "md:flex-row-reverse" : ""
          } items-center justify-center gap-8 md:gap-14 px-6 md:px-16`}
        >
          {/* TEXT */}
          <div className="flex-1 max-w-xl text-center md:text-left">
            <h2
              className="font-serif text-2xl md:text-3xl font-semibold mb-4"
              style={{ color: current.headingColor }}
            >
              {current.heading}
            </h2>
            <motion.p
              key={typed}
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-gray-800 text-[15px] md:text-base leading-relaxed whitespace-pre-line"
            >
              {typed}
            </motion.p>
          </div>

          {/* IMAGE */}
          <motion.div
            className="flex-1 relative w-full md:w-[78%] h-56 sm:h-64 md:h-[50vh]"
            initial={{ opacity: 0.85, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src={current.imageUrl}
              alt={current.heading}
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Progress bar */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[78%] max-w-3xl h-1.5 bg-black/10 rounded-full overflow-hidden">
        <motion.div
          key={current.id}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: CYCLE_MS / 1000, ease: "linear" }}
          className="h-full bg-emerald-600"
        />
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-10 right-6 md:right-10 flex gap-2">
        {BLOCKS.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setIdx(i);
              setShowFullText(true);
              setPaused(true);
              if (pauseTimerRef.current) clearTimeout(pauseTimerRef.current);
              pauseTimerRef.current = setTimeout(() => {
                setPaused(false);
                setShowFullText(false);
              }, 4000);
            }}
            className={`w-2.5 h-2.5 rounded-full transition ${
              i === idx ? "bg-emerald-700 scale-110" : "bg-black/25 hover:bg-emerald-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

/* ==========================
   🌟 CTA
========================== */
const CTASection: React.FC = () => (
  <section className="relative py-16 md:py-20 bg-gradient-to-b from-emerald-100/70 to-white text-center">
    <div className="max-w-3xl mx-auto px-6">
      <h3 className="font-serif text-2xl md:text-3xl font-semibold text-emerald-900">
        Join the Legacy
      </h3>
      <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
        This stopped being our story when you started reading. Every person choosing
        Fregcy over junk food casts a vote for a world where convenience doesn't mean
        compromise.
      </p>
      <p className="mt-3 text-base md:text-lg text-gray-700 leading-relaxed">
        Ready to stop settling? Welcome to Fregcy — where self-care isn't extra work.
        It's the foundation.
      </p>
      <div className="mt-8 flex justify-center">
        <ShineButton className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl shadow-lg text-base font-semibold transition">
          Start Your Fregcy Journey
        </ShineButton>
      </div>
    </div>
  </section>
);

/* ==========================
   🧠 MAIN
========================== */
const AboutFregcy: React.FC = () => (
  <main className="font-sans overflow-hidden bg-[#E8F3EF]">
    <Hero />
    <StoryReel />
    <CTASection />
    <footer className="bg-white py-8">
      <div className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Fregcy • About Us
      </div>
    </footer>
  </main>
);

export default AboutFregcy;
