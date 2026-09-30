export default function JoinCta() {
  return (
    <section id="join" className="mx-auto max-w-4xl px-6 py-20 text-center">
      <h2 className="font-display text-3xl font-bold text-vsa-red-dark sm:text-4xl">
        Join the Community
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-foreground/80">
        Follow us on Instagram for the latest events, or reach out to say
        hi &mdash; we&rsquo;d love to have you at our next event.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="https://www.instagram.com/uwvsa/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-vsa-red px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-vsa-red-dark"
        >
          @uwvsa on Instagram
        </a>
        <a
          href="mailto:uwvsa@uwaterloo.ca"
          className="rounded-full border border-vsa-red px-6 py-3 text-sm font-semibold text-vsa-red-dark transition hover:bg-vsa-gold-light"
        >
          Email Us
        </a>
      </div>
    </section>
  );
}
