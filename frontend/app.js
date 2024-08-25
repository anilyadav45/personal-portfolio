
//animate while scrolling
document.addEventListener("scroll", function() {
    const scrollElements = document.querySelectorAll(".animate-on-scroll");
  
    scrollElements.forEach((el) => {
      const elementInView = isElementInViewport(el);
      if (elementInView) {
        el.classList.add("visible");
      } else {
        el.classList.remove("visible");
      }
    });
  });
  
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }
  