<script>
	import Toggle from '../../../Toggle.svelte';
	import RadioBtn from '../../../RadioBtn.svelte';
	import Textarea from '../../../Textarea.svelte';
	import Tooltip from '../../../Tooltip.svelte';
	import NumberInput from '../../../NumberInput.svelte';
	import {
		maleTractL as maleTractLStore,
		maleTractR as maleTractRStore,
		prostate as prostateStore
	} from '../../../../stores/description';

	$: prostateLenght = $prostateStore.age * 0.143 + $prostateStore.weight * 0.055 + 3.31;

	$: prostateWidth = $prostateStore.age * 0.089 + $prostateStore.weight * 0.047 + 3.45;
</script>

<Toggle autoclosable="true" classes="card">
	<div slot="title">Patino lytinė sistema</div>
	<div slot="content">
		<div class="mb-3">
			<div class="font-bold text-md text-center mb-2">Prostata</div>

			<div class="flex gap-2">
				<div class="titles">Prostatos parenchima</div>
				<Tooltip tooltipText="Normalios prostatos parenchima yra homogeniška." />
			</div>
			<div class="radio">
				<RadioBtn bind:group={$prostateStore.echogen} value="homogeniška" name="echogenicity" />
				<RadioBtn bind:group={$prostateStore.echogen} value="heterogeniška" name="echogenicity" />
			</div>
			<div class="flex gap-2">
				<div class="titles">Prostata ją supantiems audiniams</div>
				<Tooltip
					tooltipText="Nekastruotų patinų prostata su amžiumi didėja ir tampa hiperechogeniška. Dažnai randamos nedidelės cistos. Prostatos hiperplazijai būdinga hiperechogeniškumas, parenchimos striacijos, cistos ir didėjantis prostatos tūris."
				/>
			</div>
			<div class="radio">
				<RadioBtn bind:group={$prostateStore.comToFat} value="izoechogeniška" name="toFat" />
				<RadioBtn bind:group={$prostateStore.comToFat} value="hipoechogeniška" name="toFat" />
				<RadioBtn bind:group={$prostateStore.comToFat} value="hiperechogeniška" name="toFat" />
			</div>

			<div class="flex  flex-col md:flex-row gap-5">
				<NumberInput
					bind:value={$prostateStore.length}
					title="Prostatos ilgis (kraniokaudalinis), cm"
				/>
				<NumberInput
					bind:value={$prostateStore.width}
					title="Prostatos plotis (laterolateralinis), cm"
				/>
			</div>

			<div class="titles">Skaičiuoti normalų prostatos ilgį ir plotį nekastruotam šuniui</div>
			<div class="flex  flex-col md:flex-row gap-5">
				<NumberInput bind:value={$prostateStore.age} title="Šuns amžius" />

				<NumberInput bind:value={$prostateStore.weight} title="Šuns svoris, kg" />
			</div>

			{#if prostateLenght && prostateWidth}
				<div class="mb-2">
					Maksimalus normalus prostatos ilgis ir plotis: {prostateLenght.toFixed(
						2
					)}x{prostateWidth.toFixed(2)}cm.

					<div class=" mb-4 mt-2 text-sm">
						Šaltinis: <a
							target="_blank"
							class="text-blue-600"
							href="https://www.vetfolio.com/learn/article/surgical-management-of-common-canine-prostatic-conditions"
							>Vetfolio straipsnis</a
						>
					</div>
				</div>
			{/if}

			<Textarea
				title="Kiti pakitimai"
				bind:value={$prostateStore.otherChanges}
				placeholder="Cistos, mineralizacijos, šlaplė, os penis, masės"
			/>
		</div>

        <div class="mb-4 mt-4">
		<div class="font-bold text-md text-center mb-2">Kairė sėklidė</div>

		<div class="flex-col md:flex-row flex gap-5">
			<NumberInput bind:value={$maleTractLStore.length} title="Sėklidės ilgis, cm" />
			<NumberInput bind:value={$maleTractLStore.width} title="Sėklidės plotis, cm" />
		</div>

		<Textarea
			title="Kiti pakitimai"
			bind:value={$maleTractLStore.otherChanges}
			placeholder="Cistos, masės, echogeniškumas"
		/>
    </div>


		<div class="font-bold text-md text-center mb-2">Dešinė sėklidė</div>
		<div class="flex-col md:flex-row flex gap-5">
			<NumberInput bind:value={$maleTractRStore.length} title="Sėklidės ilgis, cm" />
			<NumberInput bind:value={$maleTractRStore.width} title="Sėklidės plotis, cm" />
		</div>

		<Textarea
			title="Kiti pakitimai"
			bind:value={$maleTractRStore.otherChanges}
			placeholder="Cistos, masės, echogeniškumas"
		/>
	</div>
</Toggle>
