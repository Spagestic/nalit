import Image from "next/image";

const companyLogos = [
  {
    src: "https://cdn.worldvectorlogo.com/logos/google.svg",
    alt: "Google",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/nvidia.svg",
    alt: "Nvidia",
  },
  { src: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg", alt: "Stripe" },
  { src: "https://cdn.worldvectorlogo.com/logos/notion-2.svg", alt: "Notion" },
  {
    src: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg",
    alt: "GitHub",
  },
  {
    src: "https://cdn.worldvectorlogo.com/logos/figma-icon-one-color.svg",
    alt: "Figma",
  },
];

export default function LogoCloud() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto px-6">
        <h2 className="text-center font-medium text-lg">
          Practice interviews at your favorite companies.
        </h2>
        <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
          {companyLogos.map((logo) => (
            <Image
              alt={logo.alt}
              className="h-8 w-fit dark:invert"
              height={32}
              key={logo.alt}
              objectFit="contain"
              src={logo.src}
              width={200}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
