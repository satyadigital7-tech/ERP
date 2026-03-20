"use client";

import { motion } from "framer-motion";
import { 
  Users, CreditCard, CalendarCheck, BookOpen, UserCog, 
  BarChart3, Zap, ArrowRight, ShieldCheck, Building2, BrainCircuit
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Student Information (SIS)",
    desc: "360° student lifecycle tracking with biometric enrollment and academic archiving.",
    color: "crimson",
    href: "/features/student-management"
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Fiscal Operations",
    desc: "Sophisticated fee auditing with automated reconciliation and GST-compliant reporting.",
    color: "gold",
    featured: true,
    href: "/features/fee-management"
  },
  {
    icon: <CalendarCheck className="w-8 h-8" />,
    title: "Digital Attendance Hub",
    desc: "AI-enhanced tracking with instant parent-guardian synchronization via WhatsApp.",
    color: "emerald",
    href: "/features/attendance"
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Academic & Exam Engine",
    desc: "Heavy-duty gradebook automation with CBSE/ICSE/IB compliance protocols.",
    color: "sapphire",
    href: "/features/exams"
  },
  {
    icon: <BrainCircuit className="w-8 h-8" />,
    title: "Predictive Analytics",
    desc: "Neural network insights into student performance trajectories and fiscal health.",
    color: "purple",
    href: "/features/ai-insights"
  },
  {
    icon: <UserCog className="w-8 h-8" />,
    title: "Human Capital (HCM)",
    desc: "Elite staff governance with payroll matrix, leave logic, and KRA metrics.",
    color: "indigo",
    href: "/features/staff"
  }
];

const Features = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-slate-100 px-5 py-2.5 rounded-full text-slate-500 font-black text-xs uppercase tracking-widest mb-6 border border-slate-200"
          >
            <Building2 className="w-4 h-4 text-primary" />
            Institutional Architecture
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-tight px-4">
            A Masterclass in <span className="text-primary italic">Precision</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed">
            Our modules are engineered with surgical precision to automate 
            every facet of your institution's digital journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
              viewport={{ once: true }}
              className={`neumorphic p-8 md:p-12 lg:p-16 rounded-[40px] md:rounded-[60px] relative border border-white/60 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] overflow-hidden ${
                f.featured ? "border-secondary/30 ring-8 ring-secondary/5" : "border-white/60"
              }`}
            >
              {f.featured && (
                <div className="absolute top-0 right-0 bg-secondary px-6 py-1.5 rounded-bl-3xl text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                  Most Advanced
                </div>
              )}
              
              <div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-8 neumorphic border-white/80 group-hover:primary-fill transition-all group-hover:scale-110 shadow-lg text-primary">
                {f.icon}
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors tracking-tight">
                {f.title}
              </h3>
              <p className="text-slate-600 mb-10 leading-relaxed font-medium">
                {f.desc}
              </p>
              
              <Link
                href={f.href}
                className="inline-flex items-center text-slate-900 font-black text-sm uppercase tracking-widest gap-2 group/link"
              >
                Explore Module
                <motion.div whileHover={{ x: 5 }}>
                  <ArrowRight className="w-5 h-5 text-primary" />
                </motion.div>
              </Link>

              {/* Decorative inner glow hover */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
