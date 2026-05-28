/**
 * ERIKA HELFENSTERN - PORTFOLIO LOGIC
 */

const DATA = {
  stack: {
    qa: [
      { n: "Manual Testing", i: "fa-solid fa-magnifying-glass" },
      { n: "QA Automation", i: "fa-solid fa-robot" },
      { n: "uTest Platform", i: "fa-solid fa-vial-circle-check" },
      { n: "Mobile Testing", i: "fa-solid fa-mobile-screen" },
    ],
    front: [
      { n: "React / JS", i: "fa-brands fa-react" },
      { n: "HTML / CSS", i: "fa-brands fa-html5" },
      { n: "Bootstrap", i: "fa-brands fa-bootstrap" },
      { n: "jQuery", i: "fa-solid fa-code-merge" },
    ],
    back: [
      { n: "PHP / SQL", i: "fa-brands fa-php" },
      { n: "WordPress", i: "fa-brands fa-wordpress" },
      { n: "GitHub", i: "fa-brands fa-github" },
      { n: "Localhost", i: "fa-solid fa-house-laptop" },
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
  experience: [
    {
      t: "Proyecto WordPress",
      d: "Desde chica me interesó el diseño de páginas web: comencé creando sitios en WordPress y llegué a mantener un portal de noticias con actualizaciones diarias, aplicando estrategias de SEO y monetización con publicidad de Google. Con el tiempo avancé hacia el desarrollo con código, explorando HTML, CSS, JavaScript y Bootstrap.",
      i: "fa-solid fa-laptop-code",
    },
    {
      t: "Adopta un Junior",
      d: "Ejercí el rol de QA Tester dentro de equipos organizados por áreas, participando en reuniones de coordinación y ciclos de feedback. Colaboré con desarrolladores y diseñadores para asegurar la calidad del software en proyectos que simulaban un entorno laboral real.",
      i: "fa-solid fa-users",
    },
    {
      t: "uTest",
      d: "Mi paso por uTest me permitió enfrentar escenarios reales de testing Web y Mobile, adquiriendo disciplina, precisión y capacidad de adaptación en distintos proyectos.",
      i: "fa-solid fa-bug",
    },
    {
      t: "Proyectos Autodidactas",
      d: "Suelo llevar adelante proyectos autodidactas para seguir aprendiendo y perfeccionando mis habilidades en QA y front‑end, explorando nuevas herramientas y metodologías.",
      i: "fa-solid fa-lightbulb",
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  // Inyectar Stack
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

  inject(DATA.stack.qa, "qa-render");
  inject(DATA.stack.front, "front-render");
  inject(DATA.stack.back, "back-render");

  // Inyectar Proyectos Mini (sin icono de la card, centrando los links)
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

  // Inyectar Experiencia
  const expContainer = document.getElementById("experience-render");
  if (expContainer) {
    expContainer.innerHTML = DATA.experience
      .map(
        (e) => `
            <div class="experience-card">
                <h4><i class="${e.i}"></i> ${e.t}</h4>
                <p>${e.d}</p>
            </div>
        `,
      )
      .join("");
  }
});

/**
 * Función global para manejar acordeones
 */
function toggleAccordion(bodyId, arrowId) {
  const body = document.getElementById(bodyId);
  const arrow = document.getElementById(arrowId);

  if (body.classList.contains("open")) {
    body.classList.remove("open");
    arrow.classList.remove("rotate");
  } else {
    body.classList.add("open");
    arrow.classList.add("rotate");
  }
}

function toggleAccordion(bodyId, arrowId) {
  const body = document.getElementById(bodyId);
  const arrow = document.getElementById(arrowId);

  if (body.classList.contains("open")) {
    // cerrar
    body.style.maxHeight = null;
    body.classList.remove("open");
    arrow.classList.remove("rotate");
  } else {
    // abrir con altura autoajustada
    body.style.maxHeight = body.scrollHeight + "px";
    body.classList.add("open");
    arrow.classList.add("rotate");
  }
}
