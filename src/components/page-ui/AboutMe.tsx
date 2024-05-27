"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
// import Image from "next/image";

function calculateYearsAndMonthsSinceStartJob() {
  // Start date
  const startDate = new Date("2021-08-01");

  // Current date
  const currentDate = new Date();

  // Calculate the difference in years and months
  const years = currentDate.getFullYear() - startDate.getFullYear();
  const months = currentDate.getMonth() - startDate.getMonth();
  const totalMonths = years * 12 + months;

  // Convert to decimal format
  const decimalYears = totalMonths / 12;

  return decimalYears.toFixed(1); // Return the result with one decimal place
}

const content = [
  {
    title: (
      <p>
        Dedicated <span className="text-blue-500">Frontend Developer</span> with
        Extensive Experience
      </p>
    ),
    description: (
      <>
        With over <span>{calculateYearsAndMonthsSinceStartJob()}</span> years of
        hands-on experience, I specialize in crafting seamless and visually
        appealing digital experiences. My expertise includes HTML, CSS,
        JavaScript, Bootstrap, React JS, hooks, Tailwind CSS, and Material-UI
        (MUI). I bring a versatile skill set to both building applications from
        scratch and enhancing existing projects, ensuring top-notch code
        quality.
      </>
    ),
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        FrontEnd Developer
      </div>
    ),
  },
  {
    title: (
      <p>
        Passion for Continuous{" "}
        <span className="text-blue-500">Learning and Growth</span>
      </p>
    ),
    description:
      "Fueled by a passion for continuous learning, I strive to improve and enhance productivity with every project. I view each assignment as an opportunity for growth, constantly seeking to expand my knowledge and stay updated with the latest industry trends and technologies.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Learning & Growth
      </div>
    ),
  },
  {
    title: (
      <p>
        Commitment to <span className="text-blue-500">High-Quality Code</span>{" "}
        and Client Satisfaction
      </p>
    ),
    description:
      "My unwavering commitment to delivering high-quality code ensures client satisfaction and the success of every venture. I take pride in exceeding client expectations by delivering reliable, efficient, and well-structured code that contributes significantly to project goals.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        High-Quality Code
      </div>
    ),
  },
  {
    title: (
      <p>
        Emphasis on{" "}
        <span className="text-blue-500">Communication and Teamwork</span>
      </p>
    ),
    description:
      "Beyond my technical proficiency, I prioritize communication, collaboration, and teamwork. I understand the importance of seamless execution in projects and am dedicated to fostering a collaborative environment. My dynamic approach and dedication make me a valuable team player ready to contribute to impactful digital experiences and exceptional outcomes.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Communication & Teamwork
      </div>
    ),
  },
];

export function AboutMe() {
  return (
    <div className="mx-auto max-w-5xl px-8 pb-8">
      <h1
        id="about_me"
        className="max-w-5xl pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl"
      >
        About Me
      </h1>
      <div className="py-10">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
