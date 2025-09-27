import { useState, useCallback } from "react";
import Header from "./components/Header";
import CartDrawer from "./components/CartDrawer";
import Home from "./pages/Home";
import OurSalads from "./pages/OurSalads";
import Subscription from "./pages/Subscription";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import type { CartItem } from "./types/cart"; // ← shared cart type: id:string, qty:number

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // add item to cart (IDs are strings everywhere)
  const addToCart = useCallback(
    (salad: { id: string; name: string; price: number; image?: string }) => {
      setCartItems((prev) => {
        const existing = prev.find((it) => it.id === salad.id);
        if (existing) {
          return prev.map((it) =>
            it.id === salad.id ? { ...it, qty: it.qty + 1 } : it
          );
        }
        return [
          ...prev,
          {
            id: salad.id,
            name: salad.name,
            price: salad.price,
            image: salad.image,
            qty: 1,
          },
        ];
      });
      setIsCartOpen(true);
    },
    []
  );

  // update quantity (0 removes)
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

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header cartItems={totalItems} onCartToggle={() => setIsCartOpen(true)} />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Make sure OurSalads accepts onAddToCart in its props */}
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
          onUpdateQuantity={updateQuantity} // (id: string, qty: number)
          onRemoveItem={removeItem}         // (id: string)
        />
      </div>
    </Router>
  );
}

export default App;
