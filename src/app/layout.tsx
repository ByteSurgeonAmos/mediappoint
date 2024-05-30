import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

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
      <body className="overflow-x-hidden">
        <div>{children}</div>
        <div>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
