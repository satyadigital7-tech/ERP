import { motion } from "framer-motion";

const logos = [
  "Global International", "Saint Mary's", "Oxford Academy", "Elite Public School", "Greenwood High"
];

const TrustedSchools = () => {
  return (
    <section className="py-20 border-y border-gray-100 bg-white/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-gray-400 font-bold uppercase tracking-[0.2em] text-xs mb-10">
          Trusted by 100+ Schools & Colleges Worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo, idx) => (
            <div key={idx} className="text-2xl font-black text-gray-400 hover:text-primary transition-colors cursor-default select-none">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSchools;
