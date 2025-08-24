import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ShineButton from "../components/ShineButton"; // ✅ import your ShineButton

const fadeInUp = {
  hidden: { opacity: 0, y: 
    30 },
  visible: { opacity: 1, y: 0 },
};

const About: React.FC = () => {
  return (
    <div className="bg-white text-fregacy-dark-gray">
      {/* Hero Banner Section */}
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
          alt="Creators Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="relative z-10 text-4xl md:text-6xl font-extrabold text-white drop-shadow-xl px-4"
        >
          Our Story
        </motion.h1>
      </section>

      {/* Story Section */}
      <section className="px-6 md:px-16 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-fregacy-green">
            How Fregacy Started
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Fregacy was born out of a simple idea — to create a platform that
            makes content creation easy, enjoyable, and accessible for everyone.
            We noticed how complicated and overwhelming existing tools were for
            many creators. So, we decided to change that.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From brainstorming late nights to building prototypes, our journey
            has always been driven by one mission: empower creators to focus on
            their creativity while we take care of the technology.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Today, Fregacy is more than just a tool — it’s a growing community
            of creators, innovators, and dreamers.
          </p>
        </motion.div>

        {/* Image */}
        <motion.img
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
          alt="Team working"
          className="rounded-2xl shadow-lg w-full object-cover max-h-[400px]"
        />
      </section>

      {/* Vision & Mission */}
      <section className="px-6 md:px-16 py-16 bg-gradient-to-r from-fregacy-soft-green/30 to-white">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Vision */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-fregacy-green">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To become the go-to platform for every creator — whether beginner
              or pro. We want to simplify editing and storytelling so creators
              can bring their ideas to life without limits.
            </p>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=700&q=80"
              alt="Vision"
              className="rounded-xl shadow-md w-full max-h-[300px] object-cover"
            />
          </motion.div>

          {/* Mission */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-fregacy-green">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To break down the barriers of complex editing tools and create an
              intuitive, smooth, and powerful experience that fuels creativity
              and inspires millions.
            </p>
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=700&q=80"
              alt="Mission"
              className="rounded-xl shadow-md w-full max-h-[300px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center px-6 py-20">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-fregacy-green"
        >
          The Journey is Just Beginning
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-6 text-lg text-gray-700 max-w-2xl mx-auto"
        >
          Join us in shaping the future of content creation. Together, we can
          build something truly remarkable.
        </motion.p>

        {/* ✅ Shiny Button integrated here */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-10 flex justify-center"
        >
          <ShineButton variant="orange" className="flex items-center gap-2">
            Get Started <ArrowRight className="w-5 h-5" />
          </ShineButton>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
