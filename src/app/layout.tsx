import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import localFont from 'next/font/local';
import "./globals.css";

import Navbar from "@/components/nav-bar";
import Footer from "@/components/footer";

const classyVogue = localFont({ src: '../../public/fonts/Classyvogueregular.ttf' });

export const metadata: Metadata = {
  title: "Alyce&Antonio",
  description: "Nosso casamento!",
  icons: '/favicon.ico'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={classyVogue.className}>
        <div className="screen-grid">
          <header>
            <Navbar />
          </header>
          <main>
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
