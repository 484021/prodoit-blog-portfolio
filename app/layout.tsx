import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";
import Logo from "@/components/logo";
import AnimatedNavBar from "@/components/animated-nav-bar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santhosh Bhoopal",
  description: "Solving problems and building solutions",
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
          <Logo />
          <AnimatedNavBar />
          {children}
          <ModeToggle />
          <Footer />
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-Y3Y1HDC9Q5" />
    </html>
  );
}
