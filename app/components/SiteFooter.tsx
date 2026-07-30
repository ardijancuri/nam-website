import Link from "next/link";
import { Brand } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-main">
        <Brand />
        <p>
          Njohuri, të dhëna dhe ekspertizë për zhvillimin e turizmit në
          Kosovë.
        </p>
      </div>
      <div className="site-footer-links">
        <Link href="/hulumtimi">Hulumtimi</Link>
        <Link href="/rreth-nesh">Rreth nesh</Link>
        <Link href="/">Ballina</Link>
      </div>
      <div className="site-footer-bottom">
        <span>Prizren · Kosovë</span>
        <span>© 2026 NAM</span>
      </div>
    </footer>
  );
}
