/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderComponent } from '../astro_a3f4f3aa.mjs';
import 'html-escaper';
import $$Navegacion from './Navegacion_174523d7.mjs';
import $$Footer from './Footer_1911e6da.mjs';
import $$Tarjeta from './Tarjeta_dd7c3a6d.mjs';
/* empty css                           */
const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "Inicio|SupportjcOnline";
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="author" content="@Julio_elias13"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Inter&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"><title>${title}</title>${renderHead()}</head> <body> <!--Navegación  --> ${renderComponent($$result, "Navegacion", $$Navegacion, {})} <!-- Header seccion Principal --> <header> <div class="contenedor"> <div class="text"> <h1 class="tituloh">Descubre Tu Potencial con SupportJConline</h1> <p class="parrafo">
Empoderamos tus metas a través de la educación. ¡Bienvenido a un
            viaje de aprendizaje sin límites.
</p> <a class="button" href="https://proyectoprueba-juliounachis-projects.vercel.app/sign-in?redirect_url=https%3A%2F%2Fproyectoprueba-juliounachis-projects.vercel.app%2F">Explorar cursos</a> </div> <div class="imag"></div> </div> </header> <!--Contenido de la secciones --> <main> ${renderComponent($$result, "Tarjeta", $$Tarjeta, {})} <h3 class="center text-purple top">
Nuestros Servicios <br><span class="line"></span> </h3> <h2 class="center title-section">
Completo para tu Crecimiento personal
</h2> <p class="center but">
Guiándote hacia el <span>éxito</span> y ayudándote a alcanzar tu máximo<span>
potencial.</span> </p> <section> <div class="cards-info"> <div class="card animate__animated animate__slideInDown"> <img src="/assets/linea-del-tiempo.png" alt="imagen" width="100px" height="100px"> <h4>Actualizacion</h4> <p class="center">Actualizando constante en la plataforma</p> </div> <div class="card flex-top animate__animated animate__slideInDown"> <img src="/assets/certificado.png" alt="imagen" width="100px" height="100px"> <h4>Certificado</h4> <p class="center">
reconocimiento oficial con nuestros cursos online y asegura tu
              progreso con certificados verificables que validan tu dedicación y
              habilidades adquiridas
</p> </div> <div class="card animate__animated animate__slideInDown"> <img src="/assets/aprendizaje.png" alt="imagen" width="100px" height="100px" alt="imagen"> <h4>Interactivo</h4> <p class="center">Contenido en alto aprendizaje y practico</p> </div> </div> </section> <section class="buttom-sect"> <div class="contenedor-categorias"> <div class="informacion"> <h2 class="title-categorias" id="enlace">
Descubre las <span>categorias</span> </h2> <p class="parrafo-cat">
Descubre un amplio abanico de cursos tecnológicos en nuestra
              plataforma. Sumérgete en experiencias de aprendizaje
              enriquecedoras y expande tus conocimientos en el mundo de la
              Tecnologia
</p> </div> <div class="tabla"> <div class="categorias-cards"> <img class="icono" src="/assets/diseño.png" alt="imagen"> <h4>Diseño Grafico</h4> </div> <div class="categorias-cards color-"> <img class="icono" src="/assets/Desarollo-web.png" alt="imagen"> <h4>Desarrollo web</h4> </div> <div class="categorias-cards color-"> <img class="blanco icono" src="/assets/Analisis-datos.png" alt="imagen"> <h4>ciencia de datos</h4> </div> <div class="categorias-cards"> <img class="icono" src="/assets/Arquitectura.png" alt="imagen"> <h4>Arquitectura</h4> </div> </div> </div> </section> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/julio/Downloads/LandingPage/src/pages/index.astro", void 0);

const $$file = "C:/Users/julio/Downloads/LandingPage/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
