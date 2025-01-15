/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead } from '../astro_a3f4f3aa.mjs';
import 'html-escaper';
import 'clsx';
/* empty css                         */
const $$Astro = createAstro();
const $$404 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const error = "4\u{1F311}\u200B\u200B4";
  return renderTemplate`<html lang="en" data-astro-cid-zetdm5md> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="description" content="pagina, 404, busqueda"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>404</title>${renderHead()}</head> <body data-astro-cid-zetdm5md> <!-- contendor del contenido principal --> <div class="contenedor" data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md>${error}</h1> <!-- contenido del 404 --> <div class="contenido" data-astro-cid-zetdm5md> <span data-astro-cid-zetdm5md>ups</span> <h4 data-astro-cid-zetdm5md>¡No es la pagina que Buscabas¡</h4> <a href="/" data-astro-cid-zetdm5md>Volver</a> </div> </div> </body></html>`;
}, "C:/Users/julio/Downloads/LandingPage/src/pages/404.astro", void 0);

const $$file = "C:/Users/julio/Downloads/LandingPage/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
