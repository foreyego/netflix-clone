import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <HeroSection/>
    </div>
  );
}
