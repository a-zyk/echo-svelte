<script>
	import { kidney as kidneyStore } from '../../stores/description';
	import Toggle from '../Toggle.svelte';
	import RadioBtn from '../../components/RadioBtn.svelte';
	import NumberInput from '../../components/NumberInput.svelte';
	import Textarea from '../../components/Textarea.svelte';
</script>

<Toggle classes="card">
	<div slot="title">Inkstai</div>
	<div slot="content">
		<div class="titles">Inksto žievė lyginant su kepenimis yra</div>
		<div class="radio">
			<RadioBtn bind:group={$kidneyStore.echogen} value="izoechogeniška" name="echogenicity" />
			<RadioBtn bind:group={$kidneyStore.echogen} value="hipoechogeniška" name="echogenicity" />
			<RadioBtn bind:group={$kidneyStore.echogen} value="hiperechogeniška" name="echogenicity" />
		</div>

		<div class="flex gap-5">
			<NumberInput bind:value={$kidneyStore.lng} title="Inksto ilgis, cm" />
			<NumberInput bind:value={$kidneyStore.width} title="Inksto plotis, cm" />
		</div>

		<div class="titles">Inkso geldelė</div>
		<div class="radio">
			<RadioBtn bind:group={$kidneyStore.pelvicWidth} value="neišsiplėtusi" name="pelvicWidth" />
			<RadioBtn bind:group={$kidneyStore.pelvicWidth} value="išsiplėtusi" name="pelvicWidth" />
		</div>

		<NumberInput
			bind:value={$kidneyStore.pelvisCm}
			title="Geldelės plotis skersiniame pjūvyje, cm"
		/>

		<Textarea
			title="Kiti pakitimai"
			bind:value={$kidneyStore.otherChanges}
			placeholder="akmenys, šlapimtakių pakitimai, masės"
		/>
	</div>
</Toggle>
