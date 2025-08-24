import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Send, ArrowRight } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import ShineButton from "../components/ShineButton";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // simple, inline validation helpers (optional)
  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !isEmail(formData.email) || !formData.subject.trim() || !formData.message.trim()) {
      alert("Please fill all fields with a valid email.");
      return;
    }
    // send to backend here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="pt-16 text-gray-900">
      <style>{`
        /* subtle glow for WhatsApp chip */
        @keyframes gold-glow {
          0%, 70%, 100% { filter: drop-shadow(0 0 0 rgba(234,179,8,0)); }
          75% { filter: drop-shadow(0 0 10px rgba(234,179,8,.45)); }
          85% { filter: drop-shadow(0 0 6px rgba(234,179,8,.25)); }
        }
        .glow { animation: gold-glow 5s ease-in-out infinite; }
      `}</style>

      {/* Hero Section (match salads banner) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#B7E4C7] via-white to-[#FAFAFA] py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <AnimatedSection animation="slide-up">
            <h1 className="text-[clamp(28px,6vw,52px)] font-extrabold">Get in Touch</h1>
            <p className="mt-3 text-[clamp(14px,2.6vw,18px)] text-gray-700/90 max-w-3xl mx-auto">
              Have questions or need help? We’d love to hear from you. Your feedback helps us make Fregcy even better.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">

            {/* Contact Information */}
            <AnimatedSection animation="slide-right">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold">📞 Have Questions or Need Help?</h2>
                  <p className="mt-2 text-gray-700">
                    Reach us by email, phone, or WhatsApp. We’re quick, friendly, and focused on solving problems fast.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-green-100">
                      <Mail className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email Us</h3>
                      <p className="text-gray-800">hello@fregcy.com</p>
                      <p className="text-gray-600 text-sm">Replies within 24 hrs (Mon–Sat)</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-100">
                      <Phone className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Call Us</h3>
                      <p className="text-gray-800">+91 80728 67181</p>
                      <p className="text-gray-600 text-sm">Live support from 9 AM – 8 PM</p>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-emerald-100">
                      <MessageSquare className="w-6 h-6 text-emerald-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">WhatsApp Support</h3>
                      <p className="text-gray-700">
                        Direct chat for subscribers, custom support & real-time order queries.
                      </p>
                      <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-800 px-3 py-1 glow">
                        Available fast
                        <span className="inline-flex">
                          <ArrowRight className="w-4 h-4 text-yellow-500" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Location teaser */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-orange-100">
                      <MapPin className="w-6 h-6 text-orange-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Locations</h3>
                      <p className="text-gray-700">TCS Bangalore (B3), IIM Bangalore, Anytime Fitness – Koramangala</p>
                      <p className="text-gray-600 text-sm">More launching soon.</p>
                    </div>
                  </div>

                  {/* Community CTA */}
                  <div className="rounded-xl p-5 bg-gradient-to-r from-[#D8F3DC] via-white to-[#FFE0D1] border border-black/5">
                    <h3 className="text-lg font-semibold">Join our Wellness Community</h3>
                    <p className="text-gray-700 mt-1">
                      Tips, Q&As, and motivation in our WhatsApp circle.
                    </p>
                    <button className="mt-2 text-[#2D6A4F] font-semibold hover:underline inline-flex items-center gap-1">
                      Join Now <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="slide-left" delay={150}>
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold">Send Us a Message</h2>

                {isSubmitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-700" />
                    </div>
                    <h3 className="text-xl font-semibold">Message Sent!</h3>
                    <p className="text-gray-700 mt-1">Thanks for reaching out. We’ll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help?"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us what's on your mind..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D6A4F] focus:border-transparent resize-y"
                      />
                    </div>

                    <ShineButton type="submit" variant="primary" className="w-full py-3 text-base">
                      Send Message
                    </ShineButton>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map / Locations (kept as teaser; replace with real map later) */}
      <AnimatedSection animation="fade-in">
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold">Coming to a Location Near You</h2>
              <p className="mt-2 text-gray-700">
                We’re expanding to make clean eating accessible everywhere.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-black/5 overflow-hidden">
              <div className="h-80 sm:h-96 bg-gradient-to-br from-green-100 to-[#FFE0D1] flex items-center justify-center">
                <div className="text-center px-4">
                  <MapPin className="w-14 h-14 sm:w-16 sm:h-16 mx-auto text-[#2D6A4F] mb-4" />
                  <h3 className="text-xl font-semibold">Interactive Map Coming Soon</h3>
                  <p className="text-gray-700 mt-1">
                    Find Fregcy machines near you and track new launches in real time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default Contact;
