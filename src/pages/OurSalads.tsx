import React, { useCallback, useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShineButton from "../components/ShineButton";
import { Plus } from "lucide-react";

// Optional tiny SVG data-URI for subtle noise texture
const NOISE_BG =
  "radial-gradient(1200px 600px at 50% -10%, #eef7f1 0%, rgba(255,255,255,0) 60%), radial-gradient(800px 500px at 120% 10%, #fff1ea 0%, rgba(255,255,255,0) 60%), radial-gradient(900px 500px at -20% 20%, #ede9fe 0%, rgba(255,255,255,0) 55%)";

interface Salad {
  id: number;
  name: string;
  price: number;
  description: string;
  benefits: string[];
  ingredients: string;
  nutrition: string;
  callout: string;
  image: string;
  calories: number;
  isVeg: boolean;
  protein: string;
  gradientFrom: string;
  gradientTo: string;
  iconHex: string;
  priceHex: string;
}

const salads: Salad[] = [
  {
    id: 1,
    name: "Tangy Veggie Delight",
    price: 120,
    description:
      "Hydrating. Immunity-boosting. Mood-lifting. A zesty blend of raw mango, spinach, and juicy pomegranate that wakes up your senses and supports your immunity.",
    benefits: [
      "Fights fatigue & inflammation",
      "Keeps you cool, light & energized",
      "Perfect for mid-day slumps or summer heat",
    ],
    ingredients:
      "Spinach, raw mango, pomegranate, cucumber, roasted peanuts, lemon juice, coconut oil",
    nutrition: "~200 kcal | Vegan | Gluten-Free",
    callout: "Your immunity’s new best friend in a bowl",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    calories: 200,
    isVeg: true,
    protein: "8g",
    gradientFrom: "#7FB069",
    gradientTo: "#B7E4C7",
    iconHex: "#7FB069",
    priceHex: "#D8F3DC",
  },
  {
    id: 2,
    name: "Protein Blast: Chickpeas + Paneer",
    price: 150,
    description:
      "Power-packed. Satisfying. Surprisingly addictive. Crush cravings with paneer, sprouted chickpeas, and sunflower seeds — the perfect post-gym or late-work fuel.",
    benefits: [
      "20g+ clean protein for lean muscle",
      "Keeps you full without the crash",
      "Balanced with smart fats & fiber",
    ],
    ingredients:
      "Paneer, sprouted chickpeas, sweet corn, lettuce, seeds, lemon-pepper dressing",
    nutrition: "~330 kcal | Vegetarian | Gluten-Free",
    callout: "Your Protein Fix in a power bowl",
    image:
      "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    calories: 330,
    isVeg: true,
    protein: "22g",
    gradientFrom: "#FF6B35",
    gradientTo: "#FFB68A",
    iconHex: "#FF6B35",
    priceHex: "#FFE0D1",
  },
  {
    id: 3,
    name: "Rainbow Raw Veggie + Paneer",
    price: 180,
    description:
      "Colorful. Crunchy. Detox-approved. Beets, carrots, and cabbage meet creamy paneer or tofu in a bowl that’s built for your skin, gut, and glow-up.",
    benefits: [
      "Supports natural detox & digestion",
      "Anti-inflammatory ingredients for focus & clarity",
      "Rich in antioxidants, fiber, and micronutrients",
    ],
    ingredients:
      "Beetroot, carrot, cabbage, cucumber, almonds, paneer or tofu, lemon dressing",
    nutrition: "~220 kcal | Vegetarian | Vegan Option",
    callout: "Your Gut Fix in a colourful Bowl",
    image:
      "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    calories: 220,
    isVeg: true,
    protein: "12g",
    gradientFrom: "#A084CA",
    gradientTo: "#D4C5E8",
    iconHex: "#8B5CF6",
    priceHex: "#EDE9FE",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const OurSalads: React.FC = () => {
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);
  const [pressed, setPressed] = useState<number | null>(null);

  const toggleOverlay = useCallback((id: number) => {
    setActiveOverlay((curr) => (curr === id ? null : id));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActiveOverlay(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Hero cycling lines
  const heroLines = useMemo(
    () => [
      { text: "Fuel your day.", color: "text-[#2D6A4F]" },
      { text: "Fix your nutrition.", color: "text-[#FF6B35]" },
      { text: "Fall in love with clean eating.", color: "text-purple-600" },
    ],
    []
  );
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((p) => (p + 1) % heroLines.length),
      3000
    );
    return () => clearInterval(interval);
  }, [heroLines.length]);

  return (
    <div
      className="text-gray-900 min-h-screen"
      style={{
        background: NOISE_BG,
      }}
    >
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#B7E4C7] via-white to-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-28 sm:pb-20 text-center">
          {/* Removed the decorative leaf <img /> */}

          {/* Single-line cycling hero heading, kept slightly lower */}
          <div className="h-14 sm:h-16 flex items-center justify-center mt-8 sm:mt-10">
            <AnimatePresence mode="wait">
              <motion.h1
                key={heroLines[index].text}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`font-semibold ${heroLines[index].color} text-[clamp(22px,4.5vw,40px)] leading-tight`}
              >
                {heroLines[index].text}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
            className="mt-4 sm:mt-5 text-[15px] sm:text-[17px] md:text-[18px] text-gray-700/90 max-w-3xl mx-auto"
          >
            These aren't just salads. They're daily upgrades — built with clean, fresh ingredients, real nutrition, and zero preservatives. Every bowl is your next step toward feeling amazing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-5 text-[#2D6A4F] font-medium text-sm sm:text-base"
          >
            “Eat Clean. Feel Strong. Stay Sharp.”
          </motion.div>
        </div>
      </section>

      {/* SALADS GRID */}
      <section className="py-10 sm:py-14 bg-white/80 backdrop-blur-[1px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {salads.map((s) => {
            const isOpen = activeOverlay === s.id;
            return (
              <motion.article
                key={s.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                className="relative bg-white border border-black/[0.04] rounded-2xl shadow-[0_6px_20px_-8px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.2)] transition-all duration-300 overflow-hidden"
                onMouseEnter={() => setActiveOverlay(s.id)}
                onMouseLeave={() =>
                  setActiveOverlay((curr) => (curr === s.id ? null : curr))
                }
              >
                <div className="relative">
                  <img
                    src={s.image}
                    alt={s.name}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 rounded-t-2xl border-b border-black/5"
                  />
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: `linear-gradient(to top, ${s.gradientFrom}, ${s.gradientTo})`,
                    }}
                  />
                  <div
                    className="absolute top-3 right-3 backdrop-blur px-2.5 py-1 rounded-full font-semibold shadow-sm text-[13px]"
                    style={{ backgroundColor: s.priceHex, color: "#1A1A1A" }}
                  >
                    ₹{s.price}
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[17px] sm:text-[18px] font-bold">{s.name}</h3>
                    <span
                      className="ml-3 hidden sm:inline-block w-3.5 h-3.5 rounded-full"
                      style={{ backgroundColor: s.iconHex }}
                      aria-hidden="true"
                    />
                  </div>

                  <p className="text-[#2D6A4F] italic text-[13px] sm:text-[14px] mt-1">
                    {s.description.split(".")[0]}.
                  </p>

                  <div className="mt-2.5 sm:mt-3 flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-600">
                      {s.calories} kcal • {s.protein}
                    </span>
                  </div>

                  <div className="mt-3.5">
                    <ShineButton
                      className="w-full text-[13px] sm:text-[14px] px-4 py-2.5 bg-[#2D6A4F] hover:bg-[#40916C] text-white rounded-lg shadow-md transition"
                      onClick={() => {
                        setPressed(s.id);
                        setTimeout(() => setPressed(null), 250);
                      }}
                    >
                      <span
                        className={`inline-flex items-center gap-2 ${pressed === s.id ? "opacity-90" : ""
                          }`}
                      >
                        <Plus className="w-4 h-4" />
                        {s.callout}
                      </span>
                    </ShineButton>
                  </div>
                </div>

                {/* Details overlay */}
                <div
                  className={`absolute left-0 right-0 top-0 bottom-[4.25rem] sm:bottom-[4.5rem] bg-white/95 backdrop-blur-md transition-all duration-300 ${isOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  aria-hidden={!isOpen}
                >
                  <div className="h-full overflow-y-auto p-4 sm:p-5">
                    <h4 className="text-[15px] sm:text-[16px] font-semibold mb-2">
                      {s.name}
                    </h4>
                    <p className="text-[13px] sm:text-[14px] text-gray-700 mb-3">
                      {s.description}
                    </p>

                    <div className="mb-3">
                      <p className="font-semibold text-[13px] mb-1">Why You’ll Love It:</p>
                      <ul className="text-[13px] text-gray-700 space-y-1.5 list-disc pl-5">
                        {s.benefits.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-3">
                      <p className="font-semibold text-[13px] mb-1">What’s Inside:</p>
                      <p className="text-[13px] text-gray-700">{s.ingredients}</p>
                    </div>

                    <div className="mb-2">
                      <p className="font-semibold text-[13px] mb-1">Nutrition:</p>
                      <p className="text-[13px] text-gray-700">{s.nutrition}</p>
                    </div>

                    <p className="text-[13px] italic text-[#2D6A4F]">“{s.callout}”</p>
                  </div>
                </div>

                {/* Mobile tap toggle */}
                <button
                  type="button"
                  className="absolute inset-0 sm:hidden"
                  onClick={() => toggleOverlay(s.id)}
                  aria-label={`Toggle details for ${s.name}`}
                />
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* MICRO-TRANSFORMATIONS */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
        className="py-10 sm:py-14 bg-[#F7F7FB]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-center font-bold text-[clamp(20px,4.2vw,34px)]">
            Our Salads Aren’t Just Meals — They’re Micro-Transformations.
          </h2>
          <p className="text-center text-gray-700 mt-2 text-[14px] sm:text-[16px]">
            Each bowl is built to do one thing: Make you feel amazing!!
          </p>

          <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5">
            {[
              {
                title: "Low energy?",
                desc: "We have got Vitamin C & B12-packed greens.",
                icon: "🩺",
                hue: "#D1FAE5",
                stroke: "#065F46",
              },
              {
                title: "Losing muscle tone?",
                desc: "Grab protein and calcium in every bite.",
                icon: "💪",
                hue: "#FFE4D6",
                stroke: "#9A3412",
              },
              {
                title: "Brain fog at 3 PM?",
                desc: "Our anti-inflammatory ingredients help you bounce back.",
                icon: "🤯",
                hue: "#EDE9FE",
                stroke: "#5B21B6",
              },
            ].map((x, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="rounded-xl bg-white border border-black/5 p-4 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                    style={{ backgroundColor: x.hue, color: x.stroke }}
                  >
                    <span aria-hidden>{x.icon}</span>
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold">{x.title}</p>
                    <p className="text-gray-700 text-[13px] mt-1">{x.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-800 mt-6 text-[14px] sm:text-[16px]">
            No crash. No guilt. Just clean, clever eating on your terms.
          </p>
        </div>
      </motion.section>

      {/* CUSTOM BUILDER CTA */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
        className="py-10 sm:py-14 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="font-bold text-[clamp(20px,4.2vw,34px)]">
            Build Your Perfect Salad In 3 Taps. 2 Minutes. 1 Perfect Salad.
          </h3>
          <p className="mt-2 text-gray-700 text-[14px] sm:text-[16px]">
            Don't see exactly what you want? Make it yours.
          </p>
          <p className="text-gray-700 text-[14px] sm:text-[16px]">
            Your salad. Your rules. Your results.
          </p>

          <div className="mt-6 flex justify-center">
            <ShineButton
              variant="primary"
              className="text-[14px] sm:text-[16px] px-6 py-3 bg-[#FF6B35] hover:bg-[#E55A2B] text-white rounded-lg shadow-md"
            >
              Create My Perfect Bowl
            </ShineButton>
          </div>
        </div>
      </motion.section>

      {/* DIFFERENCE BLOCK */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
        className="py-10 sm:py-14 bg-[#FAFAFA]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-center font-bold text-[clamp(20px,4.2vw,34px)]">
            What Makes Fregcy Salads So... Different?
          </h2>

          {/* animation variants */}
          {/* left-to-right enter */}
          {/* right-to-left enter */}
          {/* Slightly staggered for rhythm */}
          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
            {[
              {
                title: "Made Fresh Daily",
                desc:
                  "No sad, soggy lettuce here. We prep every salad each morning — crunchy, cold, and chemical-free.",
                bg: "#D8F3DC",
                dir: "left", // from left
                delay: 0.04,
              },
              {
                title: "Radical Transparency",
                desc:
                  "Full ingredient sourcing, macro & micro breakdowns, and allergy info.",
                bg: "#FFE0D1",
                dir: "right", // from right
                delay: 0.08,
              },
              {
                title: "Ready When You Are",
                desc:
                  "Morning workout? Late-night study sesh? Fregcy stations run 24/7.",
                bg: "#EDE9FE",
                dir: "right", // from right
                delay: 0.12,
              },
              {
                title: "Zero Touch Until You Grab It",
                desc:
                  "From prep to pickup, your salad stays untouched, sealed, and safe.",
                bg: "linear-gradient(180deg, #FFFFFF 0%, #F7F7FB 100%)",
                dir: "left", // from left
                delay: 0.16,
              },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  x: c.dir === "left" ? "-24vw" : "24vw",   // start near viewport edges
                  filter: "blur(2px)",
                }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ amount: 0.35, once: false }}     // animate every time it re-enters
                transition={{
                  duration: 0.42,
                  ease: [0.22, 1, 0.36, 1],                  // smooth, no snap
                  delay: c.delay,                            // light stagger
                }}
                className="rounded-xl p-4 border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition transform-gpu will-change-transform will-change-filter"
                style={{
                  background: c.bg,
                }}
              >
                <p className="text-[16px] font-semibold">{c.title}</p>
                <p className="text-gray-700 text-[13px] mt-1">{c.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.section>
    </div>
  );
};

export default OurSalads;
