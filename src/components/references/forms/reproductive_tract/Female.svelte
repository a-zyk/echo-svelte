<script>
	import Toggle from '../../../Toggle.svelte';
	import RadioBtn from '../../../RadioBtn.svelte';
	import Textarea from '../../../Textarea.svelte';
	import Tooltip from '../../../Tooltip.svelte';
	import NumberInput from '../../../NumberInput.svelte';
	import {
		femaleTractL as femaleTractLStore,
		femaleTractR as femaleTractRStore,
		uterus as uterusStore
	} from '../../../../stores/description';
</script>

<Toggle autoclosable="true" classes="card">
	<div slot="title">Patelės lytinė sistema</div>
	<div slot="content">

		<div class="mb-3">
		<div class="font-bold text-md text-center mb-2">Gimda</div>
		<Textarea
		title="Kiti pakitimai"
		bind:value={$uterusStore.otherChanges}
		placeholder="Gimdos plotis, turinys, gleivinė, masės"
	/>
</div>


		<div class="font-bold text-md text-center mb-2">Kairė kiaušidė</div>

		<div class="flex gap-2">
			<div class="titles">Kairė kiaušidė ją supantiems riebalams</div>
		</div>
		<div class="radio">
			<RadioBtn
				bind:group={$femaleTractLStore.echogen}
				value="izoechogeniška"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$femaleTractLStore.echogen}
				value="hipoechogeniška"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$femaleTractLStore.echogen}
				value="hiperechogeniška"
				name="echogenicity"
			/>
		</div>

		<div class="flex-col md:flex-row flex gap-5">
			<NumberInput
				tooltipText="Kalės normalus kiaušidės dydis 1-2cm, katės iki 1cm. Dydis kinta lytinio ciklo metu, rujos metu būna didžiausias"
				bind:value={$femaleTractLStore.length}
				title="Kiaušidės ilgis"
			/>
			<NumberInput bind:value={$femaleTractLStore.width} title="Kiaušidės plotis, cm" />
		</div>

		<Textarea
			title="Kiti pakitimai"
			bind:value={$femaleTractLStore.otherChanges}
			placeholder="folikulai, geltonkūniai,masės"
		/>

		<div class="font-bold text-md text-center mt-5 mb-2">Dešinė kiaušidė</div>

		<div class="flex gap-2">
			<div class="titles">Dešinė kiaušidė ją supantiems riebalams</div>
		</div>
		<div class="radio">
			<RadioBtn
				bind:group={$femaleTractRStore.echogen}
				value="izoechogeniška"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$femaleTractRStore.echogen}
				value="hipoechogeniška"
				name="echogenicity"
			/>
			<RadioBtn
				bind:group={$femaleTractRStore.echogen}
				value="hiperechogeniška"
				name="echogenicity"
			/>
		</div>

		<div class="flex-col md:flex-row flex gap-5">
			<NumberInput
				tooltipText="Kalės normalus kiaušidės dydis 1-2cm, katės iki 1cm. Dydis kinta lytinio ciklo metu, rujos metu būna didžiausias"
				bind:value={$femaleTractRStore.length}
				title="Kiaušidės ilgis"
			/>
			<NumberInput bind:value={$femaleTractRStore.width} title="Kiaušidės plotis, cm" />
		</div>

		<Textarea
			title="Kiti pakitimai"
			bind:value={$femaleTractRStore.otherChanges}
			placeholder="folikulai, geltonkūniai, masės"
		/>
	</div>
</Toggle>
