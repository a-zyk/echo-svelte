import { c as create_ssr_component, d as add_attribute, v as validate_component, e as escape } from "../../chunks/index-fe7fc8b7.js";
import { T as Toggle } from "../../chunks/Toggle-08a1e9d1.js";
import "uuid";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { text = "" } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<img${add_attribute("src", src, 0)} alt="${""}" class="${"w-20 cursor-pointer"}">

${``}`;
});
const HEALTHY_KIDNEY_TEXT = `
        Ka\u010Di\u0173 inkstai yra da\u017Eniausiai ovalios formos apie 3 \u2013 4,5 cm. Nekastruot\u0173 patin\u0173 inkstai link\u0119
        b\u016Bti didesni. \u012E senatv\u0119 ka\u010Di\u0173 inkstai ma\u017E\u0117ja. \u0160erdis yra hipoechoi\u0161ka \u017Eievei. \u017Diev\u0117s \u0161erdies
        riba turi b\u016Bti gerai i\u0161reik\u0161ta. (corticomedullary distinction.) Kortikomedularin\u0117je dalyje yra
        arkin\u0117s kraujagysl\u0117s, kurios gali mesti akustin\u012F \u0161e\u0161\u0117l\u012F ir turi b\u016Bti diferencijuojamos nuo
        kalcifikacijos spalviniu dopleriu. \u017Diev\u0117 yra hipoechoi\u0161ka/izoechoi\u0161ka kepenims ir hipoechoi\u0161ka
        blu\u017Eniai. \u017Diev\u0117 gali b\u016Bti hiperechoi\u0161ka kepenims d\u0117l didesnio kiekio riebal\u0173, kas yra norma
        kat\u0117ms. Inksto kapsul\u0117 turi b\u016Bti lygi hiperechogeni\u0161ka linija. Geldel\u0117 gali b\u016Bti vizualizuojama
        skersiniame pj\u016Bvyje ir gali padid\u0117ti d\u0117l intravenin\u0117s skys\u010Di\u0173 terapijos ar diuretik\u0173
        naudojimo.Aplink geldel\u0119 yra inksto sinusas, kuris vizualizuojama kaip hiperechoi\u0161ka strukt\u016Bra.
        Pas nutukusias kates itin ry\u0161kus.
`;
const HEALTHY_KIDNEY_DESCRIPTION = `Normalus kat\u0117s inkstas.`;
const DIFFUSE_KIDNEY_DISEASE_TEXT = `
        Prie inkst\u0173 nepakankamumo \u017Eiev\u0117 tampa hiperechogeni\u0161ka. Nusta\u010Dius \u017Eiev\u0117s hiperechogeni\u0161kum\u0105
		galimos diferencin\u0117s diagnoz\u0117s: intersticinis/glomerunefritas,glomerul\u0173 nekroz\u0117 d\u0117l
		apsinuodijimo etileno glikoliu, razinomis ar lelijomis, difuzin\u0117 inkstin\u0117 limfoma, FIP,
		nefrokalcinoz\u0117 d\u0117l hiperkalcemijos. Hiperechogeni\u0161ka \u017Eiev\u0117 ir \u0161erdis, ne toks ry\u0161kus \u017Eiev\u0117s
		\u0161erdies skirtumas (reduced corticomedullary distinction) gali rodyti \u012Fgimt\u0105 inkst\u0173 displazij\u0105,
		l\u0117tin\u012F inkst\u0173 nepakankamum\u0105, galutin\u0119 inkst\u0173 nepakankamumo stadij\u0105.
