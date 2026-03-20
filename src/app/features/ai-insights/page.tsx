"use client";

import FeaturePage from "@/components/sections/FeatureTemplate";
import { BarChart3, TrendingUp, Brain, Target, BrainCircuit, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function AIInsightsPage() {
  return (
    <FeaturePage
      title="AI Insights"
      subtitle="Predictive Intelligence"
      description="Harness the power of advanced neural networks to predict student outcomes, optimize resource allocation, and detect institutional trends before they manifest."
      imageSrc="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop"
      benefits={[
        "Outcome Prediction Engine",
        "Automated Trend Detection",
        "Resource Optimization AI",
        "Behavioral Pattern Analysis",
        "Smart Risk Mitigation",
        "ROI Analytics Dashboard"
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: <Brain className="w-8 h-8" />, title: "Neural Tracking", desc: "Track learning curves and cognitive growth with deep learning models." },
          { icon: <TrendingUp className="w-8 h-8" />, title: "Growth Predictor", desc: "Forecast admission and fee trends for better fiscal planning." },
          { icon: <Target className="w-8 h-8" />, title: "Surgical Precision", desc: "Identify specific areas of institutional friction with AI audits." }
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className="neumorphic p-8 rounded-[40px] border border-white/60"
          >
            <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-inner">
              {item.icon}
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-4">{item.title}</h3>
            <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </FeaturePage>
  );
}
