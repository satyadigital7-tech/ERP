"use client";

import FeatureTemplate from "@/components/sections/FeatureTemplate";

export default function StaffManagementPage() {
  return (
    <FeatureTemplate
      subtitle="Human Capital"
      title="Staff & Payroll Management"
      description="Take care of your staff as well as your students. Manage your workforce, their attendance, performance, and payroll in a single window."
      benefits={[
        "Staff profile & document vault",
        "Biometric attendance management",
        "Automated payroll & tax slips",
        "Leave management & approvals",
        "Performance measurement & feedback"
      ]}
      imageSrc="/images/student-management.png"
    >
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Dr. Anish Kumar", role: "Sr. Faculty", dept: "Science" },
            { name: "Meera Singh", role: "Accountant", dept: "Admin" },
            { name: "Robert Fox", role: "Librarian", dept: "Facility" },
          ].map((staff, i) => (
            <div key={i} className="glass p-6 rounded-3xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                {staff.name[0]}
              </div>
              <div>
                <div className="font-bold text-gray-900 text-sm">{staff.name}</div>
                <div className="text-xs text-gray-500">{staff.role} • {staff.dept}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </FeatureTemplate>
  );
}
