<script>
	import { stomach as stomachStore } from '../../../stores/description';
	import Toggle from '../../Toggle.svelte';
	import RadioBtn from '../../RadioBtn.svelte';
	import NumberInput from '../../NumberInput.svelte';
	import Textarea from '../../Textarea.svelte';
	const prefix = 'stomach';
</script>

<Toggle autoclosable="true" classes="card">
	<div slot="title">Skrandis</div>
	<div slot="content">
		<div class="titles">Skrandžio prisipildymas</div>

		<div class="radio">
			<RadioBtn {prefix} bind:group={$stomachStore.content} value="tusčias" name="content" />
			<RadioBtn
				{prefix}
				bind:group={$stomachStore.content}
				value="vidutiniškai prisipildęs"
				name="content"
			/>
			<RadioBtn {prefix} bind:group={$stomachStore.content} value="perpildytas" name="content" />
		</div>

		<div class=" flex-col md:flex-row flex gap-5">
			<NumberInput
				{prefix}
				tooltipText="Normalus skrandžio sienelės storis katei yra ~0.2-0.4cm, šunims ~0.2-0.5cm."
				bind:value={$stomachStore.thickness}
				title="Sienelės storis, cm"
			/>

			<NumberInput
				{prefix}
				tooltipText="Normali skrandžio peristaltika yra +-5k/min."
				bind:value={$stomachStore.peristalsis}
				title="Peristaltika, k/min"
			/>
		</div>

		<Textarea
			{prefix}
			title="Kiti pakitimai"
			bind:value={$stomachStore.otherChanges}
			placeholder="masės, svetimkūniai, dujos"
		/>
	</div>
</Toggle>
