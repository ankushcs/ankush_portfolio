import React from "react";

import { HeroParallax } from "@/components/ui/hero-paralax";

export default function ProjectsSection() {
  return <HeroParallax products={products} />;
}

const products = [
  {
    title: "Jobby App",
    link: "https://ajobbyapp.netlify.app",
    thumbnail: "/projects/Joby_App.png",
  },
  {
    title: "Restaurant Website",
    link: "https://restaurantcloneankush.netlify.app",
    thumbnail: "/projects/restaurant_web.png",
  },
  {
    title: "AI Website",
    link: "https://ankushai.ccbp.tech/",
    thumbnail: "/projects/ai_website.png",
  },

  {
    title: "Todo App",
    link: "https://ankushtodoapp.ccbp.tech/",
    thumbnail: "/projects/Todo_App.png",
  },
  {
    title: "Password Manager",
    link: "https://apasswordmanager.netlify.app",
    thumbnail: "/projects/Password_Manager.png",
  },
  {
    title: "Youtube Clone",
    link: "https://ankushyoutubeclone.netlify.app",
    thumbnail: "/projects/Youtube_Clone.png",
  },

  {
    title: "Weather App",
    link: "https://ankushweatherapp.netlify.app",
    thumbnail: "/projects/Weather_app.png",
  },
  {
    title: "Expanse Tracker",
    link: "https://expensetrackerviavoice.netlify.app",
    thumbnail: "/projects/Expanse_Tracker.png",
  },
  {
    title: "Old Portfolio",
    link: "https://ankushsinghtw.netlify.app",
    thumbnail: "/projects/Old_portfolio.png",
  },
  {
    title: "Sipto Website",
    link: "https://siptoappankush.netlify.app",
    thumbnail: "/projects/Sipto_Web.png",
  },
];
