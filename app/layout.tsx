import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-theme";

import Header from "@/components/Header";
import SideNav from "@/components/SideNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#fafafa] flex relative">
        <ThemeProvider>
          <SideNav />
          <div className="w-[95%] ml-[4.75rem]">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
