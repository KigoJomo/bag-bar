import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/redux/provider";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Bag Bar",
  description: "The best collection of bags for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scrollbar-hidden">
      <body className="scrollbar-hidden relative">
        <Header />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
