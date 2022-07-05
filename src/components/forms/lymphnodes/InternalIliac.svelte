<script>
	import Toggle from '../../Toggle.svelte';
	import RadioBtn from '../../RadioBtn.svelte';
	import Textarea from '../../Textarea.svelte';
	import Tooltip from '../../Tooltip.svelte';
	import NumberInput from '../../NumberInput.svelte';
	import { lymphnodes as lymphnodesStore } from '../../../stores/description';
	const addLympnode = () => {
		$lymphnodesStore.iliacInt = [...$lymphnodesStore.iliacInt, {}];
	};

	const removeLympnode = () => {
		$lymphnodesStore.iliacInt = $lymphnodesStore.iliacInt.slice(0, -1);
	};
</script>

<Toggle classes="card">
	<div class="mb-2 flex gap-2 text-base" slot="title">
		Vidiniai iliakiniai
		<Tooltip
			tooltipText="Normalūs dažniausiai nematomi. Dažna metastazių iš galinės kūno dalies auglių  vieta. Lokalizacija: tarp giliosios cirkumfleksinės ir išorinės iliakinės arteirjų. 
            Drenuoja: lyties organus, dubens sritį, galines kojas, šlapimo pūslę ir šlapimtakius.
            "
		/>
	</div>

	<div slot="content">
		<div class="flex flex-col md:flex-row md:gap-9">
			<NumberInput bind:value={$lymphnodesStore.numberInternalIliac} title="Limfinių m. skaičius" />
			<div>
				<div class="titles">Vidiniai iliakiniai lm. yra</div>
				<div class="radio">
					<RadioBtn bind:group={$lymphnodesStore.sizeInternalIliac} value="padidėję" name="sizeInternalIliac" />
					<RadioBtn
						bind:group={$lymphnodesStore.sizeInternalIliac}
						value="nepadidėję"
						name="sizeInternalIliac"
					/>
				</div>
			</div>
		</div>

		<div class="flex gap-2">
			<div class="titles">Vidinių iliakinių lm. parenchima ją supantiems riebalams yra</div>
			<Tooltip
				tooltipText="Normalus limfinis mazgas yra izoechogeniškas/lengvai hipoechogeniškas jį supantiems riebalams. Mazgas gali būti apsuptas hiperechoiškos kapsulės, mazge gali būti stebimos hiperechoiškos linijos, kurios yra kraujagyslių sienelės. Spalvinis dopleris ne visada rodo kraujo tėkmę."
			/>
		</div>
		<div class="radio">
			<RadioBtn
				bind:group={$lymphnodesStore.echogenInternalIliac}
				value="izoechogeniški"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$lymphnodesStore.echogenInternalIliac}
				value="hipoechogeniški"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$lymphnodesStore.echogenInternalIliac}
				value="hiperechogeniški"
				name="echogenicity"
			/>
		</div>

		<div class="flex-col">
			{#each $lymphnodesStore.iliacInt as iliacInt, index}
				<div class="flex-col md:flex-row flex gap-5">
					<NumberInput
					tooltipText="Normalaus limfmazgio pločio ir ilgio santykis ≤0.5."
					bind:value={iliacInt.length}
					title='Limfinio m. ilgis, cm'
				/>
					<NumberInput
						tooltipText="Normalaus limfmazgio pločio ir ilgio santykis ≤0.5."
						bind:value={iliacInt.width}
						title='Limfinio m. plotis, cm'
					/>
				
				</div>
			{/each}
			<button
			on:click={addLympnode}
			class="bg-gray-500 active:bg-blue-500 cursor-pointer text-white text-xs font-bold py-1 px-2 rounded"
			>+</button
		>

		{#if $lymphnodesStore.iliacInt.length > 1}
			<button
				on:click={removeLympnode}
				class="bg-gray-500 active:bg-blue-500 cursor-pointer text-white text-xs font-bold py-1 px-2 rounded"
				>−</button
			>
		{/if}
		</div>

		<Textarea
			title="Kiti pakitimai"
			bind:value={$lymphnodesStore.otherChangesInternalIliac}
			placeholder="masės, kalcifikacijos"
		/>
	</div>
</Toggle>
