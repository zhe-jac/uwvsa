export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 20% 20%, var(--vsa-gold-light), transparent 45%), radial-gradient(circle at 80% 0%, var(--vsa-gold-light), transparent 40%)",
        }}
        aria-hidden
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-24 text-center sm:py-32">
        <span className="rounded-full bg-vsa-gold-light px-4 py-1 text-sm font-semibold text-vsa-red-dark">
          University of Waterloo 🇻🇳
        </span>

        <h1 className="font-display text-4xl font-extrabold tracking-tight text-vsa-red-dark sm:text-6xl">
          Vietnamese Students&rsquo; Association
        </h1>

        <p className="max-w-2xl text-lg text-foreground/80 sm:text-xl">
          Your connection to culture, tradition, &amp; community.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/uwvsa/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-vsa-red px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-vsa-red-dark"
          >
            Follow @uwvsa
          </a>
          <a
            href="#join"
            className="rounded-full border border-vsa-red px-6 py-3 text-sm font-semibold text-vsa-red-dark transition hover:bg-vsa-gold-light"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
}
