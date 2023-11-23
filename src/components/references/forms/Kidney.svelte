<script>
	import { kidneyL as kidneyLStore, kidneyR as kidneyRStore } from '../../../stores/description';
	import Toggle from '../../Toggle.svelte';
	import RadioBtn from '../../RadioBtn.svelte';
	import NumberInput from '../../NumberInput.svelte';
	import Textarea from '../../Textarea.svelte';
	import Tooltip from '../../Tooltip.svelte';
	const prefixLeft = "kidneyLeft"
	const prefixRight = "kidneyRight"
</script>

<Toggle autoclosable="true" classes="card">
	<div slot="title">Inkstai</div>
	<div slot="content">
		<div class="font-bold text-md text-center mb-2">Kairys inkstas</div>
		<div class="flex gap-2">
			<div class="titles">Inksto žievė lyginant su blužnimi yra</div>
			<Tooltip tooltipText="Normali kairio inksto žievė yra hipoechoiška blužniai." />
		</div>
		<div class="radio">
			<RadioBtn prefix={prefixLeft} bind:group={$kidneyLStore.echogenL} value="izoechogeniška" name="echogenicityL" />
			<RadioBtn prefix={prefixLeft} bind:group={$kidneyLStore.echogenL} value="hipoechogeniška" name="echogenicityL" />
			<RadioBtn prefix={prefixLeft} bind:group={$kidneyLStore.echogenL} value="hiperechogeniška" name="echogenicityL" />
		</div>

		<div class="flex-col md:flex-row flex gap-5">
			<NumberInput
				prefix={prefixLeft} 
				tooltipText="Normalus katės inksto ilgis ~3-4.5cm. Didesnis pas nekastruotus katinus, mažesnis senoms katėms."
				bind:value={$kidneyLStore.lngL}
				title="Inksto ilgis, cm"
			/>
			<NumberInput
				prefix={prefixLeft} 
				tooltipText="Normalaus katės inksto plotis ~2.23-2.83cm."
				bind:value={$kidneyLStore.widthL}
				title="Inksto plotis, cm"
			/>
		</div>

		<div class="titles">Inkso geldelė</div>

		<div class="radio">
			<RadioBtn prefix={prefixLeft} bind:group={$kidneyLStore.pelvicWidthL} value="neišsiplėtusi" name="pelvicWidthL" />
			<RadioBtn prefix={prefixLeft} bind:group={$kidneyLStore.pelvicWidthL} value="išsiplėtusi" name="pelvicWidthL" />
		</div>

		<NumberInput
			prefix={prefixLeft} 
			tooltipText="Skersiniame pjūvyje normalus geldelės plotis ≤0.2cm. Plotis >1.3cm būdingas obstrukcijai."
			bind:value={$kidneyLStore.pelvisCmL}
			title="Geldelės plotis skersiniame pjūvyje, cm"
		/>

		<Textarea
			prefix={prefixLeft} 
			title="Kiti pakitimai"
			bind:value={$kidneyLStore.otherChangesL}
			placeholder="akmenys, šlapimtakių pakitimai, masės"
		/>

		<div class="font-bold text-md text-center mt-5 mb-2">Dešinys inkstas</div>
		<div class="flex gap-2">
			<div class="titles">Inksto žievė lyginant su kepenimis yra</div>
			<Tooltip tooltipText="Normali dešinio inksto žievė yra hipoechoiška/izoechoiška kepenims." />
		</div>
		<div class="radio">
			<RadioBtn prefix={prefixRight} bind:group={$kidneyRStore.echogenR} value="izoechogeniška" name="echogenicityR" />
			<RadioBtn prefix={prefixRight} bind:group={$kidneyRStore.echogenR} value="hipoechogeniška" name="echogenicityR" />
			<RadioBtn prefix={prefixRight} bind:group={$kidneyRStore.echogenR} value="hiperechogeniška" name="echogenicityR" />
		</div>

		<div class="flex  flex-col md:flex-row gap-5">
			<NumberInput
				prefix={prefixRight}
				tooltipText="Normalus katės inksto ilgis ~3-4.5cm. Didesnis pas nekastruotus katinus, mažesnis senoms katėms. Normalus šuns inksto ilgis priklauso nuo šuns dydžio."
				bind:value={$kidneyRStore.lngR}
				title="Inksto ilgis, cm"
			/>
			<NumberInput
				prefix={prefixRight}
				tooltipText="Normalus katės inksto plotis ~2.23-2.83 cm."
				bind:value={$kidneyRStore.widthR}
				title="Inksto plotis, cm"
			/>
		</div>

		<div class="titles">Inkso geldelė</div>

		<div class="radio">
			<RadioBtn prefix={prefixRight} bind:group={$kidneyRStore.pelvicWidthR} value="neišsiplėtusi" name="pelvicWidthR" />
			<RadioBtn prefix={prefixRight} bind:group={$kidneyRStore.pelvicWidthR} value="išsiplėtusi" name="pelvicWidthR" />
		</div>

		<NumberInput
			prefix={prefixRight}
			tooltipText="Skersiniame pjūvyje normalus geldelės plotis ≤0.2cm. Plotis >1.3cm būdingas obstrukcijai."
			bind:value={$kidneyRStore.pelvisCmR}
			title="Geldelės plotis skersiniame pjūvyje, cm"
		/>

		<Textarea
			prefix={prefixRight}
			title="Kiti pakitimai"
			bind:value={$kidneyRStore.otherChangesR}
			placeholder="akmenys, šlapimtakių pakitimai, masės"
		/>
	</div>
</Toggle>
