import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
// import Logo from "@/components/logo";
import AnimatedNavBar from "@/components/animated-nav-bar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { siteConfig } from "@/config/site";
import { keywords } from "@/lib/constants";
// import NavBar from "@/components/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: keywords,
  authors: [{ name: "Santhosh Bhoopal", url: "https://github.com/484021" }],
  creator: "Santhosh Bhoopal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images:[`${siteConfig.url}/og`],
    creator: "@santhosh_code",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Logo /> */}
          <AnimatedNavBar />
          {/* <NavBar /> */}
          {children}
          <ModeToggle />
          <Footer />
        </ThemeProvider>
        <Toaster />
      </body>
      <Analytics />
      <GoogleAnalytics gaId="G-Y3Y1HDC9Q5" />
    </html>
  );
}
