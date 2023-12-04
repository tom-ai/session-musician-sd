import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { Syne } from "next/font/google";
import "./globals.css";
// import Link from "next/link";
import { Providers } from "./providers";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Divider,
} from "@nextui-org/react";

// const inter = Inter({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"], weight: ["400", "500", "800"] });

export const metadata: Metadata = {
  title: "Session Musician SD",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${syne.className} container mx-auto p-4`}>
        <Providers>
          <Navbar shouldHideOnScroll>
            <NavbarBrand>
              <Link href={"/"} color="foreground">
                <h1 className="font-medium tracking-tighter">Sophia Dignam</h1>
              </Link>
            </NavbarBrand>
            <NavbarContent justify="end">
              <NavbarItem>
                <Button
                  as={Link}
                  color="primary"
                  href="/latest-work"
                  variant="flat"
                >
                  Latest Work
                </Button>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

function Nav() {
  return (
    <nav className="flex justify-between py-8 ">
      <ul>
        <li>
          <Link href={"/"}>
            <h1>Sophia Dignam</h1>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href={"/latest-work"}>Latest work</Link>
        </li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <Divider />
      <address className="py-8">
        <p>
          <strong>Sophia Dignam</strong>
        </p>
        <p>Viola and Violin Session Musician</p>
        <ul>
          <li>
            <a href="mailto:contact@sophiadignam.co.uk">
              contact@sophiadignam.co.uk
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/sophiayadig/" target="_blank">
              Instagram
            </a>
          </li>
        </ul>
      </address>
      <Divider />
      <nav className="py-8">
        <ul>
          <li>
            <Link href={"/"} color="foreground">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/latest-work"} color="foreground">
              Latest Work
            </Link>
          </li>
        </ul>
      </nav>
      <p>
        <small>I hope you enjoyed my website! Built by Tom ❤️</small>
      </p>
      <p>
        <small>© Copyright 2023</small>
      </p>
    </footer>
  );
}
