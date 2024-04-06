import { PortfolioItem } from "./types/portfolio-item";

export const HERO_TEXT = "Hello,I'm Alex,web developer";

export enum LetterColors {
  Default = "#000c24",
  Red = "#ff0000",
  Orange = "#ffa500",
  Yellow = "#ffff00",
  Green = "#00ff00",
  Blue = "#0000ff",
  Indigo = "#4b0082",
  Violet = "#8a2be2",
  Pink = "#ff69b4",
  Cyan = "#00ffff",
  Lime = "#00ff00",
  Magenta = "#ff00ff",
  Turquoise = "#40e0d0",
  Gold = "#ffd700",
  Coral = "#ff7f50",
  Orchid = "#da70d6",
  Teal = "#008080",
  Chartreuse = "#7fff00",
}

export enum AppRoute {
  Root = "/Portfolio",
  Works = "#works",
  PortfolioItem = "#works/:id",
  About = "#about",
  Skills = "#skills",
  Contacts = "#contacts",
  PageNotFound = "*",
}

export enum HeroNav {
  Github = "https://github.com/Alex-Gorodov",
  Linkedin = "https://www.linkedin.com/in/a-gorodov/",
  Telegram = "https://t.me/a_gorodov",
  Email = "mailto: a.gorodov.22@gmail.com",
}

export const PROJECTS: PortfolioItem[] = [
  {
    id: "gllacy",
    name: "Gllacy",
    path: "https://alex-gorodov.github.io/gllacy",
    description: "",
    technologies: ["", ""],
    img: process.env.PUBLIC_URL + "/img/portfolio/gllacy.png",
  },
  {
    id: "bright-lights",
    name: "Bright Lights",
    path: "https://alex-gorodov.github.io/bright-lights/",
    description: "",
    technologies: ["", ""],
    img: process.env.PUBLIC_URL + "/img/portfolio/bright-lights.png",
  },
  {
    id: "createx",
    name: "CreateX",
    path: "https://alex-gorodov.github.io/CreateX/",
    description: "",
    technologies: ["", ""],
    img: "Portfolio/img/portfolio/createx.png",
  },
  {
    id: "cat-energy",
    name: "Cat Energy",
    path: "https://alex-gorodov.github.io/Cat-Energy/",
    description: "",
    technologies: ["", ""],
    img: process.env.PUBLIC_URL + "/img/portfolio/cat-energy.png",
  },
  {
    id: "sedona",
    name: "Sedona",
    path: "https://htmlacademy-adaptive.github.io/590651-sedona-26/11/",
    description: "",
    technologies: ["", ""],
    img: process.env.PUBLIC_URL + "/img/portfolio/sedona.png",
  }
]
