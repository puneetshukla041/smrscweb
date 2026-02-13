import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Timer from "../components/ui/CountdownTimer"; 
import SmoothScroll from "../components/common/SmoothScroll"; 
import MasterLoader from "../components/common/MasterLoader"; 
// 👇 Ensure this path matches where you saved the file above
import SpeedLogger from "../components/SpeedLogger"; 

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SmoothScroll />
        
        {/* 1. Downloads assets in background */}
        <MasterLoader /> 
        
        {/* 2. Logs navigation speed to console */}
        <SpeedLogger /> 
        
        {children}
        
        <div className="md:hidden">
          <Timer />
        </div>
      </body>
    </html>
  );
}