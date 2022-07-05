<script>
	import Toggle from '../../Toggle.svelte';
	import RadioBtn from '../../RadioBtn.svelte';
	import Textarea from '../../Textarea.svelte';
	import Tooltip from '../../Tooltip.svelte';
	import NumberInput from '../../NumberInput.svelte';
	import { lymphnodes as lymphnodesStore } from '../../../stores/description';
</script>

<Toggle classes="card">
	<div class=" mb-2 flex gap-2 text-base" slot="title">
		Gaubtinės žarnos
		<Tooltip
			tooltipText="Šalia ileokolinės jungties (dešinysis aklosios ž. lm.), mesokolono (vidurinysis aklosios ž. lm.), kaudaliai nusileidžiančiosios aklosios žarnos dalies (kairysis aklosios ž. lm.) Drenuoja: klubinę žarną, aklają žarną ir tiesiają žarną."
		/>
	</div>

	<div slot="content">
		<div class="flex gap-2">
			<div class="titles">Gaubtinės žarnos lm. juos supantiems riebalams yra</div>
			<Tooltip
				tooltipText="Normalus limfinis mazgas yra izoechogeniškas/lengvai hipoechogeniškas jį supantiems riebalams. Mazgas gali būti apsuptas hiperechoiškos kapsulės, mazge gali būti stebimos hiperechoiškos linijos, kurios yra kraujagyslių sienelės. Spalvinis dopleris ne visada rodo kraujo tėkmę."
			/>
		</div>
		<div class="radio">
			<RadioBtn
				bind:group={$lymphnodesStore.echogenColic}
				value="izoechogeniški"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$lymphnodesStore.echogenColic}
				value="hipoechogeniški"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$lymphnodesStore.echogenColic}
				value="hiperechogeniški"
				name="echogenicity"
			/>
		</div>

		<div class="flex-col md:flex-row flex gap-5">
			<NumberInput
				tooltipText="Normalaus limfmazgio pločio ir ilgio santykis ≤0.5."
				bind:value={$lymphnodesStore.lengthColic}
				title="Limfinio m. ilgis, cm"
			/>
			<NumberInput
				tooltipText="Normalaus limfmazgio pločio ir ilgio santykis ≤0.5."
				bind:value={$lymphnodesStore.widthColic}
				title="Limfinio m. plotis, cm"
			/>
		</div>

		<Textarea
			title="Kiti pakitimai"
			bind:value={$lymphnodesStore.otherChangesColic}
			placeholder="masės, kalcifikacijos"
		/>
	</div>
</Toggle>
