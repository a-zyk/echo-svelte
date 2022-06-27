<script>
	import { intestines as intestinesStore } from '../../stores/description';
	import Toggle from '../Toggle.svelte';
	import NumberInput from '../../components/NumberInput.svelte';
	import Textarea from '../../components/Textarea.svelte';
</script>

<Toggle classes="card">
	<div slot="title">Žarnynas</div>
	<div slot="content">
		<div class="flex align-items-start justify-between gap-8">
			<NumberInput
				bind:value={$intestinesStore.thicknessDuo}
				title="Dvylikapirštės žarnos sienelės storis, cm"
			/>

			<Textarea
				title="Kiti pakitimai"
				bind:value={$intestinesStore.otherChangesDuo}
				placeholder="turinys, dujos, masės, svetimkūniai"
			/>
		</div>

		<div class="flex align-items-start justify-between mt-5 gap-8">
			<NumberInput
				bind:value={$intestinesStore.thicknessJeju}
				title="Tusčiosios žarnos sienelės storis, cm"
			/>
			<Textarea
				title="Kiti pakitimai"
				bind:value={$intestinesStore.otherChangesJeju}
				placeholder="turinys, dujos, masės, svetimkūniai"
			/>
		</div>

		<div class="flex  align-items-start justify-between mt-5 gap-8">
			<NumberInput
				bind:value={$intestinesStore.thicknessCec}
				title="Aklosios žarnos sienelės storis ties ileocekaline jungtimi, cm"
			/>
			<Textarea
				title="Kiti pakitimai"
				bind:value={$intestinesStore.otherChangesCec}
				placeholder="turinys, dujos, masės, svetimkūniai"
			/>
		</div>

		<div class="flex  align-items-start justify-between mt-5 gap-8">
			<NumberInput
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
