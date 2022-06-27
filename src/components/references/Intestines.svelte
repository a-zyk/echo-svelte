<script>
	import Toggle from '../Toggle.svelte';
	import Modal from '../Modal.svelte';
	import * as TXT from '../../texts/intestines';
</script>

<Toggle>
	<div class="text-center" slot="title">Žarnynas</div>
	<div slot="content">
		<Toggle classes="card mt-4">
			<div slot="title">Invaginacija</div>
			<div slot="content">
				<Modal src="/images/intestines/intususeption_dog.png" text={TXT.INVAGINATION_DESCR} />
				{TXT.INVAGINATION_TEXT}
			</div>
		</Toggle>

		<Toggle classes="card mt-4">
			<div slot="title">Limfoma/IBD</div>
			<div slot="content">
				<Modal src="/images/intestines/kate_limfosarkoma.png" text={TXT.LYMOHOMA_DESCR} />
				{TXT.LYMPHOMA_TEXT}
			</div>
		</Toggle>
	</div>
</Toggle>
