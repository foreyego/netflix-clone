import Header from "@/components/Header";
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
          <h1 className="text-2xl font-bold mb-2">Trending Now!</h1>
          <MovieSection />
        </section>
        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-2">For You</h1>
          <MovieSection />
        </section>
        <section className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Coming Soon</h1>
          <MovieSection />
        </section>
      </div>
      <LoginModal isOpen={false}/>
    </div>
  );
}
