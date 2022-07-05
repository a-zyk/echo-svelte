<script>
	import Toggle from '../../Toggle.svelte';
	import RadioBtn from '../../RadioBtn.svelte';
	import Textarea from '../../Textarea.svelte';
	import Tooltip from '../../Tooltip.svelte';
	import NumberInput from '../../NumberInput.svelte';
	import { lymphnodes as lymphnodesStore } from '../../../stores/description';
	const addLympnode = () => {
		$lymphnodesStore.pancrDuo = [...$lymphnodesStore.pancrDuo, {}];
	};

	const removeLympnode = () => {
		$lymphnodesStore.pancrDuo = $lymphnodesStore.pancrDuo.slice(0, -1);
	};
</script>

<Toggle classes="card">
	<div class="mb-2 flex gap-2 text-base flex-wrap" slot="title">
		Kasos ir dvylikapirštės
		<Tooltip
			tooltipText="Lokalizacija: šalia kranialinio dvylikapirštės žarnos linkio, tarp prievarčio ir dešniosios kasos skilties. Drenuoja: kasą, dvylikapirštę žarną ir taukinę."
		/>
	</div>

	<div slot="content">

		<div class="flex flex-col md:flex-row md:gap-9">
			<NumberInput bind:value={$lymphnodesStore.numberPancrDuo} title="Limfinių m. skaičius" />
			<div>
				<div class="titles">Kasos ir dvylikapirštės lm. yra</div>
				<div class="radio">
					<RadioBtn bind:group={$lymphnodesStore.sizePancrDuo} value="padidėję" name="sizePancrDuo" />
					<RadioBtn
						bind:group={$lymphnodesStore.sizePancrDuo}
						value="nepadidėję"
						name="sizePancrDuo"
					/>
				</div>
			</div>
		</div>


		<div class="flex gap-2">
			<div class="titles">Kasos ir dvylikapirštės lm. parenchima ją supantiems riebalams yra</div>
			<Tooltip
				tooltipText="Normalus limfinis mazgas yra izoechogeniškas/lengvai hipoechogeniškas jį supantiems riebalams. Mazgas gali būti apsuptas hiperechoiškos kapsulės, mazge gali būti stebimos hiperechoiškos linijos, kurios yra kraujagyslių sienelės. Spalvinis dopleris ne visada rodo kraujo tėkmę."
			/>
		</div>
		<div class="radio">
			<RadioBtn
				bind:group={$lymphnodesStore.echogenPancrDuo}
				value="izoechogeniška"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$lymphnodesStore.echogenPancrDuo}
				value="hipoechogeniška"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$lymphnodesStore.echogenPancrDuo}
				value="hiperechogeniška"
				name="echogenicity"
			/>
		</div>

		<div class="flex-col">
			{#each $lymphnodesStore.pancrDuo as pancrDuo, index}
				<div class="flex-col md:flex-row flex gap-5">
					<NumberInput
					tooltipText="Normalaus limfmazgio pločio ir ilgio santykis ≤0.5."
					bind:value={pancrDuo.length}
					title='Limfinio m. ilgis, cm'
				/>
					<NumberInput
						tooltipText="Normalaus limfmazgio pločio ir ilgio santykis ≤0.5."
						bind:value={pancrDuo.width}
						title='Limfinio m. plotis, cm'
					/>
				
				</div>
			{/each}
			<button
			on:click={addLympnode}
			class="bg-gray-500 active:bg-blue-500 cursor-pointer text-white text-xs font-bold py-1 px-2 rounded"
			>+</button
		>

		{#if $lymphnodesStore.pancrDuo.length > 1}
			<button
				on:click={removeLympnode}
				class="bg-gray-500 active:bg-blue-500 cursor-pointer text-white text-xs font-bold py-1 px-2 rounded"
				>−</button
			>
		{/if}
		</div>

		<Textarea
			title="Kiti pakitimai"
			bind:value={$lymphnodesStore.otherChangesPancrDuo}
			placeholder="masės, kalcifikacijos"
		/>
	</div>
</Toggle>
