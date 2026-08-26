import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iván Thanon Moreno · Backend Software Engineer",
  description:
    "Portfolio of Iván Thanon Moreno — Backend Software Engineer specializing in .NET, Spring Boot, TDD, DDD, and Software Craftsmanship.",
  keywords: ["Backend Engineer", "Software Craftsmanship", ".NET", "Spring Boot", "TDD", "DDD"],
  authors: [{ name: "Iván Thanon Moreno" }],
  openGraph: {
    title: "Iván Thanon Moreno · Backend Software Engineer",
    description: "Building reliable, well-crafted software with a product mindset.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
