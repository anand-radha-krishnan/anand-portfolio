import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

// import { ThemeProvider } from "@/components/ThemeProvider";
import NavMenu from "@/components/NavMenu";

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
      <body className={`${inter.className} dark`}>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        > */}
        <NavMenu />
        {children}
        {/* </ThemeProvider> */}
        <SpeedInsights />
      </body>
    </html>
  );
}
