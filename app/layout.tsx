import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { RootShell } from "../components/RootShell";

export const metadata: Metadata = {
  title: "Bitcoin Rich Club (BRC)",
  description: "BRC Global Archive",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RootShell>{children}</RootShell>
      </body>
    </html>
  );
}
