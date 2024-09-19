import type { Metadata } from "next";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import Container from "@/components/Container";
import { MainNav } from "@/components/main-nav";
import Footer from "@/components/footer";
import { html } from "framer-motion/client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santhosh B",
  description:
    "Designing and developing web solutions tailored to your business needs, right now.",
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
          

          <Container>
            <MainNav />
            {children}
          </Container>
        </ThemeProvider>
        <Footer />
            
          
      </body>
    </html>
  );
}
