import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Audiophile - Premium Audio Equipment",
  description: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast. Shop premium headphones, speakers, and earphones.",
  keywords: "audiophile, headphones, speakers, earphones, premium audio, high-quality sound, music equipment",
  authors: [{ name: "Audiophile" }],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: "Audiophile - Premium Audio Equipment",
    description: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audiophile - Premium Audio Equipment",
    description: "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
