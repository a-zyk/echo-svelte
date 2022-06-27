<script>
	import { pancreas as pancreasStore } from '../../stores/description';
	import Toggle from '../Toggle.svelte';
	import RadioBtn from '../../components/RadioBtn.svelte';
	import NumberInput from '../../components/NumberInput.svelte';
	import Textarea from '../../components/Textarea.svelte';
</script>

<Toggle classes="card">
	<div slot="title">Kasa</div>
	<div slot="content">
		<div class="titles">Kasa aplink esantiems riebalams</div>

		<div class="radio">
			<RadioBtn bind:group={$pancreasStore.echogen} value="izoechogeniška" name="echogenicity" />
			<RadioBtn bind:group={$pancreasStore.echogen} value="hipoechogeniška" name="echogenicity" />
			<RadioBtn bind:group={$pancreasStore.echogen} value="hiperechogeniška" name="echogenicity" />
		</div>

		<NumberInput bind:value={$pancreasStore.width} title="Kasos latako plotis, cm" />
		<Textarea
			title="Kiti pakitimai"
			bind:value={$pancreasStore.otherChanges}
			placeholder=" masės, citos, kalcifikatai"
		/>
	</div>
</Toggle>
