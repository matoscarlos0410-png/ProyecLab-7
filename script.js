/* =========================================================
   PROYEC LAB V7
   DESCUBRE SAUSAL
========================================================= */


/* =========================================================
   BASE DE DATOS DE LUGARES
========================================================= */

const places = [

  /* =========================
     COMIDA
  ========================== */

  {
    name: "Mari Mar Restaurante",
    category: "comida",
    icon: "🍽️",
    description: "Restaurante ubicado en la localidad de Sausal.",
    location: "1NF, Sausal 13700",
    map: "Mari Mar Restaurante Sausal La Libertad"
  },

  {
    name: "Restaurante & Cevichería Keylita",
    category: "comida",
    icon: "🐟",
    description: "Restaurante y cevichería de la localidad.",
    location: "Sausal 13700",
    map: "Restaurante Cevicheria Keylita Sausal"
  },

  {
    name: "Restaurant Liz",
    category: "comida",
    icon: "🍛",
    description: "Restaurante ubicado en Sausal.",
    location: "C. La Libertad 37, Sausal 13700",
    map: "Restaurant Liz Sausal La Libertad"
  },

  {
    name: "Pollería Bendición de Dios",
    category: "comida",
    icon: "🍗",
    description: "Pollería ubicada en la localidad.",
    location: "C. Lima 35, Sausal 13700",
    map: "Polleria Bendicion de Dios Sausal"
  },

  {
    name: "Pollería Yayita",
    category: "comida",
    icon: "🍗",
    description:
      "Pollería registrada públicamente. La ubicación registrada corresponde a Chicama; se recomienda confirmar su ubicación exacta en Sausal.",
    location: "Chicama 13700 — confirmar ubicación en Sausal",
    map: "Polleria Yayita Chicama La Libertad",
    warning:
      "Ubicación en Sausal por confirmar."
  },


  /* =========================
     SERVICIOS
  ========================== */

  {
    name: "Mercado de Abastos de Sausal",
    category: "servicios",
    icon: "🛒",
    description:
      "Espacio de comercio y abastecimiento para la población de Sausal.",
    location: "Sausal, La Libertad",
    map: "Mercado de Abastos Sausal La Libertad"
  },

  {
    name: "Bodega Sausal",
    category: "servicios",
    icon: "🏪",
    description:
      "Establecimiento comercial registrado en la localidad.",
    location: "C. Lima 57, Sausal",
    map: "Bodega Sausal C Lima 57"
  },

  {
    name: "Lavandería de Ropa Doña Luzmila",
    category: "servicios",
    icon: "🧺",
    description:
      "Servicio local de lavandería.",
    location: "Sausal",
    map: "Lavanderia Doña Luzmila Sausal"
  },

  {
    name: "Servicio Móvil Lescano",
    category: "servicios",
    icon: "📱",
    description:
      "Servicio relacionado con telefonía y dispositivos móviles.",
    location: "Sausal",
    map: "Servicio Movil Lescano Sausal"
  },


  /* =========================
     EDUCACIÓN
  ========================== */

  {
    name: "I.E. José Carlos Mariátegui",
    category: "educacion",
    icon: "🏫",
    description:
      "Institución educativa de Sausal. Su creación está registrada el 17 de octubre de 1965.",
    location: "Sausal, La Libertad",
    map: "IE José Carlos Mariategui Sausal"
  },

  {
    name: "I.E. 81971 Alfonso Ugarte",
    category: "educacion",
    icon: "🏫",
    description:
      "Institución educativa ubicada en la comunidad de Sausal.",
    location: "Sausal, La Libertad",
    map: "IE 81971 Alfonso Ugarte Sausal"
  },

  {
    name: "Jardines de Sausal",
    category: "educacion",
    icon: "🧒",
    description:
      "Búsqueda de instituciones y jardines de educación inicial de Sausal.",
    location: "Sausal, La Libertad",
    map: "Jardines educación inicial Sausal La Libertad"
  },


  /* =========================
     LUGARES
  ========================== */

  {
    name: "Plaza de Sausal",
    category: "lugares",
    icon: "🌳",
    description:
      "Espacio público y punto de encuentro de la comunidad.",
    location: "Sausal, La Libertad",
    map: "Plaza de Sausal La Libertad"
  },

  {
    name: "Plazuela El Maestro",
    category: "lugares",
    icon: "🌳",
    description:
      "Espacio público de la localidad.",
    location: "Sausal, La Libertad",
    map: "Plazuela El Maestro Sausal"
  },

  {
    name: "Parque Infantil Noli",
    category: "lugares",
    icon: "🎠",
    description:
      "Espacio recreativo para niños y familias.",
    location: "Sausal, La Libertad",
    map: "Parque Infantil Noli Sausal"
  },

  {
    name: "Piscina de Sausal",
    category: "lugares",
    icon: "🏊",
    description:
      "Espacio recreativo y deportivo para actividades acuáticas.",
    location: "Sausal, La Libertad",
    map: "Piscina de Sausal La Libertad"
  },

  {
    name: "Cerro 1 de Mayo",
    category: "lugares",
    icon: "⛰️",
    description:
      "Lugar relacionado con actividades y tradiciones de la comunidad.",
    location: "Sausal, La Libertad",
    map: "Cerro 1 de Mayo Sausal"
  },


  /* =========================
     INSTITUCIONES
  ========================== */

  {
    name: "Municipalidad de Sausal",
    category: "instituciones",
    icon: "🏛️",
    description:
      "Institución de gestión local de la comunidad.",
    location: "Sausal, La Libertad",
    map: "Municipalidad Sausal La Libertad"
  },

  {
    name: "Centro de Salud Alto Perú Sausal",
    category: "instituciones",
    icon: "🏥",
    description:
      "Establecimiento de salud de la localidad.",
    location: "Sausal, La Libertad",
    map: "Centro de Salud Alto Peru Sausal"
  },

  {
    name: "Comisaría Rural Sausal",
    category: "instituciones",
    icon: "👮",
    description:
      "Dependencia policial de la localidad.",
    location: "Sausal, La Libertad",
    map: "Comisaria Rural Sausal"
  },


  /* =========================
     TRANSPORTE
  ========================== */

  {
    name: "Terminal Terrestre Sausal",
    category: "transporte",
    icon: "🚌",
    description:
      "Punto relacionado con el transporte terrestre de la localidad.",
    location: "Sausal, La Libertad",
    map: "Terminal Terrestre Sausal La Libertad"
  },

  {
    name: "Estación de Colectivos Sausal - Casa Grande",
    category: "transporte",
    icon: "🚐",
    description:
      "Servicio de transporte colectivo entre Sausal y Casa Grande.",
    location: "Sausal, La Libertad",
    map: "Estacion Colectivos Sausal Casa Grande"
  },


  /* =========================
     CULTURA
  ========================== */

  {
    name: "Virgen del Rosario",
    category: "cultura",
    icon: "⛪",
    description:
      "Festividad religiosa mencionada entre las tradiciones de Sausal.",
    location: "Sausal, La Libertad",
    map: "Virgen del Rosario Sausal La Libertad"
  },

  {
    name: "Señor de los Milagros",
    category: "cultura",
    icon: "⛪",
    description:
      "Tradición religiosa presente entre las festividades locales.",
    location: "Sausal, La Libertad",
    map: "Señor de los Milagros Sausal La Libertad"
  },

  {
    name: "Virgen de la Puerta",
    category: "cultura",
    icon: "⛪",
    description:
      "Festividad religiosa mencionada en información institucional de Sausal.",
    location: "Sausal, La Libertad",
    map: "Virgen de la Puerta Sausal La Libertad"
  }

];


