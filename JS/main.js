
//scrol topoverlay

// gsap.utils.toArray(".section").forEach((section, i) => {
//     ScrollTrigger.create({
//       trigger: section,
//       start: "top top",
//       pin: true,
//       pinSpacing: false,
//     });
//   });


//scroll horizontal
let sections = gsap.utils.toArray(".section");

gsap.to(sections,{
    xPercent:-100 * (sections.length - 1),
    ease: "none",
    scrollTrigger:{
            trigger:".container",
            pin: true,
            scrub:1,
           snap:1 / (sections.length - 1),
           // base vertical scrolling on how wide the container is so it feels more natural
           end: () => "+=" + 
           document.querySelector(".container").offsetWidth
        }
      });
