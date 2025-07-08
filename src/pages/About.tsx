import React from 'react';
import { Clock, Users, Heart, Star, Target, Zap, CheckCircle, Lightbulb, Award } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import ShineButton from '../components/ShineButton';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-blue-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-5"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="slide-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Night That Changed Everything
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              How Being Really Hungry, Started Our Company
            </p>
            <p className="text-lg text-green-600 font-medium italic">
              "Fresh Choices for a Vibrant Life."
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The Story Begins */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 animate-pulse-glow">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    It All Began With a Growling Stomach
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Imagine this, It's 9:47 PM on a Tuesday night. Jay just finished working out at the office gym. 
                  He was tired, sweaty, but felt great. He promised himself he would eat healthy this week. 
                  But standing in the parking lot, he looked around. What could he eat?
                </p>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 hover:shadow-lg transition-shadow duration-300">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Old pizza from the shop next door. A protein bar that tasted like cardboard. Greasy food 
                    that would ruin his workout. <span className="font-semibold text-red-600 animate-pulse">Does this sound like you?</span>
                  </p>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  This wasn't just Jay's problem. Priya had the same issue when she worked late. Balaji faced 
                  it when the office food court closed early. It was happening to all of us. Every single day.
                </p>
              </div>
              <AnimatedSection animation="slide-left" delay={200}>
                <div className="relative hover-lift">
                  <img 
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                    alt="Late night at the office" 
                    className="w-full h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg animate-bounce-in">
                    <p className="text-sm font-medium text-gray-800">The moment of realization</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* The Big Question - Enhanced */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Big Question
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We were tired of this cycle. We wanted to eat healthy but only had junk food around us. 
                We talked about wellness but ate whatever was easy to find. So we asked ourselves:
              </p>
              <div className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 p-6 rounded-2xl mb-6 hover:shadow-lg transition-all duration-300">
                <p className="text-xl font-semibold text-green-700">
                  'What if healthy food was as easy to get as a <span className="text-blue-600 glow-text">cold drink</span>?'
                </p>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Not tomorrow. Not when we had more time. Not when we planned better. Right now. When we really needed it.
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* How Fretty Was Born */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection animation="slide-right" delay={200}>
                <div className="relative hover-lift">
                  <img 
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                    alt="Brainstorming session" 
                    className="w-full h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg animate-bounce-in">
                    <div className="flex items-center space-x-2">
                      <Lightbulb className="w-6 h-6 text-yellow-500 animate-pulse" />
                      <span className="font-semibold text-gray-800">The Idea</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    How Fretty Was Born
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Fretty didn't start in a fancy office. It started in gym parking lots. In office hallways 
                  late at night. In college cafeterias where 'healthy' meant taking the top off a burger.
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6 hover:shadow-lg transition-shadow duration-300">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We didn't want to start just another food company. We wanted to fix a real problem. 
                    A problem that was hurting millions of people like us.
                  </p>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  People who wanted to eat better but felt stuck. People who were tired of choosing between 
                  their health goals and their busy lives. People who deserved better choices.
                </p>
                <p className="text-lg text-green-600 font-medium italic">
                  "Nourish Smart, Live Fretty!"
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* What Makes Us Different */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Makes Us Different
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
                We're not just another food company. We're solving real problems with innovative solutions.
              </p>
              <p className="text-lg text-green-600 font-medium italic">
                "Salads Simplified: Fresh, Fast, Flavorful!"
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection animation="slide-up" delay={100}>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-hover group">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:animate-bounce">
                    <Heart className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Made Fresh Every Day</h3>
                  <p className="text-gray-600">
                    Other companies make salads on Monday for people to eat on Friday. We make ours fresh 
                    every morning. That crunch you taste? That's today's lettuce.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={200}>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-hover group">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:animate-bounce">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Make It Your Way</h3>
                  <p className="text-gray-600">
                    Don't settle for what someone else thinks is healthy. Build your perfect salad on our app. 
                    Or pick one of our chef's favorites. Either way, it's made just for you.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={300}>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-hover group">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:animate-bounce">
                    <Star className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">We Tell You Everything</h3>
                  <p className="text-gray-600">
                    Every ingredient listed. Every calorie counted. You'll know exactly what's in your Fretty salad.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={400}>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-hover group">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:animate-bounce">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Open When You Need Us</h3>
                  <p className="text-gray-600">
                    Hungry at 6 AM before your workout? We're there. Need food at 11 PM after studying? We're there too.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-up" delay={500}>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-hover group">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 group-hover:animate-bounce">
                    <Zap className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Clean and Safe</h3>
                  <p className="text-gray-600">
                    From our kitchen to your hands, no one else touches your food. Just you and your salad.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* We Failed. A Lot. */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    We Failed. A Lot.
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Let's be honest – we messed up many times. Our first vending machine idea flopped, we pivoted a lot in ideas than any business could. Almost every person we met was fascinated by our idea, but they roasted us more with inefficiencies that we might face if we go ahead with this business.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We spent all our money and worked all night. We wondered if we were crazy. But our failures taught us important things:
                </p>
                <div className="space-y-4 mb-6">
                  <AnimatedSection animation="slide-right" delay={100}>
                    <div className="flex items-start space-x-3 bg-green-50 p-3 rounded-lg hover:shadow-md transition-shadow duration-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0 animate-pulse" />
                      <p className="text-gray-600">Every bad salad showed us how to keep food fresh.</p>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="slide-right" delay={200}>
                    <div className="flex items-start space-x-3 bg-blue-50 p-3 rounded-lg hover:shadow-md transition-shadow duration-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0 animate-pulse" />
                      <p className="text-gray-600">Every app crash taught us what people really wanted.</p>
                    </div>
                  </AnimatedSection>
                  <AnimatedSection animation="slide-right" delay={300}>
                    <div className="flex items-start space-x-3 bg-purple-50 p-3 rounded-lg hover:shadow-md transition-shadow duration-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0 animate-pulse" />
                      <p className="text-gray-600">Every problem made us ask: 'Are we making this easier for someone who just wants to eat well?'</p>
                    </div>
                  </AnimatedSection>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg hover:shadow-lg transition-shadow duration-300">
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Those failures were hard. But we needed them. Today, every salad we serve is powered by those mistakes we'll never forget.
                  </p>
                </div>
              </div>
              <AnimatedSection animation="slide-left" delay={200}>
                <div className="relative hover-lift">
                  <img 
                    src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                    alt="Learning from challenges" 
                    className="w-full h-auto rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-lg animate-bounce-in">
                    <div className="flex items-center space-x-2">
                      <Award className="w-6 h-6 text-blue-500" />
                      <span className="font-semibold text-gray-800">Growth</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* How We Know We're Winning - Enhanced */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Real Lives. Real Wins.
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We don't measure success by how many machines we have or salads we sell. We measure it by real transformations.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection animation="slide-right" delay={100}>
                <div className="bg-gradient-to-br from-blue-50 to-purple-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-hover">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">👩‍💻</span>
                    <h3 className="text-lg font-bold text-gray-900">The Office Worker</h3>
                  </div>
                  <p className="text-gray-600">Who doesn't have energy crash at 3 PM anymore</p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-left" delay={200}>
                <div className="bg-gradient-to-br from-green-50 to-blue-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-hover">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">🎓</span>
                    <h3 className="text-lg font-bold text-gray-900">The College Student</h3>
                  </div>
                  <p className="text-gray-600">Who stopped living on instant noodles</p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-right" delay={300}>
                <div className="bg-gradient-to-br from-pink-50 to-orange-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-hover">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">🤱</span>
                    <h3 className="text-lg font-bold text-gray-900">The Busy Mom</h3>
                  </div>
                  <p className="text-gray-600">Who found 5 minutes to take care of herself</p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slide-left" delay={400}>
                <div className="bg-gradient-to-br from-orange-50 to-red-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 card-hover">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">💪</span>
                    <h3 className="text-lg font-bold text-gray-900">The Gym Person</h3>
                  </div>
                  <p className="text-gray-600">Who learned that what you eat matters as much as how you exercise</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Big Dream */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-gradient-to-r from-green-500 to-blue-500 text-white relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Big Dream
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              We believe eating healthy should be normal, not hard. You shouldn't need to spend your Sunday 
              preparing meals for the whole week. You shouldn't need to be a nutrition expert to make a good 
              choice of food that fuels your body.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/20 transition-all duration-300">
              <p className="text-lg leading-relaxed mb-4">
                Here's what we want: Every college, every office, every gym, every train station in India 
                should have a Fretty nearby. Not because we want to sell more salads. Because we want to 
                remove every excuse between you and being healthy.
              </p>
              <p className="text-xl text-yellow-300 font-medium italic">
                "Fresh Choices, Healthier Future!"
              </p>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* What We Promise You - Enhanced */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-3xl shadow-xl border-2 border-green-100 hover:shadow-2xl transition-all duration-500">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 relative">
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  What We Promise You
                </span>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
              </h2>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  We promise you'll never have to choose between <span className="text-green-600 font-bold glow-text">fast and healthy</span> again. 
                  We promise to be honest – what you see is what you get. We promise to be there when you need us – 
                  not just when it's easy for us. And we promise to keep making 'fast food' mean something good. 
                  Because you deserve food that helps your dreams, not just fills your stomach.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Join Us - Enhanced */}
      <AnimatedSection animation="fade-in">
        <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
          {/* Animated background leaves */}
          <div className="absolute top-20 left-20 w-8 h-8 text-green-300 animate-float opacity-30">🍃</div>
          <div className="absolute bottom-20 right-20 w-8 h-8 text-green-300 animate-float opacity-30" style={{animationDelay: '1.5s'}}>🍃</div>
          <div className="absolute top-1/2 right-1/4 w-6 h-6 text-green-300 animate-float opacity-30" style={{animationDelay: '3s'}}>🍃</div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/50">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 animate-bounce-in">
                Join Us
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                This isn't just our story anymore. It's becoming everyone's story. Every person who picks 
                Fretty over junk food isn't just buying something. They're saying something.
              </p>
              
              <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-2xl mb-8 hover:shadow-lg transition-all duration-300">
                <div className="text-6xl mb-4">💭</div>
                <blockquote className="text-xl font-semibold text-gray-800 italic leading-relaxed">
                  "I deserve better. My goals matter. My health is worth 
                  <span className="inline-flex items-center mx-2 text-green-600">
                    <span className="animate-pulse">3 mins</span>
                    <span className="ml-1 text-2xl">⏱️</span>
                  </span>
                  of my time in choosing right food."
                </blockquote>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our story started with a hungry stomach at 9:47 PM. But it continues every time you make a choice. 
                Ready to be part of something bigger than lunch?
              </p>
              
              <div className="space-y-4 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 animate-bounce-in">Welcome to Fretty</h3>
                <p className="text-lg text-gray-600">
                  Where taking care of yourself isn't extra work. It's the main thing!!!
                </p>
                <p className="text-lg text-green-600 font-medium italic">
                  "Your Salad, Your Way, Anytime!"
                </p>
                <p className="text-sm text-gray-500 bg-gray-50 p-4 rounded-lg">
                  Still reading? That means you care about more than just easy food. You care about easy health. 
                  And that's exactly why we started this company. For people like you :)
                </p>
              </div>
              
              <div className="mt-8">
                <Link to="/subscription">
                  <ShineButton variant="orange" className="text-lg px-8 py-4 cta-shine hover:scale-110 transition-transform duration-300">
                    Start Your Journey Today
                  </ShineButton>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default About;