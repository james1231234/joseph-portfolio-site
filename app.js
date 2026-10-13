const filters = document.querySelector(".filters");
const buttons = [...document.querySelectorAll("[data-filter]")];
const projects = [...document.querySelectorAll("[data-category]")];
const status = document.querySelector("#filter-status");

filters.hidden = false;
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const selected = button.dataset.filter;
    buttons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });
    let visible = 0;
    projects.forEach((project) => {
      project.hidden =
        selected !== "all" &&
        !project.dataset.category.split(" ").includes(selected);
      if (!project.hidden) visible += 1;
    });
    status.textContent = `${visible} ${visible === 1 ? "project" : "projects"} shown`;
  });
});
document.querySelector("#year").textContent = String(new Date().getFullYear());
