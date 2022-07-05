<script>
	import Toggle from '../../Toggle.svelte';
	import RadioBtn from '../../RadioBtn.svelte';
	import Textarea from '../../Textarea.svelte';
	import Tooltip from '../../Tooltip.svelte';
	import NumberInput from '../../NumberInput.svelte';
	import { lymphnodes as lymphnodesStore } from '../../../stores/description';

	const addLympnode = () => {
		$lymphnodesStore.hepatic = [...$lymphnodesStore.hepatic, {}];
	};

	const removeLympnode = () => {
		$lymphnodesStore.hepatic = $lymphnodesStore.hepatic.slice(0, -1);
	};
</script>

<Toggle classes="card">
	<div class="text-center mb-2 flex gap-2 text-base" slot="title">
		Hepatiniai
		<Tooltip
			tooltipText="Lokalizacija: išilgai v.porta, kaudaliai porta hepatis. Drenuoja: kepenis, skrandį, dvylikapirštę ir kasą."
		/>
	</div>

	<div slot="content">
		<div class="flex flex-col md:flex-row md:gap-9">
			<NumberInput bind:value={$lymphnodesStore.numberHepatic} title="Limfinių m. skaičius" />
			<div>
				<div class="titles">Hepatiniai lm. yra</div>
				<div class="radio">
					<RadioBtn bind:group={$lymphnodesStore.sizeHepatic} value="padidėję" name="sizeHepatic" />
					<RadioBtn
						bind:group={$lymphnodesStore.sizeHepatic}
						value="nepadidėję"
						name="sizeHepatic"
					/>
				</div>
			</div>
		</div>
		<div class="flex gap-2">
			<div class="titles">Hepatiniai lm. paranechima supantiems riebalams yra</div>
			<Tooltip
				tooltipText="Normalus limfinis mazgas yra izoechogeniškas/lengvai hipoechogeniškas jį supantiems riebalams. Mazgas gali būti apsuptas hiperechoiškos kapsulės, mazge gali būti stebimos hiperechoiškos linijos, kurios yra kraujagyslių sienelės. Spalvinis dopleris ne visada rodo kraujo tėkmę."
			/>
		</div>
		<div class="radio">
			<RadioBtn
				bind:group={$lymphnodesStore.echogenHepatic}
				value="izoechogeniška"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$lymphnodesStore.echogenHepatic}
				value="hipoechogeniška"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$lymphnodesStore.echogenHepatic}
				value="hiperechogeniška"
				name="echogenicity"
			/>
		</div>

		<!-- <div class="flex items-center flex-row"> -->
			<div class="flex-col">
				{#each $lymphnodesStore.hepatic as hepatic, index}
					<div class="flex-col md:flex-row flex gap-5">
						<NumberInput
						tooltipText="Normalaus limfmazgio pločio ir ilgio santykis ≤0.5."
						bind:value={hepatic.length}
						title='Limfinio m. ilgis, cm'
					/>
						<NumberInput
							tooltipText="Normalaus limfmazgio pločio ir ilgio santykis ≤0.5."
							bind:value={hepatic.width}
							title='Limfinio m. plotis, cm'
						/>
					
					</div>
				{/each}
				<button
				on:click={addLympnode}
				class="bg-gray-500 active:bg-blue-500 cursor-pointer text-white text-xs font-bold py-1 px-2 rounded"
				>+</button
			>

			{#if $lymphnodesStore.hepatic.length > 1}
				<button
					on:click={removeLympnode}
					class="bg-gray-500 active:bg-blue-500 cursor-pointer text-white text-xs font-bold py-1 px-2 rounded"
					>−</button
				>
			{/if}
			</div>
			
		<!-- </div> -->

		<Textarea
			title="Kiti pakitimai"
			bind:value={$lymphnodesStore.otherChangesHepatic}
			placeholder="masės, kalcifikacijos"
		/>
	</div>
</Toggle>
