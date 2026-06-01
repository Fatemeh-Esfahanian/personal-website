import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Fatemeh, M.D. | Medical Portfolio",
  description: "Portfolio of Dr. Fatemeh, a dedicated physician focused on compassionate patient care and clinical excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <body className={`font-sans bg-slate-50 text-slate-900 min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
