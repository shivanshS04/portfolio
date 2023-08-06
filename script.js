gsap.from("#heading , #subHeading", {
  duration: 1,
  x: "-20%",
  opacity: 0,
});

gsap.from("#content p ,#socials a ", {
  duration: 1.5,
  y: "-20%",
  opacity: 0,
});

gsap.from("#pfp", {
  opacity: 0,
  duration: 1.5,
  rotate: "-10%",
});
