import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduERP - All-in-One ERP for Schools & Colleges",
  description: "Manage students, fees, attendance, and reports in one simple platform.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen relative`}>
        {/* Luxury Background System */}
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-slate-50/50">
          <div className="orb w-[600px] h-[600px] bg-primary/20 -top-20 -left-20 animate-orb" />
          <div className="orb w-[800px] h-[800px] bg-secondary/15 bottom-[-10%] -right-20 animate-orb delay-500" />
          <div className="orb w-[500px] h-[500px] bg-accent/10 top-[30%] left-[50%] animate-orb delay-1000" />
        </div>
        {children}
      </body>
    </html>
  );
}
