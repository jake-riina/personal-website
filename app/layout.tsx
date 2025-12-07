import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Jake Riina - Designer & Engineer | Portfolio",
  description: "Jake Riina is a designer and engineer with experience building innovative products. Explore projects in product design, UX/UI, engineering, and business strategy including HandsOn Robotic Surgery Training Platform, TrustGate AI Gateway, and more.",
  keywords: ["Jake Riina", "portfolio", "designer", "engineer", "product design", "UX/UI", "engineering", "robotic surgery", "AI gateway"],
  authors: [{ name: "Jake Riina" }],
  creator: "Jake Riina",
  openGraph: {
    title: "Jake Riina - Designer & Engineer | Portfolio",
    description: "Designer and engineer with experience building innovative products. Explore projects in product design, UX/UI, engineering, and business strategy.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jake Riina - Designer & Engineer | Portfolio",
    description: "Designer and engineer with experience building innovative products.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

