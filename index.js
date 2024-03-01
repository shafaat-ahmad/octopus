document.addEventListener("DOMContentLoaded", function () {
  const containers = document.querySelectorAll(".container");

  containers.forEach((container) => {
    container.addEventListener("click", () => {
      container.classList.add("active");
    });
  });
});
