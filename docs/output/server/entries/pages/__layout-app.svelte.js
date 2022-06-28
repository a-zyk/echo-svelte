import { g as getContext, c as create_ssr_component, a as subscribe, b as each, e as escape, d as add_attribute, v as validate_component } from "../../chunks/index-fe7fc8b7.js";
/* empty css                         */const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const ACTIVE_CLASSES = "border-black border-b-2 font-bold";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let navItems = [
    { name: "Apie", link: "/" },
    { name: "Apra\u0161ymas", link: "/description" },
    {
      name: "Da\u017Enesni\u0173 patologij\u0173 apra\u0161ymai",
      link: "/test"
    }
  ];
  $$unsubscribe_page();
  return `<nav class="${"mb-2"}"><ul class="${"flex justify-evenly"}">${each(navItems, (navItem) => {
    return `<li class="${"py-3 text-black " + escape($page.url.pathname == navItem.link ? ACTIVE_CLASSES : "")}"><a${add_attribute("href", navItem.link, 0)}>${escape(navItem.name)}</a>
			</li>`;
  })}</ul></nav>`;
});
const _layout_app = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" data-svelte="svelte-1lw01cq"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin data-svelte="svelte-1lw01cq"><link href="${"https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;600;700&display=swap"}" rel="${"stylesheet"}" data-svelte="svelte-1lw01cq"><script src="${"https://kit.fontawesome.com/8b90a232d1.js"}" crossorigin="${"anonymous"}" data-svelte="svelte-1lw01cq"><\/script>`, ""}



${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export { _layout_app as default };
