<script>
	import { adrenals as adrenalsStore } from '../../stores/description';
	import Toggle from '../../components/Toggle.svelte';
	import RadioBtn from '../../components/RadioBtn.svelte';
	import NumberInput from '../../components/NumberInput.svelte';
	import Textarea from '../../components/Textarea.svelte';
	import Tooltip from '../../components/Tooltip.svelte';
</script>

<Toggle autoclosable=true classes="card">
	<div slot="title">Prieinksčiai</div>
	<div slot="content">
		<div class="flex gap-2">
			<div class="titles ">Aplinkui esantiems riebalams prieinksčio žievė</div>
			<Tooltip
				tooltipText="Normalaus prieinksčio žievė jį supantiems riebalams yra hipoechoiška."
			/>
		</div>
		<div class="radio">
			<RadioBtn bind:group={$adrenalsStore.echogen} value="izoechogeniška" name="echogenicity" />
			<RadioBtn bind:group={$adrenalsStore.echogen} value="hipoechogeniška" name="echogenicity" />
			<RadioBtn bind:group={$adrenalsStore.echogen} value="hiperechogeniška" name="echogenicity" />
		</div>

		<NumberInput
			bind:value={$adrenalsStore.length}
			tooltipText="Normalaus prieinksčio ilgis katėms yra 1-1.1cm, šunims: 1-5cm."
			title="Prieinksčio ilgis, cm"
		/>

		<div class="flex gap-5">
			<NumberInput
				bind:value={$adrenalsStore.widthFront}
				tooltipText="Normalaus prieinksčio plotis katėms yra 0.35-0.45cm , šunims: 0.6-0.8cm."
				title="Priekinio poliaus plotis, cm"
			/>
			<NumberInput
				bind:value={$adrenalsStore.widthBack}
				tooltipText="Normalaus prieinksčio plotis katėms yra 0.35-0.45cm , šunims: 0.6-0.8cm."
				title=" Galinio poliaus plotis, cm"
			/>
		</div>
		<Textarea
			title="Kiti pakitimai"
			bind:value={$adrenalsStore.otherChanges}
			placeholder="masės, citos, kalcifikatai"
		/>
	</div>
</Toggle>
