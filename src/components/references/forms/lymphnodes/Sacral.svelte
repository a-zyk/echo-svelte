<script>
	import Toggle from '../../../Toggle.svelte';
	import RadioBtn from '../../../RadioBtn.svelte';
	import Textarea from '../../../Textarea.svelte';
	import Tooltip from '../../../Tooltip.svelte';
	import NumberInput from '../../../NumberInput.svelte';
	import { lymphnodes as lymphnodesStore } from '../../../../stores/description';
	const addLympnode = () => {
		$lymphnodesStore.sacral = [...$lymphnodesStore.sacral, {}];
	};

	const removeLympnode = () => {
		$lymphnodesStore.sacral = $lymphnodesStore.sacral.slice(0, -1);
	};
</script>

<Toggle classes="card">
	<div class="mb-2 flex gap-2 text-base" slot="title">
		Sakraliniai
		<Tooltip
			tooltipText="Normaliai nematomi, nes uždengia dubens lankas. Matomi tik itin padidėję- dažniausiai dėl metastazių. Lokalizacija: Medialiai vidinei iliakinei arterijai ir išilgai vidurinei sakralinei arterijai. 
            Drenuoja: lyties organus, dubens sritį, galines kojas, šlapimo pūslę ir šlapimtakius.
            "
		/>
	</div>

	<div slot="content">

		<div class="flex flex-col md:flex-row md:gap-9">
			<NumberInput bind:value={$lymphnodesStore.numberSacral} title="Limfinių m. skaičius" />
			<div>
				<div class="titles">Sakraliniai lm. yra</div>
				<div class="radio">
					<RadioBtn bind:group={$lymphnodesStore.sizeSacral} value="padidėję" name="sizeSacral" />
					<RadioBtn
						bind:group={$lymphnodesStore.sizeSacral}
						value="nepadidėję"
						name="sizeSacral"
					/>
				</div>
			</div>
		</div>
		<div class="flex gap-2">
			<div class="titles">Sakralinių lm. parenchima ją supantiems riebalams yra</div>
			<Tooltip
				tooltipText="Normalus limfinis mazgas yra izoechogeniškas/lengvai hipoechogeniškas jį supantiems riebalams. Mazgas gali būti apsuptas hiperechoiškos kapsulės, mazge gali būti stebimos hiperechoiškos linijos, kurios yra kraujagyslių sienelės. Spalvinis dopleris ne visada rodo kraujo tėkmę."
			/>
		</div>
		<div class="radio">
			<RadioBtn
				bind:group={$lymphnodesStore.echogenSacral}
				value="izoechogeniška"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$lymphnodesStore.echogenSacral}
				value="hipoechogeniška"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$lymphnodesStore.echogenSacral}
				value="hiperechogeniška"
				name="echogenicity"
			/>
		</div>

		<div class="flex-col">
			{#each $lymphnodesStore.sacral as sacral, index}
				<div class="flex-col md:flex-row flex gap-5">
					<NumberInput
					tooltipText="Normalaus limfmazgio pločio ir ilgio santykis ≤0.5."
					bind:value={sacral.length}
					title='Limfinio m. ilgis, cm'
				/>
					<NumberInput
						tooltipText="Normalaus limfmazgio pločio ir ilgio santykis ≤0.5."
						bind:value={sacral.width}
						title='Limfinio m. plotis, cm'
					/>
				
				</div>
			{/each}
			<button
			on:click={addLympnode}
			class="bg-gray-500 active:bg-blue-500 cursor-pointer text-white text-xs font-bold py-1 px-2 rounded"
			>+</button
		>

		{#if $lymphnodesStore.sacral.length > 1}
			<button
				on:click={removeLympnode}
				class="bg-gray-500 active:bg-blue-500 cursor-pointer text-white text-xs font-bold py-1 px-2 rounded"
				>−</button
			>
		{/if}
		</div>

		<Textarea
			title="Kiti pakitimai"
			bind:value={$lymphnodesStore.otherChangesSacral}
			placeholder="masės, kalcifikacijos"
		/>
	</div>
</Toggle>
