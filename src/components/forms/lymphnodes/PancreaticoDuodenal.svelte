<script>
	import Toggle from '../../Toggle.svelte';
	import RadioBtn from '../../RadioBtn.svelte';
	import Textarea from '../../Textarea.svelte';
	import Tooltip from '../../Tooltip.svelte';
	import NumberInput from '../../NumberInput.svelte';
	import { lymphnodes as lymphnodesStore } from '../../../stores/description';
</script>

<Toggle classes="card">
	<div class="mb-2 flex gap-2 text-base " slot="title">
		Kasos ir dvylikapirštės žarnos 
		<Tooltip
			tooltipText="Lokalizacija: šalia kranialinio dvylikapirštės žarnos linkio, tarp prievarčio ir dešniosios kasos skilties. Drenuoja: kasą, dvylikapirštę žarną ir taukinę."
		/>
	</div>

	<div slot="content">
		<div class="flex gap-2">
			<div class="titles">Kasos ir dvylikapirštės žarnos lm. juos supantiems riebalams yra</div>
			<Tooltip
				tooltipText="Normalus limfinis mazgas yra izoechogeniškas/lengvai hipoechogeniškas jį supantiems riebalams. Mazgas gali būti apsuptas hiperechoiškos kapsulės, mazge gali būti stebimos hiperechoiškos linijos, kurios yra kraujagyslių sienelės. Spalvinis dopleris ne visada rodo kraujo tėkmę."
			/>
		</div>
		<div class="radio">
			<RadioBtn
				bind:group={$lymphnodesStore.echogenPancrDuo}
				value="izoechogeniški"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$lymphnodesStore.echogenPancrDuo}
				value="hipoechogeniški"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$lymphnodesStore.echogenPancrDuo}
				value="hiperechogeniški"
				name="echogenicity"
			/>
		</div>

		<div class="flex-col md:flex-row flex gap-5">
			<NumberInput
				tooltipText="Normalaus limfmazgio pločio ir ilgio santykis ≤0.5."
				bind:value={$lymphnodesStore.lengthPancrDuo}
				title="Limfinio m. ilgis, cm"
			/>
			<NumberInput
				tooltipText="Normalaus limfmazgio pločio ir ilgio santykis ≤0.5."
				bind:value={$lymphnodesStore.widthPancrDuo}
				title="Limfinio m. plotis, cm"
			/>
		</div>

		<Textarea
			title="Kiti pakitimai"
			bind:value={$lymphnodesStore.otherChangesPancrDuo}
			placeholder="masės, kalcifikacijos"
		/>
	</div>
</Toggle>
