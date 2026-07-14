const DATA = {
  stack: {
    qa: [
      { name: "Manual Testing", icon: "fa-solid fa-magnifying-glass" },
      { name: "QA Automation", icon: "fa-solid fa-robot" },
      { name: "uTest Platform", icon: "fa-solid fa-vial-circle-check" },
      { name: "Mobile Testing", icon: "fa-solid fa-mobile-screen" },
    ],
    front: [
      { name: "HTML / CSS", icon: "fa-brands fa-html5" },
      { name: "React / JS", icon: "fa-brands fa-react" },
      { name: "Tailwind", icon: "fa-solid fa-wand-magic-sparkles" },
      { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
      { name: "jQuery", icon: "fa-solid fa-code-merge" },
      { name: "Firebase", icon: "fa-solid fa-database" },
      { name: "Git y GitHub", icon: "fa-brands fa-git-alt" },
    ],
    back: [
      { name: "PHP / SQL", icon: "fa-brands fa-php" },
      { name: "WordPress", icon: "fa-brands fa-wordpress" },
      { name: "GitHub", icon: "fa-brands fa-github" },
      { name: "Localhost", icon: "fa-solid fa-house-laptop" },
    ],
    agile: [
      { name: "Scrum", icon: "fa-solid fa-arrows-rotate" },
      { name: "Kanban", icon: "fa-solid fa-columns" },
      { name: "Jira", icon: "fa-brands fa-jira" },
      { name: "Trello", icon: "fa-brands fa-trello" },
      { name: "ClickUp", icon: "fa-solid fa-list-check" },
    ],
  },
  education: {
    qa: [
      { tag: "Carrera", name: "Carrera QA Automation Testing", desc: "Cursos avanzados en metodologías de testing y automatización." },
      { tag: "Bootcamp", name: "Testing QA — Talento Tech", desc: "Formación intensiva en testing manual y casos de prueba." },
      { tag: "Bootcamp", name: "Testing QA Manual — Technology With Purpose Foundation", desc: "Formación en testing QA manual con enfoque en propósito tecnológico." },
      { tag: "Curso", name: "Automatización con Selenium", desc: "Pruebas automatizadas con Selenium WebDriver." },
      { tag: "Curso", name: "Pruebas de API con Postman", desc: "Testing REST, colecciones y aserciones dinámicas." },
      { tag: "Curso", name: "Metodologías Ágiles (Scrum)", desc: "Roles, ceremonias y equipos de desarrollo." },
      { tag: "Curso", name: "Testing Automation", desc: "Automatización de pruebas con Selenium y Postman." },
    ],
    front: [
      { tag: "Tecnicatura", name: "Diseño Gráfico Digital", desc: "UX/UI, Figma, HTML, CSS, JS, Bootstrap, PHP, SQL." },
      { tag: "Curso", name: "React.js", desc: "Hooks, estado, routing y consumo de APIs." },
      { tag: "Curso", name: "JavaScript Intermedio", desc: "POO, closures, promesas, asincronía." },
      { tag: "Curso", name: "JavaScript Básico", desc: "Fundamentos: variables, funciones, DOM." },
      { tag: "Curso", name: "PHP y SQL", desc: "Consultas, CRUD y aplicaciones dinámicas." },
      { tag: "Curso", name: "Desarrollo Front-End", desc: "HTML, CSS, JS, Bootstrap, responsivo." },
    ],
  },
  projects: [
    { title: "PokeAppi", desc: "App web que consume la PokeAPI REST para buscar y mostrar Pokémon con datos detallados (tipos, stats, evoluciones). Diseño responsive, búsqueda en tiempo real y paginación.", repo: "https://github.com/hevieri/pokeappi", demo: "https://pokeappi.vercel.app/", tech: ["PokeAPI", "JavaScript", "CSS"] },
    { title: "SlotMachine", desc: "Máquina tragamonedas interactiva con lógica de juego en JavaScript, animaciones CSS y estado persistente. Simula tiradas con probabilidad real y efectos visuales.", repo: "https://github.com/hevieri/SlotMachine", demo: "https://slot-machine-nu-ecru.vercel.app/", tech: ["JavaScript", "CSS", "HTML"] },
    { title: "Calculador", desc: "Suite de herramientas de conversión con múltiples calculadoras: temperatura, peso, distancia, moneda y más. Interfaz modular con JS vanilla y actualización en vivo.", repo: "https://github.com/hevieri/Calculador", demo: "https://hevieri.github.io/Calculador/", tech: ["JavaScript", "HTML", "CSS"] },
    { title: "Tasky", desc: "Gestor de tareas con visualización de datos: importa JSON y genera gráficos y tablas dinámicas. CRUD completo con localStorage para persistencia local.", repo: "https://github.com/hevieri/Tasky", demo: "https://hevieri.github.io/Tasky/", tech: ["JavaScript", "JSON", "CSS"] },
    { title: "Tienda", desc: "E-commerce completo con catálogo de productos, carrito de compras, proceso de checkout y base de datos SQL. Backend en PHP con arquitectura MVC básica.", repo: "https://github.com/hevieri/Tienda", tech: ["PHP", "SQL"] },
    { title: "Morningstar", desc: "Sitio web estático responsive con HTML5 semántico y CSS3. Enfocado en accesibilidad (WCAG), estructura limpia y tipografía escalable con units relativas.", repo: "https://github.com/hevieri/Morningstar", demo: "https://hevieri.github.io/Morningstar/", tech: ["HTML5", "CSS3"] },
    { title: "MangaX", desc: "App de exploración de manga con consumo de API externa, búsqueda por género, sistema de favoritos y diseño responsive. Componentes modulares en React.", repo: "https://github.com/hevieri/MangaX", tech: ["React", "API", "JavaScript"] },
    { title: "MugiwaraWeb", desc: "Sitio web temático de One Piece con diseño responsive, estructura semántica y backend en PHP. Contenido dinámico cargado desde base de datos SQL.", repo: "https://github.com/hevieri/MugiwaraWeb", tech: ["PHP", "SQL"] },
  ],
};

const $ = id => document.getElementById(id);

function render(list, id, fn) {
  const el = $(id);
  if (!el) return;
  el.innerHTML = list.map(fn).join("");
}

const templates = {
  stackItem: i => `<div class="stack-item"><i class="${i.icon}"></i>${i.name}</div>`,
  pill: i => `<span class="pill"><i class="${i.icon}"></i>${i.name}</span>`,
  edu: i => `<div class="edu__item"><span class="edu__tag">${i.tag}</span><div class="edu__name">${i.name}</div><div class="edu__desc">${i.desc}</div></div>`,
  project: p => `<div class="project-card__icon"><i class="fa-solid fa-layer-group"></i></div><h3>${p.title}</h3><p>${p.desc}</p>${p.tech ? `<div class="project-card__tech">${p.tech.map(t => `<span>${t}</span>`).join("")}</div>` : ""}<div class="project-card__links">${p.demo ? `<a href="${p.demo}" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> demo</a>` : ""}<a href="${p.repo}" target="_blank"><i class="fa-brands fa-github"></i> código</a></div>`,
};

document.addEventListener("DOMContentLoaded", () => {
  render(DATA.stack.qa, "qa-render", templates.stackItem);
  render(DATA.stack.front, "front-render", templates.stackItem);
  render(DATA.stack.back, "back-render", templates.stackItem);
  render(DATA.stack.agile, "agile-render", templates.pill);
  render(DATA.education.qa, "edu-qa-render", templates.edu);
  render(DATA.education.front, "edu-front-render", templates.edu);

  DATA.projects.forEach((p, i) => {
    const el = document.querySelector(`[data-content="${i}"]`);
    if (el) el.innerHTML = templates.project(p);
  });
});

function toggleCVDropdown(e) {
  e.stopPropagation();
  const m = $("cv-dropdown"), a = $("cv-arrow");
  const btn = document.querySelector("[aria-controls='cv-dropdown']");
  m.classList.toggle("open");
  a.style.transform = m.classList.contains("open") ? "rotate(180deg)" : "rotate(0)";
  if (btn) btn.setAttribute("aria-expanded", String(m.classList.contains("open")));
}

document.addEventListener("click", () => {
  const m = $("cv-dropdown"), a = $("cv-arrow");
  if (m?.classList.contains("open")) {
    m.classList.remove("open");
    a.style.transform = "rotate(0)";
    const btn = document.querySelector("[aria-controls='cv-dropdown']");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }
});

// Hamburger menu
const hamburger = document.querySelector(".nav__hamburger");
const navLinks = document.querySelector(".nav__links");
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!expanded));
    navLinks.classList.toggle("nav__links--open");
  });
  document.addEventListener("click", (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.setAttribute("aria-expanded", "false");
      navLinks.classList.remove("nav__links--open");
    }
  });
}
