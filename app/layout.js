import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav
          style={{
            fontSize: "30px",
            margin: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent:"center"
          }}
        >
          <Link style={{ margin: "9px" }} href="/">
            Home
          </Link>
          <Link style={{ margin: "9px" }} href="/Posts">
            Posts
          </Link>
          <Link style={{ margin: "9px" }} href="/Articles">
            Articles
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
