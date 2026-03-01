import type { Metadata } from "next";
import "./globals.css";
import "@/styles/legacy-home.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "CREDIJAMBO - Small Loans, Big Impact",
  description: "Fast, affordable, and flexible micro-loans tailored to your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
