import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import type * as React from "react";
import { ThemeProvider } from "../components/theme-provider";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noarka UI",
  description: "Documentation website for the @noarka/ui component library.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the inline script below may remove `dark`
    // before React hydrates, which is intentional.
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${bricolage.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <head>
        {/* Apply the stored theme before first paint so a light session never
            flashes dark. Mirrors the key read by components/theme-toggle.tsx. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("noarka-theme")==="light"){document.documentElement.classList.remove("dark")}}catch(e){}`,
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