`;
const DIFFUSE_KIDNEY_DISEASE_DESCRIPTION = `\u0160uns inkstas, etileno glikolio intoksikacija. Rodykl\u0117 \u017Eymi 'rim sign' b\u016Bding\u0105 prie \u0161ios patologijos.`;
const INFARCT_KIDNEY_TEXT = `Infarktai matomi, kaip hiperechoi\u0161ki trikampiai, kuri\u0173 smailus galas lie\u010Dia inksto \u0161erd\u012F. Inkst\u0173 infarktai gali i\u0161sivystiti d\u0117l bet kokios prie\u017Easties, kuri sukelia hiperkre\u0161\u0117jimo b\u016Bsen\u0105 (hypercoagulable state) pvz. HCM,inkst\u0173 infekcija, sepsis, anfilaksinis \u0161okas ir tt. Inkst\u0173 infarktai da\u017Enesni kat\u0117ms su HCM. Jauna kat\u0117 su inkst\u0173 infarktais labiau tik\u0117tina, kad turi HCM, nei sena kat\u0117. Infarktai gali b\u016Bti ir atsitiktinis radinys ypa\u010D senoms kat\u0117ms`;
const INFARCT_KIDNEY_DESCRIPTION = `\u0160uo, inkstas. Rodykl\u0117s \u017Eymi hiperechoi\u0161kus infarktus. p - prasipl\u0117tusi geldel\u0117.`;
const CYST_KIDNEY_TEXT = `Inkstin\u0117s cistos, geneti\u0161kai nulemtos persams ir su persais mai\u0161ytoms kat\u0117ms.Indikuoja inkst\u0173
parametr\u0173 sekim\u0105, d\u0117l didesn\u0117s inkst\u0173 nepakankamumo rizikos.`;
const ABSCESS_KIDNEY_TEXT = `Stebima cista su hiperechoi\u0161komis nuos\u0117domis. Gyv\u016Bnai da\u017Enai kars\u010Diuoja, prastai jau\u010Diasi,
stebima leukocitoz\u0117.`;
const ABSCESS_KIDNEY_DESCRIPTION = `Abscesas \u0161uns inkste.`;
const LYMPHOMA_KIDNEY_TEXT = `Da\u017Eniausiai pasitaikanti neoplazija ka\u010Di\u0173 inkstuose.Da\u017Enesn\u0117s patinams. Da\u017Enai asocijuota su FIV/FeLV infekcijomis. 40% ka\u010Di\u0173 su multicentrine limfoma turi ir inkst\u0173 limfom\u0105.`;
const LYMPHOMA_KIDNEY_DESCRIPTION = `Kat\u0117, renalin\u0117 limfoma. B\u016Bdingas po\u017Eymis hipoechoi\u0161ka juosta aplink inkst\u0105 - "halo sign".`;
const CARCINOMA_KIDNEY_TEXT = `I\u0161 inksto parenchimos kylantys augliai, antri pagal da\u017Enum\u0105 kat\u0117ms, po renalin\u0117s limfomos.`;
const CARCINOMA_KIDNEY_DESCRIPTION = `\u0160uo, renalin\u0117 karcinoma.`;
const KidneyText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Toggle, "Toggle").$$render($$result, {
    autoclosable: "true",
    classes: "card mt-4"
  }, {}, {
    content: () => {
      return `<div slot="${"content"}">${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/kidney/normalkidney.png",
            text: HEALTHY_KIDNEY_DESCRIPTION
          }, {}, {})}
                ${escape(HEALTHY_KIDNEY_TEXT)}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Normal\u016Bs inkstai</div>`;
        }
      })}

        ${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/kidney/etilenotoxicozeirrimsignsuo.jpg",
            text: DIFFUSE_KIDNEY_DISEASE_DESCRIPTION
          }, {}, {})}
                ${escape(DIFFUSE_KIDNEY_DISEASE_TEXT)}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Difuziniai inkst\u0173 parenchimos pakitimai</div>`;
        }
      })}

        ${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {
            content: () => {
              return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
                src: "/images/kidney/infarktaiinkstesuo.jpg",
                text: INFARCT_KIDNEY_DESCRIPTION
              }, {}, {})}
                        ${escape(INFARCT_KIDNEY_TEXT)}</div>`;
            },
            title: () => {
              return `<div slot="${"title"}">Infarktai</div>`;
            }
          })}

                ${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {
            content: () => {
              return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
                src: "/images/kidney/policistinisinkstas.jpg",
                text: CYST_KIDNEY_TEXT
              }, {}, {})}
                        ${escape(CYST_KIDNEY_TEXT)}</div>`;
            },
            title: () => {
              return `<div slot="${"title"}">Cistos</div>`;
            }
          })}

                ${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {
            content: () => {
              return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
                src: "/images/kidney/pulinysinkstesuo.jpg",
                text: ABSCESS_KIDNEY_DESCRIPTION
              }, {}, {})}
                        ${escape(ABSCESS_KIDNEY_TEXT)}</div>`;
            },
            title: () => {
              return `<div slot="${"title"}">Abscesai</div>`;
            }
          })}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Lokal\u016Bs inkst\u0173 parenchimos pakitimai</div>`;
        }
      })}

        ${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {
            content: () => {
              return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
                src: "/images/kidney/inkstolimfomakate.jpg",
                text: LYMPHOMA_KIDNEY_DESCRIPTION
              }, {}, {})}
                        ${escape(LYMPHOMA_KIDNEY_TEXT)}</div>`;
            },
            title: () => {
              return `<div slot="${"title"}">Limfoma</div>`;
            }
          })}

                ${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {
            content: () => {
              return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
                src: "/images/kidney/renalkarcinomadog.jpg",
                text: CARCINOMA_KIDNEY_DESCRIPTION
              }, {}, {})}
                        ${escape(CARCINOMA_KIDNEY_TEXT)}</div>`;
            },
            title: () => {
              return `<div slot="${"title"}">Karcinoma</div>`;
            }
          })}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Neoplazijos</div>`;
        }
      })}</div>`;
    },
    title: () => {
      return `<div class="${"text-center"}" slot="${"title"}">Inkstai</div>`;
    }
  })}`;
});
const HEALTHY_LIVER_TEXT = `Did\u017Eioji dalis kepen\u0173 yra lokalizuota po \u0161onkauliu lanku. Kairioji skiltis yra did\u017Eiausia ir suformuoja nuo tre\u010Ddalio iki pus\u0117s vis\u0173 kepen\u0173. Kairioji skiltis savo kra\u0161tu lie\u010Di\u0105 tul\u017Eies p\u016Bsl\u0119. Kvadratin\u0117 skiltis yra centre ir dalinai apgaubia tul\u017Eies p\u016Bsl\u0119. De\u0161in\u0117 tul\u017Eies pus\u0117s sienel\u0117 lie\u010Diasi su medialiniu de\u0161iniosios medialin\u0117s skilties \u0161onu. Uodegin\u0117s skilties uodegin\u0117 atauga siekia de\u0161inij\u012F inskt\u0105.

Normali kepen\u0173 parenchima yra difuzi\u0161kai hipoechoi\u0161ka, su \u0161iurk\u0161tesne echotekst\u016Bra lyginant su blu\u017Enimi. Kepen\u0173 echogeni\u0161kumas lyginant su inkst\u0173 \u017Eieve yra labiau varijuojantis, bet da\u017Eniausiai hiperechoi\u0161kas/izoechoi\u0161kas. Kepen\u0173 kra\u0161tai yra a\u0161tr\u016Bs, d\u0117l hepatomegalijos gali apval\u0117ti.

Falciforminis rai\u0161tis yra sudarytas i\u0161 riebalinio audinio ir lokalizuotas tarp de\u0161in\u0117s ir kair\u0117s kepen\u0173 skil\u010Di\u0173, dorsaliai kardinei (xyphoid) kr\u016Btikaulio ataugai. Rai\u0161\u010Dio strukt\u016Bra prastai i\u0161reik\u0161ta, da\u017Eniausiai izoechoi\u0161ka/hiperechoi\u0161ka kepen\u0173 parenchimai. Nutukusios kat\u0117s gali tur\u0117ti kepenis, kurios yra hiperechoi\u0161kos lyginant su falciforminiu rai\u0161\u010Diu.`;
const HEALTHY_LIVER_DESCRIPTION = `Normalios kat\u0117s kepenys.`;
const DIFFUSE_LIVER_DISEASE_TEXT = `Difuzin\u0117s kepen\u0173 ligos paveikia kepen\u0173 echogeni\u0161kum\u0105 bei did\u012F. Dauguma kepen\u0173 lig\u0173 sukelia simetri\u0161k\u0105 ar asimetri\u0161k\u0105 hepatomegalij\u0105, i\u0161skyrus portosisteminius \u0161untus, ciroz\u0119, chronin\u012F hepatit\u0105. Padid\u0117jusios kepenys be echogeni\u0161kumo pakitimo gali b\u016Bti d\u0117l limfomos, diseminuotos mastocitomos, \u016Bmaus hepatito.

Da\u017Eniausios hiperechogeni\u0161kumo diferencin\u0117s diagnoz\u0117s: steroid\u0173 sukelta hepatopatija, lipidoz\u0117, chroninis hepatitas, fibroz\u0117, ciroz\u0117, limfoma, mastocitoma. Hipoechogeni\u0161kumo: pasyvi kraujo staz\u0117, \u016Bmus hepatitas, limfoma, leukemija, amiloidoz\u0117.`;
const DIFFUSE_LIVER_DISEASE_DESCRIPTION_ROUND = `Apval\u016Bs kepen\u0173 kra\u0161tai rodantys hepatomegalij\u0105.`;
const DIFFUSE_LIVER_DISEASE_DESCRIPTION_HONEY = `\u0160uo, galutin\u0117s stadijos kepen\u0173 fibroz\u0117. Bi\u010Di\u0173 korio ra\u0161tas, b\u016Bdingas esant hepatokutaniniam sindromui.`;
const DIFFUSE_LIVER_DISEASE_DESCRIPTION_HYPER = `Hiperechoi\u0161kos kepenys lyginant su blu\u017Enimi.`;
const DIFFUSE_LIVER_DISEASE_DESCRIPTION_HYPO = `Hipoechoi\u0161kos kepenys, matomos i\u0161ry\u0161k\u0117jusios kepen\u0173 kraujagysli\u0173 sienel\u0117s.`;
const LOCAL_LIVER_DISEASE_TEXT = `Gerybiniai dariniai tokie kaip mazgelin\u0117 hiperplazija yra da\u017Enas radinys ypa\u010D vyresnio am\u017Eiaus \u0161unims. Gerybin\u0117s kepen\u0173 adenomos echoskopi\u0161kai negali b\u016Bti diferencijuojamos nuo piktybini\u0173 darini\u0173, tod\u0117l reikalinga histologija arba fna.

