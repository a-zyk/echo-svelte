<script>
	import { intestines as intestinesStore } from '../../stores/description';
	import Toggle from '../Toggle.svelte';
	import NumberInput from '../../components/NumberInput.svelte';
	import Textarea from '../../components/Textarea.svelte';
	
</script>

<Toggle autoclosable=true classes="card">
	<div slot="title">Žarnynas</div>
	<div slot="content">
		<div class="flex flex-col md:flex-row align-items-start justify-between gap-10">
			<NumberInput
			tooltipText="Normalios dvylikapirštės žarnos sienelės storis katei ~0.22cm. Šuniui <15kg: ~0.38cm, 15-30kg: ~0.41cm, >30kg: ~0.44cm."
				bind:value={$intestinesStore.thicknessDuo}
				title="Dvylikapirštės žarnos sienelės storis, cm"
			/>

			<Textarea
				title="Kiti pakitimai"
				bind:value={$intestinesStore.otherChangesDuo}
				placeholder="turinys, dujos, masės, svetimkūniai"
			/>
		</div>

		<div class="flex flex-col md:flex-row align-items-start justify-between mt-5 gap-10">
			<NumberInput
			tooltipText="Normalios tuščiosios žarnos sienelės storis katei ~0.22cm. Šuniui <15kg: ~0.3cm, 15-30kg: ~0.35cm, >30kg: ~0.38cm."
				bind:value={$intestinesStore.thicknessJeju}
				title="Tusčiosios žarnos sienelės storis, cm"
			/>
			<Textarea
				title="Kiti pakitimai"
				bind:value={$intestinesStore.otherChangesJeju}
				placeholder="turinys, dujos, masės, svetimkūniai"
			/>
		</div>

		<div class="flex flex-col md:flex-row align-items-start justify-between mt-5 gap-10">
			<NumberInput
			tooltipText="Normalios klubinės žarnos sienelės storis katei ~0.22cm. Šuniui <15kg: ~0.3cm, 15-30kg: ~0.35cm, >30kg: ~0.38cm."
				bind:value={$intestinesStore.thicknessCec}
				title="Klubinės žarnos sienelės storis ties ileocekaline jungtimi, cm"
			/>
			<Textarea
				title="Kiti pakitimai"
				bind:value={$intestinesStore.otherChangesCec}
				placeholder="turinys, dujos, masės, svetimkūniai"
			/>
		</div>

		<div class="flex flex-col md:flex-row align-items-start justify-between mt-5 gap-10">
			<NumberInput
			tooltipText="Normalios storosios žarnos sienelės storis katėms ir šunims yra ~0.15cm."
				bind:value={$intestinesStore.thicknessCol}
				title="Storosios žarnos sienelės storis, cm"
			/>
			<Textarea
				title="Kiti pakitimai"
				bind:value={$intestinesStore.otherChangesCol}
				placeholder="turinys, dujos, masės, svetimkūniai"
			/>
		</div>
	</div>
</Toggle>
