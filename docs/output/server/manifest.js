export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","images/adrenals/hiperplazija_kušingas.png","images/adrenals/norma_desnys_prieinkstis.png","images/adrenals/norma_kairys_prieinsktis.png","images/adrenals/pheochromocitoma.png","images/bladder/EmfizeminisCistitasSuo.jpg","images/bladder/cistitas.jpg","images/bladder/ektopinisslapimtakissuo.png","images/bladder/leimiosarkoma.png","images/bladder/pereinamojoepiteliokarcinoma.jpg","images/bladder/polipassuochroniniscistitas.jpg","images/bladder/polipoidiniscistitassuo.png","images/bladder/pseudomembraninisCistitasSuo.jpg","images/bladder/slapimopuslenormasuo.png","images/bladder/slapimopuslessienelesinversijapokateter.jpg","images/bladder/ureterocelesuo.png","images/bladder/vesicourachinisdivertikulaskate.png","images/cat.png","images/dog.jpg","images/intestines/intususeption_dog.png","images/intestines/kate_limfosarkoma.png","images/kidney/etilenotoxicozeirrimsignsuo.jpg","images/kidney/infarktaiinkstesuo.jpg","images/kidney/inkstolimfomakate.jpg","images/kidney/normalkidney.png","images/kidney/perirenalinecistakateirmineralizacija.jpg","images/kidney/policistinisinkstas.jpg","images/kidney/pulinysinkstesuo.jpg","images/kidney/renalkarcinomadog.jpg","images/kidney/rimsignpiogranulomatozinisuzdegimasfip.jpg","images/liver/apvaluskepenukrastas.png","images/liver/hepatoceliuliarinekarcinoma.png","images/liver/hepatokutaninissindromasfibrotineendstage.jpg","images/liver/hiperechoiškoskepenys.png","images/liver/hypoechoiclivervessels.png","images/liver/nodularhyperplasiasteroidhepatopathy.png","images/liver/normalliver.png","images/liver/targetlesions.png","images/myproject.png","images/pancreas/kasos_abscesas_kate.png","images/pancreas/kasos_karcinoma_suo.png","images/pancreas/nodular_hyperplasia_dog_chronic pancr.png","images/pancreas/pankreatitas_suo.png","images/pancreas/pd_dilatacija, 2,2mm_norma.jpg","images/pancreas/pkasos_cista.png","images/spleen/bluzniesuzsisukimas.png","images/spleen/hemangiosarkoma.png","images/spleen/limfomabluznissuo.png","images/spleen/mielolipoma.png","images/spleen/normalibluzniskate.png","images/stomach/image-4-stomach-content.jpg","images/stomach/leiomioma.png","images/stomach/opa_suo_sustorejusisienele.png","images/stomach/pyloric_hiper_skers.png","images/stomach/pyloric_hiper_suo_sust_musc.png","images/stomach/suo_karcinoma_pseudolayers.png","images/stomach/suo_limfosarkoma.png","images/waves.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"start-21506890.js","js":["start-21506890.js","chunks/index-792693a7.js","chunks/index-1c72d09a.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				type: 'page',
				id: "description@app",
				pattern: /^\/description\/?$/,
				names: [],
				types: [],
				path: "/description",
				shadow: null,
				a: [2,3],
				b: [1]
			},
			{
				type: 'page',
				id: "@app",
				pattern: /^\/?$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [2,4],
				b: [1]
			},
			{
				type: 'page',
				id: "test@app",
				pattern: /^\/test\/?$/,
				names: [],
				types: [],
				path: "/test",
				shadow: null,
				a: [2,5],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
