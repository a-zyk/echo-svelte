<script>
	import { adrenalsL as adrenalsLStore, adrenalsR as adrenalsRStore } from '../../stores/description';
	import Toggle from '../../components/Toggle.svelte';
	import RadioBtn from '../../components/RadioBtn.svelte';
	import NumberInput from '../../components/NumberInput.svelte';
	import Textarea from '../../components/Textarea.svelte';
	import Tooltip from '../../components/Tooltip.svelte';
</script>

<Toggle autoclosable=true classes="card">
	<div slot="title">Prieinksčiai</div>
	<div slot="content">
		<div class="font-bold text-md text-center mb-2">Kairys prieinkstis</div>
		<div class="flex gap-2">
			<div class="titles ">aplinkui esantiems riebalams prieinksčio žievė</div>
			<Tooltip
				tooltipText="Normalaus prieinksčio žievė jį supantiems riebalams yra hipoechoiška."
			/>
		</div>
		<div class="radio">
			<RadioBtn bind:group={$adrenalsLStore.echogen} value="izoechogeniška" name="echogenicityL" />
			<RadioBtn bind:group={$adrenalsLStore.echogen} value="hipoechogeniška" name="echogenicityL" />
			<RadioBtn bind:group={$adrenalsLStore.echogen} value="hiperechogeniška" name="echogenicityL" />
		</div>

		<NumberInput
			bind:value={$adrenalsLStore.length}
			tooltipText="Normalus prieinksčio ilgis katėms yra 1-1.1cm, šunims: 1-5cm."
			title="Prieinksčio ilgis, cm"
		/>

		<div class=" flex-col md:flex-row flex gap-5">
			<NumberInput
				bind:value={$adrenalsLStore.widthFront}
				tooltipText="Normalus prieinksčio plotis katėms yra 0.35-0.45cm , šunims: 0.6-0.8cm."
				title="Priekinio poliaus plotis, cm"
			/>
			<NumberInput
				bind:value={$adrenalsLStore.widthBack}
				tooltipText="Normalus prieinksčio plotis katėms yra 0.35-0.45cm , šunims: 0.6-0.8cm."
				title=" Galinio poliaus plotis, cm"
			/>
		</div>
		<Textarea
			title="Kiti pakitimai"
			bind:value={$adrenalsLStore.otherChanges}
			placeholder="masės, citos, kalcifikatai"
		/>

		<div class="font-bold text-md text-center mt-5 mb-2">Dešinys prieinkstis</div>
		<div class="flex gap-2">
			<div class="titles ">aplinkui esantiems riebalams prieinksčio žievė</div>
			<Tooltip
				tooltipText="Normalaus prieinksčio žievė jį supantiems riebalams yra hipoechoiška."
			/>
		</div>
		<div class="radio">
			<RadioBtn bind:group={$adrenalsRStore.echogen} value="izoechogeniška" name="echogenicityL" />
			<RadioBtn bind:group={$adrenalsRStore.echogen} value="hipoechogeniška" name="echogenicityL" />
			<RadioBtn bind:group={$adrenalsRStore.echogen} value="hiperechogeniška" name="echogenicityL" />
		</div>

		<NumberInput
			bind:value={$adrenalsRStore.length}
			tooltipText="Normalaus prieinksčio ilgis katėms yra 1-1.1cm, šunims: 1-5cm."
			title="Prieinksčio ilgis, cm"
		/>

		<div class=" flex-col md:flex-row flex gap-5">
			<NumberInput
				bind:value={$adrenalsRStore.widthFront}
				tooltipText="Normalaus prieinksčio plotis katėms yra 0.35-0.45cm , šunims: 0.6-0.8cm."
				title="Priekinio poliaus plotis, cm"
			/>
			<NumberInput
				bind:value={$adrenalsRStore.widthBack}
				tooltipText="Normalaus prieinksčio plotis katėms yra 0.35-0.45cm , šunims: 0.6-0.8cm."
				title=" Galinio poliaus plotis, cm"
			/>
		</div>
		<Textarea
			title="Kiti pakitimai"
			bind:value={$adrenalsRStore.otherChanges}
			placeholder="masės, citos, kalcifikatai"
		/>
	</div>
</Toggle>
