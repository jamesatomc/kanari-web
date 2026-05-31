import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

export const metadata: Metadata = {
  title: "Kanari Network",
  description: "Kanari Network is community-powered infrastructure for digital ownership.",
  icons: {
    icon: ['/icons/favicon.ico?v=4'],
    apple:['/icons/apple-touch-icon.png?v=4'],
    shortcut:['/icons/apple-touch-icon.png'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark',d)}catch(e){}` }} />
      </head>
      <body>{children}</body>
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
