import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kickbord — AI Phone Receptionist for Small Business",
  description:
    "Never miss another call, never lose another customer. Kickbord's AI receptionist answers 24/7, qualifies leads, and books appointments automatically.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
