import { Github, Hexagon, Twitter } from "lucide-react";
import FAQ from "@/components/faq-section";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer-section";
import Header from "@/components/header";
import HeroContent from "@/components/hero-content";
import { LogoCloud } from "@/components/logo-cloud";
import PricingSection from "@/components/pricing-section";
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
      <Features />
      <PricingSection />
      <FAQ />
      <Footer
        brandName="NorthStar"
        copyright={{
          text: "© 2025 NorthStar",
          license: "All rights reserved",
        }}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
        ]}
        logo={<Hexagon className="h-10 w-10" />}
        mainLinks={[
          { href: "/products", label: "Products" },
          { href: "/about", label: "About" },
          { href: "/blog", label: "Blog" },
          { href: "/contact", label: "Contact" },
        ]}
        socialLinks={[
          {
            icon: <Twitter className="h-5 w-5" />,
            href: "https://twitter.com",
            label: "Twitter",
          },
          {
            icon: <Github className="h-5 w-5" />,
            href: "https://github.com",
            label: "GitHub",
          },
        ]}
      />
    </div>
  );
}
