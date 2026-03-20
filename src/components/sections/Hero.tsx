"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play, Star, Zap, Building2, ShieldCheck, Trophy } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden min-h-[70vh] flex items-center justify-center">
      {/* Background Cinematic Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full" 
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-5%] w-[900px] h-[900px] bg-secondary/15 blur-[180px] rounded-full" 
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Elite Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-white/40 backdrop-blur-xl px-6 py-2.5 rounded-full text-slate-500 font-black text-xs uppercase tracking-[0.3em] mb-12 border border-white/60 shadow-2xl"
          >
            <Trophy className="w-4 h-4 text-primary animate-bounce" />
            Institutional Governance 2024
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-tight mb-8 tracking-tighter pb-2 capitalize">
            The Digital <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-secondary italic px-2">Nerve Center</span> of Excellence
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate-500 mb-10 leading-relaxed max-w-2xl mx-auto font-medium tracking-tight">
            EduERP is the definitive operating system for high-prestige 
            institutions, unifying SIS, LMS, and Fiscal Ops into a single cinematic interface.
          </p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 flex flex-col items-center gap-4"
          >
            <Link href="/book-demo">
              <Button variant="gold" size="lg" className="h-auto py-7 px-16 text-2xl shadow-[0_30px_60px_-15px_rgba(251,191,36,0.3)] rounded-[32px] group">
                Activate Live Demo
                <ArrowRight className="ml-3 w-8 h-8 transition-transform group-hover:translate-x-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Accents */}
      <div className="absolute bottom-10 left-10 opacity-20 hidden lg:block">
        <ShieldCheck className="w-32 h-32 text-slate-300" />
      </div>
      <div className="absolute top-20 right-10 opacity-20 hidden lg:block">
        <Zap className="w-24 h-24 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
