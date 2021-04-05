// const streetExp = document.querySelector(".street-exp");

// window.addEventListener("scroll", scrollReveal);

// function scrollReveal() {
//   const streetPos = streetExp.getBoundingClientRect().top;
//   const windowHeight = window.innerHeight / 2;
//   if (streetPos < windowHeight) {
//     streetExp.style.color = "red";
//   }
// }

/////////////////////////////////////////////////////////
// Using the observer
// Check if an element is in view (intersection observer)
/////////////////////////////////////////////////////////

// root - element that is used as the viewport for checking visibility of the target. Must be the ancestor of the target. Defaults to the browser viewport
// rootmargin - margin around the root. Serves to grow/shrink each side of the root element's bounding box before computing intersections. Defaults to all 0's
// threshold - a single number or an array of numbers that indicate at what percentage of the target's visibility the observer's callback should be executed. Defaults to 0 (run when even 1 pixel is visible)

// const slide = document.querySelector(".photography");

// let options = {
//   threshold: 0.5,
// };

// let observer = new IntersectionObserver(slideAnim, options);

// // Entries are all the items that we have
// function slideAnim(entries) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       slide.style.background = "white";
//     }
//   });
// }

// observer.observe(slide);

/////////////////////////////////////////////////////////
// Using ScrollMagic library
/////////////////////////////////////////////////////////

// Looks at all items on page, and keeps track of them
const controller = new ScrollMagic.Controller();

// Create different kind of scenes and then add them to the controller
const exploreScene = new ScrollMagic.Scene({
  triggerElement: ".photography-exp",
  triggerHook: 0.5,
})
  .addIndicators({ colorStart: "white", colorTrigger: "white" })
  .setClassToggle(".photography-exp", ".active")
  .addTo(controller);
