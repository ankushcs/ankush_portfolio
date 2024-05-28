"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "We embarked on an incredible journey together. I wish to express my appreciation for his profound intellect as a valued teammate. Looking forward to sustaining our enriching discussions in the times ahead.",
    name: <span className="text-blue-500">Nandiki ChandraShekhar</span>,
    title: "Frontend Developer, MetricStream",
  },
  {
    quote:
      "Ankush, an outstanding developer, exudes enthusiasm and demonstrates unwavering resourcefulness. His potential to become a valuable asset to any organization he associates with is undeniable.",
    name: <span className="text-blue-500">Shaikh Sameer Basha</span>,
    title: "Frontend Developer, MetricStream",
  },
  {
    quote:
      "Ankush stands out as one of the most exceptional developers I've encountered recently. He possesses a remarkable ability to grasp concepts swiftly, approaches tasks with systematic precision, and demonstrates exceptional problem-solving skills.",
    name: <span className="text-blue-500">Rahul Prakash</span>,
    title: "Associate Product Manager, Keka",
  },
  {
    quote:
      "I've had the pleasure of collaborating with Ankush for some time now, and without hesitation, I can attest to his exceptional skills in his field. What truly stands out about him is his unwavering willingness to lend a hand whenever needed.",
    name: <span className="text-blue-500">Dilshad Alam</span>,
    title: "Backend Developer, BizAcuity Solutions",
  },
  {
    quote:
      "Working alongside Ankush at Intain for the past 8 months has been an absolute pleasure. As a fellow frontend developer, I have witnessed firsthand his exceptional skills and unwavering dedication to our projects. Ankush’s ability to transform Figma designs into seamless, functional interfaces is truly impressive. He excels in teamwork, always ready to lend a hand, share insights, and collaborate effectively. He is not just a colleague but an indispensable asset to our team.",
    name: <span className="text-blue-500">Harsha Tejwani</span>,
    title: "Frontend Developer, Realoq",
  },
  {
    quote:
      "Ankush has been an invaluable member of our MetricStream team for the past two years, demonstrating exceptional dedication and hard work in every project. With over 30 new features spearheaded, his contributions have been truly outstanding. His expertise in frontend development, meticulous approach to testing, and active participation in code reviews make him an indispensable asset to our team. Ankush's consistent excellence and commitment have significantly enhanced our projects, and we are fortunate to have him as part of our team.",
    name: <span className="text-blue-500">Tarun Kumar Nayak</span>,
    title: "Principal Engineer, MetricStream",
  },
];
