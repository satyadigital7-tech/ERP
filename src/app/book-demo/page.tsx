"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, Clock, CheckCircle2, Video, Building, User, Mail, Phone, Crown, ShieldCheck, Zap, Trophy, Building2
} from "lucide-react";

const BookDemoPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-slate-50/50">
        <div className="orb w-[500px] h-[500px] bg-primary/10 top-[-5%] left-[-5%]" />
        <div className="orb w-[700px] h-[700px] bg-secondary/15 bottom-[-10%] right-[-5%] delay-500" />
      </div>

      <Navbar />
      
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/10 text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-8 px-6 py-2.5 rounded-full border border-primary/20 inline-flex items-center gap-2 shadow-lg shadow-primary/5"
              >
                <Trophy className="w-3 h-3" />
                Exclusive Concierge Access
              </motion.div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-none px-4">
                Experience Institutional <span className="text-primary italic">Amnesty</span>
              </h1>
              <p className="text-2xl text-slate-500 mb-12 leading-relaxed font-medium">
                Reserve your 45-minute architectural consultation. Discover how 
                our elite ERP framework silences operational noise and amplifies prestige.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
                {[
                  { icon: <Video className="w-6 h-6" />, text: "4K Interactive Walkthrough", color: "text-primary bg-primary/10" },
                  { icon: <Clock className="w-6 h-6" />, text: "Operational Audit Sync", color: "text-secondary bg-secondary/10" },
                  { icon: <ShieldCheck className="w-6 h-6" />, text: "Elite Module Exploration", color: "text-amber-500 bg-amber-50" },
                  { icon: <ShieldCheck className="w-6 h-6" />, text: "Zero Impact Guarantee", color: "text-emerald-500 bg-emerald-50" },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex gap-4 items-center bg-white/60 p-5 rounded-[28px] border border-white/40 shadow-sm"
                  >
                    <div className={`${item.color} p-3 rounded-2xl shadow-inner`}>
                      {item.icon}
                    </div>
                    <span className="text-lg font-black text-slate-800 tracking-tight">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="neumorphic p-10 rounded-[48px] border border-white/80 shadow-2xl relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <div className="flex gap-1.5 mb-6">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 text-secondary fill-current" />)}
                  </div>
                  <blockquote className="text-slate-700 text-xl font-bold italic mb-6 leading-relaxed">
                    "The consultation revealed efficiencies we hadn't even categorized yet. It's transformed our board reports."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white font-black text-2xl shadow-xl">
                      S
                    </div>
                    <div>
                      <div className="font-black text-slate-900 text-lg tracking-tight">Executive Director Varma</div>
                      <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Imperial College Consortium</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="sticky top-32"
            >
              <div className="neumorphic p-8 md:p-12 lg:p-16 rounded-[48px] md:rounded-[80px] border-2 border-white/80 shadow-[0_60px_120px_-20px_rgba(220,38,38,0.1)] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="text-center py-20"
                    >
                      <motion.div 
                        initial={{ rotate: -10, scale: 0.5 }}
                        animate={{ rotate: 0, scale: 1 }}
                        className="bg-emerald-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-10 shadow-3xl shadow-emerald-500/30 border-8 border-white"
                      >
                        <CheckCircle2 className="text-white w-12 h-12" />
                      </motion.div>
                      <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter">Request Received</h2>
                      <p className="text-slate-500 text-xl mb-12 font-medium">
                        Your dedicated success concierge will contact you within 60 minutes to finalize your elite consultation window.
                      </p>
                      <Button variant="secondary" size="lg" className="neumorphic rounded-2xl px-12" onClick={() => setSubmitted(false)}>
                        Reserve Another Window
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      onSubmit={handleSubmit} 
                      className="space-y-8"
                    >
                      <div className="mb-10">
                        <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Secure Your Session</h3>
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">High Fidelity Consultation</p>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="group relative">
                          <Building className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-300 group-focus-within:text-primary transition-colors" />
                          <input required type="text" placeholder="Institution Name" className="w-full bg-white/50 border border-white border-b-4 border-b-slate-100 rounded-[32px] py-6 pl-16 pr-8 outline-none focus:border-primary focus:bg-white focus:shadow-xl transition-all font-bold text-slate-800 placeholder:text-slate-300" />
                        </div>
                        <div className="group relative">
                          <User className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-300 group-focus-within:text-primary transition-colors" />
                          <input required type="text" placeholder="Your Full Character" className="w-full bg-white/50 border border-white border-b-4 border-b-slate-100 rounded-[32px] py-6 pl-16 pr-8 outline-none focus:border-primary focus:bg-white focus:shadow-xl transition-all font-bold text-slate-800 placeholder:text-slate-300" />
                        </div>
                        <div className="group relative">
                          <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-300 group-focus-within:text-primary transition-colors" />
                          <input required type="email" placeholder="Official Business Email" className="w-full bg-white/50 border border-white border-b-4 border-b-slate-100 rounded-[32px] py-6 pl-16 pr-8 outline-none focus:border-primary focus:bg-white focus:shadow-xl transition-all font-bold text-slate-800 placeholder:text-slate-300" />
                        </div>
                        <div className="group relative">
                          <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-300 group-focus-within:text-primary transition-colors" />
                          <input required type="tel" placeholder="Secure Phone Line" className="w-full bg-white/50 border border-white border-b-4 border-b-slate-100 rounded-[32px] py-6 pl-16 pr-8 outline-none focus:border-primary focus:bg-white focus:shadow-xl transition-all font-bold text-slate-800 placeholder:text-slate-300" />
                        </div>
                      </div>

                      <Button type="submit" variant="gold" size="lg" className="w-full py-8 text-2xl h-auto shadow-2xl shadow-primary/20 rounded-[32px] font-black uppercase tracking-widest">
                        Activate Request
                        <Zap className="ml-3 w-6 h-6" />
                      </Button>
                      
                      <p className="text-center text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-6">
                        Personalized Session • No Commitment • Enterprise Grade
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
                
                {/* Accent glow line */}
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default BookDemoPage;
