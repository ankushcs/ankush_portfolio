"use client";
import React from "react";
import { HoverEffect } from "../ui/card-hover-effect";
import { FaReact } from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io5";
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

export const projects = [
  {
    title: (
      <div className="flex justify-between align-center">
        <p>Javascript</p>
        <p className="text-[1.5rem] text-blue-500">
          <IoLogoJavascript />
        </p>
      </div>
    ),
    description: "",
    link: "https://www.javascript.com/",
  },
  {
    title: (
      <div className="flex justify-between align-center">
        <p>React JS</p>
        <p className="text-[1.5rem] text-blue-500">
          <FaReact />
        </p>
      </div>
    ),
    description: "",
    link: "https://react.dev/",
  },
  {
    title: (
      <div className="flex justify-between align-center">
        <p>Typescript</p>
        <p className="text-[1.5rem] text-blue-500">
          <SiTypescript />
        </p>
      </div>
    ),
    description: "",
    link: "https://www.typescriptlang.org/",
  },
  {
    title: (
      <div className="flex justify-between align-center">
        <p>Redux</p>
        <p className="text-[1.5rem] text-blue-500">
          <SiRedux />
        </p>
      </div>
    ),
    description: "",
    link: "https://redux.js.org/",
  },
  {
    title: (
      <div className="flex justify-between align-center">
        <p>Next JS</p>
        <p className="text-[1.5rem] text-blue-500">
          <SiNextdotjs />
        </p>
      </div>
    ),
    description: "",
    link: "https://nextjs.org/",
  },
  {
    title: (
      <div className="flex justify-between align-center">
        <p>Tailwind</p>
        <p className="text-[1.5rem] text-blue-500">
          <SiTailwindcss />
        </p>
      </div>
    ),
    description: "",
    link: "https://tailwindcss.com/",
  },
];

export function SkillsSection() {
  return (
    <div className="mx-auto max-w-5xl px-8 pb-8">
      <h1
        id="skills"
        className="max-w-5xl pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl"
      >
        Skills
      </h1>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
