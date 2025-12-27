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
        className={`antialiased scroll-smooth tracking-tight`}
      >
        <div className="min-h-screen w-full scroll-smooth bg-white relative overflow-hidden">

          {/* Subtle green glow (background only) */}
          <div
            className="absolute inset-0 z-0"
            style={{
      backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
    }}
          />

          {/* App content */}
          <div className="relative scroll-smooth z-10">
            {children}
          </div>

        </div>
      </body>
    </html>
  );
};