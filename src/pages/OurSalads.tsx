import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Trash2, ShoppingCart, X, SlidersHorizontal } from "lucide-react";
import ShineButton from "../components/ShineButton";

/* ============================================================
   Local scoped styles (no global edits)
============================================================ */
const ScopedStyles = () => (
  <style>{`
    .shine-line{
      position:relative;display:inline-block;
      background:linear-gradient(90deg,var(--secondary-saffron),var(--accent-turmeric),var(--secondary-saffron));
      -webkit-background-clip:text;background-clip:text;color:transparent;
      background-size:200% 100%;animation:shine-scan 2.2s linear infinite;font-weight:800
    }
    @keyframes shine-scan{0%{background-position:0% 50%}100%{background-position:200% 50%}}

    .input{border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:10px 12px;background:#fff;outline:none}
    .input:focus{border-color:var(--primary-green);box-shadow:0 0 0 3px rgba(45,90,39,.12)}
    .range{appearance:none;height:6px;border-radius:999px;background:linear-gradient(90deg,var(--primary-green) 0%,var(--primary-green) var(--_val,0%),#e5e7eb var(--_val,0%),#e5e7eb 100%)}
    .range::-webkit-slider-thumb{appearance:none;width:18px;height:18px;border-radius:999px;background:var(--secondary-saffron);box-shadow:0 0 0 3px rgba(255,107,53,.25)}
    .card-detail{background:rgba(255,255,255,.96);backdrop-filter:blur(6px);border-top:1px solid rgba(0,0,0,.06)}
  `}</style>
);

/* ============================================================
   Types + Seed Data (same salads)
============================================================ */
type SortKey = "relevance" | "price-asc" | "price-desc" | "kcal-asc" | "kcal-desc";

type Filters = {
  query: string;
  category: "all" | "vegan" | "protein" | "detox";
  vegOnly: boolean;
  priceMin: number;
  priceMax: number;
  kcalMax: number;
  sort: SortKey;
};

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
  tags?: string[];
  category?: "vegan" | "protein" | "detox";
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
}

const SALADS: Salad[] = [
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
    callout: "Your immunity’s fix in a vibrant bowl",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    calories: 200,
    isVeg: true,
    protein: "8g",
    gradientFrom: "#7FB069",
    gradientTo: "#B7E4C7",
    iconHex: "#7FB069",
    priceHex: "#D8F3DC",
    tags: ["vegan", "light"],
    category: "vegan",
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
    tags: ["high-protein", "vegetarian"],
    category: "protein",
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
    tags: ["detox", "vegetarian"],
    category: "detox",
  },
];

/* ============================================================
   Hero Banner (kept + “Eat Clean. Feel Strong. Stay Sharp.”)
============================================================ */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const HeroBanner: React.FC = () => {
  const lines = [
    { text: "Fuel your day...!", cls: "text-fregcy-primary-green" },
    { text: "Fix your nutrition....!", cls: "text-fregcy-saffron" },
    { text: "Fall in love with clean eating.....!", cls: "text-fregcy-turmeric-dark" },
  ];
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % lines.length), 2800);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-hero-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-16 sm:pt-28 sm:pb-20 text-center">
        {/* cycling heading */}
        <div className="h-14 sm:h-16 flex items-center justify-center mt-3">
          <AnimatePresence mode="wait">
            <motion.h1
              key={lines[i].text}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`font-extrabold tracking-tight ${lines[i].cls} text-[clamp(22px,4.5vw,42px)]`}
            >
              {lines[i].text}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* subtitle with shiny slice */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-4 sm:mt-5 text-[15px] sm:text-[17px] md:text-[18px] max-w-3xl mx-auto text-fregcy-body"
        >
          These aren’t just salads. These are daily upgrades built with clean, fresh ingredients, real nutrition, and zero preservatives.{" "}
          <span className="shine-line">Every bowl is your next step toward feeling amazing!</span>
        </motion.p>

        {/* power tagline */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-2 text-[#2D6A4F] font-semibold text-sm sm:text-base"
        >
          “Eat Clean. Feel Strong. Stay Sharp.”
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25 }}
          className="mt-7 flex justify-center"
        >
          <ShineButton variant="primary" className="px-6 py-3 rounded-lg bg-cta-gradient text-white shadow-lg">
            Start My Daily Upgrades
          </ShineButton>
        </motion.div>
      </div>
    </section>
  );
};

/* ============================================================
   Filters (search + category + veg + price + kcal + sort)
============================================================ */
const defaultFilters: Filters = {
  query: "",
  category: "all",
  vegOnly: false,
  priceMin: 0,
  priceMax: 1000,
  kcalMax: 1200,
  sort: "relevance",
};

