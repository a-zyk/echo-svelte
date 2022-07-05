<script>
	import Toggle from '../../Toggle.svelte';
	import RadioBtn from '../../RadioBtn.svelte';
	import Textarea from '../../Textarea.svelte';
	import Tooltip from '../../Tooltip.svelte';
	import NumberInput from '../../NumberInput.svelte';
	import { lymphnodes as lymphnodesStore } from '../../../stores/description';

	const addLympnode = () => {
		$lymphnodesStore.splenic = [...$lymphnodesStore.splenic, {}];
	};

	const removeLympnode = () => {
		$lymphnodesStore.splenic = $lymphnodesStore.splenic.slice(0, -1);
	};
</script>

<Toggle classes="card">
	<div class="mb-2 flex gap-2 text-base w-full" slot="title">
		<span>Blužnies</span>

		<Tooltip 
			tooltipText="Lokalizacija: išilgai blužnies venų ir kariosios kasos skilties. Drenuoja: kepenis, blužnį, stemplę, skrandį, kasą ir taukinę."
		/>
	</div>

	<div slot="content">
		<div class="flex flex-col md:flex-row md:gap-9">
			<NumberInput bind:value={$lymphnodesStore.numberSplenic} title="Limfinių m. skaičius" />
			<div>
				<div class="titles">Blužnies lm. yra</div>
				<div class="radio">
					<RadioBtn bind:group={$lymphnodesStore.sizeSplenic} value="padidėję" name="sizeSplenic" />
					<RadioBtn
						bind:group={$lymphnodesStore.sizeSplenic}
						value="nepadidėję"
						name="sizeSplenic"
					/>
				</div>
			</div>
		</div>
		<div class="flex gap-2">
			<div class="titles">Blužnies lm. juos supantiems riebalams yra</div>
			<Tooltip
				tooltipText="Normalus limfinis mazgas yra izoechogeniškas/lengvai hipoechogeniškas jį supantiems riebalams. Mazgas gali būti apsuptas hiperechoiškos kapsulės, mazge gali būti stebimos hiperechoiškos linijos, kurios yra kraujagyslių sienelės. Spalvinis dopleris ne visada rodo kraujo tėkmę."
			/>
		</div>
		<div class="radio">
			<RadioBtn
				bind:group={$lymphnodesStore.echogenSplenic}
				value="izoechogeniški"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$lymphnodesStore.echogenSplenic}
				value="hipoechogeniški"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$lymphnodesStore.echogenSplenic}
				value="hiperechogeniški"
				name="echogenicity"
			/>
		</div>

		<div class="flex-col">
			{#each $lymphnodesStore.splenic as splenic, index}
				<div class="flex-col md:flex-row flex gap-5">
					<NumberInput
						tooltipText="Normalaus limfmazgio pločio ir ilgio santykis ≤0.5."
						bind:value={splenic.length}
						title="Limfinio m. ilgis"
					/>
					<NumberInput
						tooltipText="Normalaus limfmazgio pločio ir ilgio santykis ≤0.5."
						bind:value={splenic.width}
						title="Limfinio m. plotis, cm"
					/>
				</div>
			{/each}
			<button
				on:click={addLympnode}
				class="bg-gray-500 active:bg-blue-500 cursor-pointer text-white text-xs font-bold py-1 px-2 rounded"
				>add</button
			>

			{#if $lymphnodesStore.splenic.length > 1}
				<button
					on:click={removeLympnode}
					class="bg-gray-500 active:bg-blue-500 cursor-pointer text-white text-xs font-bold py-1 px-2 rounded"
					>remove</button
				>
			{/if}
		</div>

		<Textarea
			title="Kiti pakitimai"
			bind:value={$lymphnodesStore.otherChangesSplenic}
			placeholder="masės, kalcifikacijos"
		/>
	</div>
</Toggle>
