
// ACTIVIDAD COMPLEMENTARIA UF2


// Acordeon

// Mostramos el contenido de la primera pestaña por defecto.
const firstAccordionContent = document.querySelector('.accordion-content');
firstAccordionContent.style.display = 'block';

// Seleccionamos todos los elementos con la clase "accordion-title"
const accordionTitles = document.querySelectorAll('.accordion-title');

// Añadimos un evento "click" a cada titulo
accordionTitles.forEach(title => {
  title.addEventListener('click', () => {
    // Seleccionamos el elemento siguiente al título (en este caso, el contenido del acordeón)
    const accordionContent = title.nextElementSibling;

    // Si el contenido está visible, lo ocultamos
    if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none';
    }
    // Si el contenido está oculto, lo mostramos y ocultamos los demás.
    else {
      accordionTitles.forEach(title => {
        const content = title.nextElementSibling;
        content.style.display = 'none';
      });
      accordionContent.style.display = 'block';
    }
  });
});


// Parallax

// Funcion para el efecto parallax
function ScrollParallax() {
  let scrollTop = document.documentElement.scrollTop - 1000;

  document.getElementById('parallax-background').style.transform = 'translateY(' + scrollTop * -0.4 + 'px)';
}

// Al realizar scroll se ejecuta la funcion ScrollParallax
window.addEventListener('scroll', ScrollParallax);


// Pestañas con filtros

// Seleccionamos todos los elementos con la clase "tab" y el contenido con class "tab-panel"
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-panel");

// Por cada elemento "tab", agregamos un evento de click
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Obtenemos el valor del atributo "data-tab"
    const targetTab = tab.getAttribute("data-tab");

    // Removemos la clase "active" de todos los elementos "tab"
    tabs.forEach(tab => {
      tab.classList.remove("active");
    });

    // Agregamos la clase "active" al elemento "tab" que se hizo click
    tab.classList.add("active");

    // Removemos la clase "active" de todos los elementos "tab-panel"
    tabContents.forEach(tabContent => {
      tabContent.classList.remove("active");

      // Agregamos la clase "active" al elemento "tab-panel" clicado.
      if (tabContent.getAttribute("id") === targetTab) {
        tabContent.classList.add("active");
      }
    });
  });
});

// Tooltips

// Seleccionamos todos los elementos con class "tooltip"
const tooltips = document.querySelectorAll(".tooltip");

tooltips.forEach(tooltip => {
  // Cuando ocurre evento "mouseenter" se cambia el stilo de opacidad a 1 para mostrar.
  tooltip.addEventListener("mouseenter", () => {
    tooltip.querySelector("after").style.opacity = "1";
  });
  // Cuando ocurre evento "mouseleave" se cambia el stilo de opacidad a 0 para ocultar.
  tooltip.addEventListener("mouseleave", () => {
    tooltip.querySelector("after").style.opacity = "0";
  });
});