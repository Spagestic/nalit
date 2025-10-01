import Header from "@/components/header";
import HeroContent from "@/components/hero-content";
import ShaderBackground from "@/components/shader-background";

export default function Home() {
  return (
    <div className="">
      <ShaderBackground>
        <Header />
        <HeroContent />
      </ShaderBackground>
    </div>
  );
}
