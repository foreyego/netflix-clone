import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LoginModal from "@/components/LoginModal";
import MovieSection from "@/components/MovieSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <HeroSection/>
      <div className="px-8">
        <section className="mb-8">
          <MovieSection title="Trending Now!" />
        </section>
        <section className="mb-8">
          <MovieSection title="For You"/>
        </section>
        <section className="mb-8">
          <MovieSection title="Watching List"/>
        </section>
      </div>
      <LoginModal isOpen={false}/>
      <Footer />
    </div>
  );
}
