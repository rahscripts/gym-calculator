import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gym Calculator by MR",
  description: "Minimal gym calculator with clean UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased tracking-tight`}
      >
        <div className="min-h-screen w-full bg-white relative overflow-hidden">

          {/* Subtle green glow (background only) */}
          <div
            className="absolute inset-0 z-0"
           style={{
     backgroundImage: `
       radial-gradient(circle at center, #93c5fd, transparent)
     `,
   }} 
          />

          {/* App content */}
          <div className="relative z-10">
            {children}
          </div>

        </div>
      </body>
    </html>
  );
};
