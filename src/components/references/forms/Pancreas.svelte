<script>
	import { pancreas as pancreasStore } from '../../../stores/description';
	import Toggle from '../../Toggle.svelte';
	import RadioBtn from '../../RadioBtn.svelte';
	import NumberInput from '../../NumberInput.svelte';
	import Textarea from '../../Textarea.svelte';
	import Tooltip from '../../Tooltip.svelte';
	const prefix = 'pancreas';
</script>

<Toggle autoclosable="true" classes="card">
	<div slot="title">Kasa</div>
	<div slot="content">
		<div class="flex gap-2">
			<div class="titles">Kasa aplink esantiems riebalams</div>
			<Tooltip tooltipText="Normali kasa aplinkiniams riebalams yra izoechogeniška." />
		</div>
		<div class="radio">
			<RadioBtn
				{prefix}
				bind:group={$pancreasStore.echogen}
				value="izoechogeniška"
				name="echogenicity"
			/>
			<RadioBtn
				{prefix}
				bind:group={$pancreasStore.echogen}
				value="hipoechogeniška"
				name="echogenicity"
			/>
			<RadioBtn
				{prefix}
				bind:group={$pancreasStore.echogen}
				value="hiperechogeniška"
				name="echogenicity"
			/>
		</div>

		<NumberInput
			{prefix}
			bind:value={$pancreasStore.width}
			tooltipText="Normalus kasos latako skersmuo katėms yra ~0.1cm, šunims- ~0.06cm. Latako skersmuo, kuris galėtų indikuoti obstrukciją: 0.4-0.5cm. Senatvinis pakitimas katėms virš 10 metų- galimas kasos latako išsiplėtimas iki 0.25cm."
			title="Kasos latako plotis, cm"
		/>
		<Textarea
			{prefix}
			title="Kiti pakitimai"
			bind:value={$pancreasStore.otherChanges}
			placeholder=" masės, cistos, kalcifikatai"
		/>
	</div>
</Toggle>
