"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

import { TracingBeam } from "@/components/ui/tracing-beams";

export default function ExperienceSection() {
  return (
    <>
      <h1
        id="experience"
        className="mx-auto max-w-5xl px-8 pb-8 pt-20 text-2xl font-bold dark:text-white md:pt-32 md:text-7xl"
      >
        Experience
      </h1>
      <TracingBeam className="px-6">
        <div className="relative mx-auto max-w-2xl pb-32 pt-4 text-white antialiased">
          {experience.map((item, index) => (
            <div key={`content-${index}`} className="mb-10 mt-4 md:mt-0">
              <h2 className={twMerge("text-xl text-black dark:text-white")}>
                {item.title}
              </h2>
              <span className="w-fit rounded-full py-1 text-sm italic text-neutral-800 dark:text-neutral-200">
                {item.badge}
              </span>
              <div className="prose prose-sm dark:prose-invert mt-2 text-sm text-black dark:text-white">
                {item.description}
              </div>
            </div>
          ))}
        </div>
      </TracingBeam>
    </>
  );
}

const experience = [
  {
    title: "Metricstream, Bangalore",
    description: (
      <ul className="list-disc">
        <li>
          Frontend Developer: Utilized Next JS and React Hook Forms for seamless
          implementation of features while maintaining existing functionalities
          in GRC product.
        </li>
        <li>
          Since joining MetricStream, I've resolved over 250 issues and
          spearheaded the development of 30 new features, all within a span of
          two years.
        </li>
        <li>
          One of my key contributions lies in my role as the prime responsible
          for group by reports and layout preferences in reports, where I've
          demonstrated my ability to translate complex requirements into elegant
          frontend solutions.
        </li>
        <li>
          Collaborated closely with the UI design team to transform Figma
          wire-frames into functional components and features for the GRC
          product.
        </li>
        <li>
          Active participation in over 50 code reviews has been a cornerstone of
          my role at MetricStream. By providing constructive feedback,
          identifying potential improvements, and sharing best practices.
        </li>
      </ul>
    ),
    badge: (
      <span className="text-blue-500">
        Software Engineer | Sept-2022 - Present
      </span>
    ),
  },
  {
    title: "Intain Technologies Pvt. Ltd., Chennai",
    description: (
      <ul className="list-disc">
        <li>
          As a fresher React JS web developer, I was fortunate to have the
          opportunity to work in a dynamic company for around 8 months. I was
          responsible for generating UI, implementing features and functionality
          for the web application. Using React JS, I was able to develop
          responsive and dynamic user interfaces that delivered exceptional user
          experiences.
        </li>
        <li>
          In addition, I had the opportunity to work with Figma, a powerful
          design tool that allowed me to collaborate with designers and
          implement their designs with ease.
        </li>
        <li>
          Overall, my experience as a fresher React JS web developer in this
          company has equipped me with a solid foundation in web development and
          provided me with the confidence and skills necessary to take on new
          challenges in the industry.
        </li>
      </ul>
    ),
    badge: (
      <span className="text-blue-500">
        Frontend Developer | Feb-2022 - Sept-2022
      </span>
    ),
  },
  {
    title: "NxtWave (Internship), Hydrabad",
    description: (
      <ul className="list-disc">
        <li>
          Gained foundational understanding of web development, beginning with
          HTML, CSS, and Bootstrap for project creation during internship
        </li>
        <li>
          Progressed to dynamic web design by mastering JavaScript, subsequently
          advancing to React JS and Hooks for building diverse applications,
          including authentication, authorization, and local storage
          functionalities.
        </li>
        <li>
          Expanded skill set by exploring Material-UI (MUI) and other essential
          libraries for creating comprehensive React applications
        </li>
      </ul>
    ),
    badge: (
      <span className="text-blue-500">
        Frontend Developer | Aug-2021 - Jan-2022
      </span>
    ),
  },
];
