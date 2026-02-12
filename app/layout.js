import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Timer from "../components/Timer"; 
import SmoothScroll from "../components/SmoothScroll"; // <--- Import this

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SMRSC 2026",
  description: "Third global SS Innovations multi specialty robotic surgery conference",
  icons: {
    icon: "/logos/ssilogo.png",
    shortcut: "/logos/ssilogo.png",
    apple: "/logos/ssilogo.png",
  },
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialias
        ed`}
      >
        <SmoothScroll /> {/* <--- Add this here */}
        
        {children}
        
        {/* Wrapper to ensure Timer is strictly Mobile Only (Hidden on Desktop) */}
        <div className="md:hidden">
          <Timer />
        </div>
      </body>
    </html>
  );
}