import React from "react";

import { HeroParallax } from "@/components/ui/hero-paralax";

export function ProjectsSection() {
  return <HeroParallax products={products} />;
}

const products = [
  {
    title: "Jobby App",
    link: "https://github.com/ankushcs/jobby_app_hook",
    thumbnail: "/projects/Joby_App.png",
  },
  {
    title: "Restaurant Website",
    link: "https://github.com/ankushcs/restaurant_website_clone",
    thumbnail: "/projects/restaurant_web.png",
  },
  {
    title: "AI Website",
    link: "https://github.com/ankushcs/Site-Clone-Ai",
    thumbnail: "/projects/ai_website.png",
  },

  {
    title: "Todo App",
    link: "https://github.com/ankushcs/react-todo-app",
    thumbnail: "/projects/Todo_App.png",
  },
  {
    title: "Password Manager",
    link: "https://github.com/ankushcs/password__manager",
    thumbnail: "/projects/Password_Manager.png",
  },
  {
    title: "Youtube Clone",
    link: "https://github.com/ankushcs/youtubeclone",
    thumbnail: "/projects/Youtube_Clone.png",
  },

  {
    title: "Weather App",
    link: "https://github.com/ankushcs/Weather-App",
    thumbnail: "/projects/Weather_app.png",
  },
  {
    title: "Expanse Tracker",
    link: "https://github.com/ankushcs/Expense-Tracker",
    thumbnail: "/projects/Expanse_Tracker.png",
  },
  {
    title: "Old Portfolio",
    link: "https://github.com/ankushcs/portfolio_tw",
    thumbnail: "/projects/Old_portfolio.png",
  },
  {
    title: "Sipto Website",
    link: "https://github.com/ankushcs/sipto-app",
    thumbnail: "/projects/Sipto_Web.png",
  },
];
