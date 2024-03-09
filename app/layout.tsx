import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import "./globals.css";
import { fontSans, navigation_items, Navbar, Footer } from "@/components/ui";

export const metadata: Metadata = {
  title: "Boom Down Towing",
  description: "We are here to help.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Navbar navItems={navigation_items} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
