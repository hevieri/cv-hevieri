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
      { tag: "Carrera", name: "Carrera QA Automation Testing", desc: "Cursos avanzados en metodologías de testing y herramientas de automatización." },
      { tag: "Bootcamp", name: "Testing QA — Talento Tech", desc: "Formación intensiva en testing manual, detección de errores y casos de prueba." },
      { tag: "Curso", name: "Automatización con Selenium", desc: "Pruebas automatizadas con Selenium WebDriver — Talento Tech." },
      { tag: "Curso", name: "Pruebas de API con Postman", desc: "Testing REST, colecciones, variables de entorno y aserciones dinámicas." },
      { tag: "Curso", name: "Pruebas de Rendimiento", desc: "Estrés y carga en aplicaciones web con herramientas open-source." },
      { tag: "Curso", name: "Gestión de Casos de Prueba", desc: "TestRail y buenas prácticas ISTQB." },
      { tag: "Curso", name: "Metodologías Ágiles (Scrum)", desc: "Roles, ceremonias y aplicación en equipos de desarrollo y testing." },
    ],
    front: [
      { tag: "Tecnicatura", name: "Diseño Gráfico Digital", desc: "UX/UI, Figma, HTML, CSS, JS, Bootstrap, PHP, SQL." },
      { tag: "Curso", name: "React.js", desc: "Hooks, estado, routing y consumo de APIs." },
      { tag: "Curso", name: "JavaScript Intermedio", desc: "POO, closures, promesas, asincronía y manipulación del DOM." },
      { tag: "Curso", name: "JavaScript Básico", desc: "Fundamentos: variables, funciones, DOM, eventos — Educación IT." },
      { tag: "Curso", name: "PHP y SQL", desc: "Consultas, CRUD, conexión a bases de datos y aplicaciones dinámicas." },
      { tag: "Curso", name: "SQL", desc: "Joins, subconsultas, índices y optimización de bases de datos." },
      { tag: "Curso", name: "Sass y CSS Moderno", desc: "Grid, Flexbox, animaciones, arquitectura de estilos." },
      { tag: "Curso", name: "Diseño UX/UI con Figma", desc: "Prototipado, sistemas de diseño y componentes reutilizables." },
      { tag: "Curso", name: "Desarrollo Front-End", desc: "HTML, CSS, JavaScript y Bootstrap — interfaces responsivas." },
      { tag: "Curso", name: "Git & GitHub Avanzado", desc: "Ramas, merge, PRs y flujos colaborativos." },
    ],
  },
  projects: [
    {
      title: "Calculador",
      desc: "Suite de herramientas de conversión — múltiples calculadoras y conversores en uno.",
      repo: "https://github.com/hevieri/Calculador",
      demo: "https://hevieri.github.io/Calculador/",
    },
    {
      title: "Tasky",
      desc: "Gestor de tareas con visualización de datos — JSON a gráficos y tablas dinámicas.",
      repo: "https://github.com/hevieri/Tasky",
      demo: "https://hevieri.github.io/Tasky/",
    },
  ],
};

const $ = (id) => document.getElementById(id);

function render(items, containerId, templateFn) {
  const container = $(containerId);
  if (!container) return;
  container.innerHTML = items.map(templateFn).join("");
}

const skillItem = (item) => `
  <div class="skill-item">
    <i class="${item.icon}"></i>
    <span>${item.name}</span>
  </div>
`;

const pillTag = (item) => `
  <span class="pill">
    <i class="${item.icon}"></i>
    ${item.name}
  </span>
`;

const eduItem = (item) => `
  <div class="edu__item">
    <span class="edu__tag">${item.tag}</span>
    <div class="edu__name">${item.name}</div>
    <div class="edu__desc">${item.desc}</div>
  </div>
`;

const projectInner = (p) => `
  <div class="project-card__icon"><i class="fa-solid fa-layer-group"></i></div>
  <h3>${p.title}</h3>
  <p>${p.desc}</p>
  <div class="project-card__links">
    <a href="${p.repo}" target="_blank"><i class="fa-brands fa-github"></i> Código</a>
    <a href="${p.demo}" target="_blank"><i class="fa-solid fa-globe"></i> Demo</a>
  </div>
`;

document.addEventListener("DOMContentLoaded", () => {
  render(DATA.stack.qa, "qa-render", skillItem);
  render(DATA.stack.front, "front-render", skillItem);
  render(DATA.stack.back, "back-render", skillItem);
  render(DATA.stack.agile, "agile-render", pillTag);
  render(DATA.education.qa, "edu-qa-render", eduItem);
  render(DATA.education.front, "edu-front-render", eduItem);

  DATA.projects.forEach((p, i) => {
    const el = document.querySelector(`[data-tilt-content="${i}"]`);
    if (el) el.innerHTML = projectInner(p);
  });

  // ── Scroll Reveal ──
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // ── Typing Effect ──
  typeText();

  // ── Tilt Cards ──
  initTilt();

  // ── Magnetic Socials ──
  initMagnetic();

  // ── Counters ──
  initCounters();
});

// ── TYPING ──
function typeText() {
  const el = $("typing-text");
  const cursor = $("typing-cursor");
  if (!el) return;
  const text = "Desarrollo Web y Testing QA. Curiosa por naturaleza, siempre explorando tecnologías nuevas.";
  let i = 0;
  function tick() {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
      const delay = text[i - 1] === "." || text[i - 1] === "," ? 120 : 25 + Math.random() * 20;
      setTimeout(tick, delay);
    } else {
      cursor.style.animation = "cursorBlink 1.2s step-end infinite";
    }
  }
  setTimeout(tick, 400);
}

// ── TILT ──
function initTilt() {
  document.querySelectorAll(".tilt-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.setProperty("--mx", ((x / rect.width) * 100) + "%");
      card.style.setProperty("--my", ((y / rect.height) * 100) + "%");
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });
  });
}

// ── MAGNETIC ──
function initMagnetic() {
  document.querySelectorAll(".hero__socials a").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0, 0)";
    });
  });
}

// ── COUNTERS ──
function initCounters() {
  const counters = [
    { el: document.querySelector(".stat:nth-child(1) .stat__num"), target: 4, suffix: "+" },
    { el: document.querySelector(".stat:nth-child(2) .stat__num"), target: 2, suffix: "" },
  ];

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const c = counters.find((ct) => ct.el === entry.target);
          if (c && !c.done) {
            c.done = true;
            animateCounter(c.el, c.target, c.suffix);
          }
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((c) => {
    if (c.el) counterObserver.observe(c.el);
  });
}

function animateCounter(el, target, suffix) {
  let current = 0;
  const step = Math.ceil(target / 40);
  function tick() {
    current += step;
    if (current >= target) {
      el.textContent = target + suffix;
      return;
    }
    el.textContent = current + suffix;
    requestAnimationFrame(tick);
  }
  tick();
}

// ── CV Dropdown ──
function toggleCVDropdown(e) {
  e.stopPropagation();
  const menu = $("cv-dropdown");
  const arrow = $("cv-arrow");
  menu.classList.toggle("open");
  arrow.style.transform = menu.classList.contains("open") ? "rotate(180deg)" : "rotate(0)";
}

document.addEventListener("click", () => {
  const menu = $("cv-dropdown");
  const arrow = $("cv-arrow");
  if (menu?.classList.contains("open")) {
    menu.classList.remove("open");
    arrow.style.transform = "rotate(0)";
  }
});
