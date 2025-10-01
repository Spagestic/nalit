import Header from "@/components/header";
import HeroContent from "@/components/hero-content";
import LogoCloud from "@/components/logo-cloud";
import ShaderBackground from "@/components/shader-background";

export default function Home() {
  return (
    <div className="">
      {/* Hero Section */}
      <ShaderBackground>
        <Header />
        <HeroContent />
      </ShaderBackground>
      <LogoCloud />
    </div>
  );
}
