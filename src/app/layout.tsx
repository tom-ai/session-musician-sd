import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './pico.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Session Musician SD',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} container `}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href={'/'}>
            <h1>Sophia Dignam</h1>
          </Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link href={'latestwork'}>Latest work</Link>
        </li>
        <li>
          <a href="https://www.instagram.com/sophiayadig/" target="_blank">
            Instagram
          </a>
        </li>
      </ul>
    </nav>
  );
}

function Footer() {
  return (
    <footer>
      <aside className="grid">
        <address>
          <p>
            <strong>Sophia Dignam</strong>
          </p>
          <a href="mailto:contact@sophiadignam.co.uk">
            contact@sophiadignam.co.uk
          </a>
          <br />
          <a href="https://www.instagram.com/sophiayadig/" target="_blank">
            Instagram
          </a>
        </address>
        <nav>
          <ul>
            <li></li>
          </ul>
          <ul>
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'latestwork'}>Latest Work</Link>
            </li>
          </ul>
        </nav>
      </aside>
      <hr />
      <p>
        <small>I hope you enjoyed my website! Built by Tom ❤️</small>
      </p>
    </footer>
  );
}
