"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const screenshots = [
  {
    title: "Comprehensive Dashboard",
    image: "/images/hero-dashboard.png",
    desc: "Get a bird's eye view of your entire institution's performance at a glance."
  },
  {
    title: "Student Management",
    image: "/images/student-management.png",
    desc: "Manage student profiles, admissions, and academic records with ease."
  },
  {
    title: "Fee Management",
    image: "/images/fee-dashboard.png",
    desc: "Track revenue, pending payments, and generate digital invoices instantly."
  }
];

const ProductScreenshots = () => {
  return (
    <section className="py-24 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience the Interface</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            A beautiful, intuitive, and modern interface designed for ease of use by teachers and admins.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {screenshots.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="glass p-6 rounded-[32px] group"
            >
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductScreenshots;
