import React, { useState, useEffect } from 'react';
import { Star, CheckCircle, Clock, Users, Shield, Zap } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ShineButton from '../components/ShineButton';
import { Link } from 'react-router-dom';

const Home = () => {
  const [foundingMembers, setFoundingMembers] = useState(647);
  const [slotsLeft, setSlotsLeft] = useState(353);

  useEffect(() => {
    // Simulate real-time counter
    const interval = setInterval(() => {
      if (foundingMembers < 1000) {
        setFoundingMembers(prev => prev + Math.floor(Math.random() * 3));
        setSlotsLeft(prev => Math.max(0, prev - Math.floor(Math.random() * 3)));
      }
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [foundingMembers]);

  const testimonials = [
    {
      quote: "My productivity spiked, my bloating vanished, and for once—eating healthy didn't feel like a job.",
      author: "Sana, Designer"
    },
    {
      quote: "I don't even like salads. But Fretty changed that. I finally feel like I'm eating for me.",
      author: "Karan, Software Engineer"
    },
    {
      quote: "Every afternoon used to be a crash. Now I'm energized right through 6 PM—and I look forward to lunch again.",
      author: "Aarti, Consultant"
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToThankYou = () => {
    const thankYouSection = document.getElementById('thank-you-section');
    if (thankYouSection) {
      thankYouSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Unlock Your <span className="text-green-600">Healthiest Life</span> with Fretty
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 mb-4">
                  The Salad You've Been Craving, Without the Stress You've Been Facing!
                </p>
                <p className="text-lg text-gray-500 mb-8">
                  Elevate Your Energy. Transform Your Nutrition.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link to="/subscription">
                    <ShineButton variant="orange" className="text-lg px-8 py-4 cta-shine">
                      Secure My Founding Spot
                    </ShineButton>
                  </Link>
                  <button onClick={scrollToThankYou}>
                    <ShineButton variant="secondary" className="text-lg px-8 py-4">
                      Learn More
                    </ShineButton>
                  </button>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                  alt="Fresh healthy salad" 
                  className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-semibold text-gray-800">4.9/5</span>
                    <span className="text-gray-600">from 500+ reviews</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Are you tired of choosing between convenience and health?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              You're not alone. In a world full of quick junk food, unhealthy options, Fretty is here to change the game. 
              Your go-to solution for real nutritious food, made simple. We don't believe in compromises. We believe in 
              fresh, flavorful, fully transparent nutrition that actually fits your lifestyle.
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Meet Fretty */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <img 
                src="https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Person enjoying healthy salad" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Meet the Salad That Understands You
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  👋 Hi, we're Fretty, your new best friend in nutrition.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our mission is simple: To help you feel unstoppable, starting with how you eat. We have removed 
                  every frustrating thing about healthy eating — the planning, the prep, the preservatives — and 
                  left it behind. What's left? Clean, delicious, nutrient-rich salads available anytime, anywhere 
                  — with just a tap!!!
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Fretty Feels Different (Because It Is)
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="slide-up" delay={100}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 card-hover">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Fresh-Tech Preservation</h3>
                  <p className="text-gray-600">
                    Your salad stays fresh, crisp, and nutrient-packed for up to 72 hours. No soggy lettuce. 
                    No sad desk lunches. Just that first-bite crunch, every time.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={200}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 card-hover">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Customization Engine</h3>
                  <p className="text-gray-600">
                    Our app gets to know your body and your goals — and suggests just what you need to thrive. 
                    Weight loss? Gut health? Glowing skin? We've got you.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={300}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 card-hover">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Nutrition Transparency</h3>
                  <p className="text-gray-600">
                    No hidden sugars. No mystery oils. Just clear, beautiful insights into exactly what you're 
                    eating — macros, micros, ingredients, sourcing — all in one place.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* What's Inside Every Fretty Experience */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What's Inside Every Fretty Experience?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection animation="slide-up" delay={100}>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                    <h3 className="text-lg font-bold text-gray-900">Chef-Crafted Recipes</h3>
                  </div>
                  <p className="text-gray-600">
                    Developed with expert nutritionists, so you get the fuel your body actually needs — and flavors you'll fall in love with.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={200}>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-blue-600 mr-3" />
                    <h3 className="text-lg font-bold text-gray-900">Custom-Build Options</h3>
                  </div>
                  <p className="text-gray-600">
                    Make your own salad, your way. Choose your base, proteins, toppings, and dressings from a range of farm-fresh ingredients.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={300}>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-orange-600 mr-3" />
                    <h3 className="text-lg font-bold text-gray-900">Deficiency-Focused Nutrition</h3>
                  </div>
                  <p className="text-gray-600">
                    Battling fatigue? Low iron? Low B12 or D? Our bowls aren't just tasty — they're targeted tools for energy, immunity, and clarity.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={400}>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-purple-600 mr-3" />
                    <h3 className="text-lg font-bold text-gray-900">Real Human Support</h3>
                  </div>
                  <p className="text-gray-600">
                    Join our exclusive WhatsApp Wellness Circle #Bowls & Bonds — your go-to space for expert nutrition tips, live Q&As, and real-time motivation.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Hear from Our Wellness Warriors
              </h2>
            </div>
            <div className="relative">
              <div className="bg-gray-800 p-8 rounded-2xl text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-500 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl italic text-gray-300 mb-6">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <p className="text-green-400 font-semibold">
                  — {testimonials[currentTestimonial].author}
                </p>
              </div>
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-green-500' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Fixing What Fast Food Forgot */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Fixing What Fast Food Forgot
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Let's have a real talk. Most of us are running around under-nourished and over-stimulated.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center">
                      <div className="text-3xl font-bold text-red-500 mr-4">70%</div>
                      <p className="text-gray-600">of young professionals are low in Iron, Vitamin D, or essential fiber.</p>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center">
                      <div className="text-3xl font-bold text-orange-500 mr-4">85%</div>
                      <p className="text-gray-600">admit to losing focus mid-afternoon due to poor food choices.</p>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Fretty isn't just a salad. It's a solution. Because you're not just feeding your body. You're fueling your potential.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">Boost natural energy</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">Reduce cravings and crashes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">Support digestion & mental clarity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-600">Elevate your mood</span>
                  </div>
                </div>
              </div>
              <AnimatedSection animation="slide-left" delay={200}>
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                  alt="Healthy lifestyle transformation" 
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Founding Members CTA */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Feel the Shift? Let's Get Started.
            </h2>
            <p className="text-xl mb-8">
              🌟 Claim Your Founding Member Spot Before It's Gone
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">{foundingMembers}</div>
                  <div className="text-sm opacity-90">Members Joined</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2 text-yellow-300">{slotsLeft}</div>
                  <div className="text-sm opacity-90">Slots Remaining</div>
                </div>
              </div>
              <p className="text-lg mb-6">
                We're giving early access to just 1,000 Founding Members. When we launch our own Vending Machine, 
                this founders-only pricing disappears. Forever.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Lifetime 20% discount on all purchases</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Early delivery to your office/home</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Access to the Fretty App + customization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Exclusive health & performance community</span>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4">You Have Two Choices:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <div className="bg-red-500/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">1️⃣ Keep doing what you've been doing:</h4>
                    <p className="text-sm">Another afternoon slump, another quick snack, another dinner filled with junk food.</p>
                  </div>
                  <div className="bg-green-500/20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">2️⃣ Take the first step toward something better:</h4>
                    <p className="text-sm">Clean, intelligent eating that matches your ambition — and never slows you down.</p>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/subscription">
              <ShineButton variant="secondary" className="text-lg px-8 py-4 text-orange-600 hover:text-orange-700 cta-shine">
                Secure My Founding Spot – Before It's Gone
              </ShineButton>
            </Link>
            <p className="text-sm mt-4 opacity-90">
              (Only {slotsLeft} slots left. No contracts. No commitment. Just better energy.)
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* Thank You Section */}
      <AnimatedSection animation="fade-in">
        <section id="thank-you-section" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-2xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Thank You for Being Here.
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                If you've read this far, you already know you care about your health. 
                Let's make that a reality, starting today — not "someday."
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Home;