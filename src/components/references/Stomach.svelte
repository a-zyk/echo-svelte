<script>
	import Toggle from '../Toggle.svelte';
	import Modal from '../Modal.svelte';
	import * as TXT from '../../texts/stomach';
</script>

<Toggle autoclosable=true classes="card mt-4">
	<div class="text-center" slot="title">Skrandis</div>
	<div slot="content">
		<Toggle classes="card mt-4">
			<div slot="title">Normalus skrandis</div>
			<div slot="content">
				<Modal src="/images/stomach/image-4-stomach-content.jpg" text={TXT.STOMACH_NORMAL_DESCR} />
				{TXT.STOMACH_NORMAL_TEXT}
			</div>
		</Toggle>

		<Toggle classes="card mt-4">
			<div slot="title">Opos</div>
			<div slot="content">
				<Modal
					src="/images/stomach/opa_suo_sustorejusisienele.png"
					text={TXT.STOMACH_ULCERS_DESCR}
				/>
				{TXT.STOMACH_ULCERS_TEXT}
			</div>
		</Toggle>

		<Toggle classes="card mt-4">
			<div slot="title">Prievarčio hiperplazija</div>
			<div slot="content">
				<Modal
					src="/images/stomach/pyloric_hiper_suo_sust_musc.png"
					text={TXT.STOMACH_HYPERTR_DESCR}
				/>
				{TXT.STOMACH_HYPERTR_DESCR}
			</div>
		</Toggle>

		<Toggle classes="card mt-4">
			<div slot="title">Neoplazijos</div>
			<div slot="content">
				<Toggle>
					<div slot="title">Leiomioma</div>
					<div slot="content">
						<Modal src="/images/stomach/leiomioma.png" text={TXT.STOMACH_LEI_DESCR} />
						{TXT.STOMACH_LEI_TEXT}
					</div>
				</Toggle>

				<Toggle>
					<div slot="title">Adenokarcinoma</div>
					<div slot="content">
						<Modal
							src="/images/stomach/suo_karcinoma_pseudolayers.png"
							text={TXT.STOMACH_CARC_DESCR}
						/>
						{TXT.STOMACH_CARC_TEXT}
					</div>
				</Toggle>
			</div>
		</Toggle>
	</div>
</Toggle>
