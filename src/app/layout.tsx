import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medic Appoint",
  description: "Book an appointment online with a doctor near you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}
