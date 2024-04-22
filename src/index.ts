import { Elysia } from "elysia";

const phrases = [
  "Get ready to be inspired…", 
  "See rejection as redirection.",
  "There is beauty in simplicity.",
  "You can’t be late until you show up.",
  "Maybe life is testing you. Don’t give up.",
  "Impossible is just an opinion.",
  "Alone or not you gonna walk forward.",
]

const app = new Elysia().get("/", () => {
  return phrases[Math.floor(Math.random() * phrases.length)];
}).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
