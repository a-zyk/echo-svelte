<script>
	import Toggle from '../Toggle.svelte';
	import Modal from '../Modal.svelte';
	import * as TXT from '../../texts/adrenals';
</script>

<Toggle>
	<div class="text-center" slot="title">Prieinksčiai</div>
	<div slot="content">
		<Toggle classes="card mt-4">
			<div slot="title">Normalūs prieinksčiai</div>
			<div slot="content">
				<div class="flex">
					<Modal
						src="/images/adrenals/norma_kairys_prieinsktis.png"
						text={TXT.NORMAL_ADRENALS_DESCR_L}
					/>
					<Modal
						src="/images/adrenals/norma_desnys_prieinkstis.png"
						text={TXT.NORMAL_ADRENALS_DESCR_R}
					/>
				</div>
				{TXT.NORMAL_ADRENALS_TEXT}
			</div>
		</Toggle>

		<Toggle classes="card mt-4">
			<div slot="title">Hiperadrenokorticizmas</div>
			<div slot="content">
				<Modal src="/images/adrenals/hiperplazija_kušingas.png" text={TXT.HYPERADRENO_DESCR} />
				{TXT.HYPERADRENO_TEXT}
			</div>
		</Toggle>

		<Toggle classes="card mt-4">
			<div slot="title">Neoplazija</div>
			<div slot="content">
				<Modal src="/images/adrenals/pheochromocitoma.png" text={TXT.NEOPLASIA_DESCR} />
				{TXT.NEOPLASIA_TEXT}
			</div>
		</Toggle>
	</div>
</Toggle>
