"use client";

import FeatureTemplate from "@/components/sections/FeatureTemplate";

export default function AttendancePage() {
  return (
    <FeatureTemplate
      subtitle="Presence Tracking"
      title="Real-time Attendance"
      description="Monitor student and staff attendance with ease. Our system provides instant insights and automated alerts to keep everyone synchronized."
      benefits={[
        "RFID & Biometric integration",
        "Mobile app attendance marking",
        "Instant SMS alerts to parents",
        "Monthly attendance reports",
        "Leave management workflow"
      ]}
      imageSrc="/images/hero-dashboard.png"
    >
      <section className="py-12">
        <div className="max-w-2xl mx-auto glass p-8 rounded-[40px] border-amber-100/50">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="bg-amber-100 p-2 rounded-lg text-amber-600">🔔</span>
            Smart SMS Notifications
          </h3>
          <div className="space-y-3">
            <div className="bg-white/80 p-4 rounded-2xl border border-gray-100 shadow-sm ml-8 relative">
              <div className="absolute -left-6 top-4 w-4 h-4 bg-primary rounded-full" />
              <p className="text-sm font-medium text-gray-800">"Dear Parent, Aryan is absent today (20th Mar). Please provide a reason if unexpected."</p>
              <span className="text-[10px] text-gray-400 mt-2 block">Sent at 9:15 AM</span>
            </div>
          </div>
        </div>
      </section>
    </FeatureTemplate>
  );
}
