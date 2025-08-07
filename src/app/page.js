import Header from "@/components/header";
import HeroSection from "@/components/HeroSection";
import LoginModal from "@/components/LoginModal";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <HeroSection/>
      <LoginModal isOpen={false}/>
    </div>
  );
}
