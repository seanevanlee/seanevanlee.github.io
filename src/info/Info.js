import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
// Saving mocks 4 and 5 for future projects to add later
// import mock4 from "../img/mock4.png";
// import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Sean",
  lastName: "Lee",
  initials: "sl", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Full-Stack Developer",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in the Orange County, CA",
    },
    {
      emoji: "💼",
      text: "Coding Bootcamp Graduate",
    },
    {
      emoji: "📧",
      text: "seanevanlee@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/seanevanlee/",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/seanevanlee/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://drive.google.com/file/d/1p5OF5VrmMGiGgGSxPtxc-ulAOVo09FTQ/view?usp=sharing",
      icon: "fa fa-file",
      label: "resume",
    },

    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Sean. I'm a full-stack developer. I finished a coding bootcamp to build upon my experiences at Amazon, a venture fund as well as a virtual reality startup. I also have two bachelor degrees from Boston University. Happy to chat!",
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "bootstrap",
      "html5",
      "css",
      "figma",
      "mongodb",
      "ejs",
      "API",
    ],
    exposedTo: ["nodejs", "python", "midjourney"],
  },
  hobbies: [
    {
      label: "tacos",
      emoji: "🌮",
    },
    {
      label: "traveling",
      emoji: "🛫",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "surfing",
      emoji: "🏄‍♂️",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "ATM Works",
      live: "https://atmworks.fly.dev/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/seanevanlee/project-3-group-GA-ATM", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "DOTA2 New Hero Suggestion",
      live: "https://newhero.cyclic.app/login",
      source: "https://github.com/seanevanlee/project-4",
      image: mock2,
    },
    {
      title: "DOTA2 Hero Guide",
      live: "https://heroguide.cyclic.app/",
      source: "https://github.com/seanevanlee/project-2-dota",
      image: mock3,
    },

    // Saving the template below for future projects.
    // {
    //   title: "Project 4",
    //   live: "https://paytonpierce.dev",
    //   source: "https://github.com/paytonjewell",
    //   image: mock4,
    // },
    // {
    //   title: "Project 5",
    //   live: "https://paytonpierce.dev",
    //   source: "https://github.com/paytonjewell",
    //   image: mock5,
    // },
  ],
};
