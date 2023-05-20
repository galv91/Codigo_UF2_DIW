// Modal bienvenida 

function modalBienvenida() {
    document.getElementById("modalBienvenida").style.display = "block";
    document.getElementById("heroTitle").style.animationPlayState = "paused";
    document.documentElement.style.overflow = "hidden";
}

function cerrarModalBienvenida() {
    document.getElementById("modalBienvenida").style.display = "none";
    document.getElementById("heroTitle").style.animationPlayState = "running";
    document.documentElement.style.overflowY = "auto";
    setInterval(slideshowAnim, 3500);
}

// Modal contacto

function modalContacto() {
    document.getElementById("modalContacto").style.display = "block";
    document.documentElement.style.overflow = "hidden";

    var nombre = document.getElementById("formNombre").value;
    var apellido = document.getElementById("formApellido").value;
    var mail = document.getElementById("formMail").value;;

    var mensaje;

    (function formCheck() {
        if (!document.getElementById("formNombre").checkValidity()) {
            mensaje = "Introduce un nombre válido.";
            document.getElementById("modalMensajeC").innerHTML = mensaje;
        }
        else if (!document.getElementById("formApellido").checkValidity()) {
            mensaje = "Introduce un apellido válido.";
            document.getElementById("modalMensajeC").innerHTML = mensaje;
        }
        else if (!document.getElementById("formMail").checkValidity()) {
            mensaje = "Introduce un email válido.";
            document.getElementById("modalMensajeC").innerHTML = mensaje;
        }

        else {
            mensaje = "Gracias por contactar con nosotros " + nombre + " " + apellido + ". Nos pondremos en contacto contigo lo antes posible en tu email: " + mail;

            document.getElementById("modalMensajeC").innerHTML = mensaje;
        }

    })();

}

function cerrarModalContacto() {
    document.getElementById("modalContacto").style.display = "none";
    document.documentElement.style.overflowY = "auto";
}

// Codigo navbar (menu horizontal)

var posPreviaScroll = document.documentElement.scrollTop;

window.onscroll = function () { esconderMostrarMenu() };

function esconderMostrarMenu() {

    var posActualScroll = document.documentElement.scrollTop;

    if (posPreviaScroll > posActualScroll) {
        // Cuando hacemos scroll hacia arriba se muestra el menu
        document.getElementById("navbar").style.top = "0px";

        if (posActualScroll > 200) {
            document.getElementById("navbar").style.backgroundColor = "#6F8191bb";
            document.getElementById("navbar").style.height = "60px";
            document.getElementById("navbar").style.fontSize = "1rem";

            document.getElementById("navLinks").style.lineHeight = "60px";

            document.getElementById("submenu").style.top = "60px";
            document.getElementById("submenu").style.backgroundColor = "#6F8191bb";

            document.getElementById("logo").style.padding = "10px";
        }
        else {
            document.getElementById("navbar").style.height = "120px";
            document.getElementById("navbar").style.backgroundColor = "transparent";
            document.getElementById("navbar").style.fontSize = "1.25rem";

            document.getElementById("navLinks").style.lineHeight = "120px";

            document.getElementById("submenu").style.top = "85px";
            document.getElementById("submenu").style.backgroundColor = "transparent";

            document.getElementById("logo").style.padding = "20px";
        }

    }
    else {
        // Cuando hacemos scroll hacia abajo se esconde el menu

        if (posActualScroll < 200) {
            document.getElementById("navbar").style.height = "60px";
            document.getElementById("navbar").style.fontSize = "1rem";

            document.getElementById("navLinks").style.lineHeight = "60px";

            document.getElementById("submenu").style.top = "60px";

            document.getElementById("logo").style.padding = "10px";
        }

        else {
            document.getElementById("navbar").style.top = "-150px";
        }
    }

    posPreviaScroll = posActualScroll;
}

// Modal galeria

var listaRutaImgGal = [];
var numeroImg = 0;

// function modalLightboxG() {
//     document.getElementById("modalLightboxG").style.display = "block";
//     document.documentElement.style.overflow = "hidden";

//     var listaImgGal = document.getElementsByClassName("imgGal");

//     for (var i = 0; i < listaImgGal.length; i++) {

//         listaRutaImgGal.push(listaImgGal[i].src);
//     }

