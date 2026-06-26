import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "FRANK",
  description: "Local AI tool for product designers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
