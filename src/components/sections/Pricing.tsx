"use client";

import { Check, Zap, Star, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Foundation",
    price: "₹99",
    desc: "Essential SIS infrastructure for growing schools.",
    features: ["Core Student SIS", "Digital Attendance", "LMS Integration", "Parent Mobile App"],
    accent: "text-slate-900",
    button: "secondary"
  },
  {
    name: "Institutional Pro",
    price: "₹299",
    desc: "The global benchmark for modern institutes.",
    features: ["Everything in Foundation", "Fiscal Ops Engine", "Multi-Campus Sync", "Result Analytics Pro", "Inventory & Assets"],
    popular: true,
    accent: "text-primary",
    button: "gold"
  },
  {
    name: "University Global",
    price: "₹499",
    desc: "Unrivaled power for large-scale educational groups.",
    features: ["Everything in Pro", "Full HCM Payroll", "Biometric Protocols", "Institutional Auditor", "Custom API Hub", "Full White-labeling"],
    accent: "text-accent",
    button: "secondary"
  }
];

const Pricing = () => {
  return (
    <section className="py-16 px-6 relative" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-slate-100 px-5 py-2.5 rounded-full text-slate-500 font-black text-xs uppercase tracking-widest mb-6 border border-slate-200"
          >
            <ShieldCheck className="w-4 h-4 text-primary" />
            Transparent Investment
          </motion.div>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight">
            Plans for Every <span className="italic text-primary">Prestige</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Scalable pricing models engineered to align with your institution's 
            vision and growth trajectory. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -15, scale: 1.02 }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
              className={`neumorphic p-8 md:p-12 rounded-[40px] md:rounded-[56px] relative overflow-hidden transition-all border-2 ${
                plan.popular ? "border-secondary/40 ring-12 ring-secondary/5" : "border-white/60"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-secondary text-white text-[10px] font-black uppercase tracking-widest px-8 py-3 rounded-bl-[32px] shadow-lg flex items-center gap-2">
                  <Star className="w-3 h-3 fill-current" />
                  Most Elite Choice
                </div>
              )}
              
              <div className="mb-10">
                <h3 className={`text-3xl font-black mb-2 tracking-tight ${plan.accent}`}>{plan.name}</h3>
                <p className="text-slate-500 font-medium">{plan.desc}</p>
              </div>

              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-6xl font-black text-slate-900 tracking-tighter">{plan.price}</span>
                <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">/ student / mo</span>
              </div>

              <ul className="space-y-5 mb-12">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-4 text-slate-700 font-semibold group/item">
                    <div className={`p-1 rounded-full shrink-0 shadow-sm border border-white/40 ${plan.popular ? "bg-secondary/20 text-secondary" : "bg-primary/10 text-primary"}`}>
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="group-hover:text-slate-950 transition-colors">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.button as any} 
                className="w-full py-6 text-lg tracking-widest uppercase font-black rounded-3xl"
                size="lg"
              >
                Commence Journey
              </Button>

              {/* Decorative inner glow */}
              <div className={`absolute -bottom-20 -left-20 w-40 h-40 rounded-full blur-3xl opacity-10 ${plan.popular ? "bg-secondary" : "bg-primary"}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
