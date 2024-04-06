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
  Works = "#portfolio",
  PortfolioItem = "#portfolio/:id",
  About = "#about",
  Skills = "#skills",
  Contacts = "#contacts",
  CV = "/alex_gorodov_cv.pdf",
  PageNotFound = "*",
}

export enum HeroNav {
  Github = "https://github.com/Alex-Gorodov",
  Linkedin = "https://www.linkedin.com/in/a-gorodov/",
  Telegram = "https://t.me/a_gorodov",
  Email = "mailto: a.gorodov.22@gmail.com",
}
