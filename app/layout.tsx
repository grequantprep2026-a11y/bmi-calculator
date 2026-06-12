import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bmi-calculator.com"),
  title: {
    default: "Free BMI Calculator | Calculate Your BMI Online",
    template: "%s | BMI Calculator",
  },
  description:
    "Use our free BMI calculator to check your Body Mass Index, learn your healthy weight range, and explore expert BMI guides.",
  keywords: [
    "BMI calculator",
    "calculate BMI",
    "healthy weight",
    "weight calculator",
    "BMI chart",
    "body mass index",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "BMI Calculator" }],
  openGraph: {
    title: "Free BMI Calculator | Calculate Your BMI Online",
    description:
      "Instant BMI results, healthy weight range, and expert health guides in one place.",
    url: "https://bmi-calculator.com",
    siteName: "BMI Calculator",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/first.png",
        width: 1200,
        height: 630,
        alt: "BMI calculator and healthy weight guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free BMI Calculator | Calculate Your BMI Online",
    description:
      "Instant BMI results, healthy weight range, and expert health guides in one place.",
    images: ["/first.png"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">{children}</body>
    </html>
  );
}
