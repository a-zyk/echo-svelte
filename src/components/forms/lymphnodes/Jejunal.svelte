<script>
	import Toggle from '../../Toggle.svelte';
	import RadioBtn from '../../RadioBtn.svelte';
	import Textarea from '../../Textarea.svelte';
	import Tooltip from '../../Tooltip.svelte';
	import NumberInput from '../../NumberInput.svelte';
	import { lymphnodes as lymphnodesStore } from '../../../stores/description';

	const addLympnode = () => {
		$lymphnodesStore.jejunal = [...$lymphnodesStore.jejunal, {}];
	};

	const removeLympnode = () => {
		$lymphnodesStore.jejunal = $lymphnodesStore.jejunal.slice(0, -1);
	};
</script>

<Toggle classes="card">
	<div class="mb-2 flex gap-2 text-base break" slot="title">
		Tuščiosios žarnos (mezenteriniai)
		<div class="flex flex-grow" />
		<Tooltip
			tooltipText="Lokalizacija: išilgai mezenterinio kraujagysliu mazgo (kranialinės mezenterinė arterijos ir venos). Drenuoja: tuščiają, klubinę žarnas ir kasą."
		/>
	</div>

	<div slot="content">
		<div class="flex flex-col md:flex-row md:gap-9">
			<NumberInput bind:value={$lymphnodesStore.numberJejunal} title="Limfinių m. skaičius" />
			<div>
				<div class="titles">Tuščiosios žarnos (mezenterinia) lm. yra</div>
				<div class="radio">
					<RadioBtn bind:group={$lymphnodesStore.sizeJejunal} value="padidėję" name="sizeJejunal" />
					<RadioBtn
						bind:group={$lymphnodesStore.sizeJejunal}
						value="nepadidėję"
						name="sizeJejunal"
					/>
				</div>
			</div>
		</div>
	
		<div class="flex gap-2">
			<div class="titles">Tuščiosios žarnos (mezenterinių) lm. juos supantiems riebalams yra</div>
			<Tooltip
				tooltipText="Normalus limfinis mazgas yra izoechogeniškas/lengvai hipoechogeniškas jį supantiems riebalams. Mazgas gali būti apsuptas hiperechoiškos kapsulės, mazge gali būti stebimos hiperechoiškos linijos, kurios yra kraujagyslių sienelės. Spalvinis dopleris ne visada rodo kraujo tėkmę."
			/>
		</div>
		<div class="radio">
			<RadioBtn
				bind:group={$lymphnodesStore.echogenJejunal}
				value="izoechogeniša"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$lymphnodesStore.echogenJejunal}
				value="hipoechogeniška"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$lymphnodesStore.echogenJejunal}
				value="hiperechogeniška"
				name="echogenicity"
			/>
		</div>

		<div class="flex-col">
			{#each $lymphnodesStore.jejunal as jejunal, index}
				<div class="flex-col md:flex-row flex gap-5">
					<NumberInput
						tooltipText="Normalaus limfmazgio pločio ir ilgio santykis ≤0.5."
						bind:value={jejunal.length}
						title="Limfinio m. ilgis, cm"
					/>
					<NumberInput
						tooltipText="Normalaus limfmazgio pločio ir ilgio santykis ≤0.5."
						bind:value={jejunal.width}
						title="Limfinio m. plotis, cm"
					/>
				</div>
			{/each}

			<button
				on:click={addLympnode}
				class="bg-gray-500 active:bg-blue-500 cursor-pointer text-white text-xs font-bold py-1 px-2 rounded"
				>+</button
			>

			{#if $lymphnodesStore.jejunal.length > 1}
				<button
					on:click={removeLympnode}
					class="bg-gray-500 active:bg-blue-500 cursor-pointer text-white text-xs font-bold py-1 px-2 rounded"
					>−</button
				>
			{/if}
		</div>
		<Textarea
			title="Kiti pakitimai"
			bind:value={$lymphnodesStore.otherChangesJejunal}
			placeholder="masės, kalcifikacijos"
		/>
	</div>
</Toggle>
