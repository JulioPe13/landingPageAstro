/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead, e as renderComponent } from '../astro_a3f4f3aa.mjs';
import 'html-escaper';
import $$Navegacion from './Navegacion_174523d7.mjs';
import $$Footer from './Footer_1911e6da.mjs';
import $$Team from './Team_961bc15c.mjs';
/* empty css                           */
const $$Astro = createAstro();
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const titulopage = "About | SupportJConline";
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="stylesheet" href="../components/layout/styles.css"><title>${titulopage}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Navegacion", $$Navegacion, {})} <section class="Contendor"> <div class="Fondo cards"> <h1 class="name white">Acerca de SupportCJonline</h1> <p class="pad white">
Detrás de cada cliente satisfecho tenemos un equipo de especialistas y
          consultores convencidos del cambio positivo con nuestras soluciones.
</p> </div> <div class="cards "> <h1 class="about_title titulo-dos">
liderazgo en innovación tecnológica.
</h1> <p>
Aplicación de soporte técnico que le permita al usuario de una manera fácil y accesible darles mantenimiento a sus equipos, a su vez también se busca aumentar los conocimientos mediante el procedimiento del mismo.
</p> <h2 class="titulo-dos">Aprendizaje Continuo</h2> <p>
Nuestra plataforma puede facilitar el aprendizaje continuo a medida que los usuarios adquieren habilidades y conocimientos técnicos al resolver problemas. Esto puede tener un impacto positivo en sus oportunidades laborales y desarrollo personal.
</p>  </div> </section> <!-- Estructura de los objetivos --> <!-- Estructura de los creadores --> ${renderComponent($$result, "Team", $$Team, {})} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/julio/Downloads/LandingPage/src/pages/about.astro", void 0);

const $$file = "C:/Users/julio/Downloads/LandingPage/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
