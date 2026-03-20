"use client";

import FeatureTemplate from "@/components/sections/FeatureTemplate";

export default function ExamsPage() {
  return (
    <FeatureTemplate
      subtitle="Academic Analytics"
      title="Exams & Grading System"
      description="Manage the entire examination process with ease. From setting up exams to publishing results and providing career analytics."
      benefits={[
        "Custom grading scale setup",
        "Automated marksheet generation",
        "Subject-wise performance tracking",
        "Grade analysis & ranking",
        "Digital report card distribution"
      ]}
      imageSrc="/images/hero-dashboard.png"
    >
      <section className="py-12">
        <div className="glass overflow-hidden rounded-[32px] border-indigo-100/50">
          <table className="w-full text-left">
            <thead className="bg-indigo-50/50">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-indigo-600 uppercase">Student Name</th>
                <th className="px-6 py-4 text-xs font-bold text-indigo-600 uppercase">Grade</th>
                <th className="px-6 py-4 text-xs font-bold text-indigo-600 uppercase">Percentile</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: "Rahul V.", grade: "A+", pc: "98.2" },
                { name: "Priya K.", grade: "A", pc: "94.5" },
                { name: "Amit S.", grade: "B+", pc: "88.1" },
              ].map((row, i) => (
                <tr key={i}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.name}</td>
                  <td className="px-6 py-4 text-sm text-primary font-bold">{row.grade}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{row.pc}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </FeatureTemplate>
  );
}
