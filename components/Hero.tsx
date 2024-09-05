import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="pb-10 pt-10 md:pb-20 md:pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        {/* Implement a toggle theme */}
        {/* <button className="text-white fixed top-5 right-5">Toggle Theme</button> */}

        {/* My Avatar */}
        {/* <Link
          href="https://github.com/topzyray"
          target="
        _blank"
        >
          <img
            src="/tope.png"
            alt="Tope Taiwo"
            className="z-50 w-8 md:w-10 lg:w-12 text-white fixed top-2 left-2 md:top-5 md:left-5 rounded-full shadow-2xl hover:border-white-200"
          />
        </Link> */}

        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Hello, World!
          </h2>

          <TextGenerateEffect
            className="text-center text-[35px] md:text-5xl lg:text-6xl"
            words="I Transform Ideas into Integrated User Experiences through Coding"
          />

          <Link
            href="https://github.com/topzyray"
            target="
        _blank"
          >
            <img
              src="/tope.png"
              alt="Tope Taiwo"
              className="w-16 md:w-20 lg:w-24 py-6 text-white rounded-full shadow-2xl hover:border-white-200"
            />
          </Link>

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m Tope Taiwo, a Software Developer based in Nigeria.
          </p>

          <a href="#projects">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
