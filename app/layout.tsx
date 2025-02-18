import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Study Pro",
  description: "Your favorite online study guide",
  // icons: {
  //   icon: [
  //     {
  //       rel: "icon",
  //       type: "image/png",
  //       sizes: "32x32",
  //       url: "./favicon.ico",
  //       href: "./favicon.ico",
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} `}>{children}</body>
    </html>
  );
}
