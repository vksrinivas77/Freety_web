import React from 'react';
import { BookOpen, PenTool, Heart, Users } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Blog = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="slide-up">
            <div className="mb-8">
              <BookOpen className="w-24 h-24 mx-auto text-green-500 mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Coming Soon
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8">
                Knowledge is brewing!
              </p>
              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                Get ready for insightful articles, nutrition tips, and wellness stories from fregcy. 
                Our blog will be your go-to source for living a healthier, happier life.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What's Coming */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What's Coming to Our Blog
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We're preparing a wealth of content to support your wellness journey.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="slide-up" delay={100}>
                <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Nutrition Tips</h3>
                  <p className="text-gray-600">
                    Expert advice on healthy eating, meal planning, and making the most of your nutrition.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={200}>
                <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <PenTool className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Wellness Stories</h3>
                  <p className="text-gray-600">
                    Real stories from our community about transformation, health journeys, and lifestyle changes.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={300}>
                <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Community Insights</h3>
                  <p className="text-gray-600">
                    Behind-the-scenes looks at fregcy, ingredient spotlights, and expert interviews.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Preview Content */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                A Preview of What's to Come
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <img 
                  src="https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                  alt="Nutrition article preview" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  "The Science of Afternoon Energy Crashes"
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover why your energy dips at 3 PM and how the right nutrition can keep you energized all day.
                </p>
                <span className="text-sm text-green-600 font-medium">Coming Soon</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <img 
                  src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                  alt="Wellness story preview" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  "From Junk Food to Joy: Sarah's 30-Day Journey"
                </h3>
                <p className="text-gray-600 mb-4">
                  Follow along as one of our founding members transforms her relationship with food.
                </p>
                <span className="text-sm text-green-600 font-medium">Coming Soon</span>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Connected
            </h2>
            <p className="text-xl mb-8">
              While we're preparing our blog, follow us on social media for daily wellness tips and updates.
            </p>
            <div className="flex justify-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-white font-bold">t</span>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-white font-bold">i</span>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Blog;