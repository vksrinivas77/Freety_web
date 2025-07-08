import React, { useState } from 'react';
import { Heart, Star, Leaf, Zap, Shield, Plus, Clock, Award } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ShineButton from '../components/ShineButton';

interface Salad {
  id: number;
  name: string;
  price: number;
  tagline: string;
  description: string;
  benefits: string[];
  ingredients: string;
  nutrition: string;
  callout: string;
  image: string;
  color: string;
  calories: number;
  isVeg: boolean;
  protein: string;
}

interface OurSaladsProps {
  onAddToCart?: (salad: Salad) => void;
}

const OurSalads: React.FC<OurSaladsProps> = ({ onAddToCart }) => {
  const [addedItems, setAddedItems] = useState<Set<number>>(new Set());
  const [hoveredSalad, setHoveredSalad] = useState<number | null>(null);

  const salads: Salad[] = [
    {
      id: 1,
      name: "Tangy Veggie Delight",
      price: 120,
      tagline: "Zingy. Hydrating. Immune-charging.",
      description: "This is the salad that wakes up your body and your taste buds. A sweet-and-sour symphony of raw mango, juicy pomegranate, and crisp spinach that's packed with vitamin C, antioxidants, and hydration.",
      benefits: [
        "Boosts immunity and digestion",
        "Keeps you cool, light, and energized",
        "Perfect for summer slumps and mid-day refresh"
      ],
      ingredients: "Spinach, raw mango, pomegranate, roasted peanuts, cucumber, lemon juice, coconut oil",
      nutrition: "~200 kcal | Vegan | Gluten-Free",
      callout: "Your immunity's new best friend — in a bowl.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      color: "from-green-400 to-emerald-500",
      calories: 200,
      isVeg: true,
      protein: "8g"
    },
    {
      id: 2,
      name: "Protein Blast: Chickpeas + Paneer",
      price: 150,
      tagline: "Power-packed. Satisfying. Seriously addictive.",
      description: "Designed for doers. Whether you're working out or working late, this protein-rich combo of paneer and sprouted chickpeas keeps you full, focused, and fueled. With lettuce, sweet corn, and sunflower seeds for crunch, it's the meal your muscles have been waiting for.",
      benefits: [
        "20g+ protein for lean muscle support",
        "Curbs cravings and crashes",
        "Clean fats = clean energy"
      ],
      ingredients: "Fresh paneer, sprouted chickpeas, lettuce, sweet corn, seeds, lemon-pepper dressing",
      nutrition: "~330 kcal | Vegetarian | Gluten-Free",
      callout: "Meal prep who? This is power in a box.",
      image: "https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      color: "from-orange-400 to-red-500",
      calories: 330,
      isVeg: true,
      protein: "22g"
    },
    {
      id: 3,
      name: "Rainbow Raw Veggie + Paneer",
      price: 180,
      tagline: "Colorful. Crunchy. Detox-approved.",
      description: "Clean eating never looked this good. Beets, carrots, cabbage, and cucumber come together for a salad that's vibrant, earthy, and energizing. Finished with creamy paneer (or tofu) and almonds for that satisfying bite, this bowl is your daily reset.",
      benefits: [
        "Detoxes with natural antioxidants",
        "Supports glowing skin + sharp focus",
        "Builds better habits with every bite"
      ],
      ingredients: "Beetroot, carrot, cucumber, paneer/tofu, cabbage, almonds, lemon dressing",
      nutrition: "~220 kcal | Vegetarian | Vegan Option Available",
      callout: "Your gut says thank you. Your skin says wow.",
      image: "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      color: "from-purple-400 to-pink-500",
      calories: 220,
      isVeg: true,
      protein: "12g"
    }
  ];

  const handleAddToCart = (salad: Salad) => {
    if (onAddToCart) {
      onAddToCart(salad);
      setAddedItems(prev => new Set([...prev, salad.id]));
      
      // Remove the "added" state after 2 seconds
      setTimeout(() => {
        setAddedItems(prev => {
          const newSet = new Set(prev);
          newSet.delete(salad.id);
          return newSet;
        });
      }, 2000);
    }
  };

  const scrollToSelection = () => {
    const selectionArea = document.getElementById('salad-selection');
    if (selectionArea) {
      selectionArea.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AnimatedSection animation="slide-up">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Salads
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-4">
                Fuel your day. Fix your nutrition. Fall in love with clean eating.
              </p>
              <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                Every Fretty salad is more than a bowl — it's a moment of clarity, energy, and self-respect. 
                Crafted with farm-fresh ingredients, tailored macros, and zero preservatives, these are not your average salads.
              </p>
            </AnimatedSection>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-6xl font-bold text-gray-100 opacity-20 pointer-events-none">
          Eat Clean. Feel Strong. Stay Sharp.
        </div>
      </section>

      {/* Salad Cards Grid */}
      <section id="salad-selection" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {salads.map((salad, index) => (
              <AnimatedSection key={salad.id} animation="slide-up" delay={index * 100}>
                <div 
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2 card-hover relative"
                  onMouseEnter={() => setHoveredSalad(salad.id)}
                  onMouseLeave={() => setHoveredSalad(null)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={salad.image} 
                      alt={salad.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${salad.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-lg font-bold text-green-600">₹{salad.price}</span>
                    </div>
                    
                    {/* Quick Info Icons */}
                    <div className="absolute bottom-4 left-4 flex space-x-2">
                      <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                        <Clock className="w-3 h-3 text-gray-600" />
                        <span className="text-xs font-medium">{salad.calories} cal</span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                        <Zap className="w-3 h-3 text-blue-600" />
                        <span className="text-xs font-medium">{salad.protein}</span>
                      </div>
                      {salad.isVeg && (
                        <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{salad.name}</h3>
                    <p className="text-green-600 italic mb-3">{salad.tagline}</p>
                    
                    <button
                      onClick={() => handleAddToCart(salad)}
                      className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2 z-20 relative ${
                        addedItems.has(salad.id)
                          ? 'bg-green-500 text-white'
                          : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white hover:scale-105 shine-effect'
                      }`}
                      disabled={addedItems.has(salad.id)}
                    >
                      {addedItems.has(salad.id) ? (
                        <>
                          <span>Added to Cart!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Add to Cart</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Hover Popup - Fixed positioning and transparency */}
                  {hoveredSalad === salad.id && (
                    <div className="absolute inset-0 bg-white/95 backdrop-blur-md p-6 flex flex-col justify-center animate-fade-in z-10 pointer-events-none">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{salad.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{salad.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                          <Heart className="w-4 h-4 text-red-500 mr-2" />
                          Benefits:
                        </h4>
                        <ul className="space-y-1">
                          {salad.benefits.slice(0, 2).map((benefit, i) => (
                            <li key={i} className="flex items-center text-gray-600 text-xs">
                              <Star className="w-3 h-3 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                          <Leaf className="w-4 h-4 text-green-500 mr-2" />
                          Ingredients:
                        </h4>
                        <p className="text-gray-600 text-xs">{salad.ingredients}</p>
                      </div>

                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                          <Award className="w-4 h-4 text-blue-500 mr-2" />
                          Nutrition:
                        </h4>
                        <p className="text-gray-600 text-xs">{salad.nutrition}</p>
                      </div>

                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-600 italic">"{salad.callout}"</p>
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Customize Your Way
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Want to skip paneer? Add seeds? Double the protein? With Fretty's Smart Salad Builder, 
                    you control what goes in — and how it fuels you.
                  </p>
                  <div className="flex items-center space-x-4 text-green-600 text-lg font-semibold mb-8">
                    <span className="bg-green-100 px-3 py-1 rounded-full">3 Taps.</span>
                    <span className="bg-green-100 px-3 py-1 rounded-full">2 Minutes.</span>
                    <span className="bg-green-100 px-3 py-1 rounded-full">1 Perfect Salad.</span>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Eat Better Without Trying Harder?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">👉</span>
                        <span className="text-gray-600">Browse the full menu inside the Fretty app</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">👉</span>
                        <span className="text-gray-600">Tap to customize your bowl</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">👉</span>
                        <span className="text-gray-600">Pick up in seconds at your nearest Fretty station</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">👉</span>
                        <span className="text-gray-600">Or get it delivered — still fresh, still fabulous</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                    alt="Customization app interface" 
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Our Salads */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Our Salads Aren't Just Meals — They're Micro-Transformations
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="slide-up" delay={100}>
                <div className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Low Energy?</h3>
                  <p className="text-gray-600">We've got Vitamin C & B12-packed greens.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={200}>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Losing Muscle Tone?</h3>
                  <p className="text-gray-600">Grab protein and calcium in every bite.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={300}>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Brain Fog at 3 PM?</h3>
                  <p className="text-gray-600">Our anti-inflammatory ingredients help you bounce back.</p>
                </div>
              </AnimatedSection>
            </div>
            <div className="text-center mt-12">
              <p className="text-lg text-gray-600">
                No crash. No guilt. Just clean, clever eating on your terms.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Start Your Healthy Journey Today
            </h2>
            <p className="text-xl mb-8">
              No prep. No compromise. Just pure food joy.
            </p>
            <button onClick={scrollToSelection}>
              <ShineButton variant="secondary" className="text-lg px-8 py-4 text-green-600 hover:text-green-700 cta-shine">
                Order Your First Salad – Start Feeling Better Now
              </ShineButton>
            </button>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default OurSalads;