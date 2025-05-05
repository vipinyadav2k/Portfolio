import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FallingStars from "@/components/FallingStars";
import IntroScreen from "@/components/IntroScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vipin Yadav",
  description: "This is my portfolio website. Vipin Yadav is a Full Stack Developer. He is passionate about building dynamic and responsive web applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-black ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <IntroScreen />
        <FallingStars />

        {children}
      </body>
    </html>
  );
}
