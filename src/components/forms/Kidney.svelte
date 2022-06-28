<script>
	import { kidney as kidneyStore } from '../../stores/description';
	import Toggle from '../Toggle.svelte';
	import RadioBtn from '../../components/RadioBtn.svelte';
	import NumberInput from '../../components/NumberInput.svelte';
	import Textarea from '../../components/Textarea.svelte';

</script>

<Toggle autoclosable=true classes="card">
	<div slot="title">Inkstai</div>
	<div slot="content">
		<div class="titles">Inksto žievė lyginant su kepenimis yra</div>
		<div class="radio">
			<RadioBtn bind:group={$kidneyStore.echogen} value="izoechogeniška" name="echogenicity" />
			<RadioBtn bind:group={$kidneyStore.echogen} value="hipoechogeniška" name="echogenicity" />
			<RadioBtn bind:group={$kidneyStore.echogen} value="hiperechogeniška" name="echogenicity" />
		</div>

		<div class="flex gap-5">
			<NumberInput tooltipText="Normalaus katės inksto ilgis 3.20 - 4.12 cm. Didesnis pas nekastruotus katinus, mažesnis senoms katėms. Normalus šuns inksto ilgis priklauso nuo šuns dydžio." bind:value={$kidneyStore.lng} title="Inksto ilgis, cm" />
			<NumberInput tooltipText="Normalaus katės inksto plotis 2.23 - 2.83 cm." bind:value={$kidneyStore.width} title="Inksto plotis, cm" />
		</div>

		
		<div class="titles">Inkso geldelė</div>
		
		<div class="radio">
			<RadioBtn bind:group={$kidneyStore.pelvicWidth} value="neišsiplėtusi" name="pelvicWidth" />
			<RadioBtn bind:group={$kidneyStore.pelvicWidth} value="išsiplėtusi" name="pelvicWidth" />
		</div>

		<NumberInput
		tooltipText="Skersiniame pjūvyje normalus geldelės plotis iki 0.2cm. Plotis >1.3cm būdingas obstrukcijai."
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
