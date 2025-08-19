/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, b as createAstro } from '../chunks/astro/server_MQaMmerY.mjs';
import 'kleur/colors';
import '../chunks/index_CVoGv4xC.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_WU_FRdaN.mjs';
import { i as identity, h as homePageContent, p as projectsPageContent, $ as $$Layout } from '../chunks/Layout_9VbV3fh8.mjs';
import { $ as $$Icon } from '../chunks/Icon_DK33uKly.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$SocialLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SocialLink;
  const { title, url, icon, external } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="flex items-center gap-3 opacity-60 group-hover:opacity-30 hover:!opacity-60 transition-opacity"${addAttribute(external ? "_blank" : "_self", "target")}> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "width": 25, "height": 25 })} <div> <p>${title}</p> </div> </a>`;
}, "/Users/porwaiwitlikhit/CodingProjects/por-waiwit-portfolio/src/components/SocialLink.astro", void 0);

const $$Astro = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Link;
  const { text, href, external, noAnchor } = Astro2.props;
  return renderTemplate`${!noAnchor ? renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(external ? "_blank" : "_self", "target")} class="flex items-center gap-2 opacity-60 group-hover:opacity-30 hover:!opacity-60 transition-opacity"><div class="rotate-45">${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-up" })}</div><span>${text}</span></a>` : renderTemplate`<div class="flex items-center gap-2 opacity-60 group-hover:opacity-30 hover:!opacity-60 transition-opacity"><div class="rotate-45">${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-up" })}</div><span>${text}</span></div>`}`;
}, "/Users/porwaiwitlikhit/CodingProjects/por-waiwit-portfolio/src/components/Link.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": homePageContent.seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-1">${identity.name}</h1> <p class="opacity-60 mb-10">${homePageContent.role}</p> <div class="mb-8"> ${renderComponent($$result2, "Image", $$Image, { "src": "/llama_picture.jpeg", "alt": identity.name, "width": 800, "height": 400, "class": "w-full rounded-lg object-cover mb-6" })} <div class="flex flex-col sm:flex-row gap-4 justify-center"> ${homePageContent.socialLinks.map((link) => renderTemplate`${renderComponent($$result2, "SocialLink", $$SocialLink, { "title": link.title, "url": link.url, "icon": link.icon, "external": link.external })}`)} </div> </div> <p class="max-w-md mb-8"> ${homePageContent.description} </p> <div class="flex items-center gap-4 group w-fit"> ${homePageContent.links.map((link) => renderTemplate`${renderComponent($$result2, "Link", $$Link, { "text": link.title, "href": link.url, "external": link.external })}`)} </div> </section> <section class="mt-20 max-w-2xl mx-auto px-6"> <h2 class="mb-8">Sample Projects</h2> <div class="grid grid-cols-1 gap-10 sm:gap-6 mb-10"> ${projectsPageContent.projects.slice(0, 2).map((project) => renderTemplate`<a${addAttribute(project.url, "href")} target="_blank" rel="noopener noreferrer" class="sm:flex sm:flex-row-reverse sm:justify-between sm:gap-6 post"> ${renderComponent($$result2, "Image", $$Image, { "src": project.image, "alt": project.title, "width": 100, "height": 100, "class": "rounded-lg w-[100px] h-[100px] object-cover" })} <div class="mt-4 sm:my-auto"> <p class="opacity-60 mb-2">${project.year}</p> <h3 class="font-medium hover-underline">${project.title}</h3> <p class="text-sm opacity-60 mt-2 mb-3">${project.description}</p> </div> </a>`)} </div> <div class="text-center"> <a href="/projects" class="underline underline-offset-4 opacity-60 hover:opacity-100 transition-opacity">View all projects</a> </div> </section> ` })}`;
}, "/Users/porwaiwitlikhit/CodingProjects/por-waiwit-portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/porwaiwitlikhit/CodingProjects/por-waiwit-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
