import "../styles/globals.css";
import styles from "./layout.module.css";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        <div className={styles.nav}>
          <Link href="/">/</Link>
          <Link href="/pages">underPages</Link>
          <Link href="/first">first</Link>
          <Link href="/first/my">/first/my</Link>
          <Link href="/first/her">/first/her</Link>
          <Link href="/second" prefetch={false}>
            /second
          </Link>
          <Link href="/noPage">/noPage</Link>
          <Link href="/client">/client</Link>
        </div>
        <div className={styles.children}>{children}</div>
      </body>
    </html>
  );
}
