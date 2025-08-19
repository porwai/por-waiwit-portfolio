/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, b as createAstro, u as unescapeHTML, F as Fragment } from '../chunks/astro/server_MQaMmerY.mjs';
import 'kleur/colors';
import { p as projectsPageContent, $ as $$Layout } from '../chunks/Layout_9VbV3fh8.mjs';
import '../chunks/index_CVoGv4xC.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_WU_FRdaN.mjs';
import { marked } from 'marked';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, description, image, year, url } = Astro2.props;
  const htmlDescription = marked.parse(description);
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} target="_blank" class="sm:py-5 py-10 flex flex-col sm:flex-row gap-6 group-hover:opacity-60 hover:!opacity-100 transition-opacity"> <div class="h-full bg-gray-700 rounded-lg aspect-video sm:h-[150px]"> ${renderComponent($$result, "Image", $$Image, { "width": 1920, "height": 1080, "src": image, "alt": title, "class": "w-full h-full object-cover rounded-lg aspect-video" })} </div> <div> <div class="flex items-center gap-1 mb-2"> <h2 class="font-medium">${title}</h2> <span class="opacity-60">· ${year}</span> </div> <div class="opacity-60"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(htmlDescription)}` })} </div> </div> </a>`;
}, "/Users/porwaiwitlikhit/CodingProjects/por-waiwit-portfolio/src/components/ProjectCard.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": projectsPageContent.seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-1">Projects</h1> <p class="opacity-60 mb-10">${projectsPageContent.subtitle}</p> <div class="grid grid-cols-1 group"> ${projectsPageContent.projects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { ...project })}`)} </div> </section> ` })}`;
}, "/Users/porwaiwitlikhit/CodingProjects/por-waiwit-portfolio/src/pages/projects.astro", void 0);

const $$file = "/Users/porwaiwitlikhit/CodingProjects/por-waiwit-portfolio/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