/* =========================================================
   REFERENCIAS HTML
========================================================= */

const placesGrid =
  document.getElementById("placesGrid");

const searchInput =
  document.getElementById("searchInput");

const clearSearch =
  document.getElementById("clearSearch");

const noResults =
  document.getElementById("noResults");

const filterButtons =
  document.querySelectorAll(".filter-btn");

const categoryCards =
  document.querySelectorAll(".category-card");

const menuToggle =
  document.getElementById("menuToggle");

const mainNav =
  document.getElementById("mainNav");

const year =
  document.getElementById("year");


/* =========================================================
   ESTADO
========================================================= */

let currentFilter = "todos";
let currentSearch = "";


/* =========================================================
   GOOGLE MAPS
========================================================= */

function createMapsURL(search) {

  return (
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(search)
  );

}


/* =========================================================
   NOMBRE DE CATEGORÍA
========================================================= */

function categoryName(category) {

  const names = {

    comida: "Comida",

    servicios: "Servicios",

    educacion: "Educación",

    lugares: "Lugares",

    instituciones: "Instituciones",

    transporte: "Transporte",

    cultura: "Cultura"

  };

  return names[category] || category;

}


/* =========================================================
   MOSTRAR LUGARES
========================================================= */

function renderPlaces() {

  const search =
    currentSearch.toLowerCase().trim();

  const filteredPlaces =
    places.filter(place => {

      const matchesCategory =
        currentFilter === "todos" ||
        place.category === currentFilter;

      const searchableText =
        (
          place.name +
          " " +
          place.description +
          " " +
          place.location
        ).toLowerCase();

      const matchesSearch =
        !search ||
        searchableText.includes(search);

      return (
        matchesCategory &&
        matchesSearch
      );

    });


  placesGrid.innerHTML = "";


  if (filteredPlaces.length === 0) {

    noResults.style.display = "block";

    return;

  }


  noResults.style.display = "none";


  filteredPlaces.forEach(place => {

    const card =
      document.createElement("article");

    card.className = "place-card";


    let warning = "";

    if (place.warning) {

      warning = `
        <small class="confirmation">
          ⚠️ ${place.warning}
        </small>
      `;

    }


    card.innerHTML = `

      <div class="place-icon">
        ${place.icon}
      </div>

      <span class="place-category">
        ${categoryName(place.category)}
      </span>

      <h3>
        ${place.name}
      </h3>

      <p>
        ${place.description}
      </p>

      <div class="place-location">
        📍 ${place.location}
      </div>

      <div class="place-actions">

        <a
          class="map-btn"
          href="${createMapsURL(place.map)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          📍 Ver en Google Maps
        </a>

      </div>

      ${warning}

    `;


    placesGrid.appendChild(card);

  });

}


