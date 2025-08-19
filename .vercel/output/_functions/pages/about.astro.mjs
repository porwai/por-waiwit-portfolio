/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent, b as createAstro, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_MQaMmerY.mjs';
import 'kleur/colors';
import '../chunks/index_CVoGv4xC.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_WU_FRdaN.mjs';
import { a as aboutPageContent, $ as $$Layout } from '../chunks/Layout_9VbV3fh8.mjs';
import 'clsx';
import { $ as $$Icon } from '../chunks/Icon_DK33uKly.mjs';
import { marked } from 'marked';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro();
const $$ResumeItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ResumeItem;
  const { title, company, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(company.url, "href")} class="py-3 flex items-center justify-between group-hover:opacity-60 hover:!opacity-100 transition-opacity"> <div class="flex items-center gap-4"> ${renderComponent($$result, "Image", $$Image, { "src": company.image, "alt": company.name, "width": 40, "height": 40, "class": "rounded-full w-[40px] h-[40px] object-cover" })} <div> <h3 class="font-medium">${title}</h3> <p class="text-sm opacity-60">${company.name}</p> </div> </div> <p class="text-sm opacity-60">${date}</p> </a>`;
}, "/Users/porwaiwitlikhit/CodingProjects/por-waiwit-portfolio/src/components/ResumeItem.astro", void 0);

const $$Astro$1 = createAstro();
const $$AwardItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$AwardItem;
  const { title, organization, description, date, url } = Astro2.props;
  return renderTemplate`${url ? renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" class="block p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors group"><div class="flex justify-between items-start mb-2"><h3 class="font-semibold text-lg group-hover:text-blue-600 transition-colors">${title}</h3><span class="text-sm text-gray-500 whitespace-nowrap ml-4">${date}</span></div><p class="text-blue-600 font-medium mb-2">${organization}</p><p class="text-gray-600">${description}</p></a>` : renderTemplate`<div class="p-6 rounded-lg border border-gray-200"><div class="flex justify-between items-start mb-2"><h3 class="font-semibold text-lg">${title}</h3><span class="text-sm text-gray-500 whitespace-nowrap ml-4">${date}</span></div><p class="text-blue-600 font-medium mb-2">${organization}</p><p class="text-gray-600">${description}</p></div>`}`;
}, "/Users/porwaiwitlikhit/CodingProjects/por-waiwit-portfolio/src/components/AwardItem.astro", void 0);

const $$Astro = createAstro();
const $$SocialLinkBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SocialLinkBox;
  const { title, url, icon, external } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} class="p-4 rounded-lg border border-white border-opacity-30 flex items-center gap-3 group-hover:opacity-30 hover:!opacity-100 transition-opacity"${addAttribute(external ? "_blank" : "_self", "target")}> ${renderComponent($$result, "Icon", $$Icon, { "name": icon, "width": 25, "height": 25 })} <div class="flex items-center justify-between w-full"> <p>${title}</p> <div class="rotate-45"> ${renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-up" })} </div> </div> </a>`;
}, "/Users/porwaiwitlikhit/CodingProjects/por-waiwit-portfolio/src/components/SocialLinkBox.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  const pageDescription = marked.parse(aboutPageContent.about.description);
  const workDescription = marked.parse(aboutPageContent.work.description);
  const awardsDescription = marked.parse(aboutPageContent.awards.description);
  const connectDescription = marked.parse(aboutPageContent.connect.description);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": aboutPageContent.seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="mt-10 max-w-2xl mx-auto px-6"> <h1 class="font-bold text-3xl mb-1">About</h1> <p class="opacity-60 mb-10">${aboutPageContent.subtitle}</p> <div class="mb-14"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(pageDescription)}` })} </div> <div class="flex flex-col min-[410px]:flex-row"> ${renderComponent($$result2, "Image", $$Image, { "src": aboutPageContent.about.image_l.url, "alt": aboutPageContent.about.image_l.alt, "width": 350, "height": 250, "class": "w-[350px] h-[250px] object-cover rounded-xl -rotate-6" })} ${renderComponent($$result2, "Image", $$Image, { "src": aboutPageContent.about.image_r.url, "alt": aboutPageContent.about.image_r.alt, "width": 150, "height": 250, "class": "w-[150px] h-[250px] object-cover rounded-xl rotate-6 mx-auto sm:ml-auto" })} </div> </section> <section class="my-20 mt-32 max-w-2xl mx-auto px-6 sm:flex sm:gap-16"> <h2 class="mb-8 sm:mb-0 opacity-60">Work</h2> <div> <div class="mb-6"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(workDescription)}` })} </div> <div class="grid grid-cols-1 group"> ${aboutPageContent.work.items.map((item) => renderTemplate`${renderComponent($$result2, "ResumeItem", $$ResumeItem, { ...item })}`)} </div> </div> </section> <section class="mt-32 max-w-2xl mx-auto px-6 sm:flex sm:gap-16"> <h2 class="mb-8 sm:mb-0 opacity-60">Awards</h2> <div> <div class="mb-6"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(awardsDescription)}` })} </div> <div class="grid grid-cols-1 gap-4"> ${aboutPageContent.awards.items.map((item) => renderTemplate`${renderComponent($$result2, "AwardItem", $$AwardItem, { ...item })}`)} </div> </div> </section> <section class="mt-32 max-w-2xl mx-auto px-6 sm:flex sm:gap-16"> <h2 class="mb-8 sm:mb-0 opacity-60">Connect</h2> <div> <div class="mb-6"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(connectDescription)}` })} </div> <div class="grid grid-cols-2 gap-2 group"> ${aboutPageContent.connect.links.map((item) => renderTemplate`${renderComponent($$result2, "SocialLinkBox", $$SocialLinkBox, { ...item })}`)} </div> </div> </section> ` })}`;
}, "/Users/porwaiwitlikhit/CodingProjects/por-waiwit-portfolio/src/pages/about.astro", void 0);

const $$file = "/Users/porwaiwitlikhit/CodingProjects/por-waiwit-portfolio/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
