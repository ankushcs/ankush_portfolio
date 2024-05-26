import "@/lib/globals.css";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  // metadataBase: new URL('https://safetpojskic.com'),
  title: "Ankush Singh",
  description: "Welcome to my personal portfolio!",
  applicationName: "Ankush Singh Portfolio",
  keywords: [
    "Ankush Singh",
    "portfolio",
    "personal",
    "website",
    "developer",
    "engineer",
    "software",
    "engineer",
  ],
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/laptop.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      url: "/laptop.png",
    },
    {
      rel: "apple-touch-icon",
      url: "/laptop.png",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      url: "/laptop.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/laptop.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/laptop.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Analytics />
        <SpeedInsights />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
