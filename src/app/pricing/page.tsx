"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import { motion, AnimatePresence } from "framer-motion";
import { Check, HelpCircle, ChevronDown, Sparkles, MessageCircle } from "lucide-react";
import { useState } from "react";

const PricingPage = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { q: "Is there a setup fee?", a: "No, we believe in a friction-less partnership. No hidden setup or implementation costs across any plan." },
    { q: "Can we switch plans later?", a: "Absolutely. Our platform is engineered for scalability. You can upgrade or refine your plan instantly from your dashboard." },
    { q: "Do you offer discounts for rural excellence centers?", a: "Yes, we have dedicated CSR programs providing up to 50% subsidy for rural non-profit institutions." },
    { q: "How secure is our institutional legacy data?", a: "We utilize 256-bit bank-grade encryption and multi-region redundancy to ensure your data remains inviolable." }
  ];

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="orb w-[600px] h-[600px] bg-primary/10 top-[-10%] left-[-10%]" />
        <div className="orb w-[800px] h-[800px] bg-secondary/15 bottom-[-10%] right-[-10%] delay-700" />
      </div>

      <Navbar />
      
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md px-5 py-2 rounded-full text-slate-500 font-black text-xs uppercase tracking-widest mb-8 border border-white/40 shadow-xl"
          >
            <Sparkles className="w-4 h-4 text-secondary" />
            Curated For Excellence
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-tight px-4 pb-2"
          >
            Invest in <span className="text-primary italic px-2">Excellence</span>
          </motion.h1>
          <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            Secure your institution's digital future with simple, 
            scalable investment models that empower growth.
          </p>
        </div>
      </section>

      <Pricing />

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 flex items-center justify-center gap-4 tracking-tight">
              <MessageCircle className="text-primary w-10 h-10" />
              Curiosity & Clarification
            </h2>
            <p className="text-slate-500 font-medium italic">Everything you need to know about partnering with EduERP.</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="neumorphic rounded-[32px] border border-white/60 shadow-lg overflow-hidden"
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-8 text-left flex items-center justify-between group"
                >
                  <h4 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-primary transition-colors">
                    {faq.q}
                  </h4>
                  <motion.div
                    animate={{ rotate: activeFaq === idx ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ChevronDown className={activeFaq === idx ? "text-primary" : "text-slate-400"} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-8 pb-8"
                    >
                      <p className="text-slate-600 text-lg leading-relaxed font-medium pt-4 border-t border-slate-100">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Footer />
    </main>
  );
};

export default PricingPage;
