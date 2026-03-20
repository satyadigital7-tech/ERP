"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { BarChart3, TrendingUp, Brain, Target, Building2, Zap, BrainCircuit, Trophy, ArrowRight } from "lucide-react";

interface FeaturePageProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  imageSrc: string;
  children?: React.ReactNode;
}

const FeaturePage = ({ title, subtitle, description, benefits, imageSrc, children }: FeaturePageProps) => {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Orbs - Moved inside the section below */}

      <Navbar />
      
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-primary/10 text-primary font-black uppercase tracking-[0.2em] text-[10px] mb-6 px-5 py-2 rounded-full border border-primary/20 inline-flex items-center gap-2 shadow-lg shadow-primary/5"
              >
                <Zap className="w-3 h-3" />
                {subtitle}
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter leading-tight pb-2">
                {title} <span className="text-primary italic px-2">Module</span>
              </h1>
              
              <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
                {description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                {benefits.map((benefit, idx) => (
                  <motion.div 
                    key={idx} 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 bg-white/60 p-5 rounded-3xl border border-white/40 shadow-sm"
                  >
                    <div className="bg-emerald-500 p-1.5 rounded-full shadow-lg shadow-emerald-500/20">
                      <BrainCircuit className="text-white w-4 h-4 shrink-0" />
                    </div>
                    <span className="text-slate-700 font-bold text-sm tracking-tight">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex gap-5">
                <Link href="/book-demo">
                  <Button variant="gold" size="lg" className="px-10 py-5 text-lg">
                    Get Started
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary" size="lg" className="px-10 py-5 text-lg neumorphic border-white/50">
                    Consult Sales
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="neumorphic p-6 rounded-[56px] border border-white/60 shadow-2xl relative"
            >
              <div className="rounded-[40px] overflow-hidden shadow-2xl bg-white border border-slate-100">
                <Image
                  src={imageSrc}
                  alt={title}
                  width={1200}
                  height={800}
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              
              {/* Luxury Accent */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 blur-[60px] rounded-full -z-10" />
            </motion.div>
          </div>

          {/* Children / Extra Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-24"
          >
            {children}
          </motion.div>
        </div>
      </section>

      {/* Luxury CTA Block */}
      <section className="py-16 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto neumorphic p-20 rounded-[80px] text-center border-2 border-primary/20 relative overflow-hidden group shadow-[0_50px_100px_-20px_rgba(220,38,38,0.1)]"
        >
          <div className="relative z-10">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
              className="inline-block bg-primary p-4 rounded-3xl mb-8 shadow-xl shadow-primary/30"
            >
              <Trophy className="text-white w-10 h-10" />
            </motion.div>
            <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter">Ready for Infinite <span className="text-primary italic">Potential?</span></h2>
            <p className="text-slate-500 text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
              Join the elite circle of educational institutions scaling 
              at the speed of commerce. Deploy {title.toLowerCase()} today.
            </p>
            <Link href="/book-demo">
              <Button variant="gold" size="lg" className="px-16 py-7 text-2xl h-auto shadow-2xl">
                Activate Live Demo
                <ArrowRight className="ml-3 w-8 h-8" />
              </Button>
            </Link>
          </div>
          
          {/* Animated background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 blur-[100px] -z-10 rounded-full group-hover:bg-primary/10 transition-colors" />
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default FeaturePage;
