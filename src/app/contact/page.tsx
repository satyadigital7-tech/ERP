"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building, User, Phone, Mail, CheckCircle2, MailCheck, MessageCircle, Zap, Building2, ShieldCheck
} from "lucide-react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-slate-50/50">
        <div className="orb w-[600px] h-[600px] bg-primary/10 top-[-10%] right-[-10%]" />
        <div className="orb w-[800px] h-[800px] bg-secondary/15 bottom-[-10%] left-[-10%] delay-700" />
      </div>

      <Navbar />

      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-8 px-5 py-2 rounded-full border border-primary/20 shadow-lg shadow-primary/5"
              >
                <Building2 className="w-3 h-3" />
                Strategic Partnership
              </motion.div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-10 tracking-tighter leading-none px-4">
                Architecture of <span className="text-primary italic">Contact</span>
              </h1>
              <p className="text-2xl text-slate-500 mb-12 leading-relaxed font-medium">
                Whether you're ready to deploy or have a specific inquiry, our 
                concierge team is standing by to provide architectural clarity.
              </p>

              <div className="space-y-10 mb-16">
                {[
                  { icon: <CheckCircle2 className="w-8 h-8" />, label: "Elite Implementation Network", sub: "Trusted by 1k+ Distinguished Schools" },
                  { icon: <ShieldCheck className="w-8 h-8" />, label: "Unrivaled Data Sovereignty", sub: "AES-256 Grade Encryption & Governance" },
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="flex gap-8 items-start group"
                  >
                    <div className="neumorphic p-5 rounded-3xl border border-white/80 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-slate-900 tracking-tight mb-1">{item.label}</h4>
                      <p className="text-slate-400 font-bold text-sm uppercase tracking-widest">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-slate-900 p-10 rounded-[48px] border border-white/20 shadow-2xl relative overflow-hidden group"
              >
                <div className="relative z-10 flex items-center gap-6">
                  <div className="p-4 bg-primary/20 rounded-2xl border border-primary/30">
                    <MailCheck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-white tracking-tight mb-2">Concierge Direct</h4>
                    <p className="text-slate-400 font-medium">
                      India: <span className="text-primary font-black">+91 800 555 0199</span><br />
                      Email: <span className="text-primary font-black">prestige@eduerp.tech</span>
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-[80px] -z-10 group-hover:bg-primary/30 transition-colors" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="neumorphic p-12 lg:p-16 rounded-[80px] border-2 border-white/80 shadow-[0_60px_120px_-20px_rgba(30,41,59,0.1)] relative">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20"
                    >
                      <div className="bg-emerald-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-10 shadow-3xl shadow-emerald-500/30 border-8 border-white">
                        <CheckCircle2 className="text-white w-12 h-12" />
                      </div>
                      <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter">Transmission Complete</h2>
                      <p className="text-slate-500 text-xl mb-12 font-medium">
                        Your inquiry has reached our strategic desk. Expect a response from a senior associate within 2 business hours.
                      </p>
                      <Button variant="secondary" size="lg" className="neumorphic rounded-2xl px-12" onClick={() => setSubmitted(false)}>
                        Send Another Note
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
                      <div className="mb-10 text-center">
                        <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                        <h3 className="text-3xl font-black text-slate-900 tracking-tight">Send a Sealed Message</h3>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="group relative">
                          <Building className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-300 group-focus-within:text-primary transition-colors" />
                          <input required type="text" placeholder="Institution Domain" className="w-full bg-white/50 border border-white border-b-4 border-b-slate-100 rounded-[32px] py-5 pl-16 pr-8 outline-none focus:border-primary focus:bg-white focus:shadow-xl transition-all font-bold text-slate-800" />
                        </div>
                        <div className="group relative">
                          <User className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-slate-300 group-focus-within:text-primary transition-colors" />
                          <input required type="text" placeholder="Full Sovereign Name" className="w-full bg-white/50 border border-white border-b-4 border-b-slate-100 rounded-[32px] py-5 pl-16 pr-8 outline-none focus:border-primary focus:bg-white focus:shadow-xl transition-all font-bold text-slate-800" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="group relative">
                            <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
                            <input required type="tel" placeholder="Direct Line" className="w-full bg-white/50 border border-white border-b-4 border-b-slate-100 rounded-[28px] py-5 pl-14 pr-6 outline-none focus:border-primary focus:bg-white focus:shadow-xl transition-all font-bold text-slate-800" />
                          </div>
                          <div className="group relative">
                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-focus-within:text-primary transition-colors" />
                            <input required type="email" placeholder="Secure Mail" className="w-full bg-white/50 border border-white border-b-4 border-b-slate-100 rounded-[28px] py-5 pl-14 pr-6 outline-none focus:border-primary focus:bg-white focus:shadow-xl transition-all font-bold text-slate-800" />
                          </div>
                        </div>
                        <textarea placeholder="How may we assist your institution's growth?" className="w-full bg-white/50 border border-white border-b-4 border-b-slate-100 rounded-[32px] py-6 px-8 outline-none focus:border-primary focus:bg-white focus:shadow-xl transition-all font-bold text-slate-800 min-h-[160px]" />
                      </div>

                      <Button type="submit" variant="gold" size="lg" className="w-full py-7 text-2xl h-auto shadow-2xl shadow-primary/20 rounded-[32px] font-black uppercase tracking-widest">
                        Dispatch Message
                        <Zap className="ml-3 w-6 h-6" />
                      </Button>
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

export default ContactPage;
