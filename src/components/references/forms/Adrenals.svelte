<script>
	import {
		adrenalsL as adrenalsLStore,
		adrenalsR as adrenalsRStore
	} from '../../../stores/description';
	import Toggle from '../../Toggle.svelte';
	import RadioBtn from '../../RadioBtn.svelte';
	import NumberInput from '../../NumberInput.svelte';
	import Textarea from '../../Textarea.svelte';
	import Tooltip from '../../Tooltip.svelte';

	const prefixLeft = "adrenalLeft"
	const prefixRight = "adrenalRight"
</script>

<Toggle autoclosable="true" classes="card">
	<div slot="title">Prieinksčiai</div>
	<div slot="content">
		<div class="font-bold text-md text-center mb-2">Kairys prieinkstis</div>
		<div class="flex gap-2">
			<div class="titles ">Aplinkui esantiems riebalams prieinksčio žievė</div>
			<Tooltip
				tooltipText="Normalaus prieinksčio žievė jį supantiems riebalams yra hipoechoiška."
			/>
		</div>
		<div class="radio">
			<RadioBtn prefix={prefixLeft} bind:group={$adrenalsLStore.echogen} value="izoechogeniška" name="echogenicityL" />
			<RadioBtn prefix={prefixLeft} bind:group={$adrenalsLStore.echogen} value="hipoechogeniška" name="echogenicityL" />
			<RadioBtn prefix={prefixLeft}
				bind:group={$adrenalsLStore.echogen}
				value="hiperechogeniška"
				name="echogenicityL"
			/>
		</div>

		<NumberInput prefix={prefixLeft}
		
			bind:value={$adrenalsLStore.length}
			tooltipText="Normalus prieinksčio ilgis katėms yra ~1-1.1cm, šunims: ~1-5cm."
			title="Prieinksčio ilgis, cm"
		/>

		<div class=" flex-col md:flex-row flex gap-5">
			<NumberInput prefix={prefixLeft}
				bind:value={$adrenalsLStore.widthFront}
				tooltipText="Normalus prieinksčio plotis katėms yra ~0.35-0.45cm , šunims: ~0.6-0.8cm."
				title="Priekinio poliaus plotis, cm"
			/>
			<NumberInput prefix={prefixLeft}
				bind:value={$adrenalsLStore.widthBack}
				tooltipText="Normalus prieinksčio plotis katėms yra ~0.35-0.45cm , šunims: ~0.6-0.8cm."
				title=" Galinio poliaus plotis, cm"
			/>
		</div>
		<Textarea
		prefix={prefixLeft}
			title="Kiti pakitimai"
			bind:value={$adrenalsLStore.otherChanges}
			placeholder="masės, kalcifikatai"
		/>

		<div class="font-bold text-md text-center mt-5 mb-2">Dešinys prieinkstis</div>
		<div class="flex gap-2">
			<div class="titles ">Aplinkui esantiems riebalams prieinksčio žievė</div>
			<Tooltip
				tooltipText="Normalaus prieinksčio žievė jį supantiems riebalams yra hipoechoiška."
			/>
		</div>
		<div class="radio">
			<RadioBtn prefix={prefixRight} bind:group={$adrenalsRStore.echogen} value="izoechogeniška" name="echogenicityL" />
			<RadioBtn prefix={prefixRight} bind:group={$adrenalsRStore.echogen} value="hipoechogeniška" name="echogenicityL" />
			<RadioBtn prefix={prefixRight}
				bind:group={$adrenalsRStore.echogen}
				value="hiperechogeniška"
				name="echogenicityL"
			/>
		</div>

		<NumberInput prefix={prefixRight}
			bind:value={$adrenalsRStore.length}
			tooltipText="Normalaus prieinksčio ilgis katėms yra ~1-1.1cm, šunims: ~1-5cm."
			title="Prieinksčio ilgis, cm"
		/>

		<div class=" flex-col md:flex-row flex gap-5">
			<NumberInput prefix={prefixRight}
				bind:value={$adrenalsRStore.widthFront}
				tooltipText="Normalaus prieinksčio plotis katėms yra ~0.35-0.45cm , šunims: ~0.6-0.8cm."
				title="Priekinio poliaus plotis, cm"
			/>
			<NumberInput prefix={prefixRight}
				bind:value={$adrenalsRStore.widthBack}
				tooltipText="Normalaus prieinksčio plotis katėms yra ~0.35-0.45cm , šunims: ~0.6-0.8cm."
				title=" Galinio poliaus plotis, cm"
			/>
		</div>
		<Textarea
		prefix={prefixRight}
			title="Kiti pakitimai"
			bind:value={$adrenalsRStore.otherChanges}
			placeholder="masės, kalcifikatai"
		/>
	</div>
</Toggle>
