import{S as x,i as W,s as q,J as Z,e as D,c as h,a as b,d as _,b as f,g as T,M as Q,N as $,O as ii,q as R,Z as ai,_ as si,o as N,$ as ti,k as S,m as C,G as v,P as Y,n as ni,p as ei,I as oi,Y as K,t as z,h as L,L as P,j as ri,l as U,E as X}from"./index-50ca8955.js";import{w as li}from"./index-17a03d18.js";function ui(a){const i=a-1;return i*i*i+1}function V(a,{delay:i=0,duration:s=400,easing:e=ui,x:o=0,y:l=0,opacity:r=0}={}){const n=getComputedStyle(a),t=+n.opacity,c=n.transform==="none"?"":n.transform,g=t*(1-r);return{delay:i,duration:s,easing:e,css:(y,u)=>`
			transform: ${c} translate(${(1-y)*o}px, ${(1-y)*l}px);
			opacity: ${t-g*u}`}}const M=li();var O,mi=new Uint8Array(16);function ki(){if(!O&&(O=typeof crypto!="undefined"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto!="undefined"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!O))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return O(mi)}var ci=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function di(a){return typeof a=="string"&&ci.test(a)}var E=[];for(var H=0;H<256;++H)E.push((H+256).toString(16).substr(1));function pi(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=(E[a[i+0]]+E[a[i+1]]+E[a[i+2]]+E[a[i+3]]+"-"+E[a[i+4]]+E[a[i+5]]+"-"+E[a[i+6]]+E[a[i+7]]+"-"+E[a[i+8]]+E[a[i+9]]+"-"+E[a[i+10]]+E[a[i+11]]+E[a[i+12]]+E[a[i+13]]+E[a[i+14]]+E[a[i+15]]).toLowerCase();if(!di(s))throw TypeError("Stringified UUID is invalid");return s}function _i(a,i,s){a=a||{};var e=a.random||(a.rng||ki)();if(e[6]=e[6]&15|64,e[8]=e[8]&63|128,i){s=s||0;for(var o=0;o<16;++o)i[s+o]=e[o];return i}return pi(e)}const fi=a=>({}),B=a=>({}),gi=a=>({}),w=a=>({});function Ei(a){let i;return{c(){i=z("+")},l(s){i=L(s,"+")},m(s,e){T(s,i,e)},d(s){s&&_(i)}}}function ji(a){let i;return{c(){i=z("-")},l(s){i=L(s,"-")},m(s,e){T(s,i,e)},d(s){s&&_(i)}}}function F(a){let i,s,e,o;const l=a[7].content,r=Z(l,a,a[6],B);return{c(){i=D("div"),r&&r.c(),this.h()},l(n){i=h(n,"DIV",{class:!0});var t=b(i);r&&r.l(t),t.forEach(_),this.h()},h(){f(i,"class","md:p-5")},m(n,t){T(n,i,t),r&&r.m(i,null),o=!0},p(n,t){r&&r.p&&(!o||t&64)&&Q(r,l,n,n[6],o?ii(l,n[6],t,fi):$(n[6]),B)},i(n){o||(R(r,n),ai(()=>{e&&e.end(1),s=si(i,V,{y:0,duration:1e3}),s.start()}),o=!0)},o(n){N(r,n),s&&s.invalidate(),e=ti(i,V,{y:0,duration:0}),o=!1},d(n){n&&_(i),r&&r.d(n),n&&e&&e.end()}}}function vi(a){let i,s,e,o,l,r,n,t,c,g;const y=a[7].title,u=Z(y,a,a[6],w);function I(k,j){return k[1]?ji:Ei}let d=I(a),p=d(a),m=a[1]&&F(a);return{c(){i=D("div"),s=D("div"),u&&u.c(),e=S(),o=D("div"),l=S(),r=D("div"),p.c(),n=S(),m&&m.c(),this.h()},l(k){i=h(k,"DIV",{class:!0});var j=b(i);s=h(j,"DIV",{class:!0});var A=b(s);u&&u.l(A),e=C(A),o=h(A,"DIV",{class:!0}),b(o).forEach(_),l=C(A),r=h(A,"DIV",{class:!0});var G=b(r);p.l(G),G.forEach(_),A.forEach(_),n=C(j),m&&m.l(j),j.forEach(_),this.h()},h(){f(o,"class","flex flex-grow"),f(r,"class","text-4xl font-bold"),f(s,"class","flex cursor-pointer text-xl font-bold px-3 pt-3 items-center"),f(i,"class",a[0])},m(k,j){T(k,i,j),v(i,s),u&&u.m(s,null),v(s,e),v(s,o),v(s,l),v(s,r),p.m(r,null),v(i,n),m&&m.m(i,null),t=!0,c||(g=Y(s,"click",a[2]),c=!0)},p(k,[j]){u&&u.p&&(!t||j&64)&&Q(u,y,k,k[6],t?ii(y,k[6],j,gi):$(k[6]),w),d!==(d=I(k))&&(p.d(1),p=d(k),p&&(p.c(),p.m(r,null))),k[1]?m?(m.p(k,j),j&2&&R(m,1)):(m=F(k),m.c(),R(m,1),m.m(i,null)):m&&(ni(),N(m,1,1,()=>{m=null}),ei()),(!t||j&1)&&f(i,"class",k[0])},i(k){t||(R(u,k),R(m),t=!0)},o(k){N(u,k),N(m),t=!1},d(k){k&&_(i),u&&u.d(k),p.d(),m&&m.d(),c=!1,g()}}}function yi(a,i,s){let e;oi(a,M,u=>s(5,e=u));let{$$slots:o={},$$scope:l}=i;const r=_i();let{classes:n}=i,{autoclosable:t=!1}=i,{initialState:c=!1}=i,g=c;c&&K(M,e=r,e);function y(){s(1,g=!g),t&&K(M,e=r,e)}return a.$$set=u=>{"classes"in u&&s(0,n=u.classes),"autoclosable"in u&&s(3,t=u.autoclosable),"initialState"in u&&s(4,c=u.initialState),"$$scope"in u&&s(6,l=u.$$scope)},a.$$.update=()=>{a.$$.dirty&40&&t&&s(1,g=e==r)},[n,g,y,t,c,e,l,o]}class Si extends x{constructor(i){super(),W(this,i,yi,vi,q,{classes:0,autoclosable:3,initialState:4})}}function J(a){let i,s,e,o,l,r,n,t,c,g,y,u,I;return{c(){i=D("div"),s=S(),e=D("div"),o=D("div"),l=D("img"),n=S(),t=z(a[1]),c=S(),g=D("div"),y=z("\u2716"),this.h()},l(d){i=h(d,"DIV",{class:!0}),b(i).forEach(_),s=C(d),e=h(d,"DIV",{class:!0});var p=b(e);o=h(p,"DIV",{class:!0});var m=b(o);l=h(m,"IMG",{src:!0,alt:!0,class:!0}),n=C(m),t=L(m,a[1]),c=C(m),g=h(m,"DIV",{class:!0});var k=b(g);y=L(k,"\u2716"),k.forEach(_),m.forEach(_),p.forEach(_),this.h()},h(){f(i,"class","bg-black opacity-50 fixed top-0 left-0 z-10 w-screen h-screen"),P(l.src,r=a[0])||f(l,"src",r),f(l,"alt",""),f(l,"class","w-full max-h-[80vh]"),f(g,"class","absolute top-0 right-0 flex items-center justify-center cursor-pointer bg-white rounded-full w-8 h-8"),f(o,"class","relative w-full md:w-5/12 max-h-screen bg-white p-5"),f(e,"class","w-screen h-screen max-h-screen top-0 left-0 fixed z-20 flex justify-center items-center")},m(d,p){T(d,i,p),T(d,s,p),T(d,e,p),v(e,o),v(o,l),v(o,n),v(o,t),v(o,c),v(o,g),v(g,y),u||(I=Y(g,"click",a[3]),u=!0)},p(d,p){p&1&&!P(l.src,r=d[0])&&f(l,"src",r),p&2&&ri(t,d[1])},d(d){d&&_(i),d&&_(s),d&&_(e),u=!1,I()}}}function Di(a){let i,s,e,o,l,r,n=a[2]&&J(a);return{c(){i=D("img"),e=S(),n&&n.c(),o=U(),this.h()},l(t){i=h(t,"IMG",{src:!0,alt:!0,class:!0}),e=C(t),n&&n.l(t),o=U(),this.h()},h(){P(i.src,s=a[0])||f(i,"src",s),f(i,"alt",""),f(i,"class","w-20 cursor-zoom-in")},m(t,c){T(t,i,c),T(t,e,c),n&&n.m(t,c),T(t,o,c),l||(r=Y(i,"click",a[4]),l=!0)},p(t,[c]){c&1&&!P(i.src,s=t[0])&&f(i,"src",s),t[2]?n?n.p(t,c):(n=J(t),n.c(),n.m(o.parentNode,o)):n&&(n.d(1),n=null)},i:X,o:X,d(t){t&&_(i),t&&_(e),n&&n.d(t),t&&_(o),l=!1,r()}}}function hi(a,i,s){let{src:e}=i,{text:o=""}=i,l=!1;function r(){s(2,l=!1),console.log("hello")}const n=()=>{s(2,l=!0)};return a.$$set=t=>{"src"in t&&s(0,e=t.src),"text"in t&&s(1,o=t.text)},[e,o,l,r,n]}class Ci extends x{constructor(i){super(),W(this,i,hi,Di,q,{src:0,text:1})}}const Ai="Normali \u0161lapimo p\u016Bsl\u0117 stebima kaip anechoi\u0161ko skys\u010Dio pripildyta p\u016Bsl\u0117. Turi 4 sluoksnius: seroza, raumeninis, pogleivin\u0117, gleivin\u0117. Echoskopu sluoksniai da\u017Eniausiai n\u0117ra identifikuojami. \u0160lapimo p\u016Bslei pildantis jos sienel\u0117 plon\u0117ja. Echoskopijos metu matavimai tur\u0117t\u0173 b\u016Bti vertinami, kai p\u016Bsl\u0117 pripildyta vidutini\u0161kai.",Ii="Normali \u0161lapimo p\u016Bsl\u0117.",Ri="Cistitas da\u017Eniausiai sukelia smark\u0173 nereguliar\u0173 hipoechoi\u0161k\u0105 \u0161lapimo p\u016Bsl\u0117s sienel\u0117s sustor\u0117jim\u0105. Sustor\u0117jimas da\u017Eniausiai stebimas kranioventralin\u0117je dalyje. Kartu gali b\u016Bti randami urolitai, kre\u0161uliai. Kat\u0117ms da\u017Enai pasitaiko idiopatinis cistitas, urolit\u0173 sukeltas u\u017Edegimas. Bakterinis cistitas kat\u0117ms pasitaiko itin retai, da\u017Eniau labai jaunoms ar senoms kat\u0117ms, turin\u010Dioms inkst\u0173 nepakankamum\u0105, diabet\u0105, kateterizavimo istorij\u0105 ir kitas gretutines ligas. Tuo tarpu \u0161unims beveik visi \u0161lapimo p\u016Bsl\u0117s u\u017Edegimai, kai randama struvit\u0173 yra bakterin\u0117s kilm\u0117s. Imunosupresuotiems gyv\u016Bnams gali pasitaikyti Candida spp. sukelti cistitai.",Oi="Sustor\u0117jusio \u0161lapimo p\u016Bsl\u0117s sienel\u0117 d\u0117l l\u0117tinio cistito",Ni="Siejamas su dujas i\u0161skirian\u010Di\u0173 bakterij\u0173 E. coli, A. earogenes, P. mirabilis, Clostridium spp. \u0161lapimo p\u016Bsl\u0117s sienel\u0117s kolonizavimu. Da\u017Eniausiai randamas pas diabetikus, su gliukozurija. Stebimos duj\u0173 reverberacijos artefaktas kylantis nuo pa\u017Eeistos sienel\u0117s. Diferencijuoti nuo oro p\u016Bsl\u0117je d\u0117l kateterizavimo galima kei\u010Diant gyv\u016Bno pozicij\u0105. Oras keis viet\u0105 ir jud\u0117s dorsaliai, o dujos sienel\u0117je i\u0161liks toje pa\u010Dioje vietoje.",zi="Emfizeminis cistitas, \u0161uo. Matoma duj\u0173 reverberacija nuo p\u016Bsl\u0117s sienel\u0117s.",Li="Neda\u017Ena cistito forma pasitaikanti \u0161unims. Stebimos hiperechoi\u0161kos mas\u0117s, kurios i\u0161siki\u0161a \u012F p\u016Bsl\u0117s spind\u012F, da\u017Enai turi kojel\u0119. Da\u017Eniausiai aptinkamos kranioventralin\u0117je p\u016Bsl\u0117s dalyje. Gali b\u016Bti asocijuota su difuziniu \u0161lapimo p\u016Bsl\u0117s sienel\u0117s sustor\u0117jimu. Kartais sud\u0117tinga diferencijuoti nuo neoplazijos, tod\u0117l reiklinga traumin\u0117 kateterizacija ir m\u0117ginio \u0117mimas diagnoz\u0117s patvirtinimui.",Pi="Polipoidinis cistitas, \u0161uo.",Mi="Polipas atsirad\u0119s d\u0117l l\u0117tinio cistito, \u0161uo.",Hi="Pseudomembraninis cistitas kyla d\u0117l smarkaus difuzinio pa\u017Eeidimo, nekroz\u0117s ir kraujavimo i\u0161 \u0161lapimo p\u016Bsl\u0117s sienel\u0117s. Nekroti\u0161ka gleivin\u0117, fibrinas ir \u012Fvairios nuos\u0117dos atkimba nuo sienel\u0117s ir sudaro pseudomembranas. Pseudomembranos gali predisponuoti obstrukcijos atsiradim\u0105. Da\u017Eniausiai kyla d\u0117l bakterin\u0117s infekcijos.",Yi="Pseudomembraninis cistitas, \u0161uo. Matoma plona pseudomembrana bei kraujo kre\u0161ulys.",Gi="Pereinamojo epitelio karcinoma \u2013 da\u017Eniausiai stebima kaip nelygaus pavir\u0161iaus mas\u0117 \u0161lapimo p\u016Bsl\u0117s kaklelio srityje (trigon\u0117je) ir dorsalin\u0117je \u0161lapimo p\u016Bsl\u0117s k\u016Bno dalyje. Echogeni\u0161kumas da\u017Enai mi\u0161rus, gali b\u016Bti mineralizacij\u0173. Kadangi trigon\u0117je yra \u0161lapimtaki\u0173 atsiv\u0117rimai, obstrukcijos atveju gali i\u0161sivystit hidroureteriai. Mas\u0117 da\u017Enai apima ir proksimalin\u0119 \u0161lapl\u0117s dal\u012F.",Ki="Pereinamojo epitelio karcinoma apimanti trigon\u0117s dal\u012F.",Ui="Retesni dariniai kylantys i\u0161 p\u016Bsl\u0117s sienel\u0117s sluoksni\u0173: periferini\u0173 nerv\u0173 dangal\u0173 navikai, leiomiosarkoma, leiomioma, fibroma, fibrosarkoma, hemangioma, hemangiosarkoma, limfoma, mastocitoma.",Xi="\u0160uo, leiomiosarkoma.",Vi=" (n- \u226417cm)",Bi=`
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
`,wi="Normalus kat\u0117s inkstas.",Fi=`
        Prie inkst\u0173 nepakankamumo \u017Eiev\u0117 tampa hiperechogeni\u0161ka. Nusta\u010Dius \u017Eiev\u0117s hiperechogeni\u0161kum\u0105
		galimos diferencin\u0117s diagnoz\u0117s: intersticinis/glomerunefritas,glomerul\u0173 nekroz\u0117 d\u0117l
		apsinuodijimo etileno glikoliu, razinomis ar lelijomis, difuzin\u0117 inkstin\u0117 limfoma, FIP,
		nefrokalcinoz\u0117 d\u0117l hiperkalcemijos. Hiperechogeni\u0161ka \u017Eiev\u0117 ir \u0161erdis, ne toks ry\u0161kus \u017Eiev\u0117s
		\u0161erdies skirtumas (reduced corticomedullary distinction) gali rodyti \u012Fgimt\u0105 inkst\u0173 displazij\u0105,
		l\u0117tin\u012F inkst\u0173 nepakankamum\u0105, galutin\u0119 inkst\u0173 nepakankamumo stadij\u0105.
`,Ji="\u0160uns inkstas, etileno glikolio intoksikacija. Rodykl\u0117 \u017Eymi 'rim sign' b\u016Bding\u0105 prie \u0161ios patologijos.",xi="Infarktai matomi, kaip hiperechoi\u0161ki trikampiai, kuri\u0173 smailus galas lie\u010Dia inksto \u0161erd\u012F. Inkst\u0173 infarktai gali i\u0161sivystiti d\u0117l bet kokios prie\u017Easties, kuri sukelia hiperkre\u0161\u0117jimo b\u016Bsen\u0105 (hypercoagulable state) pvz. HCM,inkst\u0173 infekcija, sepsis, anfilaksinis \u0161okas ir tt. Inkst\u0173 infarktai da\u017Enesni kat\u0117ms su HCM. Jauna kat\u0117 su inkst\u0173 infarktais labiau tik\u0117tina, kad turi HCM, nei sena kat\u0117. Infarktai gali b\u016Bti ir atsitiktinis radinys ypa\u010D senoms kat\u0117ms",Wi="\u0160uo, inkstas. Rodykl\u0117s \u017Eymi hiperechoi\u0161kus infarktus. p - prasipl\u0117tusi geldel\u0117.",qi=`Inkstin\u0117s cistos, geneti\u0161kai nulemtos persams ir su persais mai\u0161ytoms kat\u0117ms.Indikuoja inkst\u0173
parametr\u0173 sekim\u0105, d\u0117l didesn\u0117s inkst\u0173 nepakankamumo rizikos.`,Zi=`Stebima cista su hiperechoi\u0161komis nuos\u0117domis. Gyv\u016Bnai da\u017Enai kars\u010Diuoja, prastai jau\u010Diasi,
stebima leukocitoz\u0117.`,Qi="Abscesas \u0161uns inkste.",$i="Da\u017Eniausiai pasitaikanti neoplazija ka\u010Di\u0173 inkstuose.Da\u017Enesn\u0117s patinams. Da\u017Enai asocijuota su FIV/FeLV infekcijomis. 40% ka\u010Di\u0173 su multicentrine limfoma turi ir inkst\u0173 limfom\u0105.",ia='Kat\u0117, renalin\u0117 limfoma. B\u016Bdingas po\u017Eymis hipoechoi\u0161ka juosta aplink inkst\u0105 - "halo sign".',aa="I\u0161 inksto parenchimos kylantys augliai, antri pagal da\u017Enum\u0105 kat\u0117ms, po renalin\u0117s limfomos.",sa="\u0160uo, renalin\u0117 karcinoma.",ta=" (n~ 3-4.5cm)",na=" (n~ 3-4.5cm x 2.23-2.83cm)",ea=" (n~ 2.23-2.83cm)",oa=" (n- <0.2cm)",ra=" (n- <0.2cm)",la="\u0160uns skrandis yra lokalizuotas ties kr\u016Btinkaulio kardin\u0117s ataugos pabaiga. Kat\u0117s skrandis lokalizuotas labiau kair\u0117je pus\u0117je, prievartis (pylorus) lokalizuotas ties centru. Da\u017Eniausiai matoma tik artimesn\u0117 sienel\u0117, d\u0117l duj\u0173 reverbacijoss artefakto. Skrand\u017Eio sienel\u0119 sudaro 5 sluoksniai: hiperechoi\u0161k seroza, hipoechoi\u0161kas raumeninis sluoksnis, hiperechoi\u0161ka pogleivin\u0117, hipoechoi\u0161ka gleivin\u0117, hiperechoi\u0161kas spind\u017Eio-gleivin\u0117s sand\u016Bra. Vertinamas sienel\u0117s storis, atskir\u0173 sluoksni\u0173 echogeni\u0161kumas ir storis, peristaltika, turinys bei turinio echogeni\u0161kumas. Taip pat vertinami \u0161alia esantys limfmazgiai, galima aptikti laisvus skys\u010Dius.",ua="Normalus kat\u0117s skrandis",ma="Skrad\u017Eio opos echoskopijos metu vizualizuojamos kaip sienel\u0117s sustor\u0117jimas, su krateriu, kurio viduje gali b\u016Bti nedieli\u0173 duj\u0173 burbuliuk\u0173, normalios sienel\u0117s suardymas bei skrand\u017Eio hipotonija. Tokie patys radiniai gali b\u016Bti d\u0117l skrand\u017Eio neoplazijos, nekrozavusios skrand\u017Eio neoplazijos, taigi galutin\u0117 diagnoz\u0117 nustatoma gastroskopijos metu.",ka="Rodykl\u0117 \u017Eymi op\u0105 esan\u010Di\u0105 skrand\u017Eio sienel\u0117je.",ca="Prievar\u010Dio hipertrofija (piliorin\u0117 gastropatija) yra stebima ma\u017E\u0173 veisli\u0173, vyresnio am\u017Eiaus \u0161unims. Predosponuotos veisl\u0117s: lasa apso, \u0161i tzu, miniati\u016Briniai pudeliai. Da\u017Eniausiai pasirei\u0161kia vidutini\u0161kai 8.8 met\u0173 \u0161unims, am\u017Eius svyruoja nuo 3 iki 15 met\u0173. Dvigubai da\u017Eniau pasirei\u0161kia patinams. Po\u017Eymiai: v\u0117mimas kelios valandos po \u0117dimo, da\u017Eniausiai be tul\u017Eies, svorio kritimas, pilvo padid\u0117jimas, d\u0117l duj\u0173 besikaupian\u010Di\u0173 skrandyje. Echoskopijos metu stebimas raumeninio sluoksnio sustor\u0117jimas prievar\u010Dio (pylorus ) srityje.",da="Sustor\u0117j\u0119s raumeninis sluoksnis prievar\u010Dio srityje",pa="Leiomioma da\u017Enas labai sen\u0173 \u0161un\u0173 skrand\u017Eio v\u0117\u017Eys, antras pagal da\u017Enum\u0105 po adenokacinomos. Vidutini\u0161kai nustatoma 15 met\u0173 \u0161unims, predisponuoti bigliai. Da\u017Enai matoma taip lokalizuotas polipas \u012Fskrand\u017Eio ar gastroezofagin\u0117s jungties srityje. Da\u017Enai i\u0161op\u0117ja.",_a="\u0160uo, leiomioma.",fa="Skrand\u017Eio adenocarcinoma yra reta kat\u0117ms, bet \u0161unims sudaro 42-72% vis\u0173 nustatom\u0173 skrand\u017Eio v\u0117\u017Ei\u0173. Am\u017Eiaus vidurkis 8 metai, bet pasirei\u0161kia ir jaunesniems nei 5 metai. Dvigubai da\u017Eniau nustatoma patinams. Predisponuotos veisl\u0117s: belg\u0173 aviganiai, \u0161iuk\u0161\u010Diaplaukiai koliai. Ultragarsu stebimas sienel\u0117s sustor\u0117jimas, sluoksn\u0173 suardymas. Da\u017Eniausiai sienel\u0117s i\u0161orinis ir vidinis sluoksnis hipoechoi\u0161kas, su hiperechoi\u0161ka centrine zona. Gali b\u016Bti i\u0161op\u0117jimo, limfadenopatija, auglys da\u017Eniausiai randamas ma\u017Eojoje skrand\u017Eio kreiv\u0117je bei prievar\u010Dio prieangio (antrum) zonoje.",ga="\u0160uo, adenokarcinoma. Matomi pseudosluoksniai.",Ea=" (n~ 0.2-0.4cm)",ja=" (n~ 0.2-0.5cm)",va="Invaginacija da\u017Enai stebima d\u0117l suaktyv\u0117jusios persitaltikos viduriuojant, esant kirminams ar l\u0117tiniui enteritui. \u017Darna, kuri yra i\u0161orinis invaginacijos segmentas, da\u017Eniausiai sustor\u0117ja tampa edemi\u0161ka, hipoehoi\u0161ka. Vidinis segmentas da\u017Eniausiai nepakinta, da\u017Enai su \u017Earna patenka ir riebal\u0173.",ya="\u0160uo, invaginacija.",Da="\u017Darnyno limfosarkoma (limfoma) yra da\u017Eniausias nustatomas \u017Earn\u0173 v\u0117\u017Eys kat\u0117ms. Da\u017Eniausiai paveikiamos 10-12 met\u0173 kat\u0117s, bet am\u017Eius svyruoj\u0105 nuo 1 iki 18 met\u0173. Veisl\u0117s predispozicijos n\u0117ra nustatyta. FeLv ir FIV reik\u0161m\u0117 ligai irgi n\u0117ra \u012Frodyta. Pasirei\u0161kia kaip mas\u0117 arba difuzinis raumeninio audinio sustor\u0117jimas. Esant difuziniam sustor\u0117jumui kita diferencin\u0117 diagnoz\u0117 yra u\u017Edegimin\u0117 \u017Earnyno liga. Ultragarsu negalima diferencijuoti \u0161i\u0173 susirgim\u0173. Auksinis standartas histologija + imunohistochemija ar PCR. Atliekant tik histologin\u012F tyrim\u0105 limfosarkomos pradin\u0117s stadijos gali b\u016Bti klaidingai nustatoma kaip IBD, tod\u0117l b\u016Btinas imunohistocheminis tyrimas galutinei diagnozei.",ha="Kat\u0117, limfoma. Sustor\u0117j\u0119s raumeninis sluoksnis.",Ta=" (n~ 0.22cm)",ba=" (n~ 0.38cm)",Sa=" (n~ 0.41cm)",Ca=" (n~ 0.44cm)",Aa=" (n~ 0.22cm)",Ia=" (n~ 0.3cm)",Ra=" (n~ 0.35cm)",Oa=" (n~ 0.38cm)",Na=" (n~ 0.28cm)",za=" (n~ 0.3cm)",La=" (n~ 0.35cm)",Pa=" (n~ 0.38cm)",Ma=" (n~ 0.15cm)",Ha=" (n~ 0.15cm)",Ya="Senatvinis pakitimas da\u017Enesnis kat\u0117ms. Stebimi daugybiniai hipoechoi\u0161ki mazgeliai 0.3 \u2013 1cm diametro. Gali atrodyti kaip cistos. Gali atrodyt pana\u0161iai \u012F insulinoma. Da\u017Eniausiai kat\u0117s neturi joki\u0173 klinikini\u0173 simptom\u0173. Gali b\u016Bti susij\u0119 su persirgtu pankreatitu.",Ga="\u0160uo, mazgelin\u0117 hiperplazija d\u0117l l\u0117tinio pankreatito.",Ka="Senyvo am\u017Eiaus kat\u0117ms kasos latako skersmuo yra norma iki 0.25cm. Da\u017Eniausiai neb\u016Bna joki\u0173 klinikini\u0173 po\u017Eymi\u0173. Kasos latakas gali pl\u0117sti ir d\u0117l letinio ir \u016Bmaus pankratito.",Ua="Sena kat\u0117, kasos latako dilatacija.",Xa="D\u0117l \u016Bmaus pankreatito kasa padid\u0117ja, tampa hipoechoi\u0161ka j\u0105 supan\u010Diam riebaliniui audiniui.\u0160alia esanti dvylikapir\u0161t\u0117 \u017Earna gali b\u016Bti koruguota, atoni\u0161ka. Kasos kra\u0161tai suapval\u0117ja arba kapsul\u0117 tampa nelygi. Vystosi riebalinio audinio steatitas, jis tampa hiperechoi\u0161kas gali b\u016Bti laisv\u0173 skys\u010Di\u0173.",Va="\u0160uo, pankreatitas.P- kasa, matomas hiperechoi\u0161kas riebalinis audinys, sustor\u0117jusi ir edemi\u0161ka dvylikapir\u0161t\u0117.",Ba="Kasos cistos ir abscesai yra neda\u017Ena pankreatito komplikacija. Manoma, kad d\u0117l u\u017Edegimo pratr\u016Bksta kasos latakas, kasos ar aplinkiniuose audiniuose susiformuoja fibrotin\u0117 kapsul\u0117 pripildyta kasos i\u0161skiriamo skys\u010Dio ir ferment\u0173. Diferencijacijai atliekama citologija, histopatologija.",wa="Kat\u0117, kasos abscesas.",Fa="Kasos endokrininio audinio neoplazijos (glukagonomos, insulinomos ir gastrinomos) yra neda\u017Enas rei\u0161kinys. \u0160unims da\u017Eniausiai pasitaiko insulinomos. Matomos kaip mas\u0117s kasos skiltyse. Kasos adenocarcinoma retas v\u0117\u017Eys, \u0161unims gali b\u016Bti nustatomas kaip mas\u0117 ar difuzi\u0161ki pakitimai, kat\u0117ms da\u017Eniausiai difuzi\u0161kai apimantis vis\u0105 kas\u0105.",Ja="\u0160uo, kasos karcinoma.",xa=" (n- \u22640.1cm)",Wa=" (n- \u22640.06cm)",qa="Normal\u016Bs prieinks\u010Diai yra hipoechoi\u0161ki juos supantiems rebalams, gali tur\u0117ti hiperechoi\u0161k\u0105 linija tarp \u017Eiev\u0117s ir \u0161erdies, hiperechoi\u0161ka \u0161erd\u012F. Karysis prieinkstis yra pupel\u0117s arba \u017Eem\u0117s rie\u0161uto formas, de\u0161inysis V formos, da\u017Enai geriau matomas kaudalinis polius. Skersai prieinkst\u012F eina v.phrenicoabdominalis, kuri nustatoma spalviniu dopleriu, taip pat \u010Dia yra da\u017Ena piktybini\u0173 prieinks\u010Di\u0173 augli\u0173 invazijos vieta.",Za="De\u0161inysis prieinkstis.",Qa="Kairysis prieinkstis.",$a="D\u0117l hipofiz\u0117s navik\u0173 kylan\u010Dio hiperadrenokorticizmo, vystosi prieinks\u010Di\u0173 hiperplazija, abu prieinks\u010Diai vienodai padid\u0117j\u0119. Hiperadrenokorticizmas gali i\u0161sivystit d\u0117l hormoni\u0161kai aktyvios prieinks\u010Di\u0173 neoplazijos (ma\u017Edaug 20% vis\u0173 HAC atvej\u0173). Tokiu atveju, vienas prieinkstis did\u0117ja, galimai randama mas\u0117. Kitas prieinkstis \u017Eenkliai ma\u017E\u0117ja (ilgis ma\u017Eesnis nei 0.5cm).",is="\u0160uo d\u0117l hipofiz\u0117s adenomos kylantis ku\u0161ingas, prieinks\u010Dio hiperplazija.",as="Feochromocitoma, \u0161uo.",ss="Ultragarsinio tyrimo metu aptinkam\u0173 prieinks\u010Di\u0173 darini\u0173 vaizdas yra nepecifinis. Diferencin\u0117s diagnoz\u0117s: \u017Eiev\u0117s adenoma, adenocarcinoma, feochromocitoma, myelolipoma, metastaz\u0117s, hiperplazija. Gerai lokalizuotos mas\u0117s >2cm skersmens grei\u010Diau yra dariniai, nei hiperplazija, >4cm darinys grei\u010Diausiai piktybinis. Vis d\u0117lto, tiek gerybiniai tiek piktybiniai dariniai gali b\u016Bti dideli. Pagrindinis piktybi\u0161kumo rodiklis- invazija \u012F aplinkinius audinius bei kraujagysli\u0173 embolizacija.",ts=" (n~ 0.35-0.45cm)",ns=" (n~ 0.6-0.8cm)",es=" (n~ 1-1.1cm)",os=" (n~ 1-5cm)";export{Ni as $,Qi as A,ia as B,Na as C,Ta as D,sa as E,xi as F,Zi as G,wi as H,Wi as I,Aa as J,$i as K,ta as L,Ci as M,aa as N,Ii as O,oa as P,Ai as Q,Oi as R,zi as S,Si as T,Mi as U,Pi as V,ea as W,Yi as X,Ki as Y,Xi as Z,Ri as _,Vi as a,Li as a0,Hi as a1,Gi as a2,Ui as a3,ua as a4,ka as a5,da as a6,la as a7,ma as a8,ca as a9,_a as aa,ga as ab,pa as ac,fa as ad,ya as ae,ha as af,va as ag,Da as ah,Va as ai,wa as aj,Ja as ak,Ga as al,Ua as am,Xa as an,Ba as ao,Fa as ap,Ya as aq,Ka as ar,Qa as as,Za as at,is as au,as as av,qa as aw,$a as ax,ss as ay,ra as b,na as c,Ea as d,ja as e,ba as f,Sa as g,Ca as h,Ia as i,Ra as j,Oa as k,za as l,La as m,Pa as n,Ha as o,Ma as p,xa as q,Wa as r,es as s,os as t,ts as u,ns as v,Ji as w,Bi as x,Fi as y,qi as z};