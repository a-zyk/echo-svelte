<script>
	import Toggle from '../../Toggle.svelte';
	import RadioBtn from '../../RadioBtn.svelte';
	import Textarea from '../../Textarea.svelte';
	import Tooltip from '../../Tooltip.svelte';
	import NumberInput from '../../NumberInput.svelte';
	import { lymphnodes as lymphnodesStore } from '../../../stores/description';
	const addLympnode = () => {
		$lymphnodesStore.colic = [...$lymphnodesStore.colic, {}];
	};

	const removeLympnode = () => {
		$lymphnodesStore.colic = $lymphnodesStore.colic.slice(0, -1);
	};
</script>

<Toggle classes="card">
	<div class=" mb-2 flex gap-2 text-base" slot="title">
		Gaubtinės žarnos
		<Tooltip
			tooltipText="Lokalizacija: šalia ileokolinės jungties (dešinysis aklosios ž. lm.), mesokolono (vidurinysis aklosios ž. lm.), kaudaliai nusileidžiančiosios aklosios žarnos dalies (kairysis aklosios ž. lm.) Drenuoja: klubinę žarną, aklają žarną ir tiesiają žarną."
		/>
	</div>

	<div slot="content">
		<div class="flex flex-col md:flex-row md:gap-9">
			<NumberInput bind:value={$lymphnodesStore.numberColic} title="Limfinių m. skaičius" />
			<div>
				<div class="titles">Gaubtinės žarnos lm. yra</div>
				<div class="radio">
					<RadioBtn bind:group={$lymphnodesStore.sizeColic} value="padidėję" name="sizeColic" />
					<RadioBtn bind:group={$lymphnodesStore.sizeColic} value="nepadidėję" name="sizeColic" />
				</div>
			</div>
		</div>

		<div class="flex gap-2">
			<div class="titles">Gaubtinės žarnos lm. parenchima ją supantiems riebalams yra</div>
			<Tooltip
				tooltipText="Normalus limfinis mazgas yra izoechogeniškas/lengvai hipoechogeniškas jį supantiems riebalams. Mazgas gali būti apsuptas hiperechoiškos kapsulės, mazge gali būti stebimos hiperechoiškos linijos, kurios yra kraujagyslių sienelės. Spalvinis dopleris ne visada rodo kraujo tėkmę."
			/>
		</div>
		<div class="radio">
			<RadioBtn
				bind:group={$lymphnodesStore.echogenColic}
				value="izoechogeniška"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$lymphnodesStore.echogenColic}
				value="hipoechogeniška"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$lymphnodesStore.echogenColic}
				value="hiperechogeniška"
				name="echogenicity"
			/>
		</div>

		<div class="flex-col">
			{#each $lymphnodesStore.colic as colic, index}
				<div class="flex-col md:flex-row flex gap-5">
					<NumberInput
						tooltipText="Normalaus limfmazgio pločio ir ilgio santykis ≤0.5."
						bind:value={colic.length}
						title="Limfinio m. ilgis, cm"
					/>
					<NumberInput
						tooltipText="Normalaus limfmazgio pločio ir ilgio santykis ≤0.5."
						bind:value={colic.width}
						title="Limfinio m. plotis, cm"
					/>
				</div>
			{/each}
			<button
				on:click={addLympnode}
				class="bg-gray-500 active:bg-blue-500 cursor-pointer text-white text-xs font-bold py-1 px-2 rounded"
				>+</button
			>

			{#if $lymphnodesStore.colic.length > 1}
				<button
					on:click={removeLympnode}
					class="bg-gray-500 active:bg-blue-500 cursor-pointer text-white text-xs font-bold py-1 px-2 rounded"
					>−</button
				>
			{/if}
		</div>

		<Textarea
			title="Kiti pakitimai"
			bind:value={$lymphnodesStore.otherChangesColic}
			placeholder="masės, kalcifikacijos"
		/>
	</div>
</Toggle>
