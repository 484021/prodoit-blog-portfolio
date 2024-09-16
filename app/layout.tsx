import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Santhosh B",
  description:
    "Designing and developing web solutions tailored to your business needs, right now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
