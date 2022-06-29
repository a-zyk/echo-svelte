<script>
	import { pancreas as pancreasStore } from '../../stores/description';
	import Toggle from '../Toggle.svelte';
	import RadioBtn from '../../components/RadioBtn.svelte';
	import NumberInput from '../../components/NumberInput.svelte';
	import Textarea from '../../components/Textarea.svelte';
	import Tooltip from '../../components/Tooltip.svelte';
</script>

<Toggle autoclosable="true" classes="card">
	<div slot="title">Kasa</div>
	<div slot="content">
		<div class="flex gap-2">
			<div class="titles">Kasa aplink esantiems riebalams</div>
			<Tooltip tooltipText="Normali kasa aplinkiniams riebalams yra izoechogeniška." />
		</div>
		<div class="radio">
			<RadioBtn bind:group={$pancreasStore.echogen} value="izoechogeniška" name="echogenicity" />
			<RadioBtn bind:group={$pancreasStore.echogen} value="hipoechogeniška" name="echogenicity" />
			<RadioBtn bind:group={$pancreasStore.echogen} value="hiperechogeniška" name="echogenicity" />
		</div>

		<NumberInput
			bind:value={$pancreasStore.width}
			tooltipText="Normalus kasos latako skersmuo katėms yra 0.1cm, šunims- 0.06cm. Latako skersmuo, kuris galėtų indikuoti obstrukciją: 0.4-0.5cm. Senatvinis pakitimas katėms- kasos latako išsiplėtimas iki 0.25cm."
			title="Kasos latako plotis, cm"
		/>
		<Textarea
			title="Kiti pakitimai"
			bind:value={$pancreasStore.otherChanges}
			placeholder=" masės, cistos, kalcifikatai"
		/>
	</div>
</Toggle>
