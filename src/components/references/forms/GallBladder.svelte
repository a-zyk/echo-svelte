<script>
	import { gallB as gallBStore } from '../../../stores/description';
	import Toggle from '../../Toggle.svelte';
	import RadioBtn from '../../RadioBtn.svelte';
	import NumberInput from '../../NumberInput.svelte';
	import Textarea from '../../Textarea.svelte';
	import Tooltip from '../../Tooltip.svelte';

	const prefix = "gallBladder"
</script>

<Toggle autoclosable="true" classes="card">
	<div slot="title">Tulžies pūslė ir bendrasis tulžies latakas</div>
	<div slot="content">
		<div class="flex gap-2">
			<div class="titles">Tulžies pūslės sienelė</div>
			<Tooltip
				tooltipText="Normalios tulžies pūslės sienelės storis katėms ir šunims yra <0.1cm."
			/>
		</div>
		<div class="radio">
			<RadioBtn {prefix} bind:group={$gallBStore.wallThickness} value="sustorėjusi" name="wall-thickness" />
			<RadioBtn {prefix}
				bind:group={$gallBStore.wallThickness}
				value="nesustorėjusi"
				name="wall-thickness"
			/>
		</div>

		<NumberInput {prefix} bind:value={$gallBStore.thickness} title=" Tulžies pūslės sienelės storis, cm" />

		<div class="titles">Bendrasisi tulžies latakas</div>

		<div class="radio">
			<RadioBtn {prefix} bind:group={$gallBStore.ductus} value="neprasiplėtęs" name="ductus" />
			<RadioBtn {prefix} bind:group={$gallBStore.ductus} value="prasiplėtęs" name="ductus" />
		</div>

		<NumberInput {prefix}
			tooltipText="Normalus tulžies pūslės latako skersmuo yra ≤0.4cm katėms ir ≤0.3cm šunims."
			bind:value={$gallBStore.ductusCm}
			title=" Bendrojo tulžies latako skersmuo, cm"
		/>

		<Textarea
		{prefix}
			title="Kiti pakitimai"
			bind:value={$gallBStore.otherChanges}
			placeholder="akmenys, nuosėdos, dariniai"
		/>
	</div>
</Toggle>
