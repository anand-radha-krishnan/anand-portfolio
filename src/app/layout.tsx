import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import { ThemeProvider } from "@/components/provider/ThemeProvider";
// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QueryProvider from "@/components/provider/QueryProvider";
import Dock from "@/components/dock/Dock";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anand Radha Krishnan",
  description: "Portfolio of Anand Radha Krishnan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            {/* <Header /> */}
            <div className="min-h-screen dark:animated-background dark:bg-gradient-to-tr dark:from-red-50 from-1% dark:to-red-700 to-50%">
              {children}
            </div>
            <Dock />
            <Footer />
          </QueryProvider>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
