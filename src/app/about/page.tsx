"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Users, Target, Heart, GraduationCap, Building2, ShieldCheck, Star, Quote, Award } from "lucide-react";

const AboutPage = () => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-slate-50/50">
        <div className="orb w-[600px] h-[600px] bg-primary/10 top-[-10%] left-[-10%]" />
        <div className="orb w-[800px] h-[800px] bg-secondary/15 bottom-[-10%] right-[-10%] delay-700" />
      </div>

      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-slate-100 px-5 py-2.5 rounded-full text-slate-500 font-black text-xs uppercase tracking-widest mb-6 border border-slate-200"
          >
            <Award className="w-4 h-4 text-primary" />
            Global Institutional Recognition
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-10 tracking-tighter leading-tight px-4 pb-2"
          >
            Pioneering the <span className="text-primary italic px-2">Digital Frontier</span>
          </motion.h1>
          <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl mx-auto">
            EduERP was conceived with a singular, unyielding vision: to architect 
            the world's most sophisticated digital infrastructure for educational institutions.
          </p>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="neumorphic p-10 md:p-16 rounded-[48px] md:rounded-[64px] border border-white/60 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] group overflow-hidden relative"
          >
            <div className="bg-primary/10 p-5 rounded-3xl w-fit mb-10 border border-primary/20 group-hover:rotate-12 transition-transform">
              <Target className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl font-black mb-6 text-slate-900 tracking-tight">The Mission</h2>
            <p className="text-slate-500 text-xl leading-relaxed font-medium">
              To engineer seamless, heavy-duty digital frameworks that empower 
              educators to transcend administrative limitations and focus 
              entirely on pedagogical excellence.
            </p>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="neumorphic p-16 rounded-[64px] border border-white/60 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] group overflow-hidden relative"
          >
            <div className="bg-secondary/10 p-5 rounded-3xl w-fit mb-10 border border-secondary/20 group-hover:-rotate-12 transition-transform">
              <Heart className="w-10 h-10 text-secondary" />
            </div>
            <h2 className="text-4xl font-black mb-6 text-slate-900 tracking-tight">The Vision</h2>
            <p className="text-slate-500 text-xl leading-relaxed font-medium">
              To define the global gold standard for educational technology, 
              fostering a frictionless digital ecosystem where precision 
              meets human potential.
            </p>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { label: "Elite Institutions", value: "500+" },
            { label: "Students Empowered", value: "2M+" },
            { label: "Years of Mastery", value: "12+" },
            { label: "Success Concierges", value: "50+" },
          ].map((stat, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="text-4xl md:text-6xl font-black text-slate-900 mb-3 tracking-tighter group-hover:text-primary transition-colors">{stat.value}</div>
              <div className="text-slate-400 font-black uppercase tracking-widest text-xs">{stat.label}</div>
              <div className="w-10 h-1.5 bg-secondary mx-auto mt-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team/Values teaser */}
      <section className="py-16 px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center neumorphic p-10 md:p-24 rounded-[48px] md:rounded-[80px] border border-white/60 relative overflow-hidden group shadow-[0_60px_120px_-20px_rgba(0,0,0,0.15)]"
        >
          <div className="relative z-10">
            <div className="inline-block bg-slate-900 p-4 rounded-3xl mb-10 shadow-xl border border-white/20">
              <GraduationCap className="text-white w-12 h-12" />
            </div>
            <h2 className="text-5xl font-black text-slate-900 mb-10 tracking-tighter leading-none">Built by Visionaries</h2>
            <p className="text-slate-500 text-2xl font-medium leading-relaxed mb-12 max-w-3xl mx-auto">
              Our consortium consists of former elite educators, distinguished school 
              administrators, and world-class engineers who share a singular 
              obsession with institutional perfection.
            </p>
            <div className="flex justify-center -space-x-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10, zIndex: 50 }}
                  className="w-20 h-20 rounded-full bg-slate-200 border-8 border-white shadow-2xl relative overflow-hidden"
                >
                  <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400" />
                </motion.div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] -z-10 group-hover:bg-primary/10 transition-colors" />
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
