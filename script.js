(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const carousel = document.querySelector("[data-carousel]");

  if (carousel) {
    const tabs = Array.from(carousel.querySelectorAll("[data-slide]"));
    const panels = Array.from(carousel.querySelectorAll("[role='tabpanel']"));

    function showSlide(index, moveFocus) {
      tabs.forEach(function (tab, tabIndex) {
        const selected = tabIndex === index;
        tab.setAttribute("aria-selected", String(selected));
        tab.setAttribute("tabindex", selected ? "0" : "-1");
        panels[tabIndex].hidden = !selected;
        panels[tabIndex].classList.toggle("is-active", selected);
      });

      if (moveFocus) tabs[index].focus();

      if (!reduceMotion && window.gsap) {
        window.gsap.fromTo(
          panels[index],
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" }
        );
      }
    }

    tabs.forEach(function (tab, index) {
      tab.addEventListener("click", function () {
        showSlide(index, false);
      });

      tab.addEventListener("keydown", function (event) {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const nextIndex = (index + direction + tabs.length) % tabs.length;
        showSlide(nextIndex, true);
      });
    });
  }

  document.querySelectorAll(".mobile-menu nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      const menu = link.closest("details");
      if (menu) menu.open = false;
    });
  });

  if (reduceMotion || !window.gsap || !window.ScrollTrigger) return;

  window.gsap.registerPlugin(window.ScrollTrigger);

  window.gsap.from(".reveal-on-load", {
    opacity: 0,
    y: 36,
    duration: 1.05,
    stagger: 0.16,
    ease: "power3.out"
  });

  window.gsap.utils.toArray(".project-card").forEach(function (card) {
    const visual = card.querySelector(".project-visual");
    if (!visual) return;

    window.gsap.fromTo(
      visual,
      { scale: 0.88, opacity: 0.46 },
      {
        scale: 1,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top 88%",
          end: "center 42%",
          scrub: true
        }
      }
    );

    window.gsap.to(visual, {
      opacity: 0.42,
      ease: "none",
      scrollTrigger: {
        trigger: card,
        start: "bottom 58%",
        end: "bottom 18%",
        scrub: true
      }
    });
  });

})();