const FiltersBar: React.FC<{
  filters: Filters;
  setFilters: (f: Filters) => void;
  onReset: () => void;
}> = ({ filters, setFilters, onReset }) => {
  return (
    <div className="mb-5 sm:mb-6 rounded-xl bg-white/85 backdrop-blur border border-black/5 p-3 sm:p-4 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
        <div className="md:col-span-5">
          <label className="block text-xs text-fregcy-body-light mb-1">Search products</label>
          <input
            className="input w-full"
            placeholder="Search by name, tag, ingredient…"
            value={filters.query}
            onChange={(e) => setFilters({ ...filters, query: e.target.value })}
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs text-fregcy-body-light mb-1">Category</label>
          <select
            className="input w-full"
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value as Filters["category"] })}
          >
            <option value="all">All</option>
            <option value="vegan">Vegan</option>
            <option value="protein">Protein</option>
            <option value="detox">Detox</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-xs text-fregcy-body-light mb-1">Sort by</label>
          <select
            className="input w-full"
            value={filters.sort}
            onChange={(e) => setFilters({ ...filters, sort: e.target.value as SortKey })}
          >
            <option value="relevance">Relevance</option>
            <option value="price-asc">Price (Low → High)</option>
            <option value="price-desc">Price (High → Low)</option>
            <option value="kcal-asc">Calories (Low → High)</option>
            <option value="kcal-desc">Calories (High → Low)</option>
          </select>
        </div>

        <div className="md:col-span-3 flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm mt-1">
            <input
              type="checkbox"
              checked={filters.vegOnly}
              onChange={(e) => setFilters({ ...filters, vegOnly: e.target.checked })}
            />
            Veg only
          </label>
          <button
            onClick={onReset}
            className="px-3 py-2 rounded-lg border text-sm hover:bg-white transition flex items-center gap-2"
            title="Clear filters"
          >
            <SlidersHorizontal className="w-4 h-4" /> Reset
          </button>
        </div>

        <div className="md:col-span-6 flex flex-col gap-2">
          <label className="text-xs text-fregcy-body-light flex justify-between">
            <span>Max Calories</span><span>{filters.kcalMax} kcal</span>
          </label>
          <input
            type="range"
            min={150}
            max={1200}
            value={filters.kcalMax}
            onChange={(e) => setFilters({ ...filters, kcalMax: Number(e.target.value) })}
            className="range w-full"
            style={{ ["--_val" as any]: `${((filters.kcalMax - 150) / (1200 - 150)) * 100}%` }}
          />
        </div>

        <div className="md:col-span-6 flex flex-col gap-2">
          <label className="text-xs text-fregcy-body-light flex justify-between">
            <span>Price Range</span><span>₹{filters.priceMin} – ₹{filters.priceMax}</span>
          </label>
          <div className="flex items-center gap-3">
            <input
              type="range" min={0} max={1000} value={filters.priceMin}
              onChange={(e) => setFilters({ ...filters, priceMin: Math.min(Number(e.target.value), filters.priceMax - 10) })}
              className="range w-full" style={{ ["--_val" as any]: `${(filters.priceMin / 1000) * 100}%` }}
            />
            <input
              type="range" min={0} max={1000} value={filters.priceMax}
              onChange={(e) => setFilters({ ...filters, priceMax: Math.max(Number(e.target.value), filters.priceMin + 10) })}
              className="range w-full" style={{ ["--_val" as any]: `${(filters.priceMax / 1000) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================================================
   Cart Drawer (local to this page)
============================================================ */
const CartDrawer: React.FC<{
  items: CartItem[];
  onClose: () => void;
  onInc: (id: number) => void;
  onDec: (id: number) => void;
  onRemove: (id: number) => void;
  onClear: () => void;
}> = ({ items, onClose, onInc, onDec, onRemove, onClear }) => {
  const total = items.reduce((s, it) => s + it.price * it.qty, 0);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 right-0 h-full w-[86%] sm:w-96 bg-white shadow-2xl z-[60] flex flex-col"
      >
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="font-bold text-lg text-fregcy-h1">Your Cart</h2>
          <button className="p-1 rounded hover:bg-black/5" onClick={onClose} aria-label="Close cart">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-center text-fregcy-body-light">Cart is empty.</p>
          ) : (
            items.map((it) => (
              <div key={it.id} className="flex gap-3 items-center border-b pb-3">
                <img src={it.image} alt={it.name} className="w-16 h-16 rounded object-cover" />
                <div className="flex-1">
                  <p className="font-semibold text-sm">{it.name}</p>
                  <p className="text-xs text-fregcy-body-light">₹{it.price}</p>
                  <div className="mt-1 flex items-center gap-2">
                    <button className="px-2 border rounded" onClick={() => onDec(it.id)} aria-label="Decrease"><Minus className="w-3.5 h-3.5" /></button>
                    <span>{it.qty}</span>
                    <button className="px-2 border rounded" onClick={() => onInc(it.id)} aria-label="Increase"><Plus className="w-3.5 h-3.5" /></button>
                  </div>
                </div>
                <button className="text-red-500" onClick={() => onRemove(it.id)} aria-label="Remove">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="p-4 border-t space-y-3">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Total</span>
            <span className="font-bold">₹{total}</span>
          </div>
          <div className="flex gap-2">
            <button onClick={onClear} className="w-1/3 border rounded-lg py-2">Clear</button>
            <ShineButton variant="primary" className="w-2/3 py-2 rounded bg-cta-gradient text-white">Checkout (Demo)</ShineButton>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

/* ============================================================
   Salad Card
   - Hover preview (desktop) for THIS card only
   - Eye toggle to pin/unpin
   - Add button + Eye on ONE line (no wrap)
============================================================ */
const SaladCard: React.FC<{
  salad: Salad;
  hoveredId: number | null;
  pinnedId: number | null;
  setHoveredId: (id: number | null) => void;
  setPinnedId: (id: number | null) => void;
  onAdd: (s: Salad) => void;
}> = ({ salad, hoveredId, pinnedId, setHoveredId, setPinnedId, onAdd }) => {
  const isPinned = pinnedId === salad.id;
  const isOpen = isPinned || hoveredId === salad.id; // <-- opens only this one
  const timer = useRef<number | null>(null);

  const onEnter = () => {
    if (timer.current) window.clearTimeout(timer.current);
    if (!isPinned) setHoveredId(salad.id);
  };
  const onLeave = () => {
    if (!isPinned) {
      timer.current = window.setTimeout(() => setHoveredId(null), 60);
    }
  };

  const togglePin = () => {
    if (isPinned) {
      setPinnedId(null);
      setHoveredId(null);
    } else {
      setPinnedId(salad.id);
      setHoveredId(salad.id);
    }
  };

  return (
    <motion.article
      className="relative bg-white border border-black/[0.04] rounded-2xl shadow-[0_8px_28px_-10px_rgba(28,58,25,0.18)] hover:shadow-[0_14px_40px_-12px_rgba(28,58,25,0.26)] transition-all duration-300 overflow-hidden flex flex-col"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* image */}
      <div className="relative">
        <img
          src={salad.image}
          alt={salad.name}
          className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 rounded-t-2xl border-b border-black/5"
          style={{ transform: isOpen ? "scale(1.03)" : "scale(1.0)" }}
        />
        <div
          className="absolute top-3 right-3 backdrop-blur px-2.5 py-1 rounded-full font-semibold text-[13px] border border-black/5 shadow-sm"
          style={{ backgroundColor: salad.priceHex, color: "var(--primary-green-dark)" }}
        >
          ₹{salad.price}
        </div>
      </div>

      {/* content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col">
        <div className="flex items-center justify-between">
          <h3 className="text-[17px] sm:text-[18px] font-bold text-fregcy-h1">{salad.name}</h3>
          <span className="ml-3 hidden sm:inline-block w-3.5 h-3.5 rounded-full" style={{ backgroundColor: salad.iconHex }} aria-hidden />
        </div>

        <p className="text-fregcy-primary-green/90 italic text-[13px] sm:text-[14px] mt-1">
          {salad.description.split(".")[0]}.
        </p>
        <div className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-fregcy-body-light">
          {salad.calories} kcal • {salad.protein}
        </div>

        {/* actions — one line */}
        <div className="mt-auto flex items-center gap-2">
          <ShineButton
            className="flex-1 text-[13px] sm:text-[14px] px-4 py-2.5 bg-fregcy-primary-green hover:bg-fregcy-green-light text-white rounded-lg shadow-md transition whitespace-nowrap overflow-hidden text-ellipsis"
            onClick={() => onAdd(salad)}
          >
            <span className="inline-flex items-center gap-2">
              <Plus className="w-4 h-4" />
              {salad.callout}
            </span>
          </ShineButton>

          {/* Eye icon — white/transparent active, with green ring */}
          <button
            className={`p-2 rounded-lg border transition ring-0 ${
              isPinned
                ? "bg-white/80 text-fregcy-primary-green border-fregcy-primary-green"
                : "text-fregcy-green-dark hover:bg-white/70 border-black/10"
            }`}
            onClick={togglePin}
            aria-label="Toggle details"
          >
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              animate={{ rotate: isPinned ? 8 : 0, scale: isOpen ? 1.05 : 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </motion.svg>
          </button>
        </div>

        {/* details (below buttons, never overlapping) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="card-detail mt-3 rounded-b-2xl overflow-hidden"
            >
              <div className="p-4 text-[13px] sm:text-[14px]">
                <p className="font-semibold text-fregcy-h2 mb-1">Why you’ll love it</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  {salad.benefits.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                  <div>
                    <p className="font-semibold text-fregcy-h2 mb-1">What’s inside</p>
                    <p className="text-fregcy-body">{salad.ingredients}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-fregcy-h2 mb-1">Nutrition</p>
                    <p className="text-fregcy-body">{salad.nutrition}</p>
                  </div>
                </div>
                <p className="mt-3 italic text-fregcy-primary-green">“{salad.callout}”</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
};


/* ============================================================
   Page (adds back your missing sections)
============================================================ */
const OurSalads: React.FC = () => {
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  const [cart, setCart] = useState<CartItem[]>(() => {
    try { return JSON.parse(localStorage.getItem("fregcy_cart") || "[]"); } catch { return []; }
  });
  const [drawerOpen, setDrawerOpen] = useState(false);

  // details control (only one open at a time, hover-safe)
  const [hoveredId, setHoveredId] = useState<number | null>(null); // <-- NEW
  const [pinnedId, setPinnedId] = useState<number | null>(null);


  useEffect(() => {
    localStorage.setItem("fregcy_cart", JSON.stringify(cart));
  }, [cart]);

  const filtered = useMemo(() => {
    let list = SALADS.slice();

    const q = filters.query.trim().toLowerCase();
    if (q) list = list.filter((s) => [s.name, s.description, s.ingredients, ...(s.tags || [])].join(" ").toLowerCase().includes(q));

    if (filters.category !== "all") list = list.filter((s) => s.category === filters.category);
    if (filters.vegOnly) list = list.filter((s) => s.isVeg);
    list = list.filter((s) => s.price >= filters.priceMin && s.price <= filters.priceMax && s.calories <= filters.kcalMax);

    switch (filters.sort) {
      case "price-asc": list.sort((a, b) => a.price - b.price); break;
      case "price-desc": list.sort((a, b) => b.price - a.price); break;
      case "kcal-asc": list.sort((a, b) => a.calories - b.calories); break;
      case "kcal-desc": list.sort((a, b) => b.calories - a.calories); break;
      default: break;
    }
    return list;
  }, [filters]);

  // cart actions
  const add = (s: Salad) => {
    setCart((c) => {
      const i = c.findIndex((it) => it.id === s.id);
      if (i >= 0) {
        const copy = c.slice(); copy[i] = { ...copy[i], qty: copy[i].qty + 1 }; return copy;
      }
      return [...c, { id: s.id, name: s.name, price: s.price, qty: 1, image: s.image }];
    });
    setDrawerOpen(true);
  };
  const inc = (id: number) => setCart((c) => c.map((it) => it.id === id ? { ...it, qty: it.qty + 1 } : it));
  const dec = (id: number) => setCart((c) => c.map((it) => it.id === id ? { ...it, qty: Math.max(1, it.qty - 1) } : it));
  const remove = (id: number) => setCart((c) => c.filter((it) => it.id !== id));
  const clear = () => setCart([]);

  return (
    <div className="text-fregcy-body min-h-screen bg-[var(--product-bg)]">
      <ScopedStyles />

      {/* ===== Banner (kept) ===== */}
      <HeroBanner />

      {/* ===== Filters + Grid ===== */}
      <section className="py-8 sm:py-10 bg-[var(--warm-white)]/60 backdrop-blur-[1px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FiltersBar filters={filters} setFilters={setFilters} onReset={() => setFilters(defaultFilters)} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filtered.map((s) => (
              <SaladCard
                key={s.id}
                salad={s}
                hoveredId={hoveredId}
                pinnedId={pinnedId}
                setHoveredId={setHoveredId}
                setPinnedId={setPinnedId}
                onAdd={add}
              />
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full text-center text-fregcy-body-light py-12">
                No salads match your filters.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ===== Micro-Transformations (brought back) ===== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
        className="py-10 sm:py-14 bg-[#F7F7FB]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-extrabold text-[clamp(22px,4.4vw,40px)] text-fregcy-h1">
            Our Salads Aren’t Just Meals — They’re <span className="text-fregcy-saffron">Micro-</span>Transformations.
          </h2>
          <p className="mt-2 text-fregcy-body">
            Each bowl is built to do one thing: make you feel amazing.
          </p>

          <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-5 text-left">
            {[
              { title: "Low energy?", desc: "Vitamin C & B12-packed greens bring you back.", icon: "⚡", hue: "#D1FAE5", stroke: "#065F46" },
              { title: "Losing muscle tone?", desc: "Protein + calcium in every bite.", icon: "🍊", hue: "#FFE4D6", stroke: "#9A3412" },
              { title: "Brain fog at 3 PM?", desc: "Anti-inflammatory ingredients for clarity.", icon: "🧠", hue: "#EDE9FE", stroke: "#5B21B6" },
            ].map((x, i) => (
              <motion.div key={i} variants={fadeUp} className="rounded-xl bg-white border border-black/5 p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg"
                    style={{ backgroundColor: x.hue, color: x.stroke }}>
                    <span aria-hidden>{x.icon}</span>
                  </div>
                  <div>
                    <p className="text-[16px] font-semibold text-fregcy-h1">{x.title}</p>
                    <p className="text-fregcy-body text-[13px] mt-1">{x.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-fregcy-body mt-6 text-[14px] sm:text-[16px]">
            No crash. No guilt. Just clean, clever eating on your terms.
          </p>
        </div>
      </motion.section>

      {/* ===== Custom Builder CTA (brought back) ===== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
        className="py-10 sm:py-14 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="font-bold text-[clamp(20px,4.2vw,34px)] text-fregcy-h1">
            Build Your Perfect Salad In 3 Taps. 2 Minutes. 1 Perfect Salad.
          </h3>
          <p className="mt-2 text-fregcy-body">Don't see exactly what you want? Make it yours.</p>
          <p className="text-fregcy-body">Your salad. Your rules. Your results.</p>

          <div className="mt-6 flex justify-center">
            <ShineButton
              variant="primary"
              className="text-[14px] sm:text-[16px] px-6 py-3 bg-cta-gradient hover:opacity-95 text-white rounded-lg shadow-md"
            >
              Create My Perfect Bowl
            </ShineButton>
          </div>
        </div>
      </motion.section>

      {/* ===== What Makes Fregcy… Different? (brought back) ===== */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.35 }}
        className="py-10 sm:py-14 bg-[var(--warm-white)]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-center font-extrabold text-[clamp(22px,4.4vw,40px)] text-fregcy-h1">
            What Makes Fregcy Salads So… Different?
          </h2>

          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
            {[
              { title: "Made Fresh Daily", desc: "No sad, soggy lettuce here. We prep every salad each morning — crunchy, cold, and chemical-free.", bg: "#F7F7F5" },
              { title: "Radical Transparency", desc: "Full ingredient sourcing, macro & micro breakdowns, and allergy info.", bg: "#F7FBFF" },
              { title: "Ready When You Are", desc: "Morning workout? Late-night study sesh? Fregcy stations run long hours.", bg: "#F7F3EC" },
              { title: "Zero Touch Until You Grab It", desc: "From prep to pickup, your salad stays untouched, sealed, and safe.", bg: "linear-gradient(180deg, #FFFFFF 0%, #F7F7FB 100%)" },
            ].map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 ? 32 : -32, filter: "blur(1px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                className="rounded-xl p-5 border border-black/5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition"
                style={{ background: c.bg }}
              >
                <p className="text-[16px] font-semibold text-fregcy-h1">{c.title}</p>
                <p className="text-fregcy-body text-[14px] mt-1">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ===== Floating Cart Button ===== */}
      <button
        onClick={() => setDrawerOpen(true)}
        className="fixed bottom-5 right-5 rounded-full bg-fregcy-primary-green text-white p-3 shadow-lg hover:scale-105 transition"
        aria-label="Open cart"
      >
        <ShoppingCart />
        {cart.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-fregcy-saffron text-white text-xs rounded-full px-1">
            {cart.reduce((sum, it) => sum + it.qty, 0)}
          </span>
        )}
      </button>

      {/* ===== Cart Drawer ===== */}
      {drawerOpen && (
        <CartDrawer
          items={cart}
          onClose={() => setDrawerOpen(false)}
          onInc={(id) => inc(id)}
          onDec={(id) => dec(id)}
          onRemove={(id) => remove(id)}
          onClear={clear}
        />
      )}
    </div>
  );
};

export default OurSalads;
