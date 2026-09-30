const HIGHLIGHTS = [
  {
    emoji: "🍜",
    title: "Phở Nights",
    description:
      "Warm bowls, good company. Our signature social events bring the community together over a shared love of food.",
  },
  {
    emoji: "🧧",
    title: "Lunar New Year",
    description:
      "Ring in Tết with performances, food, and games celebrating the biggest holiday in Vietnamese culture.",
  },
  {
    emoji: "🏮",
    title: "Culture Nights",
    description:
      "Traditional music, dance, and storytelling that showcase the richness of Vietnamese heritage.",
  },
  {
    emoji: "🤝",
    title: "Socials & Mixers",
    description:
      "Low-key hangouts throughout the term to meet new people and make Waterloo feel like home.",
  },
];

export default function Highlights() {
  return (
    <section id="events" className="bg-vsa-gold-light/30 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center font-display text-3xl font-bold text-vsa-red-dark sm:text-4xl">
          What We Do
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-vsa-gold/40 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-4xl" aria-hidden>
                {item.emoji}
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-vsa-red-dark">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-foreground/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
