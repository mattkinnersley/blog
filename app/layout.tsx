import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Button from "@/components/Button";
import Container from "@/components/Container";
import InternalLink from "@/components/InternalLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Matt Kinnersley's Blog",
  description: "This is where I jot down my thoughts and ideas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Container>
            <nav className="flex w-full justify-between py-2">
              <div>
                <InternalLink href="/">Matt Kinnersley</InternalLink>
              </div>
              <div>
                <InternalLink href="/about">About</InternalLink>
              </div>
            </nav>
          </Container>
        </header>
        <main className="min-h-screen items-center">
          <Container>{children}</Container>
        </main>
        <footer>
          <Container>© Matt Kinnersley 2023</Container>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
