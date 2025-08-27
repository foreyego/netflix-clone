import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import LoginModal from "@/components/LoginModal";
import MovieSection from "@/components/MovieSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <HeroSection/>
      <div className="overflow-x-hidden w-screen flex justify-start space-x-5 p-5 max-w-7xl mx-auto">

      <h1 className="text-2xl">Trending Now!</h1>
      </div>
      <MovieSection />
      <LoginModal isOpen={false}/>
    </div>
  );
}
