import type { Metadata, Viewport } from "next";
import { Inter, Unbounded } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Danylo Sakhno | daan1k",
  description: "Premium AI, web, data, and product portfolio for Danylo Sakhno / daan1k.",
  metadataBase: new URL("https://daan1k.xyz"),
  openGraph: {
    title: "Danylo Sakhno | daan1k",
    description: "AI-powered web products, data systems, and modern digital builds.",
    url: "https://daan1k.xyz",
    siteName: "daan1k",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#030512",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${unbounded.variable}`}>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
