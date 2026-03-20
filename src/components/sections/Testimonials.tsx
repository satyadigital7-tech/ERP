"use client";

import { motion } from "framer-motion";
import { Star, Quote, Award, Building2 } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Jenkins",
    role: "Principal, Global International School",
    content: "EduERP has completely redefined our institutional prestige. The absolute precision in data management is simply unmatched in the market.",
    avatar: "S",
    accent: "bg-primary"
  },
  {
    name: "Mr. Robert Chen",
    role: "Administrator, Collegiate Academy",
    content: "The liquid smooth interface and predictive analytics have saved our educators thousands of hours. It is the gold standard of ERPs.",
    avatar: "R",
    accent: "bg-secondary"
  },
  {
    name: "Mrs. Anita Sharma",
    role: "Director, Green Valley Elite",
    content: "Our fee liquidity improved by 70% within the first quarter. The automated luxury experience for parents has built immense institutional trust.",
    avatar: "A",
    accent: "bg-accent"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 relative overflow-hidden" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-slate-100 px-5 py-2.5 rounded-full text-slate-500 font-black text-xs uppercase tracking-widest mb-6 border border-slate-200"
          >
            <Award className="w-4 h-4 text-primary" />
            Global Institutional Recognition
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-tight px-4">
            Voices of <span className="text-primary italic">Excellence</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Discover why elite educational institutions choose EduERP 
            as their exclusive digital partner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -15, rotate: idx % 2 === 0 ? 1 : -1 }}
              transition={{ delay: idx * 0.2, type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
              className="neumorphic p-8 md:p-12 rounded-[40px] md:rounded-[56px] relative border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] group"
            >
              <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary fill-current" />
              </div>
              
              <div className="flex gap-1.5 mb-8">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-secondary text-secondary shadow-gold" />
                ))}
              </div>
              
              <p className="text-slate-700 text-xl font-medium leading-relaxed mb-10 italic">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-5">
                <div className={`w-14 h-14 rounded-2xl ${t.accent} flex items-center justify-center text-white font-black text-2xl shadow-xl border border-white/20`}>
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg tracking-tight">{t.name}</h4>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
