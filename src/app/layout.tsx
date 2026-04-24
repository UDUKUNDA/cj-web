import type { ReactNode } from "react";
import "@/app/globals.css";

export const metadata = {
  title: "Credit Jambo",
  description: "Small loans. Big impact. Real growth.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

