

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

gsap.to('.box', {
  scrollTrigger: {
    trigger: '.box',   // element to trigger animation
    start: 'top center',  // start when ".box" is in the center of the viewport
    end: 'bottom 100px',  // end when ".box" reaches 100px above the bottom
    scrub: 8,            // smooth scrubbing animation while scrolling
    markers: true,       // show markers to visualize the start and end points
    toggleActions: 'play reverse play reverse',  // control how the animation behaves when scrolling back
  },
  x: 500,                  // moves the element 500px on x-axis
  duration: 2,             // duration of the animation
  ease: 'power1.out',      // ease-out effect for smoothness
  opacity: 0.8,            // add opacity effect
  rotation: 360            // rotate the box for a fun effect
});
