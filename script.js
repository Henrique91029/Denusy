// =========================
// MODO ESCURO
// =========================

const darkModeBtn = document.getElementById("darkMode");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});


// =========================
// MENU SOCIAL MOBILE
// =========================

const menuSocial = document.getElementById("menuSocial");
const socialContainer = document.querySelector(".social-container");

if(menuSocial){

    menuSocial.addEventListener("click", () => {

        socialContainer.classList.toggle("active");

    });

}


// =========================
// FORMULÁRIO WHATSAPP
// =========================

const formulario =
document.getElementById("orcamentoForm");

if(formulario){

    formulario.addEventListener("submit", (e) => {

        e.preventDefault();

        const nome =
        document.getElementById("nome").value;

        const telefone =
        document.getElementById("telefone").value;

        const pedido =
        document.getElementById("pedido").value;

        const mensagem =
`*NOVO ORÇAMENTO - SITE DENUSY*

👤 Nome: ${nome}

📱 WhatsApp: ${telefone}

📝 Pedido:
${pedido}`;

        const numero = "557499216883";

        const url =
`https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, "_blank");

    });

}


// =========================
// ANIMAÇÕES AO ROLAR
// =========================

const elementos =
document.querySelectorAll(".hidden");

const observador =
new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if(entrada.isIntersecting){

            entrada.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

elementos.forEach((elemento) => {

    observador.observe(elemento);

});




// =========================
// EFEITO SUAVE NOS CARDS
// =========================

const cards =
document.querySelectorAll(".card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-10px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0px)";

    });

});


// =========================
// MENSAGEM DE BOAS-VINDAS
// =========================

window.addEventListener("load", () => {

    console.log(
        "Denusy Personalizações carregado com sucesso!"
    );

});


// =========================
// CARROSSEIS MULTIPLOS
// =========================



const carrosseis = document.querySelectorAll(".carrossel");

carrosseis.forEach((carrossel) => {

    const slides = carrossel.querySelectorAll(".slide");
    const prev = carrossel.querySelector(".prev");
    const next = carrossel.querySelector(".next");

    let index = 0;

    function mostrarSlide(i) {
        slides.forEach(slide => slide.classList.remove("ativo"));
        slides[i].classList.add("ativo");
    }

    next.addEventListener("click", () => {
        index++;
        if (index >= slides.length) index = 0;
        mostrarSlide(index);
    });

    prev.addEventListener("click", () => {
        index--;
        if (index < 0) index = slides.length - 1;
        mostrarSlide(index);
    });

});
