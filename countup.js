document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");
  counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const increment = target / 100;
      const updateCount = () => {
          count += increment;
          if (count < target) {
              counter.textContent = Math.ceil(count);
              requestAnimationFrame(updateCount);
          } else {
              counter.textContent = target.toLocaleString();
          }
      };
      updateCount();
  });
});
