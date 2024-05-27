"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { GoProjectSymlink } from "react-icons/go";
import { FaLaptopCode } from "react-icons/fa";
import {
  IconHome,
  IconMessage,
  IconUser,
  IconMessageBolt,
} from "@tabler/icons-react";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "#landing-page",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about_me",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: (
        <FaLaptopCode className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Skills",
      link: "#skills",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Projects",
      link: "#projects",
      icon: (
        <GoProjectSymlink className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact Me",
      link: "#contact-me",
      icon: (
        <IconMessageBolt className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

// useMotionValueEvent(scrollYProgress, "change", (current) => {
//   if (typeof current === "number") {
//     let direction = current! - scrollYProgress.getPrevious()!;

//     if (scrollYProgress.get() < 0.05) {
//       setVisible(false);
//     } else {
//       if (direction < 0) {
//         setVisible(true);
//       } else {
//         setVisible(false);
//       }
//     }
//   }
// });
