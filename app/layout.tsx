import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const harryPotter = localFont({
  src: "./fonts/harryPotter.ttf",
  display: "swap",
});

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
      <body className={`${harryPotter.className}`}>{children}</body>
    </html>
  );
}
