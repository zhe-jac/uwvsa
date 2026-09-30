export default function Footer() {
  return (
    <footer className="mt-auto border-t border-vsa-gold/30 bg-vsa-cream py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center text-sm text-foreground/60">
        <p>
          UW VSA &middot; Vietnamese Students&rsquo; Association at the
          University of Waterloo
        </p>
        <a
          href="https://www.instagram.com/uwvsa/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-vsa-red-dark hover:underline"
        >
          @uwvsa
        </a>
        <p>&copy; {new Date().getFullYear()} UW VSA. All rights reserved.</p>
      </div>
    </footer>
  );
}
