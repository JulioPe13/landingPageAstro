/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead } from '../astro_a3f4f3aa.mjs';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Tarjeta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Tarjeta;
  return renderTemplate`<!--contenedor GRID --><html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}>${renderHead()}</head><section class="section-servicios headline"> <div class="imagenes"> <img class="img-grid1" src="/assets/Girl.jpg" alt="girl" loading="lazy"> <img class="img-grid2" src="/assets/Reunion.jpg" alt="meet" loading="lazy"> <img class="img-grid3" src="/assets/tiping.jpg" alt="computadora" loading="lazy"> </div> <div class="info"> <h2 class="h-text"><span class="text-purple h-text">conocenos</span> Mejor</h2> <p class="margen">Bienvenido a nuestro sitio web de educación, donde creemos que el aprendizaje es un viaje de por vida que debe ser accesible para todos. 
  
              Nuestra misión es proporcionar recursos educativos de alta calidad y apoyo a personas de todas las edades, orígenes y habilidades.</p> </div> </section> </html>`;
}, "C:/Users/julio/Downloads/LandingPage/src/pages/components/Tarjeta.astro", void 0);

const $$file = "C:/Users/julio/Downloads/LandingPage/src/pages/components/Tarjeta.astro";
const $$url = "/components/Tarjeta";

export { $$Tarjeta as default, $$file as file, $$url as url };
