import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import { ReactQueryClientProvider } from "@/components/ReactQueryClientProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "MentorHub",
  description: "Meet top mentors and unleash your potential",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background squares-bg font-sans antialiased",
          inter.variable
        )}
      >
        <ReactQueryClientProvider>
          {children}
          <Toaster />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
