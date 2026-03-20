"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Monitor, Settings, Smartphone, ShieldCheck, Zap, Building2, Workflow } from "lucide-react";

const steps = [
  {
    icon: <Settings className="w-8 h-8 text-white" />,
    title: "Elite Configuration",
    desc: "Seamlessly import legacy data and tailor the environment to your elite standards.",
    bg: "bg-primary"
  },
  {
    icon: <Monitor className="w-6 h-6 text-white" />,
    title: "Unified Command",
    desc: "Control every administrative node from a single, high-fidelity dashboard.",
    bg: "bg-accent"
  },
  {
    icon: <Building2 className="w-6 h-6 text-white" />,
    title: "Intelligent Scaling",
    desc: "Leverage AI-driven insights to optimize institutional growth and performance.",
    bg: "bg-secondary"
  }
];

const benefits = [
  "40% Increase in Operational Efficiency",
  "90% Reduction in Administrative Latency",
  "2x Growth in Collection Liquidity",
  "Unrivaled Institutional Prestige"
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-6 relative overflow-hidden" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 bg-slate-100 px-5 py-2.5 rounded-full text-slate-500 font-black text-xs uppercase tracking-widest mb-6 border border-slate-200"
            >
              <Workflow className="w-4 h-4 text-primary" />
              Strategic Implementation
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-tight px-4">
              A Masterclass in <span className="text-primary italic">Precision</span>
            </h2>
            <div className="space-y-12">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex gap-8 items-start group"
                >
                  <div className={`${step.bg} p-5 rounded-3xl shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all shrink-0 border border-white/20`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-lg leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="neumorphic p-12 lg:p-16 rounded-[60px] relative border border-white/60 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
          >
            <div className="relative z-10">
              <div className="text-center mb-16">
                <h3 className="text-4xl font-black text-slate-900 mb-10 leading-tight tracking-tight">
                  The Luxury Edge
                </h3>
              </div>
              <div className="space-y-6">
                {benefits.map((benefit, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-5 neumorphic p-6 rounded-[32px] border border-white/40 shadow-sm"
                  >
                    <div className="bg-secondary p-1.5 rounded-full shrink-0 shadow-lg shadow-secondary/20">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-slate-700 font-black text-lg tracking-tight">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Background pattern */}
            <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
              <ShieldCheck className="w-64 h-64 text-primary" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
