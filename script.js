const DATA = {
  stack: {
    qa: [
      { n: "Manual Testing", i: "fa-solid fa-magnifying-glass" },
      { n: "QA Automation", i: "fa-solid fa-robot" },
      { n: "uTest Platform", i: "fa-solid fa-vial-circle-check" },
      { n: "Mobile Testing", i: "fa-solid fa-mobile-screen" },
    ],
    front: [
      { n: "HTML / CSS", i: "fa-brands fa-html5" },
      { n: "React / JS", i: "fa-brands fa-react" },
      { n: "Tailwind", i: "fa-solid fa-wand-magic-sparkles" },
      { n: "Bootstrap", i: "fa-brands fa-bootstrap" },
      { n: "jQuery", i: "fa-solid fa-code-merge" },
      { n: "Firebase", i: "fa-solid fa-database" },
      { n: "Git y GitHub", i: "fa-brands fa-git-alt" },
    ],
    back: [
      { n: "PHP / SQL", i: "fa-brands fa-php" },
      { n: "WordPress", i: "fa-brands fa-wordpress" },
      { n: "GitHub", i: "fa-brands fa-github" },
      { n: "Localhost", i: "fa-solid fa-house-laptop" },
    ],
    agile: [
      { n: "Scrum", i: "fa-solid fa-arrows-rotate" },
      { n: "Kanban", i: "fa-solid fa-columns" },
      { n: "Jira", i: "fa-brands fa-jira" },
      { n: "Trello", i: "fa-brands fa-trello" },
      { n: "ClickUp", i: "fa-solid fa-list-check" },
    ],
  },
  projects: [
    {
      t: "Calculador",
      d: "Diferentes tipos de conversores",
      repo: "https://github.com/hevieri/Calculador",
      demo: "https://hevieri.github.io/Calculador/",
    },
    {
      t: "Gestor de tareas",
      d: "Visualiza los Json en graficos y tablas",
      repo: "https://github.com/hevieri/Tasky",
      demo: "https://hevieri.github.io/Tasky/",
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  const inject = (list, id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = list
      .map(
        (item) => `
            <div class="stack-item">
                <i class="${item.i}"></i>
                <span>${item.n}</span>
            </div>
        `,
      )
      .join("");
  };

  const injectAgile = (list, id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = list
      .map(
        (item) => `
            <span class="agile-item">
                <i class="${item.i}"></i>
                ${item.n}
            </span>
        `,
      )
      .join("");
  };

  inject(DATA.stack.qa, "qa-render");
  inject(DATA.stack.front, "front-render");
  inject(DATA.stack.back, "back-render");
  injectAgile(DATA.stack.agile, "agile-render");

  const pContainer = document.getElementById("mini-projects-list");
  if (pContainer) {
    pContainer.innerHTML = DATA.projects
      .map(
        (p) => `
            <div class="mini-card">
                <div>
                    <h5>${p.t}</h5>
                    <p>${p.d}</p>
                    <div class="project-links">
                        <a href="${p.repo}" target="_blank" class="icon-link">
                            <i class="fa-brands fa-github"></i>
                        </a>
                        <a href="${p.demo}" target="_blank" class="icon-link">
                            <i class="fa-solid fa-globe"></i>
                        </a>
                    </div>
                </div>
            </div>
        `,
      )
      .join("");
  }
});

function toggleAccordion(bodyId, arrowId) {
  const body = document.getElementById(bodyId);
  const arrow = document.getElementById(arrowId);

  if (body.classList.contains("open")) {
    body.style.maxHeight = null;
    body.classList.remove("open");
    arrow.classList.remove("rotate");
  } else {
    body.style.maxHeight = body.scrollHeight + "px";
    body.classList.add("open");
    arrow.classList.add("rotate");
  }
}

function toggleCVDropdown(e) {
  e.stopPropagation();
  const menu = document.getElementById("cv-dropdown-menu");
  const arrow = document.getElementById("cv-arrow");
  menu.classList.toggle("open");
  arrow.style.transform = menu.classList.contains("open") ? "rotate(180deg)" : "rotate(0)";
}

document.addEventListener("click", () => {
  const menu = document.getElementById("cv-dropdown-menu");
  const arrow = document.getElementById("cv-arrow");
  if (menu && menu.classList.contains("open")) {
    menu.classList.remove("open");
    arrow.style.transform = "rotate(0)";
  }
});

function toggleCVDropdown(e) {
  e.stopPropagation();
  const menu = document.getElementById("cv-dropdown-menu");
  const arrow = document.getElementById("cv-arrow");
  menu.classList.toggle("open");
  arrow.style.transform = menu.classList.contains("open") ? "rotate(180deg)" : "rotate(0)";
}

document.addEventListener("click", () => {
  const menu = document.getElementById("cv-dropdown-menu");
  const arrow = document.getElementById("cv-arrow");
  if (menu && menu.classList.contains("open")) {
    menu.classList.remove("open");
    arrow.style.transform = "rotate(0)";
  }
});
