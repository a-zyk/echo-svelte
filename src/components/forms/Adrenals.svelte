<script>
	import { adrenals as adrenalsStore } from '../../stores/description';
	import Toggle from '../../components/Toggle.svelte';
	import RadioBtn from '../../components/RadioBtn.svelte';
	import NumberInput from '../../components/NumberInput.svelte';
	import Textarea from '../../components/Textarea.svelte';
	import Tooltip from '../../components/Tooltip.svelte';
</script>

<Toggle classes="card">
	<div slot="title">Prieinksčiai</div>
	<div slot="content">
		<div class="flex gap-1">
		<div class="titles ">Aplinkui esantiems riebalams prieinksčio žievė</div>
		<Tooltip tooltipText="hello"/>
	</div>
		<div class="radio">
			<RadioBtn bind:group={$adrenalsStore.echogen} value="izoechogeniška" name="echogenicity" />
			<RadioBtn bind:group={$adrenalsStore.echogen} value="hipoechogeniška" name="echogenicity" />
			<RadioBtn bind:group={$adrenalsStore.echogen} value="hiperechogeniška" name="echogenicity" />
		</div>

		<NumberInput bind:value={$adrenalsStore.length} tooltipText="aaaa" title="Prieinksčio ilgis, cm" />

		<div class="flex gap-5">
			<NumberInput bind:value={$adrenalsStore.widthFront} title="Priekinio poliaus plotis, cm" />
			<NumberInput bind:value={$adrenalsStore.widthBack} title=" Galinio poliaus plotis, cm" />
		</div>
		<Textarea
			title="Kiti pakitimai"
			bind:value={$adrenalsStore.otherChanges}
			placeholder="masės, citos, kalcifikatai"
		/>
	</div>
</Toggle>
