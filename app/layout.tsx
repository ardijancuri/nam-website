import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;
  const description =
    "Njohuri, të dhëna dhe ekspertizë për zhvillimin e turizmit në Kosovë.";

  return {
    metadataBase: new URL(origin),
    title: {
      default: "NAM · Instituti për Turizëm dhe Kulturë",
      template: "%s · NAM",
    },
    description,
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
    },
    openGraph: {
      type: "website",
      locale: "sq_XK",
      siteName: "NAM · Instituti për Turizëm dhe Kulturë",
      title: "NAM · Instituti për Turizëm dhe Kulturë",
      description,
      images: [
        {
          url: new URL("/og.png", origin).toString(),
          width: 1200,
          height: 630,
          alt: "NAM - Njohuri, të dhëna dhe ekspertizë për turizmin.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "NAM · Instituti për Turizëm dhe Kulturë",
      description,
      images: [new URL("/og.png", origin).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq">
      <body className={geist.variable}>
        <a className="skip-link" href="#main">
          Kalo te përmbajtja
        </a>
        {children}
      </body>
    </html>
  );
}
