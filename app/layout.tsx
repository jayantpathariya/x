import { cn } from "@/libs/utils";
import { TooltipProvider } from "@/providers/tooltip-provider";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const chirp = localFont({
  src: [
    {
      path: "./fonts/Chirp-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Chirp-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Chirp-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Chirp-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "X",
    template: "%s / X",
  },
  description:
    "X: Real-time global communication platform for sharing short messages, news, and media. Connect with people, follow trends, and join conversations on any topic.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-black", chirp.className)}>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
