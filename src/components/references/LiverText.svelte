<script>
	import Toggle from '../Toggle.svelte';
	import Modal from '../Modal.svelte';
	import * as TXT from '../../texts/liver';
</script>

<Toggle>
	<div class="text-center" slot="title">Kepenys ir tulžies pūslė</div>
	<div slot="content">
		<Toggle classes="card mt-4">
			<div slot="title">Normalios kepenys</div>
			<div slot="content">
				<Modal src="/images/liver/normalliver.png" text={TXT.HEALTHY_LIVER_DESCRIPTION} />
				{TXT.HEALTHY_LIVER_TEXT}
			</div>
		</Toggle>

		<Toggle classes="card mt-4">
			<div slot="title">Difuziniai kepenų prenchimos pakitimai</div>
			<div slot="content">
				<div class="flex gap-1">
					<Modal
						src="/images/liver/apvaluskepenukrastas.png"
						text={TXT.DIFFUSE_LIVER_DISEASE_DESCRIPTION_ROUND}
					/>
					<Modal
						src="/images/liver/hepatokutaninissindromasfibrotineendstage.jpg"
						text={TXT.DIFFUSE_LIVER_DISEASE_DESCRIPTION_HONEY}
					/>
					<Modal
						src="/images/liver/hypoechoiclivervessels.png"
						text={TXT.DIFFUSE_LIVER_DISEASE_DESCRIPTION_HYPO}
					/>
					<Modal
						src="/images/liver/hiperechoiškoskepenys.png"
						text={TXT.DIFFUSE_LIVER_DISEASE_DESCRIPTION_HYPER}
					/>
				</div>
				{TXT.DIFFUSE_LIVER_DISEASE_TEXT}
			</div>
		</Toggle>

		<Toggle classes="card mt-4">
			<div slot="title">Lokalizuoti kepenų prenchimos pakitimai</div>
			<div slot="content">
				<div class="flex gap-1">
					<Modal
						src="/images/liver/hepatoceliuliarinekarcinoma.png"
						text={TXT.LOCAL_LIVER_DISEASE_DESCRIPTION_CARCINOMA}
					/>
					<Modal
						src="/images/liver/nodularhyperplasiasteroidhepatopathy.png"
						text={TXT.LOCAL_LIVER_DISEASE_DESCRIPTION_NODULES}
					/>
					<Modal
						src="/images/liver/targetlesions.png"
						text={TXT.LOCAL_LIVER_DISEASE_DESCRIPTION_METS}
					/>
				</div>
				{TXT.LOCAL_LIVER_DISEASE_TEXT}
			</div>
		</Toggle>
	</div>
</Toggle>
