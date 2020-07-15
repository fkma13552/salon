"use strict"

  function smoothScroll(target, duration) {
    let headerHeight = 145;
    let targetElem = document.querySelector(target);
    let targetPosition = targetElem.getBoundingClientRect().top - headerHeight;
    let startPosition = window.pageYOffset;
    let startTime = null;

    function animation(currentTime){
      if (startTime ===null) startTime = currentTime;

      let timeElapsed = currentTime - startTime;
      let run = easeInOutQuad(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0,run);

      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad (t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    };

    requestAnimationFrame(animation);
  }

  const hairNav = document.querySelector(".nav-hair");
  const nailsNav = document.querySelector(".nav-nails");
  const podologyNav = document.querySelector(".nav-podology");
  const howtogetNav = document.querySelector(".nav-howtoget");

  hairNav.addEventListener("click", function() {
    smoothScroll(".hair", 600);
  });

  nailsNav.addEventListener("click", function() {
    smoothScroll(".nails", 600);
  });

  podologyNav.addEventListener("click", function() {
    smoothScroll(".podology", 600);
  });

  howtogetNav.addEventListener("click", function() {
    smoothScroll(".map", 600);
  });




  function openNav() {
      document.getElementById("myNavBar").style.width = "40%";
    }
    
    function closeNav() {
      document.getElementById("myNavBar").style.width = "0";
    }