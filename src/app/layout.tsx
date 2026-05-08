import type { Metadata, Viewport } from "next";
import { Inter, Unbounded } from "next/font/google";
import { Providers } from "@/components/Providers";
import "lenis/dist/lenis.css";
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
  description: "Personal developer portfolio for Danylo Sakhno / daan1k: websites, AI tools, Python projects, data work, and PC systems.",
  metadataBase: new URL("https://daan1k.xyz"),
  openGraph: {
    title: "Danylo Sakhno | daan1k",
    description: "Websites, AI tools, Python projects, data work, and practical technology builds.",
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
      <body className="font-sans" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
