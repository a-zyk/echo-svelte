<script>
	import Toggle from '../Toggle.svelte';
	import Modal from '../Modal.svelte';
	import * as TXT from '../../texts/bladder.js';
</script>

<Toggle autoclosable=true classes="card mt-4">
	<div class="text-center" slot="title">Šlapimo pūslė</div>
	<div slot="content">
		<Toggle classes="card mt-4">
			<div slot="title">Normali šlapimo pūslė</div>
			<div slot="content">
				<Modal
					src="/images/bladder/slapimopuslenormasuo.png"
					text={TXT.HEALTHY_BLADDER_DESCRIPTION}
				/>
				{TXT.HEALTHY_BLADDER_TEXT}
			</div>
		</Toggle>

		<Toggle classes="card mt-4">
			<div slot="title">Cistitas</div>
			<div slot="content">
				<Toggle>
					<div slot="title">Cistitas</div>
					<div slot="content">
						<Modal src="/images/bladder/cistitas.jpg" text={TXT.BLADDER_CYSTITIS_DESCRIPTION} />
						{TXT.BLADDER_CYSTITIS_TEXT}
					</div>
				</Toggle>

				<Toggle>
					<div slot="title">Emfizeminis cistitas</div>
					<div slot="content">
						<Modal
							src="/images/bladder/EmfizeminisCistitasSuo.jpg"
							text={TXT.BLADDER_EMPHYSEMATOUS_DESCRIPTION}
						/>
						{TXT.BLADDER_EMPHYSEMATOUS_TEXT}
					</div>
				</Toggle>

				<Toggle>
					<div slot="title">Polipoidinis cistitas</div>
					<div slot="content">
						<div class="flex gap-1">
							<Modal
								src="/images/bladder/polipassuochroniniscistitas.jpg"
								text={TXT.BLADDER_POPLYPS_CHRONIC_DESCRIPTION}
							/>
							<Modal
								src="/images/bladder/polipoidiniscistitassuo.png"
								text={TXT.BLADDER_POPLYPS_DESCRIPTION}
							/>
						</div>
						{TXT.BLADDER_POPLYPS_TEXT}
					</div></Toggle
				>

				<Toggle>
					<div slot="title">Pseudomembraninis cistitas</div>
					<div slot="content">
						<Modal
							src="/images/bladder/pseudomembraninisCistitasSuo.jpg"
							text={TXT.BLADDER_PSEUDOMEMBR_DESCRIPTION}
						/>
						{TXT.BLADDER_PSEUDOMEMBR_TEXT}
					</div>
				</Toggle>
			</div>
		</Toggle>

		<Toggle classes="card mt-4">
			<div slot="title">Neoplazijos</div>
			<div slot="content">
				<Toggle>
					<div slot="title">Pereinamojo epitelio karcinoma</div>
					<div slot="content">
						<Modal
							src="/images/bladder/pereinamojoepiteliokarcinoma.jpg"
							text={TXT.BLADDER_CARCINOMA_DESCRIPTION}
						/>
						{TXT.BLADDER_CARCINOMA_TEXT}
					</div>
				</Toggle>

				<Toggle>
					<div slot="title">Mezenchiminės kilmės dariniai</div>
					<div slot="content">
						<Modal
							src="/images/bladder/leimiosarkoma.png"
							text={TXT.BLADDER_MEZENCHYMAL_DESCRIPTION}
						/>
						{TXT.BLADDER_MEZENCHYMAL_TEXT}
					</div>
				</Toggle>
			</div>
		</Toggle>
	</div>
</Toggle>
