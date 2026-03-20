"use client";

import Link from "next/link";
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Zap } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative mt-16 pt-16 pb-12 px-6 overflow-hidden border-t border-white/40">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="space-y-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-primary to-slate-900 p-2.5 rounded-xl shadow-lg border border-white/20">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-slate-900">Edu<span className="text-primary tracking-tighter">ERP</span></span>
          </Link>
          <p className="text-slate-500 font-medium leading-relaxed">
            Redefining institutional excellence through elite cloud management 
            and precision-engineered educational tools.
          </p>
          <div className="flex gap-4">
            {[Linkedin, Instagram, Twitter].map((Icon, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-12 h-12 neumorphic flex items-center justify-center rounded-2xl text-slate-400 hover:text-primary transition-colors border border-white/60"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-black text-slate-900 mb-8 text-sm uppercase tracking-widest flex items-center gap-2">
            <div className="w-1.5 h-6 bg-primary rounded-full" />
            Product Elite
          </h4>
          <ul className="space-y-4">
            {['Features', 'Pricing', 'Security', 'Integrations'].map((link) => (
              <li key={link}>
                <Link href="#" className="text-slate-500 hover:text-primary font-bold transition-all hover:translate-x-2 inline-block">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-black text-slate-900 mb-8 text-sm uppercase tracking-widest flex items-center gap-2">
            <div className="w-1.5 h-6 bg-secondary rounded-full" />
            Institutional
          </h4>
          <ul className="space-y-4">
            {['About Us', 'Careers', 'Blog', 'Contact'].map((link) => (
              <li key={link}>
                <Link href="#" className="text-slate-500 hover:text-primary font-bold transition-all hover:translate-x-2 inline-block">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-black text-slate-900 mb-8 text-sm uppercase tracking-widest flex items-center gap-2">
            <div className="w-1.5 h-6 bg-slate-900 rounded-full" />
            Concierge
          </h4>
          <ul className="space-y-6">
            <li className="flex items-center gap-4 text-slate-500 font-medium group">
              <div className="bg-slate-100 p-2 rounded-xl group-hover:bg-primary/10 transition-colors">
                <MapPin className="w-4 h-4 group-hover:text-primary" />
              </div>
              <span className="text-sm">Hitech City, Hyderabad, IN</span>
            </li>
            <li className="flex items-center gap-4 text-slate-500 font-medium group">
              <div className="bg-slate-100 p-2 rounded-xl group-hover:bg-primary/10 transition-colors">
                <Mail className="w-4 h-4 group-hover:text-primary" />
              </div>
              <span className="text-sm">concierge@eduerp.tech</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-400 text-xs font-bold tracking-widest">© 2024 EDUERP PRESTIGE. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-10">
          <Link href="#" className="text-xs font-bold text-slate-400 hover:text-primary uppercase tracking-widest transition-colors">Privacy Architecture</Link>
          <Link href="#" className="text-xs font-bold text-slate-400 hover:text-primary uppercase tracking-widest transition-colors">Governance Terms</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
