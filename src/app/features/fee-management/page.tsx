"use client";

import FeatureTemplate from "@/components/sections/FeatureTemplate";

export default function FeeManagementPage() {
  return (
    <FeatureTemplate
      subtitle="Financial Control"
      title="Automated Fee Management"
      description="Say goodbye to manual fee collection and reconciliation. Our automated system handles billing, reminders, and online payments with 100% accuracy."
      benefits={[
        "Custom fee structure setup",
        "Online payment gateway integration",
        "Automated late fee calculations",
        "Instant digital receipts",
        "Real-time revenue analytics"
      ]}
      imageSrc="/images/fee-dashboard.png"
    >
      <section className="py-12">
        <div className="glass p-8 rounded-[40px] bg-emerald-50/30 border-emerald-100/50">
          <h3 className="text-2xl font-bold mb-6 text-gray-900">Collection Overview</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm font-medium">
              <span className="text-gray-600">Total Collected (This Month)</span>
              <span className="text-emerald-600">₹12,40,000</span>
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full w-[85%]" />
            </div>
            <p className="text-xs text-gray-500 italic">* 85% of total projected fees collected</p>
          </div>
        </div>
      </section>
    </FeatureTemplate>
  );
}