/* =========================================================
   FILTROS
========================================================= */

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn => {

      btn.classList.remove("active");

    });


    button.classList.add("active");


    currentFilter =
      button.dataset.filter;


    renderPlaces();

    document
      .getElementById("explorar")
      .scrollIntoView({
        behavior: "smooth"
      });

  });

});


/* =========================================================
   CATEGORÍAS
========================================================= */

categoryCards.forEach(card => {

  card.addEventListener("click", () => {

    const category =
      card.dataset.category;


    currentFilter =
      category;


    filterButtons.forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.filter === category
      );

    });


    renderPlaces();


    document
      .getElementById("explorar")
      .scrollIntoView({
        behavior: "smooth"
      });

  });

});


/* =========================================================
   BUSCADOR
========================================================= */

searchInput.addEventListener(
  "input",
  event => {

    currentSearch =
      event.target.value;

    renderPlaces();

  }
);


/* =========================================================
   LIMPIAR BÚSQUEDA
========================================================= */

clearSearch.addEventListener(
  "click",
  () => {

    searchInput.value = "";

    currentSearch = "";

    currentFilter = "todos";


    filterButtons.forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.filter === "todos"
      );

    });


    renderPlaces();

  }
);


/* =========================================================
   MENÚ MÓVIL
========================================================= */

menuToggle.addEventListener(
  "click",
  () => {

    mainNav.classList.toggle("open");

  }
);


/* Cerrar menú al pulsar un enlace */

document
  .querySelectorAll("#mainNav a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        mainNav.classList.remove("open");

      }
    );

  });


/* =========================================================
   PARALLAX DEL FONDO
========================================================= */

let lastScroll = 0;

window.addEventListener(
  "scroll",
  () => {

    const background =
      document.querySelector(
        ".background-photo"
      );

    if (!background) return;


    lastScroll =
      window.scrollY * 0.025;


    background.style.transform =
      `scale(1.08) translateY(${lastScroll}px)`;

  },
  { passive: true }
);


/* =========================================================
   ANIMACIÓN AL APARECER
========================================================= */

const observer =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.style.opacity = "1";

          entry.target.style.transform =
            "translateY(0)";

          observer.unobserve(entry.target);

        }

      });

    },
    {
      threshold: 0.10
    }
  );


document
  .querySelectorAll(
    ".category-card, .place-card, .mini-history, .project-card, .timeline-item"
  )
  .forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
      "translateY(20px)";

    element.style.transition =
      "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

  });


/* =========================================================
   AÑO AUTOMÁTICO
========================================================= */

if (year) {

  year.textContent =
    new Date().getFullYear();

}


/* =========================================================
   INICIAR
========================================================= */

renderPlaces();
