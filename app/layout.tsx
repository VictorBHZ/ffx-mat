import type { Metadata } from "next";
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
  title: "FFX Monster Arena Tracker",
  description: "Track your captures and progress in Final Fantasy X's Monster Arena. Complete your collection and unlock legendary weapons.",
  keywords: ["Final Fantasy X", "FFX", "Monster Arena", "Tracker", "Capture", "Gaming", "RPG"],
  authors: [{ name: "Monster Arena Tracker Team" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "FFX Monster Arena Tracker",
    description: "Track your captures and progress in Final Fantasy X's Monster Arena",
    url: "https://monsterarenatracker-ffx.vercel.app",
    siteName: "Monster Arena Tracker",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FFX Monster Arena Tracker",
    description: "Track your captures and progress in Final Fantasy X's Monster Arena",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <meta name="apple-mobile-web-app-title" content="FFX Monster Arena Tracker" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
