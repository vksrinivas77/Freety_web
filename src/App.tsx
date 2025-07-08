import React, { useState } from 'react';
import Header from './components/Header';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import OurSalads from './pages/OurSalads';
import Subscription from './pages/Subscription';
import Blog from './pages/Blog';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (salad: any) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === salad.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === salad.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, {
          id: salad.id,
          name: salad.name,
          price: salad.price,
          quantity: 1,
          image: salad.image
        }];
      }
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      removeItem(id);
    } else {
      setCartItems(prev =>
        prev.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header 
          cartItems={totalItems} 
          onCartToggle={() => setIsCartOpen(true)} 
        />
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