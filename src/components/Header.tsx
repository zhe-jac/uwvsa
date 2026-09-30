import Link from "next/link";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#events", label: "Events" },
  { href: "#join", label: "Get Involved" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-vsa-gold/30 bg-vsa-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#" className="flex items-center gap-2">
          <span className="text-2xl" aria-hidden>
            🏮
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-vsa-red-dark">
            UW VSA
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition hover:text-vsa-red"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="https://www.instagram.com/uwvsa/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-vsa-red px-4 py-2 text-sm font-semibold text-white transition hover:bg-vsa-red-dark"
        >
          Follow Us
        </a>
      </div>
    </header>
  );
}
