import React, { useState } from 'react';
import { Mail, Bell, Gift, Clock } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ShineButton from '../components/ShineButton';

const Subscription = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="slide-up">
            <div className="mb-8">
              <Clock className="w-24 h-24 mx-auto text-green-500 mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Coming Soon
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Great things are in the works!
              </p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Our subscription plans will revolutionize your healthy eating routine. Stay tuned for 
                exclusive benefits, personalized meal plans, and fresh deliveries straight to your door.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Preview */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What's Coming Your Way
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're crafting subscription plans that will make healthy eating effortless and exciting.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="slide-up" delay={100}>
                <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Gift className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Exclusive Benefits</h3>
                  <p className="text-gray-600">
                    Unlock premium features, priority access to new salads, and member-only discounts.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={200}>
                <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Bell className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Delivery</h3>
                  <p className="text-gray-600">
                    Automated deliveries based on your schedule and preferences, ensuring you never miss a meal.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={300}>
                <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Personalized Plans</h3>
                  <p className="text-gray-600">
                    Customized meal plans tailored to your dietary goals, preferences, and lifestyle.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Email Signup */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Be the First to Know
            </h2>
            <p className="text-xl mb-8">
              Get notified when our subscription service launches and receive exclusive early-bird offers.
            </p>
            
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                    required
                  />
                  <ShineButton 
                    variant="orange" 
                    type="submit"
                    className="px-6 py-3 whitespace-nowrap"
                  >
                    Notify Me
                  </ShineButton>
                </div>
              </form>
            ) : (
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg max-w-md mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                <p className="text-white/90">
                  We've added you to our notification list. You'll be among the first to hear about our subscription launch!
                </p>
              </div>
            )}
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Subscription;