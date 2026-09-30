import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import JoinCta from "@/components/JoinCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Highlights />
        <JoinCta />
      </main>
      <Footer />
    </>
  );
}
