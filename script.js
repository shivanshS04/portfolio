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

gsap.from("#skillCards", {
  scrollTrigger: {
    trigger: ".card",
    scrub: 1,
  },
  y: 75,
  x: 75,
  opacity: 0,
});

gsap.from("#projectCards", {
  scrollTrigger: {
    trigger: ".projectCard",
  },
  y: 75,
  x: -75,
  duration: 1.5,
  opacity: 0,
});

//dialog opening functionality
document.getElementById("filesProject").addEventListener("click", () => {
  document.getElementById("filesProjectDialog").showModal();
});
