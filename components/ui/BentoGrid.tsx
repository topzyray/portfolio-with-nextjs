"use client";

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GraidentBg";
import { GridGlobe } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { BiDownload } from "react-icons/bi";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  id,
  title,
  description,
  className,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  id?: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  className?: string;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const [cvDownload, setCVDownload] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`taiwo.tope@proton.me`);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const handleDownload = () => {
    setCVDownload(true);
    setTimeout(() => {
      setCVDownload(false);
    }, 2000);
  };

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* add img divs */}
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation></BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {/* for the github 3d globe */}
          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:right-2">
              <div className="flex flex-col justify-center gap-3 lg:gap-3.5">
                {["React.js", "Next.js", "Typscript", "JavaScript"].map(
                  (item) => (
                    <span
                      key={item}
                      className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  )
                )}
                {/* <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" /> */}
              </div>
              <div className="flex flex-col justify-center gap-3 lg:gap-3.5">
                {/* <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" /> */}
                {["Node.js", "MongoDB", "MySQL", "PostgreSQL"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>

              <div className={`absolute -bottom-10 right-0`}>
                <Lottie
                  options={{
                    loop: cvDownload,
                    autoplay: cvDownload,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>

              <div className="flex flex-col justify-center items-center gap-3 md:gap-0">
                <MagicButton
                  title={copied ? "Email copied" : "Copy my email"}
                  icon={<IoCopyOutline />}
                  position="left"
                  otherClasses="bg-[#161a31]"
                  handleClick={handleCopy}
                />

                <a
                  href="/docs/Tope_Taiwo_CV.docx"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                >
                  <MagicButton
                    title={cvDownload ? "Started" : "Download my CV"}
                    icon={<BiDownload />}
                    position="left"
                    otherClasses="bg-[#161a21]"
                    handleClick={handleDownload}
                  />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
