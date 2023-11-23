<script>
	import { bladder as bladderStore } from '../../../stores/description';
	import Toggle from '../../Toggle.svelte';
	import RadioBtn from '../../RadioBtn.svelte';
	import NumberInput from '../../NumberInput.svelte';
	import Textarea from '../../Textarea.svelte';
	export let show = false;

	const prefix = "bladder"
</script>

<Toggle autoclosable=true classes="card" initialState={show}>
	<div slot="title">Šlapimo pūslė</div>

	<div slot="content">
		<div class="titles ">Šlapimo pūslės sienelė</div>

		<div class="radio">
			<RadioBtn
				{prefix}
				bind:group={$bladderStore.wallThickness}
				value="sustorėjusi"
				name="wall-thickness"
			/>
			<RadioBtn
				{prefix}
				bind:group={$bladderStore.wallThickness}
				value="nesustorėjusi"
				name="wall-thickness"
			/>
		</div>

		<NumberInput
			{prefix}
			tooltipText="Normalus šlapimo pūslės sienelės storis: katėms ≤0.17 cm."
			bind:value={$bladderStore.thickness}
			title="Sienelės storis, cm"
		/>

		<Textarea
			{prefix}
			title="Kiti pakitimai"
			bind:value={$bladderStore.otherChanges}
			placeholder="akmenys, nuosėdos, krešuliai, polipai, dariniai"
		/>
	</div>
</Toggle>
