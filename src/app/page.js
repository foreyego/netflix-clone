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
      <h1 className="text-2xl pl-5">Trending Now!</h1>
      <MovieSection />
      <LoginModal isOpen={false}/>
    </div>
  );
}
