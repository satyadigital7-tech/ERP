"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";
import { Button } from "./ui/Button";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Features",
      href: "#",
      dropdown: [
        { name: "Student Management", href: "/features/student-management" },
        { name: "Fee Management", href: "/features/fee-management" },
        { name: "Attendance", href: "/features/attendance" },
        { name: "Exams & Reports", href: "/features/exams" },
        { name: "Staff Management", href: "/features/staff" },
      ],
    },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "neumorphic m-4 rounded-[32px] border-white/40 shadow-2xl" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div 
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="bg-gradient-to-br from-primary to-blue-900 p-2 rounded-xl shadow-lg border border-white/20"
          >
            <GraduationCap className="text-white w-6 h-6" />
          </motion.div>
          <span className="text-2xl font-extrabold text-slate-900 flex items-center">
            Edu<span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary px-1">ERP</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              >
                <Link
                  href={link.href}
                  className="text-slate-600 hover:text-primary transition-colors flex items-center gap-1 font-semibold text-sm tracking-wide"
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-4 h-4" />}
                </Link>
              </motion.div>
              {link.dropdown && (
                <div className="absolute top-full left-0 mt-4 w-60 neumorphic rounded-3xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top scale-95 group-hover:scale-100 p-3 border border-white/40 shadow-2xl z-50">
                  {link.dropdown.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-primary/5 hover:text-primary rounded-2xl transition-all"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/book-demo">
            <Button variant="gold" size="md">
              Book Demo
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2 rounded-xl hov-bg-gray-100" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6 text-slate-900" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden neumorphic mt-4 rounded-3xl overflow-hidden border border-white/40 shadow-2xl"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => !link.dropdown && setIsOpen(false)}
                    className="text-lg font-bold text-slate-800 hover:text-primary block flex items-center justify-between"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="mt-4 ml-4 space-y-3 border-l-2 border-primary/10 pl-4">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block text-slate-600 hover:text-primary font-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/book-demo" onClick={() => setIsOpen(false)}>
                <Button variant="gold" size="lg" className="w-full mt-4">
                  Book Demo
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
