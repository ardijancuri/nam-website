import Link from "next/link";

type SiteHeaderProps = {
  tone?: "light" | "dark";
};

export function Brand() {
  return (
    <span className="brand" aria-label="Instituti për Turizëm dhe Kulturë NAM">
      <span className="brand-dash" aria-hidden="true" />
      <span className="brand-name">NAM</span>
      <span className="brand-descriptor">
        Instituti për Turizëm dhe Kulturë
        <br />
        Institute for Tourism and Culture
      </span>
    </span>
  );
}

export function SiteHeader({ tone = "light" }: SiteHeaderProps) {
  return (
    <header className={`site-header site-header-${tone}`}>
      <div className="site-header-inner">
        <Link href="/" className="brand-link" aria-label="NAM - Ballina">
          <Brand />
        </Link>

        <nav className="desktop-nav" aria-label="Navigimi kryesor">
          <Link href="/">Ballina</Link>
          <Link href="/hulumtimi">Hulumtimi</Link>
          <Link href="/rreth-nesh">Rreth nesh</Link>
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Hap menynë">
            <span />
            <span />
          </summary>
          <nav aria-label="Navigimi për celular">
            <Link href="/">Ballina</Link>
            <Link href="/hulumtimi">Hulumtimi</Link>
            <Link href="/rreth-nesh">Rreth nesh</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