Kepenys yra da\u017Ena metastazi\u0173 vieta.  Metastaz\u0117ms b\u016Bdinga \u201Ctaikinio\u201D morfologija: hiperechoi\u0161kas centras ir hipoechoi\u0161kas kra\u0161tas. Piktybiniai dariniai da\u017Enai b\u016Bna >3cm, lydimi laisvo skys\u010Dio pilvo ertm\u0117je. Pirminiai kepen\u0173 augliai, tokie kaip hepatoceluliarin\u0117 karcinoma yra reti.`;
const LOCAL_LIVER_DISEASE_DESCRIPTION_NODULES = `Mazgelin\u0117 hiperplazija ir steroidin\u0117 hepatopatija`;
const LOCAL_LIVER_DISEASE_DESCRIPTION_CARCINOMA = `Hepatocialiuriain\u0117 karcinoma, \u0161uo. Da\u017Enai b\u016Bna >10cm. Rekomenduojamas chirurginis gydymas, nes n\u0117ra linkusi metaztazuoti ir prognoz\u0117 pilnai pa\u0161alinus yra gera.`;
const LOCAL_LIVER_DISEASE_DESCRIPTION_METS = `"Taikinio" morfologijos dariniai. Metastaz\u0117s.`;
const LiverText = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Toggle, "Toggle").$$render($$result, {
    autoclosable: "true",
    classes: "card mt-4"
  }, {}, {
    content: () => {
      return `<div slot="${"content"}">${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/liver/normalliver.png",
            text: HEALTHY_LIVER_DESCRIPTION
          }, {}, {})}
				${escape(HEALTHY_LIVER_TEXT)}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Normalios kepenys</div>`;
        }
      })}

		${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}"><div class="${"flex gap-1"}">${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/liver/apvaluskepenukrastas.png",
            text: DIFFUSE_LIVER_DISEASE_DESCRIPTION_ROUND
          }, {}, {})}
					${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/liver/hepatokutaninissindromasfibrotineendstage.jpg",
            text: DIFFUSE_LIVER_DISEASE_DESCRIPTION_HONEY
          }, {}, {})}
					${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/liver/hypoechoiclivervessels.png",
            text: DIFFUSE_LIVER_DISEASE_DESCRIPTION_HYPO
          }, {}, {})}
					${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/liver/hiperechoi\u0161koskepenys.png",
            text: DIFFUSE_LIVER_DISEASE_DESCRIPTION_HYPER
          }, {}, {})}</div>
				${escape(DIFFUSE_LIVER_DISEASE_TEXT)}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Difuziniai kepen\u0173 prenchimos pakitimai</div>`;
        }
      })}

		${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}"><div class="${"flex gap-1"}">${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/liver/hepatoceliuliarinekarcinoma.png",
            text: LOCAL_LIVER_DISEASE_DESCRIPTION_CARCINOMA
          }, {}, {})}
					${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/liver/nodularhyperplasiasteroidhepatopathy.png",
            text: LOCAL_LIVER_DISEASE_DESCRIPTION_NODULES
          }, {}, {})}
					${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/liver/targetlesions.png",
            text: LOCAL_LIVER_DISEASE_DESCRIPTION_METS
          }, {}, {})}</div>
				${escape(LOCAL_LIVER_DISEASE_TEXT)}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Lokalizuoti kepen\u0173 prenchimos pakitimai</div>`;
        }
      })}</div>`;
    },
    title: () => {
      return `<div class="${"text-center"}" slot="${"title"}">Kepenys ir tul\u017Eies p\u016Bsl\u0117</div>`;
    }
  })}`;
});
const HEALTHY_BLADDER_TEXT = `Normali \u0161lapimo p\u016Bsl\u0117 stebima kaip anechoi\u0161ko skys\u010Dio pripildyta p\u016Bsl\u0117. Turi 4 sluoksnius: seroza, raumeninis, pogleivin\u0117, gleivin\u0117. Echoskopu sluoksniai da\u017Eniausiai n\u0117ra identifikuojami. \u0160lapimo p\u016Bslei pildantis jos sienel\u0117 plon\u0117ja. Echoskopijos metu matavimai tur\u0117t\u0173 b\u016Bti vertinami, kai p\u016Bsl\u0117 pripildyta vidutini\u0161kai.`;
const HEALTHY_BLADDER_DESCRIPTION = `Normali \u0161lapimo p\u016Bsl\u0117.`;
const BLADDER_CYSTITIS_TEXT = `Cistitas da\u017Eniausiai sukelia smark\u0173 nereguliar\u0173 hipoechoi\u0161k\u0105 \u0161lapimo p\u016Bsl\u0117s sienel\u0117s sustor\u0117jim\u0105. Sustor\u0117jimas da\u017Eniausiai stebimas kranioventralin\u0117je dalyje. Kartu gali b\u016Bti randami urolitai, kre\u0161uliai. Kat\u0117ms da\u017Enai pasitaiko idiopatinis cistitas, urolit\u0173 sukeltas u\u017Edegimas. Bakterinis cistitas kat\u0117ms pasitaiko itin retai, da\u017Eniau labai jaunoms ar senoms kat\u0117ms, turin\u010Dioms inkst\u0173 nepakankamum\u0105, diabet\u0105, kateterizavimo istorij\u0105 ir kitas gretutines ligas. Tuo tarpu \u0161unims beveik visi \u0161lapimo p\u016Bsl\u0117s u\u017Edegimai, kai randama struvit\u0173 yra bakterin\u0117s kilm\u0117s. Imunosupresuotiems gyv\u016Bnams gali pasitaikyti Candida spp. sukelti cistitai.`;
const BLADDER_CYSTITIS_DESCRIPTION = `Sustor\u0117jusio \u0161lapimo p\u016Bsl\u0117s sienel\u0117 d\u0117l l\u0117tinio cistito`;
const BLADDER_EMPHYSEMATOUS_TEXT = `Siejamas su dujas i\u0161skirian\u010Di\u0173 bakterij\u0173 E. coli, A. earogenes, P. mirabilis, Clostridium spp. \u0161lapimo p\u016Bsl\u0117s sienel\u0117s kolonizavimu. Da\u017Eniausiai randamas pas diabetikus, su gliukozurija. Stebimos duj\u0173 reverberacijos artefaktas kylantis nuo pa\u017Eeistos sienel\u0117s. Diferencijuoti nuo oro p\u016Bsl\u0117je d\u0117l kateterizavimo galima kei\u010Diant gyv\u016Bno pozicij\u0105. Oras keis viet\u0105 ir jud\u0117s dorsaliai, o dujos sienel\u0117je i\u0161liks toje pa\u010Dioje vietoje.`;
const BLADDER_EMPHYSEMATOUS_DESCRIPTION = `Emfizeminis cistitas, \u0161uo. Matoma duj\u0173 reverberacija nuo p\u016Bsl\u0117s sienel\u0117s.`;
const BLADDER_POPLYPS_TEXT = `Neda\u017Ena cistito forma pasitaikanti \u0161unims. Stebimos hiperechoi\u0161kos mas\u0117s, kurios i\u0161siki\u0161a \u012F p\u016Bsl\u0117s spind\u012F, da\u017Enai turi kojel\u0119. Da\u017Eniausiai aptinkamos kranioventralin\u0117je p\u016Bsl\u0117s dalyje. Gali b\u016Bti asocijuota su difuziniu \u0161lapimo p\u016Bsl\u0117s sienel\u0117s sustor\u0117jimu. Kartais sud\u0117tinga diferencijuoti nuo neoplazijos, tod\u0117l reiklinga traumin\u0117 kateterizacija ir m\u0117ginio \u0117mimas diagnoz\u0117s patvirtinimui.`;
const BLADDER_POPLYPS_DESCRIPTION = `Polipoidinis cistitas, \u0161uo.`;
const BLADDER_POPLYPS_CHRONIC_DESCRIPTION = `Polipas atsirad\u0119s d\u0117l l\u0117tinio cistito, \u0161uo.`;
const BLADDER_PSEUDOMEMBR_TEXT = `Pseudomembraninis cistitas kyla d\u0117l smarkaus difuzinio pa\u017Eeidimo, nekroz\u0117s ir kraujavimo i\u0161 \u0161lapimo p\u016Bsl\u0117s sienel\u0117s. Nekroti\u0161ka gleivin\u0117, fibrinas ir \u012Fvairios nuos\u0117dos atkimba nuo sienel\u0117s ir sudaro pseudomembranas. Pseudomembranos gali predisponuoti obstrukcijos atsiradim\u0105. Da\u017Eniausiai kyla d\u0117l bakterin\u0117s infekcijos.`;
const BLADDER_PSEUDOMEMBR_DESCRIPTION = `Pseudomembraninis cistitas, \u0161uo. Matoma plona pseudomembrana bei kraujo kre\u0161ulys.`;
const BLADDER_CARCINOMA_TEXT = `Pereinamojo epitelio karcinoma \u2013 da\u017Eniausiai stebima kaip nelygaus pavir\u0161iaus mas\u0117 \u0161lapimo p\u016Bsl\u0117s kaklelio srityje (trigon\u0117je) ir dorsalin\u0117je \u0161lapimo p\u016Bsl\u0117s k\u016Bno dalyje. Echogeni\u0161kumas da\u017Enai mi\u0161rus, gali b\u016Bti mineralizacij\u0173. Kadangi trigon\u0117je yra \u0161lapimtaki\u0173 atsiv\u0117rimai, obstrukcijos atveju gali i\u0161sivystit hidroureteriai. Mas\u0117 da\u017Enai apima ir proksimalin\u0119 \u0161lapl\u0117s dal\u012F.`;
const BLADDER_CARCINOMA_DESCRIPTION = `Pereinamojo epitelio karcinoma apimanti trigon\u0117s dal\u012F.`;
const BLADDER_MEZENCHYMAL_TEXT = `Retesni dariniai kylantys i\u0161 p\u016Bsl\u0117s sienel\u0117s sluoksni\u0173: periferini\u0173 nerv\u0173 dangal\u0173 navikai, leiomiosarkoma, leiomioma, fibroma, fibrosarkoma, hemangioma, hemangiosarkoma, limfoma, mastocitoma.`;
const BLADDER_MEZENCHYMAL_DESCRIPTION = `\u0160uo, leiomiosarkoma.`;
const Bladder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Toggle, "Toggle").$$render($$result, {
    autoclosable: "true",
    classes: "card mt-4"
  }, {}, {
    content: () => {
      return `<div slot="${"content"}">${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/bladder/slapimopuslenormasuo.png",
            text: HEALTHY_BLADDER_DESCRIPTION
          }, {}, {})}
				${escape(HEALTHY_BLADDER_TEXT)}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Normali \u0161lapimo p\u016Bsl\u0117</div>`;
        }
      })}

		${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {
            content: () => {
              return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
                src: "/images/bladder/cistitas.jpg",
                text: BLADDER_CYSTITIS_DESCRIPTION
              }, {}, {})}
						${escape(BLADDER_CYSTITIS_TEXT)}</div>`;
            },
            title: () => {
              return `<div slot="${"title"}">Cistitas</div>`;
            }
          })}

				${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {
            content: () => {
              return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
                src: "/images/bladder/EmfizeminisCistitasSuo.jpg",
                text: BLADDER_EMPHYSEMATOUS_DESCRIPTION
              }, {}, {})}
						${escape(BLADDER_EMPHYSEMATOUS_TEXT)}</div>`;
            },
            title: () => {
              return `<div slot="${"title"}">Emfizeminis cistitas</div>`;
            }
          })}

				${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {
            content: () => {
              return `<div slot="${"content"}"><div class="${"flex gap-1"}">${validate_component(Modal, "Modal").$$render($$result, {
                src: "/images/bladder/polipassuochroniniscistitas.jpg",
                text: BLADDER_POPLYPS_CHRONIC_DESCRIPTION
              }, {}, {})}
							${validate_component(Modal, "Modal").$$render($$result, {
                src: "/images/bladder/polipoidiniscistitassuo.png",
                text: BLADDER_POPLYPS_DESCRIPTION
              }, {}, {})}</div>
						${escape(BLADDER_POPLYPS_TEXT)}</div>`;
            },
            title: () => {
              return `<div slot="${"title"}">Polipoidinis cistitas</div>`;
            }
          })}

				${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {
            content: () => {
              return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
                src: "/images/bladder/pseudomembraninisCistitasSuo.jpg",
                text: BLADDER_PSEUDOMEMBR_DESCRIPTION
              }, {}, {})}
						${escape(BLADDER_PSEUDOMEMBR_TEXT)}</div>`;
            },
            title: () => {
              return `<div slot="${"title"}">Pseudomembraninis cistitas</div>`;
            }
          })}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Cistitas</div>`;
        }
      })}

		${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {
            content: () => {
              return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
                src: "/images/bladder/pereinamojoepiteliokarcinoma.jpg",
                text: BLADDER_CARCINOMA_DESCRIPTION
              }, {}, {})}
						${escape(BLADDER_CARCINOMA_TEXT)}</div>`;
            },
            title: () => {
              return `<div slot="${"title"}">Pereinamojo epitelio karcinoma</div>`;
            }
          })}

				${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {
            content: () => {
              return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
                src: "/images/bladder/leimiosarkoma.png",
                text: BLADDER_MEZENCHYMAL_DESCRIPTION
              }, {}, {})}
						${escape(BLADDER_MEZENCHYMAL_TEXT)}</div>`;
            },
            title: () => {
              return `<div slot="${"title"}">Mezenchimin\u0117s kilm\u0117s dariniai</div>`;
            }
          })}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Neoplazijos</div>`;
        }
      })}</div>`;
    },
    title: () => {
      return `<div class="${"text-center"}" slot="${"title"}">\u0160lapimo p\u016Bsl\u0117</div>`;
    }
  })}`;
});
const HEALTHY_SPLEEN_TEXT = `Blu\u017Enis yra pailgas organas esantis kair\u0117ju k\u016Bno pus\u0117je. Galimos kelios blu\u017Enies pad\u0117tys \u2013 i\u0161ilgai pilvo sienos, kai kaudalinis kra\u0161tas beveik siekia \u0161lapimo p\u016Bsl\u0119 arba L formos, kai blu\u017Enies k\u016Bnas lenkiasi ties skrand\u017Eiu ir kairiu inkstu. Blu\u017Enies parenchima yra homogeni\u0161ka ir padengta plona hiperechoi\u0161ka kapsule. Pas \u0161unis - lyginant su kepenimis ir inksto \u017Eieve blu\u017Enis yra hiperechoi\u0161ka. Pas kates \u2013 hiperechoi\u0161ka kepenims, izoechoi\u0161ka arba lengvai hiperechoi\u0161ka inksto \u017Eievei. Blu\u017Enies kraujagysl\u0117s suformuoja \u201Ebanginio uodeg\u0105\u201C ties blu\u017Enies vartais (hilus). Blu\u017Enies dydis vertinamas subjektyviai, da\u017Enai pagal suapval\u0117jusius kra\u0161tus. Kai kuriuose \u0161altiniuose nurodomas normalus ka\u010Di\u0173 blu\u017Enies plotis ties hilus yra iki 1cm. Blu\u017Enies u\u017Esilenkimas per pus\u0119 gali indikuoti splenomegalij\u0105. Blu\u017Enis gali did\u0117ti d\u0117l anestetik\u0173 poveikio.`;
const HEALTHY_SPLEEN_DESCR = `Normali kat\u0117s blu\u017Enis.`;
const SPLENOMEGALY_NORMAL_TEXT = `Blu\u017Enis da\u017Enai did\u0117ja, bet i\u0161lieka normalaus echogeni\u0161kumo d\u0117l sedacijos su acepromazinu, diazepamu, ketaminu. D\u0117l kylan\u010Dio spaudimo ir kraujotakos sutrikim\u0173 prie de\u0161in\u0117s pus\u0117s \u0161irdies nepakankamumo, kepen\u0173 hipertenzijos, blu\u017Enies u\u017Esisukimo, blu\u017Enies ven\u0173 tromboz\u0117s. Taip pat d\u0117l ekstramedulin\u0117s hematopoez\u0117s bei infiltruojan\u010Di\u0173 neoplazij\u0173 pvz. limfoma ar mastocitoma.`;
const SPLENOMEGALY_NORMAL_DESCR = `\u0160uo, blu\u017Enies u\u017Esisukimas.`;
const SPLENOMEGALY_NOTNORM_TEXT = `Bi\u010Di\u0173 kor\u012F ar kand\u017Ei\u0173 i\u0161\u0117st\u0105 audin\u012F primenantis echogeni\u0161kumas da\u017Enai b\u016Bna prie blu\u017Enies limfomos. Difuzinis hipoechogeni\u0161kumas, su hiperechoi\u0161komis trumpomis linijomis ( kolapsavusios kraujagysl\u0117s) matomas prie blu\u017Enies u\u017Esisukimo. Hipoechogeni\u0161ka parenchima gali b\u016Bti prie ekstramedulin\u0117s hematopoez\u0117s, gerybin\u0117s limfoidin\u0117s hiperplazijos (d\u0117l u\u017Edegimo), infekcijos, infarkt\u0173 ir infiltracini\u0173 neoplazij\u0173. FNA rekomenduojama tikslesnei diagnozei.`;
const SPLENOMEGALY_NOTNORM_DESCR = `\u0160uo, limfoma.`;
const LOCAL_PARENCHYMAL_DISEASE_TEXT = `Smarkiai hiperechoi\u0161ki dariniai lokalizuoti ties blu\u017Enies mezenteriniu kra\u0161tu da\u017Enai b\u016Bna gerybin\u0117s mielolipomos, randamos pas vyresnio am\u017Eiaus \u0161unis ir kates. Hipoechoi\u0161ki dariniai gali b\u016Bti gerybiniai: hematomos, gerybin\u0117 mazgelin\u0117 hiperplazija (benign nodular hyperplasia) ir piktybiniai: hemangiosarkoma, kitos sarkomos, mastocitomos, histiocitomos ar metastaz\u0117s.`;
const LOCAL_PARENCHYMAL_DISEASE_DESCR = `Mielolipomos, \u0161uo.`;
const GENER_PARENCHYMAL_DISEASE_TEXT = `Auglys kylantis i\u0161 kraujagyliu endotelio. Da\u017Enesnis pas vyresnio am\u017Eiaus, dideli\u0173 veisli\u0173 \u0161unis. Predisponuoti vokie\u010Di\u0173 aviganiai, auksaspalviai retriveriai, labradorai ir \u0161nauceriai. Iki 25% \u0161un\u0173 su hemangiosarkoma blu\u017Enyje, diagnoz\u0117s metu jau turi metastazes de\u0161iniajame prie\u0161irdyje. \u0160i neoplazija taip pat linkusi metastazuoti \u012F plau\u010Dius, inkstus, kepenis. Echoskopu hemangiosarkoma matoma kaip mi\u0161raus echogeni\u0161kumo mas\u0117. FNA ma\u017Eai vertinga, nes hemangiosarkomos nelinkusios atiduoti lasteli\u0173, didel\u0117s kraujavimo bei i\u0161s\u0117jimo rizikos. Hematomas sudaro kraujas ir fibrinas. Didel\u0117s hematomos gali suardyti kapsul\u0119 ir imti kraujuoti. Vis d\u0117lto, kraujavimas \u012F pilv\u0105 daug b\u016Bdingesnis d\u0117l hemangiosarkomos, nei hematomos. Hematomos gali kilti ir i\u0161 suve\u017E\u0117jusio audinio. Diferencijacijai b\u016Btinas histologinis tyrimas, nes abi b\u016Bkl\u0117s echoskopiniame tyrime gali atrodyti vienodai, o fna yra nediagnostinis.`;
const GENER_PARENCHYMAL_DISEASE_DESCR = `\u0160uo, hemangiosarkoma.`;
const Spleen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Toggle, "Toggle").$$render($$result, {
    autoclosable: "true",
    classes: "card mt-4"
  }, {}, {
    content: () => {
      return `<div slot="${"content"}">${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/spleen/normalibluzniskate.png",
            text: HEALTHY_SPLEEN_DESCR
          }, {}, {})}
            ${escape(HEALTHY_SPLEEN_TEXT)}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Normali blu\u017Enis</div>`;
        }
      })}

    ${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {
            content: () => {
              return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
                src: "/images/spleen/bluzniesuzsisukimas.png",
                text: SPLENOMEGALY_NORMAL_DESCR
              }, {}, {})}
                    ${escape(SPLENOMEGALY_NORMAL_TEXT)}</div>`;
            },
            title: () => {
              return `<div slot="${"title"}">Splenomegalija ir normalus echogeni\u0161kumas</div>`;
            }
          })}

            ${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {
            content: () => {
              return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
                src: "/images/spleen/limfomabluznissuo.png",
                text: SPLENOMEGALY_NOTNORM_DESCR
              }, {}, {})}
                    ${escape(SPLENOMEGALY_NOTNORM_TEXT)}</div>`;
            },
            title: () => {
              return `<div slot="${"title"}">Splenomegalija ir pakit\u0119s echogeni\u0161kumas</div>`;
            }
          })}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Splenomegalija</div>`;
        }
      })}

    ${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/spleen/mielolipoma.png",
            text: LOCAL_PARENCHYMAL_DISEASE_DESCR
          }, {}, {})}
            ${escape(LOCAL_PARENCHYMAL_DISEASE_TEXT)}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Lokal\u016Bs parenchimos pakitimai</div>`;
        }
      })}

    ${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/spleen/hemangiosarkoma.png",
            text: GENER_PARENCHYMAL_DISEASE_DESCR
          }, {}, {})}
            ${escape(GENER_PARENCHYMAL_DISEASE_TEXT)}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Hemangiosarkoma ir hematoma</div>`;
        }
      })}</div>`;
    },
    title: () => {
      return `<div class="${"text-center"}" slot="${"title"}">Blu\u017Enis</div>`;
    }
  })}`;
});
const STOMACH_NORMAL_TEXT = `\u0160uns skrandis yra lokalizuotas ties kr\u016Btinkaulio kardin\u0117s ataugos pabaiga. Kat\u0117s skrandis lokalizuotas labiau kair\u0117je pus\u0117je, prievartis (pylorus) lokalizuotas ties centru. Da\u017Eniausiai matoma tik artimesn\u0117 sienel\u0117, d\u0117l duj\u0173 reverbacijoss artefakto. Skrand\u017Eio sienel\u0119 sudaro 5 sluoksniai: hiperechoi\u0161k seroza, hipoechoi\u0161kas raumeninis sluoksnis, hiperechoi\u0161ka pogleivin\u0117, hipoechoi\u0161ka gleivin\u0117, hiperechoi\u0161kas spind\u017Eio-gleivin\u0117s sand\u016Bra. Vertinamas sienel\u0117s storis, atskir\u0173 sluoksni\u0173 echogeni\u0161kumas ir storis, peristaltika, turinys bei turinio echogeni\u0161kumas. Taip pat vertinami \u0161alia esantys limfmazgiai, galima aptikti laisvus skys\u010Dius.`;
const STOMACH_NORMAL_DESCR = `Normalus kat\u0117s skrandis`;
const STOMACH_ULCERS_TEXT = `Skrad\u017Eio opos echoskopijos metu vizualizuojamos kaip sienel\u0117s sustor\u0117jimas, su krateriu, kurio viduje gali b\u016Bti nedieli\u0173 duj\u0173 burbuliuk\u0173, normalios sienel\u0117s suardymas bei skrand\u017Eio hipotonija. Tokie patys radiniai gali b\u016Bti d\u0117l skrand\u017Eio neoplazijos, nekrozavusios skrand\u017Eio neoplazijos, taigi galutin\u0117 diagnoz\u0117 nustatoma gastroskopijos metu.`;
const STOMACH_ULCERS_DESCR = `Rodykl\u0117 \u017Eymi op\u0105 esan\u010Di\u0105 skrand\u017Eio sienel\u0117je.`;
const STOMACH_LEI_TEXT = `Leiomioma da\u017Enas labai sen\u0173 \u0161un\u0173 skrand\u017Eio v\u0117\u017Eys, antras pagal da\u017Enum\u0105 po adenokacinomos. Vidutini\u0161kai nustatoma 15 met\u0173 \u0161unims, predisponuoti bigliai. Da\u017Enai matoma taip lokalizuotas polipas \u012Fskrand\u017Eio ar gastroezofagin\u0117s jungties srityje. Da\u017Enai i\u0161op\u0117ja.`;
const STOMACH_LEI_DESCR = `\u0160uo, leiomioma.`;
const STOMACH_CARC_TEXT = `Skrand\u017Eio adenocarcinoma yra reta kat\u0117ms, bet \u0161unims sudaro 42-72% vis\u0173 nustatom\u0173 skrand\u017Eio v\u0117\u017Ei\u0173. Am\u017Eiaus vidurkis 8 metai, bet pasirei\u0161kia ir jaunesniems nei 5 metai. Dvigubai da\u017Eniau nustatoma patinams. Predisponuotos veisl\u0117s: belg\u0173 aviganiai, \u0161iuk\u0161\u010Diaplaukiai koliai. Ultragarsu stebimas sienel\u0117s sustor\u0117jimas, sluoksn\u0173 suardymas. Da\u017Eniausiai sienel\u0117s i\u0161orinis ir vidinis sluoksnis hipoechoi\u0161kas, su hiperechoi\u0161ka centrine zona. Gali b\u016Bti i\u0161op\u0117jimo, limfadenopatija, auglys da\u017Eniausiai randamas ma\u017Eojoje skrand\u017Eio kreiv\u0117je bei prievar\u010Dio prieangio (antrum) zonoje.`;
const STOMACH_CARC_DESCR = `\u0160uo, adenokarcinoma. Matomi pseudosluoksniai.`;
const Stomach = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Toggle, "Toggle").$$render($$result, {
    autoclosable: "true",
    classes: "card mt-4"
  }, {}, {
    content: () => {
      return `<div slot="${"content"}">${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/stomach/image-4-stomach-content.jpg",
            text: STOMACH_NORMAL_DESCR
          }, {}, {})}
				${escape(STOMACH_NORMAL_TEXT)}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Normalus skrandis</div>`;
        }
      })}

		${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/stomach/opa_suo_sustorejusisienele.png",
            text: STOMACH_ULCERS_DESCR
          }, {}, {})}
				${escape(STOMACH_ULCERS_TEXT)}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Opos</div>`;
        }
      })}

		${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/stomach/pyloric_hiper_suo_sust_musc.png",
            text: STOMACH_NORMAL_DESCR
          }, {}, {})}
				${escape(STOMACH_NORMAL_TEXT)}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Prievar\u010Dio hiperplazija</div>`;
        }
      })}

		${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {
            content: () => {
              return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
                src: "/images/stomach/leiomioma.png",
                text: STOMACH_LEI_DESCR
              }, {}, {})}
						${escape(STOMACH_LEI_TEXT)}</div>`;
            },
            title: () => {
              return `<div slot="${"title"}">Leiomioma</div>`;
            }
          })}

				${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {
            content: () => {
              return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
                src: "/images/stomach/suo_karcinoma_pseudolayers.png",
                text: STOMACH_CARC_DESCR
              }, {}, {})}
						${escape(STOMACH_CARC_TEXT)}</div>`;
            },
            title: () => {
              return `<div slot="${"title"}">Adenokarcinoma</div>`;
            }
          })}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Neoplazijos</div>`;
        }
      })}</div>`;
    },
    title: () => {
      return `<div class="${"text-center"}" slot="${"title"}">Skrandis</div>`;
    }
  })}`;
});
const INVAGINATION_TEXT = `Invaginacija da\u017Enai stebima d\u0117l suaktyv\u0117jusios persitaltikos viduriuojant, esant kirminams ar l\u0117tiniui enteritui. \u017Darna, kuri yra i\u0161orinis invaginacijos segmentas, da\u017Eniausiai sustor\u0117ja tampa edemi\u0161ka, hipoehoi\u0161ka. Vidinis segmentas da\u017Eniausiai nepakinta, da\u017Enai su \u017Earna patenka ir riebal\u0173.`;
const INVAGINATION_DESCR = `\u0160uo, invaginacija.`;
const LYMPHOMA_TEXT = `\u017Darnyno limfosarkoma (limfoma) yra da\u017Eniausias nustatomas \u017Earn\u0173 v\u0117\u017Eys kat\u0117ms. Da\u017Eniausiai paveikiamos 10-12 met\u0173 kat\u0117s, bet am\u017Eius svyruoj\u0105 nuo 1 iki 18 met\u0173. Veisl\u0117s predispozicijos n\u0117ra nustatyta. FeLv ir FIV reik\u0161m\u0117 ligai irgi n\u0117ra \u012Frodyta. Pasirei\u0161kia kaip mas\u0117 arba difuzinis raumeninio audinio sustor\u0117jimas. Esant difuziniam sustor\u0117jumui kita diferencin\u0117 diagnoz\u0117 yra u\u017Edegimin\u0117 \u017Earnyno liga. Ultragarsu negalima diferencijuoti \u0161i\u0173 susirgim\u0173. Auksinis standartas histologija + imunohistochemija ar PCR. Atliekant tik histologin\u012F tyrim\u0105 limfosarkomos pradin\u0117s stadijos gali b\u016Bti klaidingai nustatoma kaip IBD, tod\u0117l b\u016Btinas imunohistocheminis tyrimas galutinei diagnozei.`;
const LYMOHOMA_DESCR = `Kat\u0117, limfoma. Sustor\u0117j\u0119s raumeninis sluoksnis.`;
const Intestines = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Toggle, "Toggle").$$render($$result, {
    autoclosable: "true",
    classes: "card mt-4"
  }, {}, {
    content: () => {
      return `<div slot="${"content"}">${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/intestines/intususeption_dog.png",
            text: INVAGINATION_DESCR
          }, {}, {})}
				${escape(INVAGINATION_TEXT)}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Invaginacija</div>`;
        }
      })}

		${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/intestines/kate_limfosarkoma.png",
            text: LYMOHOMA_DESCR
          }, {}, {})}
				${escape(LYMPHOMA_TEXT)}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Limfoma/IBD</div>`;
        }
      })}</div>`;
    },
    title: () => {
      return `<div class="${"text-center"}" slot="${"title"}">\u017Darnynas</div>`;
    }
  })}`;
});
const NODULAR_HYPER_TEXT = `Senatvinis pakitimas da\u017Enesnis kat\u0117ms. Stebimi daugybiniai hipoechoi\u0161ki mazgeliai 0.3 \u2013 1cm diametro. Gali atrodyti kaip cistos. Gali atrodyt pana\u0161iai \u012F insulinoma. Da\u017Eniausiai kat\u0117s neturi joki\u0173 klinikini\u0173 simptom\u0173. Gali b\u016Bti susij\u0119 su persirgtu pankreatitu.`;
const NODULAR_HYPER_DESCR = `\u0160uo, mazgelin\u0117 hiperplazija d\u0117l l\u0117tinio pankreatito.`;
const DUCTUS_TEXT = `Senyvo am\u017Eiaus kat\u0117ms kasos latako skersmuo yra norma iki 0.25cm. Da\u017Eniausiai neb\u016Bna joki\u0173 klinikini\u0173 po\u017Eymi\u0173. Kasos latakas gali pl\u0117sti ir d\u0117l letinio ir \u016Bmaus pankratito.`;
const DUCTUS_DESCR = `Sena kat\u0117, kasos latako dilatacija.`;
const PANCREATITIS_TEXT = `D\u0117l \u016Bmaus pankreatito kasa padid\u0117ja, tampa hipoechoi\u0161ka j\u0105 supan\u010Diam riebaliniui audiniui.\u0160alia esanti dvylikapir\u0161t\u0117 \u017Earna gali b\u016Bti koruguota, atoni\u0161ka. Kasos kra\u0161tai suapval\u0117ja arba kapsul\u0117 tampa nelygi. Vystosi riebalinio audinio steatitas, jis tampa hiperechoi\u0161kas gali b\u016Bti laisv\u0173 skys\u010Di\u0173.`;
const PANCREATITIS_DESCR = `\u0160uo, pankreatitas.P- kasa, matomas hiperechoi\u0161kas riebalinis audinys, sustor\u0117jusi ir edemi\u0161ka dvylikapir\u0161t\u0117.`;
const ABSCESS_TEXT = `Kasos cistos ir abscesai yra neda\u017Ena pankreatito komplikacija. Manoma, kad d\u0117l u\u017Edegimo pratr\u016Bksta kasos latakas, kasos ar aplinkiniuose audiniuose susiformuoja fibrotin\u0117 kapsul\u0117 pripildyta kasos i\u0161skiriamo skys\u010Dio ir ferment\u0173. Diferencijacijai atliekama citologija, histopatologija.`;
const ABSCESS_DESCR = `Kat\u0117, kasos abscesas.`;
const NEOPLASIA_TEXT$1 = `Kasos endokrininio audinio neoplazijos (glukagonomos, insulinomos ir gastrinomos) yra neda\u017Enas rei\u0161kinys. \u0160unims da\u017Eniausiai pasitaiko insulinomos. Matomos kaip mas\u0117s kasos skiltyse. Kasos adenocarcinoma retas v\u0117\u017Eys, \u0161unims gali b\u016Bti nustatomas kaip mas\u0117 ar difuzi\u0161ki pakitimai, kat\u0117ms da\u017Eniausiai difuzi\u0161kai apimantis vis\u0105 kas\u0105.`;
const NEOPLASIA_DESCR$1 = `\u0160uo, kasos karcinoma.`;
const Pancreas = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Toggle, "Toggle").$$render($$result, {
    autoclosable: "true",
    classes: "card mt-4"
  }, {}, {
    content: () => {
      return `<div slot="${"content"}">${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {
            content: () => {
              return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
                src: "/images/pancreas/nodular_hyperplasia_dog_chronic pancr.png",
                text: NODULAR_HYPER_DESCR
              }, {}, {})}
						${escape(NODULAR_HYPER_TEXT)}</div>`;
            },
            title: () => {
              return `<div slot="${"title"}">Mazgelin\u0117 hiperplazija</div>`;
            }
          })}

				${validate_component(Toggle, "Toggle").$$render($$result, {}, {}, {
            content: () => {
              return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
                src: "/images/pancreas/pd_dilatacija, 2,2mm_norma.jpg",
                text: DUCTUS_DESCR
              }, {}, {})}
						${escape(DUCTUS_TEXT)}</div>`;
            },
            title: () => {
              return `<div slot="${"title"}">Kasos latako i\u0161sipl\u0117timas</div>`;
            }
          })}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Senatviniai pakitimai</div>`;
        }
      })}

		${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/pancreas/pankreatitas_suo.png",
            text: PANCREATITIS_DESCR
          }, {}, {})}
				${escape(PANCREATITIS_TEXT)}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Pankreatitas</div>`;
        }
      })}

		${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/pancreas/kasos_abscesas_kate.png",
            text: ABSCESS_DESCR
          }, {}, {})}
				${escape(ABSCESS_TEXT)}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Abscesai ir cistos</div>`;
        }
      })}

		${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/pancreas/kasos_karcinoma_suo.png",
            text: NEOPLASIA_DESCR$1
          }, {}, {})}
				${escape(NEOPLASIA_TEXT$1)}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Neoplazija</div>`;
        }
      })}</div>`;
    },
    title: () => {
      return `<div class="${"text-center"}" slot="${"title"}">Kasa</div>`;
    }
  })}`;
});
const NORMAL_ADRENALS_TEXT = `Normal\u016Bs prieinks\u010Diai yra hipoechoi\u0161ki juos supantiems rebalams, gali tur\u0117ti hiperechoi\u0161k\u0105 linija tarp \u017Eiev\u0117s ir \u0161erdies, hiperechoi\u0161ka \u0161erd\u012F. Karysis prieinkstis yra pupel\u0117s arba \u017Eem\u0117s rie\u0161uto formas, de\u0161inysis V formos, da\u017Enai geriau matomas kaudalinis polius. Skersai prieinkst\u012F eina v.phrenicoabdominalis, kuri nustatoma spalviniu dopleriu, taip pat \u010Dia yra da\u017Ena piktybini\u0173 prieinks\u010Di\u0173 augli\u0173 invazijos vieta.`;
const HYPERADRENO_TEXT = `D\u0117l hipofiz\u0117s navik\u0173 kylan\u010Dio hiperadrenokorticizmo, vystosi prieinks\u010Di\u0173 hiperplazija, abu prieinks\u010Diai vienodai padid\u0117j\u0119. Hiperadrenokorticizmas gali i\u0161sivystit d\u0117l hormoni\u0161kai aktyvios prieinks\u010Di\u0173 neoplazijos (ma\u017Edaug 20% vis\u0173 HAC atvej\u0173). Tokiu atveju, vienas prieinkstis did\u0117ja, galimai randama mas\u0117. Kitas prieinkstis \u017Eenkliai ma\u017E\u0117ja (ilgis ma\u017Eesnis nei 0.5cm).`;
const HYPERADRENO_DESCR = `\u0160uo d\u0117l hipofiz\u0117s adenomos kylantis ku\u0161ingas, prieinks\u010Dio hiperplazija.`;
const NEOPLASIA_TEXT = `Feochromocitoma, \u0161uo.`;
const NEOPLASIA_DESCR = `Ultragarsinio tyrimo metu aptinkam\u0173 prieinks\u010Di\u0173 darini\u0173 vaizdas yra nepecifinis. Diferencin\u0117s diagnoz\u0117s: \u017Eiev\u0117s adenoma, adenocarcinoma, feochromocitoma, myelolipoma, metastaz\u0117s, hiperplazija. Gerai lokalizuotos mas\u0117s >2cm skersmens grei\u010Diau yra dariniai, nei hiperplazija, >4cm darinys grei\u010Diausiai piktybinis. Vis d\u0117lto, tiek gerybiniai tiek piktybiniai dariniai gali b\u016Bti dideli. Pagrindinis piktybi\u0161kumo rodiklis- invazija \u012F aplinkinius audinius bei kraujagysli\u0173 embolizacija.`;
const Adrenals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Toggle, "Toggle").$$render($$result, {
    autoclosable: "true",
    classes: "card mt-4"
  }, {}, {
    content: () => {
      return `<div slot="${"content"}">${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}"><div class="${"flex"}">${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/adrenals/norma_kairys_prieinsktis.png",
            text: void 0
          }, {}, {})}
					${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/adrenals/norma_desnys_prieinkstis.png",
            text: void 0
          }, {}, {})}</div>
				${escape(NORMAL_ADRENALS_TEXT)}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Normal\u016Bs prieinks\u010Diai</div>`;
        }
      })}

		${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/adrenals/hiperplazija_ku\u0161ingas.png",
            text: HYPERADRENO_DESCR
          }, {}, {})}
				${escape(HYPERADRENO_TEXT)}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Hiperadrenokorticizmas</div>`;
        }
      })}

		${validate_component(Toggle, "Toggle").$$render($$result, { classes: "card mt-4" }, {}, {
        content: () => {
          return `<div slot="${"content"}">${validate_component(Modal, "Modal").$$render($$result, {
            src: "/images/adrenals/pheochromocitoma.png",
            text: NEOPLASIA_DESCR
          }, {}, {})}
				${escape(NEOPLASIA_TEXT)}</div>`;
        },
        title: () => {
          return `<div slot="${"title"}">Neoplazija</div>`;
        }
      })}</div>`;
    },
    title: () => {
      return `<div class="${"text-center"}" slot="${"title"}">Prieinks\u010Diai</div>`;
    }
  })}`;
});
const Test_app = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"container"}">${validate_component(Bladder, "Bladder").$$render($$result, {}, {}, {})}
	${validate_component(KidneyText, "KidneyText").$$render($$result, {}, {}, {})}
	${validate_component(Spleen, "Spleen").$$render($$result, {}, {}, {})}
	${validate_component(LiverText, "LiverText").$$render($$result, {}, {}, {})}
	${validate_component(Stomach, "Stomach").$$render($$result, {}, {}, {})}
	${validate_component(Intestines, "Intestines").$$render($$result, {}, {}, {})}
	${validate_component(Pancreas, "Pancreas").$$render($$result, {}, {}, {})}
	${validate_component(Adrenals, "Adrenals").$$render($$result, {}, {}, {})}</div>`;
});
export { Test_app as default };
