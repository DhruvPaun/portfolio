import Link from "next/link";
import { Spotlight } from "./ui/spotlight-new";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Hi, I'm Dhruv Paun
        </h1>
        <p className="mt-4 font-normal text-base sm:text-sm md:text-lg text-neutral-300 max-w-lg mx-auto">
          I create modern, responsive websites for personal and professional use. This portfolio showcases my projects and design approach, giving you an idea of what I can build for your business or personal brand.{" "}
        </p>
        <div className="mt-4 flex justify-center">
          <Link href={`mailto:${"dhruvpaun28@gmail.com"}?subject=Work inquiry`}>
            <HoverBorderGradient
            >
              Let’s Create Your Website
            </HoverBorderGradient>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
