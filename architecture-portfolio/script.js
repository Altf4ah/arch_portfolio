AOS.init({
    // Global settings:
    duration: 1200,       // animation duration in ms
    once: true,           // whether animation should happen only once - while scrolling down
    easing: 'ease-in-out',// default easing for AOS animations
    offset: 100,          // offset (in px) from the original trigger point
    delay: 100,           // global delay before animation starts
    mirror: false,        // whether elements should animate out while scrolling past them
  
    // Advanced (optional):
    anchorPlacement: 'top-bottom', // defines which position of the element triggers animation
  });
  