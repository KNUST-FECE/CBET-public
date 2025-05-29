import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const inter = localFont({
  src: [
    {
      path: "./(fonts)/Inter-Thin.ttf",
      weight: "100"
    },
    {
      path: "./(fonts)/Inter-ExtraLight.ttf",
      weight: "200"
    },
    {
      path: "./(fonts)/Inter-Light.ttf",
      weight: "300"
    },
    {
      path: "./(fonts)/Inter-Regular.ttf",
      weight: "400"
    },
    {
      path: "./(fonts)/Inter-Medium.ttf",
      weight: "500"
    },
    {
      path: "./(fonts)/Inter-SemiBold.ttf",
      weight: "600"
    },
    {
      path: "./(fonts)/Inter-Bold.ttf",
      weight: "700"
    },
    {
      path: "./(fonts)/Inter-ExtraBold.ttf",
      weight: "800"
    },
    {
      path: "./(fonts)/Inter-Black.ttf",
      weight: "900"
    },
  ],
  variable: "--font-inter"
});

const feather = localFont({
  src: [
    {
      path: "./(fonts)/Feather-Bold.ttf",
      weight: "700"
    }
  ],
  variable: "--font-feather"
});

export const metadata: Metadata = {
  title: "CBET",
  description: "Access a growing library of lecture notes and academic resources, support and showcase student-led businesses through our integrated marketplace, and stay connected with the latest news, events, and updates from across the department.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${feather.variable} antialiased`}>
      <head>
        <meta name="apple-mobile-web-app-title" content="cbet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
