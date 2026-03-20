"use client";

import FeatureTemplate from "@/components/sections/FeatureTemplate";

export default function StudentManagementPage() {
  return (
    <FeatureTemplate
      subtitle="Academic Excellence"
      title="Student Management System"
      description="Effortlessly manage your entire student lifecycle, from initial enrollment to graduation. Our centralized database ensures all student information is just a click away."
      benefits={[
        "360-degree student profiles",
        "Digital admission workflows",
        "Academic history & documents",
        "Disciplinary & health records",
        "Parent portal integration"
      ]}
      imageSrc="/images/student-management.png"
    >
      <section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Active Students", value: "1,240" },
            { label: "New Admissions", value: "85" },
            { label: "Male/Female", value: "52/48%" },
            { label: "Avg. Attendance", value: "94%" },
          ].map((stat, i) => (
            <div key={i} className="glass p-6 rounded-2xl border-primary/5">
              <div className="text-sm text-gray-500 mb-1">{stat.label}</div>
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>
    </FeatureTemplate>
  );
}
