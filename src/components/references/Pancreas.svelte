<script>
	import Toggle from '../Toggle.svelte';
	import Modal from '../Modal.svelte';
	import * as TXT from '../../texts/pancreas';
</script>

<Toggle>
	<div class="text-center" slot="title">Kasa</div>
	<div slot="content">
		<Toggle classes="card mt-4">
			<div slot="title">Senatviniai pakitimai</div>
			<div slot="content">
				<Toggle>
					<div slot="title">Mazgelinė hiperplazija</div>
					<div slot="content">
						<Modal
							src="/images/pancreas/nodular_hyperplasia_dog_chronic pancr.png"
							text={TXT.NODULAR_HYPER_DESCR}
						/>
						{TXT.NODULAR_HYPER_TEXT}
					</div>
				</Toggle>

				<Toggle>
					<div slot="title">Kasos latako išsiplėtimas</div>
					<div slot="content">
						<Modal src="/images/pancreas/pd_dilatacija, 2,2mm_norma.jpg" text={TXT.DUCTUS_DESCR} />
						{TXT.DUCTUS_TEXT}
					</div>
				</Toggle>
			</div>
		</Toggle>

		<Toggle classes="card mt-4">
			<div slot="title">Pankreatitas</div>
			<div slot="content">
				<Modal src="/images/pancreas/pankreatitas_suo.png" text={TXT.PANCREATITIS_DESCR} />
				{TXT.PANCREATITIS_TEXT}
			</div>
		</Toggle>

		<Toggle classes="card mt-4">
			<div slot="title">Abscesai ir cistos</div>
			<div slot="content">
				<Modal src="/images/pancreas/kasos_abscesas_kate.png" text={TXT.ABSCESS_DESCR} />
				{TXT.ABSCESS_TEXT}
			</div>
		</Toggle>

		<Toggle classes="card mt-4">
			<div slot="title">Neoplazija</div>
			<div slot="content">
				<Modal src="/images/pancreas/kasos_karcinoma_suo.png" text={TXT.NEOPLASIA_DESCR} />
				{TXT.NEOPLASIA_TEXT}
			</div>
		</Toggle>
	</div>
</Toggle>