//     // console.log(listaRutaImgGal);
//     // console.log(listaImgGal);

//     document.getElementById("imageToShow").innerHTML = "<img class='imageLb' src='media/gallery/img10.jpg'>";
// }

function readyLightbox() {

    var listaImgGal = document.getElementsByClassName("imgGal");

    for (var i = 0; i < listaImgGal.length; i++) {

        listaRutaImgGal.push(listaImgGal[i].src);
    }

    for (var i = 0; i < listaImgGal.length; i++) {

        listaImgGal[i].addEventListener('click', openLightbox);
    }

    function openLightbox() {

        var rutaImgClicada = event.currentTarget.src;
        numeroImg = listaRutaImgGal.indexOf(rutaImgClicada);

        document.getElementById("modalLightboxG").style.display = "block";
        document.documentElement.style.overflow = "hidden";
        document.getElementById("imageToShow").innerHTML = "<img class='imageLb' src=" + listaRutaImgGal[numeroImg] + ">";
        closeLightbox();

    }

    function closeLightbox() {

        window.addEventListener("click", function (event) {

            if (!event.target.matches(".imageLb") && !event.target.matches(".imgGal") && !event.target.matches(".lbButtons") && !event.target.matches(".fas")) {

                document.getElementById("modalLightboxG").style.display = "none";
                document.documentElement.style.overflowY = "auto";
            }
        });
    }

}

function nextImgGal() {

    numeroImg++;

    if (numeroImg == listaRutaImgGal.length) {
        numeroImg = 0;
    }
    document.getElementById("imageToShow").innerHTML = "<img class='imageLb' src=" + listaRutaImgGal[numeroImg] + ">";
}

function previousImgGal() {

    numeroImg--;

    if (numeroImg < 0) {
        numeroImg = listaRutaImgGal.length - 1;
    }
    document.getElementById("imageToShow").innerHTML = "<img class='imageLb' src=" + listaRutaImgGal[numeroImg] + ">";
}

// Pestañas seccion servicios

function marcarTab(tabToShow, tabClicked) {

    var listaTabs = document.getElementsByClassName("tabContainer");

    for (var i = 0; i < listaTabs.length; i++) {

        listaTabs[i].style.display = "none";
        listaTabs[i].classList.remove("tabContainerAnimado");
    }

    document.getElementById(tabToShow).style.display = "block";

    var tabLinks = document.getElementsByClassName("tabItem");

    for (var i = 0; i < tabLinks.length; i++) {

        tabLinks[i].classList.remove("activeTab");
    }

    document.getElementById(tabClicked).classList.add("activeTab");

    var serviciosC = document.getElementById(tabToShow).children;

    for (var i = 0; i < serviciosC.length; i++) {
        serviciosC[i].classList.add("tabContainerAnimado");
    }

}

// Código Slideshow (no se usa)

var bgCounter = 0;
var listaImgBg = [
    "url('media/hero/img_hero_1.jpg')",
    "url('media/hero/img_hero_2.jpg')",
    "url('media/hero/img_hero_3.jpg')"
];

function heroSlideshow() {

    bgCounter++;

    if (bgCounter == listaImgBg.length) {
        bgCounter = 0;
    }
    document.getElementById("slider").style.backgroundImage = listaImgBg[bgCounter];
    console.log(listaImgBg[bgCounter])

}

// Slideshow animado

var counterNext = 0;
var counterMain = 0;

function slideshowAnim() {

    var listaImgBgAnim = document.getElementsByClassName("fondosHero");

    counterNext++;
    counterMain = counterNext - 1;

    if (counterNext == listaImgBgAnim.length) {

        counterNext = 0;
    }

    if (counterMain < 0) {

        counterMain = listaImgBgAnim.length - 1;
    }

    for (var i = 0; i < listaImgBgAnim.length; i++) {

        listaImgBgAnim[i].classList.remove("nextSlide");
        listaImgBgAnim[i].classList.remove("mainSlide");
        listaImgBgAnim[i].classList.remove("hiddenSlide");

        if (i == counterNext) {
            listaImgBgAnim[i].classList.add("nextSlide");
        }

        else if (i == (counterMain)) {
            listaImgBgAnim[i].classList.add("mainSlide");
        }

        else {
            listaImgBgAnim[i].classList.add("hiddenSlide");
        }
    }


}


