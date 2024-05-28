"use client";
import React from "react";
import { MovingButton } from "../ui/moving-border";
import Link from "next/link";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { FiDownload } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const words = [
  {
    text: "JavaScript",
  },
  {
    text: "and",
  },
  {
    text: "React/Next.js",
  },
  {
    text: "developer",
    className: "text-blue-500 dark:text-blue-500",
  },
];

export default function LandingPage() {
  return (
    <div
      id="landing-page"
      className="bg- relative flex  h-screen w-full flex-col items-center justify-center bg-white bg-dot-black/[0.2] dark:bg-black dark:bg-dot-white/[0.2]"
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)] dark:bg-black" />
      <p className="text-sm text-neutral-600 dark:text-neutral-200 sm:text-base  ">
        {" "}
        Hello, I&apos;m <span className="text-blue-500">Ankush Singh</span>. A
        passionate FrontEnd Developer.
      </p>
      <p className="md:text-5xl font-bold text-neutral-600 dark:text-neutral-200 text-xl my-4 text-center">
        Javascript and React/Next JS{" "}
        <span className="text-blue-500">Developer</span>
      </p>
      {/* <TypewriterEffectSmooth words={words} /> */}
      <div className="z-30 flex flex-col items-center space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="flex gap-2 justify-center items-center">
          <a href="Ankush_Resume_2024.pdf" target="_blank">
            <span className="flex justify-center items-center gap-1">
              Resume <FiDownload />
            </span>
          </a>
          <Link href="#contact-me">
            <Button variant="secondary">Contact Me</Button>
          </Link>
        </div>
        <div className="flex gap-2">
          <Link href="https://github.com/ankushcs" target="_blank">
            <MovingButton
              borderRadius="1.25rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <SiGithub className="text-blue-500 text-[1.2rem]" />
            </MovingButton>
          </Link>
          <Link
            href="https://www.linkedin.com/in/ankush-931b6483/"
            target="_blank"
          >
            <MovingButton
              borderRadius="1.25rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <TiSocialLinkedinCircular className="text-blue-500 text-[1.7rem]" />
            </MovingButton>
          </Link>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
