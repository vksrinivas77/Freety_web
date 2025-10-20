import { useState, useCallback, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CartDrawer from "./components/CartDrawer";
import Home from "./pages/Home";
import OurSalads from "./pages/OurSalads";
import Subscription from "./pages/Subscription";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import type { CartItem } from "./types/cart";

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading] = useState(true); // For initial loading
  const [isOffline, setIsOffline] = useState(!navigator.onLine); // For connection status

  // --- Initial 2s loader on page load ---
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // --- Detect internet connection status ---
  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
    };
    const handleOffline = () => {
      setIsOffline(true);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // --- Cart handlers ---
  const addToCart = useCallback(
    (salad: { id: string; name: string; price: number; image?: string }) => {
      setCartItems((prev) => {
        const existing = prev.find((it) => it.id === salad.id);
        if (existing) {
          return prev.map((it) =>
            it.id === salad.id ? { ...it, qty: it.qty + 1 } : it
          );
        }
        return [...prev, { ...salad, qty: 1 }];
      });
      setIsCartOpen(true);
    },
    []
  );

  const updateQuantity = useCallback((id: string, qty: number) => {
    setCartItems((prev) => {
      if (qty <= 0) return prev.filter((it) => it.id !== id);
      return prev.map((it) => (it.id === id ? { ...it, qty } : it));
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setCartItems((prev) => prev.filter((it) => it.id !== id));
  }, []);

  const totalItems = cartItems.reduce((sum, it) => sum + it.qty, 0);

  // --- Show loader on first load or when offline ---
  if (loading || isOffline) {
    return (
      <div>
        <LoadingScreen />
        {isOffline && (
          <p className="absolute bottom-8 w-full text-center text-red-700 font-medium animate-pulse">
            ⚠️ No Internet Connection. Trying to reconnect...
          </p>
        )}
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header cartItems={totalItems} onCartToggle={() => setIsCartOpen(true)} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-salads" element={<OurSalads onAddToCart={addToCart} />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeItem}
        />
      </div>
    </Router>
  );
}

export default App;
