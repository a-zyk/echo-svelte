<script>
	import { bladder as bladderStore } from '../../stores/description';
	import Toggle from '../../components/Toggle.svelte';
	import RadioBtn from '../../components/RadioBtn.svelte';
	import NumberInput from '../../components/NumberInput.svelte';
	import Textarea from '../../components/Textarea.svelte';
	export let show = false;
</script>

<Toggle autoclosable=true classes="card" initialState={show}>
	<div slot="title">Šlapimo pūslė</div>

	<div slot="content">
		<div class="titles ">Šlapimo pūslės sienelė</div>

		<div class="radio">
			<RadioBtn
				bind:group={$bladderStore.wallThickness}
				value="sustorėjusi"
				name="wall-thickness"
			/>
			<RadioBtn
				bind:group={$bladderStore.wallThickness}
				value="nesustorėjusi"
				name="wall-thickness"
			/>
		</div>

		<NumberInput
			tooltipText="Normalus šlapimo pūslės sienelės storis: katėms ≤0.17 cm, šunims ≤0.3 cm."
			bind:value={$bladderStore.thickness}
			title="Sienelės storis, cm"
		/>

		<Textarea
			title="Kiti pakitimai"
			bind:value={$bladderStore.otherChanges}
			placeholder="akmenys, nuosėdos, krešuliai, polipai, dariniai"
		/>
	</div>
</Toggle>
