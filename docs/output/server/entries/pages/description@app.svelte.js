import { c as create_ssr_component, d as add_attribute, e as escape, v as validate_component, a as subscribe } from "../../chunks/index-fe7fc8b7.js";
import { w as writable, T as Toggle } from "../../chunks/Toggle-08a1e9d1.js";
import { createPopperActions } from "svelte-popperjs";
import "uuid";
const bladder = writable({});
const kidneyL = writable({});
const kidneyR = writable({});
const spleen = writable({});
const liver = writable({});
const gallB = writable({});
const stomach = writable({});
const intestines = writable({});
const pancreas = writable({});
const adrenalsL = writable({});
const adrenalsR = writable({});
const RadioBtn = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { group } = $$props;
  let { value } = $$props;
  let { title = "" } = $$props;
  let { name } = $$props;
  if ($$props.group === void 0 && $$bindings.group && group !== void 0)
    $$bindings.group(group);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  return `<div><input class="${"cursor-pointer"}"${add_attribute("id", value, 0)} type="${"radio"}"${add_attribute("value", value, 0)}${add_attribute("name", name, 0)}${value === group ? add_attribute("checked", true, 1) : ""}>
<label class="${"cursor-pointer"}"${add_attribute("for", value, 0)}>${escape(title || value)}</label></div>`;
});
const Tooltip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tooltipText } = $$props;
  createPopperActions({ placement: "right", strategy: "fixed" });
  if ($$props.tooltipText === void 0 && $$bindings.tooltipText && tooltipText !== void 0)
    $$bindings.tooltipText(tooltipText);
  return `<div class="${"flex text-white items-center justify-center cursor-pointer bg-slate-400 rounded-full w-5 h-5 min-w-[20px]"}">?
  </div>
  ${``}`;
});
const NumberInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { tooltipText = "" } = $$props;
  let { value } = $$props;
  let { title } = $$props;
  if ($$props.tooltipText === void 0 && $$bindings.tooltipText && tooltipText !== void 0)
    $$bindings.tooltipText(tooltipText);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="${"flex flex-col items-start mb-4 max-w-full"}"><div class="${"flex gap-2"}"><label class="${"cursor-pointer titles"}"${add_attribute("for", title, 0)}>${escape(title)}</label>
		${tooltipText ? `${validate_component(Tooltip, "Tooltip").$$render($$result, { tooltipText }, {}, {})}` : ``}</div>
	<input${add_attribute("id", title, 0)} type="${"number"}" min="${"0"}" max="${"10.0"}"${add_attribute("value", value, 0)}></div>`;
});
const Textarea = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { title } = $$props;
  let { placeholder = "" } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  return `<div class="${"flex flex-col items-start"}"><label class="${"titles"}"${add_attribute("for", title, 0)}>${escape(title)}</label>

	<textarea${add_attribute("id", title, 0)} class="${"text-sm px-4 py-2 border border-gray-300 rounded-lg max-w-full"}" rows="${"5"}" cols="${"30"}"${add_attribute("placeholder", placeholder, 0)}>${value || ""}</textarea></div>`;
});
const Bladder$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $bladderStore, $$unsubscribe_bladderStore;
  $$unsubscribe_bladderStore = subscribe(bladder, (value) => $bladderStore = value);
  let { show = false } = $$props;
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Toggle, "Toggle").$$render($$result, {
      autoclosable: "true",
      classes: "card",
      initialState: show
    }, {}, {
      content: () => {
        return `<div slot="${"content"}"><div class="${"titles "}">\u0160lapimo p\u016Bsl\u0117s sienel\u0117</div>

		<div class="${"radio"}">${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "sustor\u0117jusi",
          name: "wall-thickness",
          group: $bladderStore.wallThickness
        }, {
          group: ($$value) => {
            $bladderStore.wallThickness = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "nesustor\u0117jusi",
          name: "wall-thickness",
          group: $bladderStore.wallThickness
        }, {
          group: ($$value) => {
            $bladderStore.wallThickness = $$value;
            $$settled = false;
          }
        }, {})}</div>

		${validate_component(NumberInput, "NumberInput").$$render($$result, {
          tooltipText: "Normalus \u0161lapimo p\u016Bsl\u0117s sienel\u0117s storis: kat\u0117ms \u2264 0,17 cm,\u0161unims \u2264 0,3 cm.",
          title: "Sienel\u0117s storis, cm",
          value: $bladderStore.thickness
        }, {
          value: ($$value) => {
            $bladderStore.thickness = $$value;
            $$settled = false;
          }
        }, {})}

		${validate_component(Textarea, "Textarea").$$render($$result, {
          title: "Kiti pakitimai",
          placeholder: "akmenys, nuos\u0117dos, kre\u0161uliai, polipai, dariniai",
          value: $bladderStore.otherChanges
        }, {
          value: ($$value) => {
            $bladderStore.otherChanges = $$value;
            $$settled = false;
          }
        }, {})}</div>`;
      },
      title: () => {
        return `<div slot="${"title"}">\u0160lapimo p\u016Bsl\u0117</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_bladderStore();
  return $$rendered;
});
const Bladder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $bladder, $$unsubscribe_bladder;
  $$unsubscribe_bladder = subscribe(bladder, (value) => $bladder = value);
  $$unsubscribe_bladder();
  return `<div class="${"mb-2"}">${$bladder.wallThickness ? `<span>\u0160lapimo p\u016Bsl\u0117s sienel\u0117 ${escape($bladder.wallThickness)}.</span>` : ``}

	${$bladder.thickness ? `<span>Sienel\u0117s storis yra ${escape($bladder.thickness)} cm.</span>` : ``}

	${$bladder.otherChanges ? `<span>${escape($bladder.otherChanges)}.</span>` : ``}</div>`;
});
const Kidney$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $kidneyLStore, $$unsubscribe_kidneyLStore;
  let $kidneyRStore, $$unsubscribe_kidneyRStore;
  $$unsubscribe_kidneyLStore = subscribe(kidneyL, (value) => $kidneyLStore = value);
  $$unsubscribe_kidneyRStore = subscribe(kidneyR, (value) => $kidneyRStore = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Toggle, "Toggle").$$render($$result, { autoclosable: "true", classes: "card" }, {}, {
      content: () => {
        return `<div slot="${"content"}"><div class="${"font-bold text-md text-center mb-2"}">Kairys inkstas</div>
		<div class="${"flex gap-2"}"><div class="${"titles"}">Inksto \u017Eiev\u0117 lyginant su blu\u017Enimi yra</div>
		${validate_component(Tooltip, "Tooltip").$$render($$result, {
          tooltipText: "Normlaus kairio inksto \u017Eiev\u0117 yra hipoechoi\u0161ka blu\u017Eniai."
        }, {}, {})}</div>
		<div class="${"radio"}">${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "izoechogeni\u0161ka",
          name: "echogenicityL",
          group: $kidneyLStore.echogenL
        }, {
          group: ($$value) => {
            $kidneyLStore.echogenL = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "hipoechogeni\u0161ka",
          name: "echogenicityL",
          group: $kidneyLStore.echogenL
        }, {
          group: ($$value) => {
            $kidneyLStore.echogenL = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "hiperechogeni\u0161ka",
          name: "echogenicityL",
          group: $kidneyLStore.echogenL
        }, {
          group: ($$value) => {
            $kidneyLStore.echogenL = $$value;
            $$settled = false;
          }
        }, {})}</div>

		<div class="${"flex gap-5"}">${validate_component(NumberInput, "NumberInput").$$render($$result, {
          tooltipText: "Normalaus kat\u0117s inksto ilgis 3.20 - 4.12 cm. Didesnis pas nekastruotus katinus, ma\u017Eesnis senoms kat\u0117ms. Normalus \u0161uns inksto ilgis priklauso nuo \u0161uns dyd\u017Eio.",
          title: "Inksto ilgis, cm",
          value: $kidneyLStore.lng
        }, {
          value: ($$value) => {
            $kidneyLStore.lng = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(NumberInput, "NumberInput").$$render($$result, {
          tooltipText: "Normalaus kat\u0117s inksto plotis 2.23 - 2.83 cm.",
          title: "Inksto plotis, cm",
          value: $kidneyLStore.widthL
        }, {
          value: ($$value) => {
            $kidneyLStore.widthL = $$value;
            $$settled = false;
          }
        }, {})}</div>

		<div class="${"titles"}">Inkso geldel\u0117</div>

		<div class="${"radio"}">${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "nei\u0161sipl\u0117tusi",
          name: "pelvicWidthL",
          group: $kidneyLStore.pelvicWidthL
        }, {
          group: ($$value) => {
            $kidneyLStore.pelvicWidthL = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "i\u0161sipl\u0117tusi",
          name: "pelvicWidthL",
          group: $kidneyLStore.pelvicWidthL
        }, {
          group: ($$value) => {
            $kidneyLStore.pelvicWidthL = $$value;
            $$settled = false;
          }
        }, {})}</div>

		${validate_component(NumberInput, "NumberInput").$$render($$result, {
          tooltipText: "Skersiniame pj\u016Bvyje normalus geldel\u0117s plotis iki 0.2cm. Plotis >1.3cm b\u016Bdingas obstrukcijai.",
          title: "Geldel\u0117s plotis skersiniame pj\u016Bvyje, cm",
          value: $kidneyLStore.pelvisCmL
        }, {
          value: ($$value) => {
            $kidneyLStore.pelvisCmL = $$value;
            $$settled = false;
          }
        }, {})}

		${validate_component(Textarea, "Textarea").$$render($$result, {
          title: "Kiti pakitimai",
          placeholder: "akmenys, \u0161lapimtaki\u0173 pakitimai, mas\u0117s",
          value: $kidneyLStore.otherChangesL
        }, {
          value: ($$value) => {
            $kidneyLStore.otherChangesL = $$value;
            $$settled = false;
          }
        }, {})}

		<div class="${"font-bold text-md text-center mt-5 mb-2"}">De\u0161inys inkstas</div>
		<div class="${"flex gap-2"}"><div class="${"titles"}">Inksto \u017Eiev\u0117 lyginant su kepenimis yra</div>
		${validate_component(Tooltip, "Tooltip").$$render($$result, {
          tooltipText: "Normlaus de\u0161inio inksto \u017Eiev\u0117 yra hipoechoi\u0161ka/izoechoi\u0161ka kepenims."
        }, {}, {})}</div>
		<div class="${"radio"}">${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "izoechogeni\u0161ka",
          name: "echogenicityR",
          group: $kidneyRStore.echogenR
        }, {
          group: ($$value) => {
            $kidneyRStore.echogenR = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "hipoechogeni\u0161ka",
          name: "echogenicityR",
          group: $kidneyRStore.echogenR
        }, {
          group: ($$value) => {
            $kidneyRStore.echogenR = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "hiperechogeni\u0161ka",
          name: "echogenicityR",
          group: $kidneyRStore.echogenR
        }, {
          group: ($$value) => {
            $kidneyRStore.echogenR = $$value;
            $$settled = false;
          }
        }, {})}</div>

		<div class="${"flex gap-5"}">${validate_component(NumberInput, "NumberInput").$$render($$result, {
          tooltipText: "Normalaus kat\u0117s inksto ilgis 3.20 - 4.12 cm. Didesnis pas nekastruotus katinus, ma\u017Eesnis senoms kat\u0117ms. Normalus \u0161uns inksto ilgis priklauso nuo \u0161uns dyd\u017Eio.",
          title: "Inksto ilgis, cm",
          value: $kidneyRStore.lngR
        }, {
          value: ($$value) => {
            $kidneyRStore.lngR = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(NumberInput, "NumberInput").$$render($$result, {
          tooltipText: "Normalaus kat\u0117s inksto plotis 2.23 - 2.83 cm.",
          title: "Inksto plotis, cm",
          value: $kidneyRStore.widthR
        }, {
          value: ($$value) => {
            $kidneyRStore.widthR = $$value;
            $$settled = false;
          }
        }, {})}</div>

		<div class="${"titles"}">Inkso geldel\u0117</div>

		<div class="${"radio"}">${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "nei\u0161sipl\u0117tusi",
          name: "pelvicWidthR",
          group: $kidneyRStore.pelvicWidthR
        }, {
          group: ($$value) => {
            $kidneyRStore.pelvicWidthR = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "i\u0161sipl\u0117tusi",
          name: "pelvicWidthR",
          group: $kidneyRStore.pelvicWidthR
        }, {
          group: ($$value) => {
            $kidneyRStore.pelvicWidthR = $$value;
            $$settled = false;
          }
        }, {})}</div>

		${validate_component(NumberInput, "NumberInput").$$render($$result, {
          tooltipText: "Skersiniame pj\u016Bvyje normalus geldel\u0117s plotis iki 0.2cm. Plotis >1.3cm b\u016Bdingas obstrukcijai.",
          title: "Geldel\u0117s plotis skersiniame pj\u016Bvyje, cm",
          value: $kidneyRStore.pelvisCmR
        }, {
          value: ($$value) => {
            $kidneyRStore.pelvisCmR = $$value;
            $$settled = false;
          }
        }, {})}

		${validate_component(Textarea, "Textarea").$$render($$result, {
          title: "Kiti pakitimai",
          placeholder: "akmenys, \u0161lapimtaki\u0173 pakitimai, mas\u0117s",
          value: $kidneyRStore.otherChangesR
        }, {
          value: ($$value) => {
            $kidneyRStore.otherChangesR = $$value;
            $$settled = false;
          }
        }, {})}</div>`;
      },
      title: () => {
        return `<div slot="${"title"}">Inkstai</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_kidneyLStore();
  $$unsubscribe_kidneyRStore();
  return $$rendered;
});
const Kidney = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $kidneyL, $$unsubscribe_kidneyL;
  let $kidneyR, $$unsubscribe_kidneyR;
  $$unsubscribe_kidneyL = subscribe(kidneyL, (value) => $kidneyL = value);
  $$unsubscribe_kidneyR = subscribe(kidneyR, (value) => $kidneyR = value);
  $$unsubscribe_kidneyL();
  $$unsubscribe_kidneyR();
  return `<div class="${"mb-2"}"><div>${JSON.stringify($kidneyL) !== "{}" ? `<span>Kairys inkstas-</span>` : ``}
		${$kidneyL.echogenL ? `<span>Inksto \u017Eiev\u0117 blu\u017Eniai yra ${escape($kidneyL.echogenL)}.</span>` : ``}

		${$kidneyL.lngL && $kidneyL.widthL ? `<span>Inksto dydis ${escape($kidneyL.lngL)}x${escape($kidneyL.widthL)} cm.</span>` : `${$kidneyL.lngL ? `<span>Inksto ilgis ${escape($kidneyL.lngL)} cm.</span>` : `${$kidneyL.widthL ? `<span>Inksto plotis ${escape($kidneyL.widthL)} cm.</span>` : ``}`}`}

		${$kidneyL.pelvicWidthL ? `<span>Geldel\u0117 ${escape($kidneyL.pelvicWidthL)}.</span>` : ``}

		${$kidneyL.pelvisCmL ? `<span>Geldel\u0117s plotis skersiniame pj\u016Bvyje ${escape($kidneyL.pelvisCmL)} cm.</span>` : ``}

		${$kidneyL.otherChangesL ? `<span>${escape($kidneyL.otherChangesL)}.</span>` : ``}</div>

	<div>${JSON.stringify($kidneyR) !== "{}" ? `<span>De\u0161inys inkstas-</span>` : ``}
		${$kidneyR.echogenR ? `<span>Inksto \u017Eiev\u0117 kepenims yra ${escape($kidneyR.echogenR)}.</span>` : ``}

		${$kidneyR.lngR && $kidneyR.widthR ? `<span>Inksto dydis ${escape($kidneyR.lngR)}x${escape($kidneyR.widthR)} cm.</span>` : `${$kidneyR.lngR ? `<span>Inksto ilgis ${escape($kidneyR.lngR)} cm.</span>` : `${$kidneyR.widthR ? `<span>Inksto plotis ${escape($kidneyR.widthR)} cm.</span>` : ``}`}`}

		${$kidneyR.pelvicWidthR ? `<span>Geldel\u0117 ${escape($kidneyR.pelvicWidthR)}.</span>` : ``}

		${$kidneyR.pelvisCmR ? `<span>Geldel\u0117s plotis skersiniame pj\u016Bvyje ${escape($kidneyR.pelvisCmR)} cm.</span>` : ``}

		${$kidneyR.otherChangesR ? `<span>${escape($kidneyR.otherChangesR)}.</span>` : ``}</div></div>`;
});
const Spleen$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $spleenStore, $$unsubscribe_spleenStore;
  $$unsubscribe_spleenStore = subscribe(spleen, (value) => $spleenStore = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Toggle, "Toggle").$$render($$result, { autoclosable: "true", classes: "card" }, {}, {
      content: () => {
        return `<div slot="${"content"}"><div class="${"flex gap-2"}"><div class="${"titles"}">Blu\u017Enies parenchima</div>
			${validate_component(Tooltip, "Tooltip").$$render($$result, {
          tooltipText: "Normalios blu\u017Enies parenchima yra homogeni\u0161ka."
        }, {}, {})}</div>
		<div class="${"radio"}">${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "homogeni\u0161ka",
          name: "echogenicity",
          group: $spleenStore.echogen
        }, {
          group: ($$value) => {
            $spleenStore.echogen = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "heterogeni\u0161ka",
          name: "echogenicity",
          group: $spleenStore.echogen
        }, {
          group: ($$value) => {
            $spleenStore.echogen = $$value;
            $$settled = false;
          }
        }, {})}</div>
		<div class="${"flex gap-2"}"><div class="${"titles"}">Blu\u017Enies parenchima lyginant su kepenimis</div>
			${validate_component(Tooltip, "Tooltip").$$render($$result, {
          tooltipText: "Normali blu\u017Enys yra hiperechogeni\u0161ka lyginant su kepenimis."
        }, {}, {})}</div>
		<div class="${"radio"}">${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "izoechogeni\u0161ka",
          name: "toLiver",
          group: $spleenStore.comToLiver
        }, {
          group: ($$value) => {
            $spleenStore.comToLiver = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "hipoechogeni\u0161ka",
          name: "toLiver",
          group: $spleenStore.comToLiver
        }, {
          group: ($$value) => {
            $spleenStore.comToLiver = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "hiperechogeni\u0161ka",
          name: "toLiver",
          group: $spleenStore.comToLiver
        }, {
          group: ($$value) => {
            $spleenStore.comToLiver = $$value;
            $$settled = false;
          }
        }, {})}</div>
		<div class="${"flex gap-2"}"><div class="${"titles"}">Blu\u017Enies kra\u0161tai</div>
			${validate_component(Tooltip, "Tooltip").$$render($$result, {
          tooltipText: "Normalios blu\u017Enies kra\u0161tai yra a\u0161tr\u016Bs."
        }, {}, {})}</div>
		<div class="${"radio"}">${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "a\u0161tr\u016Bs",
          name: "margins",
          group: $spleenStore.margins
        }, {
          group: ($$value) => {
            $spleenStore.margins = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "suapval\u0117j\u0119",
          name: "margins",
          group: $spleenStore.margins
        }, {
          group: ($$value) => {
            $spleenStore.margins = $$value;
            $$settled = false;
          }
        }, {})}</div>

		${validate_component(Textarea, "Textarea").$$render($$result, {
          title: "Kiti pakitimai",
          placeholder: "mas\u0117s, kraujagysl\u0117s, kapsul\u0117",
          value: $spleenStore.otherChanges
        }, {
          value: ($$value) => {
            $spleenStore.otherChanges = $$value;
            $$settled = false;
          }
        }, {})}</div>`;
      },
      title: () => {
        return `<div slot="${"title"}">Blu\u017Enis</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_spleenStore();
  return $$rendered;
});
const Spleen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $spleen, $$unsubscribe_spleen;
  $$unsubscribe_spleen = subscribe(spleen, (value) => $spleen = value);
  $$unsubscribe_spleen();
  return `<div class="${"mb-2"}">${$spleen.echogen ? `<span>Blu\u017Enies parenchima yra ${escape($spleen.echogen)}.</span>` : ``}

${$spleen.comToLiver ? `<span>Lyginant su kepen\u0173 parenchima, blu\u017Enies parenchima yra ${escape($spleen.comToLiver)}.</span>` : ``}

${$spleen.margins ? `<span>Kra\u0161tai ${escape($spleen.margins)}.</span>` : ``}

${$spleen.otherChanges ? `<span>${escape($spleen.otherChanges)}.</span>` : ``}</div>`;
});
const Liver$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $liverStore, $$unsubscribe_liverStore;
  $$unsubscribe_liverStore = subscribe(liver, (value) => $liverStore = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Toggle, "Toggle").$$render($$result, { autoclosable: "true", classes: "card" }, {}, {
      content: () => {
        return `<div slot="${"content"}"><div class="${"flex gap-2"}"><div class="${"titles"}">Kepen\u0173 parenchima</div>
			${validate_component(Tooltip, "Tooltip").$$render($$result, {
          tooltipText: "Normali\u0173 kepen\u0173 parenchima yra homogeni\u0161ka."
        }, {}, {})}</div>
		<div class="${"radio"}">${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "homogeni\u0161ka",
          name: "echogenicity",
          group: $liverStore.echogen
        }, {
          group: ($$value) => {
            $liverStore.echogen = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "heterogeni\u0161ka",
          name: "echogenicity",
          group: $liverStore.echogen
        }, {
          group: ($$value) => {
            $liverStore.echogen = $$value;
            $$settled = false;
          }
        }, {})}</div>
		<div class="${"flex gap-2"}"><div class="${"titles"}">Lyginant su blu\u017Enimi kepen\u0173 parenchimos echogeni\u0161kumas</div>
			${validate_component(Tooltip, "Tooltip").$$render($$result, {
          tooltipText: "Normalios kepenys yra hipoechogeni\u0161kos lyginant su blu\u017Enimi."
        }, {}, {})}</div>
		<div class="${"radio"}">${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "izoechogeni\u0161ka",
          name: "toSpleen",
          group: $liverStore.comtoSpleen
        }, {
          group: ($$value) => {
            $liverStore.comtoSpleen = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "hipoechogeni\u0161ka",
          name: "toSpleen",
          group: $liverStore.comtoSpleen
        }, {
          group: ($$value) => {
            $liverStore.comtoSpleen = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "hiperechogeni\u0161ka",
          name: "toSpleen",
          group: $liverStore.comtoSpleen
        }, {
          group: ($$value) => {
            $liverStore.comtoSpleen = $$value;
            $$settled = false;
          }
        }, {})}</div>
		<div class="${"flex gap-2"}"><div class="${"titles"}">Kepen\u0173 skil\u010Di\u0173 kra\u0161tai</div>
			${validate_component(Tooltip, "Tooltip").$$render($$result, {
          tooltipText: "Normali\u0173 kepen\u0173 kra\u0161tai yra a\u0161tr\u016Bs."
        }, {}, {})}</div>
		<div class="${"radio"}">${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "a\u0161tr\u016Bs",
          name: "margins",
          group: $liverStore.margins
        }, {
          group: ($$value) => {
            $liverStore.margins = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "suapval\u0117j\u0119",
          name: "margins",
          group: $liverStore.margins
        }, {
          group: ($$value) => {
            $liverStore.margins = $$value;
            $$settled = false;
          }
        }, {})}</div>

		<div class="${"titles"}">Kepen\u0173 kraujagysl\u0117s</div>
		<div class="${"radio"}">${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "nei\u0161sipl\u0117tusios",
          name: "vasc",
          group: $liverStore.vasc
        }, {
          group: ($$value) => {
            $liverStore.vasc = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "i\u0161sipl\u0117tusios",
          name: "vasc",
          group: $liverStore.vasc
        }, {
          group: ($$value) => {
            $liverStore.vasc = $$value;
            $$settled = false;
          }
        }, {})}</div>
		${validate_component(Textarea, "Textarea").$$render($$result, {
          title: "Kiti pakitimai",
          placeholder: "mas\u0117s, mineralizacijos",
          value: $liverStore.otherChanges
        }, {
          value: ($$value) => {
            $liverStore.otherChanges = $$value;
            $$settled = false;
          }
        }, {})}</div>`;
      },
      title: () => {
        return `<div slot="${"title"}">Kepenys</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_liverStore();
  return $$rendered;
});
const Liver = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $liver, $$unsubscribe_liver;
  $$unsubscribe_liver = subscribe(liver, (value) => $liver = value);
  $$unsubscribe_liver();
  return `<div class="${"mb-2"}">${$liver.echogen ? `<span>Kepen\u0173 parenchima yra ${escape($liver.echogen)}.</span>` : ``}

	${$liver.comtoSpleen ? `<span>Lyginant su blu\u017Enies parenchima, kepen\u0173 parenchima yra ${escape($liver.comtoSpleen)}.</span>` : ``}

	${$liver.margins ? `<span>Skil\u010Di\u0173 kra\u0161tai ${escape($liver.margins)}.</span>` : ``}

	${$liver.vasc ? `<span>Kraujagysl\u0117s ${escape($liver.vasc)}.</span>` : ``}

	${$liver.otherChanges ? `<span>${escape($liver.otherChanges)}.</span>` : ``}</div>`;
});
const GallBladder$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $gallBStore, $$unsubscribe_gallBStore;
  $$unsubscribe_gallBStore = subscribe(gallB, (value) => $gallBStore = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Toggle, "Toggle").$$render($$result, { autoclosable: "true", classes: "card" }, {}, {
      content: () => {
        return `<div slot="${"content"}"><div class="${"flex gap-2"}"><div class="${"titles"}">Tul\u017Eies p\u016Bsl\u0117s sienel\u0117</div>
			${validate_component(Tooltip, "Tooltip").$$render($$result, {
          tooltipText: "Normalios tul\u017Eies p\u016Bsl\u0117s sienel\u0117s storis kat\u0117ms ir \u0161unims yra < 0.1cm."
        }, {}, {})}</div>
		<div class="${"radio"}">${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "sustor\u0117jusi",
          name: "wall-thickness",
          group: $gallBStore.wallThickness
        }, {
          group: ($$value) => {
            $gallBStore.wallThickness = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "nesustor\u0117jusi",
          name: "wall-thickness",
          group: $gallBStore.wallThickness
        }, {
          group: ($$value) => {
            $gallBStore.wallThickness = $$value;
            $$settled = false;
          }
        }, {})}</div>

		${validate_component(NumberInput, "NumberInput").$$render($$result, {
          title: " Tul\u017Eies p\u016Bsl\u0117s sienel\u0117s storis, cm",
          value: $gallBStore.thickness
        }, {
          value: ($$value) => {
            $gallBStore.thickness = $$value;
            $$settled = false;
          }
        }, {})}

	
			<div class="${"titles"}">Bendrasisi tul\u017Eies latakas</div>
			
		<div class="${"radio"}">${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "neprasipl\u0117t\u0119s",
          name: "ductus",
          group: $gallBStore.ductus
        }, {
          group: ($$value) => {
            $gallBStore.ductus = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "prasipl\u0117t\u0119s",
          name: "ductus",
          group: $gallBStore.ductus
        }, {
          group: ($$value) => {
            $gallBStore.ductus = $$value;
            $$settled = false;
          }
        }, {})}</div>

		${validate_component(NumberInput, "NumberInput").$$render($$result, {
          tooltipText: "Normalaus tul\u017Eies p\u016Bsl\u0117s latako skersmuo yra iki 0.4cm kat\u0117ms ir 0.3cm \u0161unims.",
          title: " Bendrojo tul\u017Eies latako skersmuo, cm",
          value: $gallBStore.ductusCm
        }, {
          value: ($$value) => {
            $gallBStore.ductusCm = $$value;
            $$settled = false;
          }
        }, {})}

		${validate_component(Textarea, "Textarea").$$render($$result, {
          title: "Kiti pakitimai",
          placeholder: "akmenys, nuos\u0117dos, dariniai",
          value: $gallBStore.otherChanges
        }, {
          value: ($$value) => {
            $gallBStore.otherChanges = $$value;
            $$settled = false;
          }
        }, {})}</div>`;
      },
      title: () => {
        return `<div slot="${"title"}">Tul\u017Eies p\u016Bsl\u0117 ir bendrasis tul\u017Eies latakas</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_gallBStore();
  return $$rendered;
});
const GallBladder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $gallB, $$unsubscribe_gallB;
  $$unsubscribe_gallB = subscribe(gallB, (value) => $gallB = value);
  $$unsubscribe_gallB();
  return `<div class="${"mb-2"}">${$gallB.wallThickness ? `<span>Tul\u017Eies p\u016Bsl\u0117s sienel\u0117 yra ${escape($gallB.wallThickness)}.</span>` : ``}

	${$gallB.thickness ? `<span>Sienel\u0117s storis yra ${escape($gallB.thickness)} cm.</span>` : ``}

	${$gallB.ductus ? `<span>Bendrasis tul\u017Eies p\u016Bsl\u0117s latakas yra ${escape($gallB.ductus)}.</span>` : ``}

	${$gallB.ductusCm ? `<span>Bendrojo tul\u017Eies p\u016Bsl\u0117s latako plotis skersiniame pj\u016Bvyje yra ${escape($gallB.ductusCm)} cm.</span>` : ``}

	${$gallB.otherChanges ? `<span>${escape($gallB.otherChanges)}.</span>` : ``}</div>`;
});
const Stomach$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $stomachStore, $$unsubscribe_stomachStore;
  $$unsubscribe_stomachStore = subscribe(stomach, (value) => $stomachStore = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Toggle, "Toggle").$$render($$result, { autoclosable: "true", classes: "card" }, {}, {
      content: () => {
        return `<div slot="${"content"}"><div class="${"titles"}">Skrand\u017Eio prisipildymas</div>

		<div class="${"radio"}">${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "tus\u010Dias",
          name: "content",
          group: $stomachStore.content
        }, {
          group: ($$value) => {
            $stomachStore.content = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "vidutini\u0161kai prisipild\u0119s",
          name: "content",
          group: $stomachStore.content
        }, {
          group: ($$value) => {
            $stomachStore.content = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "perpildytas",
          name: "content",
          group: $stomachStore.content
        }, {
          group: ($$value) => {
            $stomachStore.content = $$value;
            $$settled = false;
          }
        }, {})}</div>

		<div class="${"flex gap-5"}">${validate_component(NumberInput, "NumberInput").$$render($$result, {
          tooltipText: "Normalaus skrand\u017Eio sienel\u0117s storis katei yra 0.2-0.4cm, \u0161unims 0.2-0.5cm.",
          title: "Sienel\u0117s storis, cm",
          value: $stomachStore.thickness
        }, {
          value: ($$value) => {
            $stomachStore.thickness = $$value;
            $$settled = false;
          }
        }, {})}

			${validate_component(NumberInput, "NumberInput").$$render($$result, {
          tooltipText: "Normalaus skrand\u017Eio peristaltika yra +- 5k/min.",
          title: "Peristaltika, k/min",
          value: $stomachStore.peristalsis
        }, {
          value: ($$value) => {
            $stomachStore.peristalsis = $$value;
            $$settled = false;
          }
        }, {})}</div>

		${validate_component(Textarea, "Textarea").$$render($$result, {
          title: "Kiti pakitimai",
          placeholder: "mas\u0117s, svetimk\u016Bniai, dujos",
          value: $stomachStore.otherChanges
        }, {
          value: ($$value) => {
            $stomachStore.otherChanges = $$value;
            $$settled = false;
          }
        }, {})}</div>`;
      },
      title: () => {
        return `<div slot="${"title"}">Skrandis</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_stomachStore();
  return $$rendered;
});
const Stomach = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $stomach, $$unsubscribe_stomach;
  $$unsubscribe_stomach = subscribe(stomach, (value) => $stomach = value);
  $$unsubscribe_stomach();
  return `<div class="${"mb-2"}">${$stomach.content === "tus\u010Dias" ? `<span>Skrandyje turinio n\u0117ra</span>` : `${$stomach.content === "vidutini\u0161kai prisipild\u0119s" ? `<span>Skrandis yra prisipild\u0119s vidutini\u0161kai</span>` : `${$stomach.content === "perpildytas" ? `<span>Skrandis yra perpildytas</span>` : ``}`}`}

	${$stomach.thickness ? `<span>Sienel\u0117s storis ${escape($stomach.thickness)} cm.</span>` : ``}

	${$stomach.otherChanges ? `<span>${escape($stomach.otherChanges)}.</span>` : ``}</div>`;
});
const Intestines$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $intestinesStore, $$unsubscribe_intestinesStore;
  $$unsubscribe_intestinesStore = subscribe(intestines, (value) => $intestinesStore = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Toggle, "Toggle").$$render($$result, { autoclosable: "true", classes: "card" }, {}, {
      content: () => {
        return `<div slot="${"content"}"><div class="${"flex flex-col md:flex-row align-items-start justify-between gap-10"}">${validate_component(NumberInput, "NumberInput").$$render($$result, {
          tooltipText: "Normalios dvylikapir\u0161t\u0117s \u017Earnos sienel\u0117s storis katei 0.22cm. \u0160uniui <15kg: 0.38cm, 15-30kg: 0.41cm, >30kg: 0.44cm.",
          title: "Dvylikapir\u0161t\u0117s \u017Earnos sienel\u0117s storis, cm",
          value: $intestinesStore.thicknessDuo
        }, {
          value: ($$value) => {
            $intestinesStore.thicknessDuo = $$value;
            $$settled = false;
          }
        }, {})}

			${validate_component(Textarea, "Textarea").$$render($$result, {
          title: "Kiti pakitimai",
          placeholder: "turinys, dujos, mas\u0117s, svetimk\u016Bniai",
          value: $intestinesStore.otherChangesDuo
        }, {
          value: ($$value) => {
            $intestinesStore.otherChangesDuo = $$value;
            $$settled = false;
          }
        }, {})}</div>

		<div class="${"flex flex-col md:flex-row align-items-start justify-between mt-5 gap-10"}">${validate_component(NumberInput, "NumberInput").$$render($$result, {
          tooltipText: "Normalios tu\u0161\u010Diosios \u017Earnos sienel\u0117s storis katei 0.22cm. \u0160uniui <15kg: 0.3cm, 15-30kg: 0.35cm, >30kg: 0.38cm.",
          title: "Tus\u010Diosios \u017Earnos sienel\u0117s storis, cm",
          value: $intestinesStore.thicknessJeju
        }, {
          value: ($$value) => {
            $intestinesStore.thicknessJeju = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Textarea, "Textarea").$$render($$result, {
          title: "Kiti pakitimai",
          placeholder: "turinys, dujos, mas\u0117s, svetimk\u016Bniai",
          value: $intestinesStore.otherChangesJeju
        }, {
          value: ($$value) => {
            $intestinesStore.otherChangesJeju = $$value;
            $$settled = false;
          }
        }, {})}</div>

		<div class="${"flex flex-col md:flex-row align-items-start justify-between mt-5 gap-10"}">${validate_component(NumberInput, "NumberInput").$$render($$result, {
          tooltipText: "Normalios aklosios \u017Earnos sienel\u0117s storis katei 0.22cm. \u0160uniui <15kg: 0.3cm, 15-30kg: 0.35cm, >30kg: 0.38cm.",
          title: "Aklosios \u017Earnos sienel\u0117s storis ties ileocekaline jungtimi, cm",
          value: $intestinesStore.thicknessCec
        }, {
          value: ($$value) => {
            $intestinesStore.thicknessCec = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Textarea, "Textarea").$$render($$result, {
          title: "Kiti pakitimai",
          placeholder: "turinys, dujos, mas\u0117s, svetimk\u016Bniai",
          value: $intestinesStore.otherChangesCec
        }, {
          value: ($$value) => {
            $intestinesStore.otherChangesCec = $$value;
            $$settled = false;
          }
        }, {})}</div>

		<div class="${"flex flex-col md:flex-row align-items-start justify-between mt-5 gap-10"}">${validate_component(NumberInput, "NumberInput").$$render($$result, {
          tooltipText: "Normalios storosios \u017Earnos sienel\u0117s storis kat\u0117ms ir \u0161unims yra 0.15cm.",
          title: "Storosios \u017Earnos sienel\u0117s storis, cm",
          value: $intestinesStore.thicknessCol
        }, {
          value: ($$value) => {
            $intestinesStore.thicknessCol = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(Textarea, "Textarea").$$render($$result, {
          title: "Kiti pakitimai",
          placeholder: "turinys, dujos, mas\u0117s, svetimk\u016Bniai",
          value: $intestinesStore.otherChangesCol
        }, {
          value: ($$value) => {
            $intestinesStore.otherChangesCol = $$value;
            $$settled = false;
          }
        }, {})}</div></div>`;
      },
      title: () => {
        return `<div slot="${"title"}">\u017Darnynas</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_intestinesStore();
  return $$rendered;
});
const Intestines = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $intestines, $$unsubscribe_intestines;
  $$unsubscribe_intestines = subscribe(intestines, (value) => $intestines = value);
  $$unsubscribe_intestines();
  return `<div class="${"mb-2"}">${$intestines.thicknessDuo ? `<span>Dvylikapir\u0161t\u0117s \u017Earnos sienel\u0117s storis yra ${escape($intestines.thicknessDuo)} cm.</span>` : ``}

${$intestines.otherChangesDuo ? `<span>${escape($intestines.otherChangesDuo)}.</span>` : ``}

${$intestines.thicknessJeju ? `<span>Tus\u010Diosios \u017Earnos sienel\u0117s storis yra ${escape($intestines.thicknessJeju)} cm.</span>` : ``}

${$intestines.otherChangesJeju ? `<span>${escape($intestines.otherChangesJeju)}.</span>` : ``}

${$intestines.thicknessCec ? `<span>Aklosios \u017Earnos sienel\u0117s storis ties ileocekaline jungtimi yra ${escape($intestines.thicknessCec)} cm.</span>` : ``}

${$intestines.otherChangesCec ? `<span>${escape($intestines.otherChangesCec)}.</span>` : ``}

${$intestines.thicknessCol ? `<span>Storosios \u017Earnos sienel\u0117s yra ${escape($intestines.thicknessCol)} cm.</span>` : ``}

${$intestines.otherChangesCol ? `<span>${escape($intestines.otherChangesCol)}.</span>` : ``}</div>`;
});
const Pancreas$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $pancreasStore, $$unsubscribe_pancreasStore;
  $$unsubscribe_pancreasStore = subscribe(pancreas, (value) => $pancreasStore = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Toggle, "Toggle").$$render($$result, { autoclosable: "true", classes: "card" }, {}, {
      content: () => {
        return `<div slot="${"content"}"><div class="${"flex gap-2"}"><div class="${"titles"}">Kasa aplink esantiems riebalams</div>
			${validate_component(Tooltip, "Tooltip").$$render($$result, {
          tooltipText: "Normali kasa aplinkiniams riebalams yra izoechogeni\u0161ka."
        }, {}, {})}</div>
		<div class="${"radio"}">${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "izoechogeni\u0161ka",
          name: "echogenicity",
          group: $pancreasStore.echogen
        }, {
          group: ($$value) => {
            $pancreasStore.echogen = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "hipoechogeni\u0161ka",
          name: "echogenicity",
          group: $pancreasStore.echogen
        }, {
          group: ($$value) => {
            $pancreasStore.echogen = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "hiperechogeni\u0161ka",
          name: "echogenicity",
          group: $pancreasStore.echogen
        }, {
          group: ($$value) => {
            $pancreasStore.echogen = $$value;
            $$settled = false;
          }
        }, {})}</div>

		${validate_component(NumberInput, "NumberInput").$$render($$result, {
          tooltipText: "Normalaus kasos latako skersmuo kat\u0117ms yra 0.1cm, \u0161unims- 0.06cm. Latako skersmuo, kuris gal\u0117t\u0173 indikuoti obstrukcij\u0105: 0.4-0.5cm. Senatvinis pakitimas kat\u0117ms- kasos latako i\u0161sipl\u0117timas iki 0.25cm.",
          title: "Kasos latako plotis, cm",
          value: $pancreasStore.width
        }, {
          value: ($$value) => {
            $pancreasStore.width = $$value;
            $$settled = false;
          }
        }, {})}
		${validate_component(Textarea, "Textarea").$$render($$result, {
          title: "Kiti pakitimai",
          placeholder: " mas\u0117s, citos, kalcifikatai",
          value: $pancreasStore.otherChanges
        }, {
          value: ($$value) => {
            $pancreasStore.otherChanges = $$value;
            $$settled = false;
          }
        }, {})}</div>`;
      },
      title: () => {
        return `<div slot="${"title"}">Kasa</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_pancreasStore();
  return $$rendered;
});
const Pancreas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $pancreas, $$unsubscribe_pancreas;
  $$unsubscribe_pancreas = subscribe(pancreas, (value) => $pancreas = value);
  $$unsubscribe_pancreas();
  return `<div class="${"mb-2"}">${$pancreas.echogen ? `<span>Kasa yra ${escape($pancreas.echogen)} aplink esantiems riebalams.</span>` : ``}

${$pancreas.width ? `<span>Kasos latako plotis ${escape($pancreas.width)} cm.</span>` : ``}

${$pancreas.otherChanges ? `<span>${escape($pancreas.otherChanges)}.</span>` : ``}</div>`;
});
const Adrenals$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $adrenalsLStore, $$unsubscribe_adrenalsLStore;
  let $adrenalsRStore, $$unsubscribe_adrenalsRStore;
  $$unsubscribe_adrenalsLStore = subscribe(adrenalsL, (value) => $adrenalsLStore = value);
  $$unsubscribe_adrenalsRStore = subscribe(adrenalsR, (value) => $adrenalsRStore = value);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Toggle, "Toggle").$$render($$result, { autoclosable: "true", classes: "card" }, {}, {
      content: () => {
        return `<div slot="${"content"}"><div class="${"font-bold text-md text-center mb-2"}">Kairys prieinkstis</div>
		<div class="${"flex gap-2"}"><div class="${"titles "}">aplinkui esantiems riebalams prieinks\u010Dio \u017Eiev\u0117</div>
			${validate_component(Tooltip, "Tooltip").$$render($$result, {
          tooltipText: "Normalaus prieinks\u010Dio \u017Eiev\u0117 j\u012F supantiems riebalams yra hipoechoi\u0161ka."
        }, {}, {})}</div>
		<div class="${"radio"}">${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "izoechogeni\u0161ka",
          name: "echogenicityL",
          group: $adrenalsLStore.echogen
        }, {
          group: ($$value) => {
            $adrenalsLStore.echogen = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "hipoechogeni\u0161ka",
          name: "echogenicityL",
          group: $adrenalsLStore.echogen
        }, {
          group: ($$value) => {
            $adrenalsLStore.echogen = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "hiperechogeni\u0161ka",
          name: "echogenicityL",
          group: $adrenalsLStore.echogen
        }, {
          group: ($$value) => {
            $adrenalsLStore.echogen = $$value;
            $$settled = false;
          }
        }, {})}</div>

		${validate_component(NumberInput, "NumberInput").$$render($$result, {
          tooltipText: "Normalaus prieinks\u010Dio ilgis kat\u0117ms yra 1-1.1cm, \u0161unims: 1-5cm.",
          title: "Prieinks\u010Dio ilgis, cm",
          value: $adrenalsLStore.length
        }, {
          value: ($$value) => {
            $adrenalsLStore.length = $$value;
            $$settled = false;
          }
        }, {})}

		<div class="${"flex gap-5"}">${validate_component(NumberInput, "NumberInput").$$render($$result, {
          tooltipText: "Normalaus prieinks\u010Dio plotis kat\u0117ms yra 0.35-0.45cm , \u0161unims: 0.6-0.8cm.",
          title: "Priekinio poliaus plotis, cm",
          value: $adrenalsLStore.widthFront
        }, {
          value: ($$value) => {
            $adrenalsLStore.widthFront = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(NumberInput, "NumberInput").$$render($$result, {
          tooltipText: "Normalaus prieinks\u010Dio plotis kat\u0117ms yra 0.35-0.45cm , \u0161unims: 0.6-0.8cm.",
          title: " Galinio poliaus plotis, cm",
          value: $adrenalsLStore.widthBack
        }, {
          value: ($$value) => {
            $adrenalsLStore.widthBack = $$value;
            $$settled = false;
          }
        }, {})}</div>
		${validate_component(Textarea, "Textarea").$$render($$result, {
          title: "Kiti pakitimai",
          placeholder: "mas\u0117s, citos, kalcifikatai",
          value: $adrenalsLStore.otherChanges
        }, {
          value: ($$value) => {
            $adrenalsLStore.otherChanges = $$value;
            $$settled = false;
          }
        }, {})}

		<div class="${"font-bold text-md text-center mt-5 mb-2"}">De\u0161inys prieinkstis</div>
		<div class="${"flex gap-2"}"><div class="${"titles "}">aplinkui esantiems riebalams prieinks\u010Dio \u017Eiev\u0117</div>
			${validate_component(Tooltip, "Tooltip").$$render($$result, {
          tooltipText: "Normalaus prieinks\u010Dio \u017Eiev\u0117 j\u012F supantiems riebalams yra hipoechoi\u0161ka."
        }, {}, {})}</div>
		<div class="${"radio"}">${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "izoechogeni\u0161ka",
          name: "echogenicityL",
          group: $adrenalsRStore.echogen
        }, {
          group: ($$value) => {
            $adrenalsRStore.echogen = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "hipoechogeni\u0161ka",
          name: "echogenicityL",
          group: $adrenalsRStore.echogen
        }, {
          group: ($$value) => {
            $adrenalsRStore.echogen = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(RadioBtn, "RadioBtn").$$render($$result, {
          value: "hiperechogeni\u0161ka",
          name: "echogenicityL",
          group: $adrenalsRStore.echogen
        }, {
          group: ($$value) => {
            $adrenalsRStore.echogen = $$value;
            $$settled = false;
          }
        }, {})}</div>

		${validate_component(NumberInput, "NumberInput").$$render($$result, {
          tooltipText: "Normalaus prieinks\u010Dio ilgis kat\u0117ms yra 1-1.1cm, \u0161unims: 1-5cm.",
          title: "Prieinks\u010Dio ilgis, cm",
          value: $adrenalsRStore.length
        }, {
          value: ($$value) => {
            $adrenalsRStore.length = $$value;
            $$settled = false;
          }
        }, {})}

		<div class="${"flex gap-5"}">${validate_component(NumberInput, "NumberInput").$$render($$result, {
          tooltipText: "Normalaus prieinks\u010Dio plotis kat\u0117ms yra 0.35-0.45cm , \u0161unims: 0.6-0.8cm.",
          title: "Priekinio poliaus plotis, cm",
          value: $adrenalsRStore.widthFront
        }, {
          value: ($$value) => {
            $adrenalsRStore.widthFront = $$value;
            $$settled = false;
          }
        }, {})}
			${validate_component(NumberInput, "NumberInput").$$render($$result, {
          tooltipText: "Normalaus prieinks\u010Dio plotis kat\u0117ms yra 0.35-0.45cm , \u0161unims: 0.6-0.8cm.",
          title: " Galinio poliaus plotis, cm",
          value: $adrenalsRStore.widthBack
        }, {
          value: ($$value) => {
            $adrenalsRStore.widthBack = $$value;
            $$settled = false;
          }
        }, {})}</div>
		${validate_component(Textarea, "Textarea").$$render($$result, {
          title: "Kiti pakitimai",
          placeholder: "mas\u0117s, citos, kalcifikatai",
          value: $adrenalsRStore.otherChanges
        }, {
          value: ($$value) => {
            $adrenalsRStore.otherChanges = $$value;
            $$settled = false;
          }
        }, {})}</div>`;
      },
      title: () => {
        return `<div slot="${"title"}">Prieinks\u010Diai</div>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_adrenalsLStore();
  $$unsubscribe_adrenalsRStore();
  return $$rendered;
});
const Adrenals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $adrenalsL, $$unsubscribe_adrenalsL;
  let $adrenalsR, $$unsubscribe_adrenalsR;
  $$unsubscribe_adrenalsL = subscribe(adrenalsL, (value) => $adrenalsL = value);
  $$unsubscribe_adrenalsR = subscribe(adrenalsR, (value) => $adrenalsR = value);
  $$unsubscribe_adrenalsL();
  $$unsubscribe_adrenalsR();
  return `<div class="${"mb-2"}"><div>${JSON.stringify($adrenalsL) !== "{}" ? `<span>Kairys prieinkstis-</span>` : ``}
	${$adrenalsL.echogen ? `<span>Prieinks\u010Dio \u017Eiev\u0117 aplinkui esantiems riebalams yra ${escape($adrenalsL.echogen)}.</span>` : ``}

	${$adrenalsL.length ? `<span>Prienks\u010Dio ilgis ${escape($adrenalsL.length)} cm.</span>` : ``}

	${$adrenalsL.widthFront && $adrenalsL.widthBack ? `<span>Priekinio poliaus plotis ${escape($adrenalsL.widthFront)} cm., galinio poliaus plotis ${escape($adrenalsL.widthBack)}
			cm.</span>` : `${$adrenalsL.widthFront ? `<span>Priekinio poliaus plotis ${escape($adrenalsL.widthFront)} cm.</span>` : `${$adrenalsL.widthBack ? `<span>Galinio poliaus plotis ${escape($adrenalsL.widthBack)} cm.</span>` : ``}`}`}

	${$adrenalsL.otherChanges ? `<span>${escape($adrenalsL.otherChanges)}.</span>` : ``}</div>

<div>${JSON.stringify($adrenalsR) !== "{}" ? `<span>De\u0161inys prieinkstis-</span>` : ``}
	${$adrenalsR.echogen ? `<span>Prieinks\u010Dio \u017Eiev\u0117 aplinkui esantiems riebalams yra ${escape($adrenalsR.echogen)}.</span>` : ``}

	${$adrenalsR.length ? `<span>Prienks\u010Dio ilgis ${escape($adrenalsR.length)} cm.</span>` : ``}

	${$adrenalsR.widthFront && $adrenalsR.widthBack ? `<span>Priekinio poliaus plotis ${escape($adrenalsR.widthFront)} cm., galinio poliaus plotis ${escape($adrenalsR.widthBack)}
			cm.</span>` : `${$adrenalsR.widthFront ? `<span>Priekinio poliaus plotis ${escape($adrenalsR.widthFront)} cm.</span>` : `${$adrenalsR.widthBack ? `<span>Galinio poliaus plotis ${escape($adrenalsR.widthBack)} cm.</span>` : ``}`}`}

	${$adrenalsR.otherChanges ? `<span>${escape($adrenalsR.otherChanges)}.</span>` : ``}</div></div>`;
});
const Description_app = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}"><div class="${"flex gap-5 relative"}"><div class="${"flex flex-col w-1/2 gap-5"}">${validate_component(Bladder$1, "Bladder").$$render($$result, { show: "true" }, {}, {})}
		${validate_component(Kidney$1, "Kidney").$$render($$result, {}, {}, {})}
		${validate_component(Spleen$1, "Spleen").$$render($$result, {}, {}, {})}
		${validate_component(Liver$1, "Liver").$$render($$result, {}, {}, {})}
		${validate_component(GallBladder$1, "Gall").$$render($$result, {}, {}, {})}
		${validate_component(Stomach$1, "Stomach").$$render($$result, {}, {}, {})}
		${validate_component(Intestines$1, "Intestines").$$render($$result, {}, {}, {})}
		${validate_component(Pancreas$1, "Pancreas").$$render($$result, {}, {}, {})}
		${validate_component(Adrenals$1, "Adrenals").$$render($$result, {}, {}, {})}</div>


	<div class="${"card flex flex-col w-1/2 sticky top-0 self-start"}"><div class="${"font-bold text-lg text-center mb-2"}">Echoskopijos apra\u0161ymas</div>
		<div contenteditable="${"true"}">${validate_component(Bladder, "BladderDescription").$$render($$result, {}, {}, {})}
			${validate_component(Kidney, "KidneyDescription").$$render($$result, {}, {}, {})}
			${validate_component(Spleen, "SpleenDescription").$$render($$result, {}, {}, {})}
			${validate_component(Liver, "LiverDescription").$$render($$result, {}, {}, {})}
			${validate_component(GallBladder, "GallBDescription").$$render($$result, {}, {}, {})}
			${validate_component(Stomach, "StomachDescription").$$render($$result, {}, {}, {})}
			${validate_component(Intestines, "IntestinesDescription").$$render($$result, {}, {}, {})}
			${validate_component(Pancreas, "PancreasDescription").$$render($$result, {}, {}, {})}
			${validate_component(Adrenals, "AdrenalsDescription").$$render($$result, {}, {}, {})}</div></div></div></div>`;
});
export { Description_app as default };
