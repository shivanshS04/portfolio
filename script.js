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

gsap.from(".projectRow", {
  scrollTrigger: {
    trigger: "#showcase",
    scrub: 0.1,
  },
  x: -45,
  opacity: 0,
});

gsap.to("#showcase", {
  scrollTrigger: {
    trigger: "#certifications",
    scrub: 0.5,
  },
  x: 100,
  opacity: 0,
});

var width = window.innerWidth;

window.onresize = () => {
  width = window.innerWidth;
};

if (width > 480) {
  const cursor = new MouseFollower();
  const project1 = document.getElementById("project1");
  const project2 = document.getElementById("project2");
  const project3 = document.getElementById("project3");

  project1.addEventListener("mouseenter", () => {
    cursor.setImg("assets/project1.png");
  });

  project1.addEventListener("mouseleave", () => {
    cursor.removeImg();
  });

  project2.addEventListener("mouseenter", () => {
    cursor.setImg("assets/project2.png");
  });

  project2.addEventListener("mouseleave", () => {
    cursor.removeImg();
  });

  project3.addEventListener("mouseenter", () => {
    cursor.setImg("assets/project3.png");
  });

  project3.addEventListener("mouseleave", () => {
    cursor.removeImg();
  });
}
