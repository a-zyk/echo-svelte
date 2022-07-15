<script>
	import { maleTractL, maleTractR, prostate } from '../../stores/description';
	import NormShow from '../NormShow.svelte';
	$: prostateLenght = $prostate.age * 0.143 + $prostate.weight * 0.055 + 3.31;

	$: prostateWidth = $prostate.age * 0.089 + $prostate.weight * 0.047 + 3.45;
</script>

<div class="mb-2">
	{#if $prostate.echogen && $prostate.comToFat}
		<span
			>Prostatos parenchima yra {$prostate.echogen}, {$prostate.comToFat} aplinkui esantiems riebalams.</span
		>
	{:else if $prostate.comToFat}
		<span>Prostatos parenchima aplinkui esantiems riebalams yra {$prostate.comToFat}.</span>
	{:else if $prostate.echogen}
		<span>Prostatos parenchima yra {$prostate.echogen}.</span>
	{/if}

	{#if $prostate.length && $prostate.width}
		<span
			>Prostatos ilgis ir plotis {$prostate.length}x{$prostate.width}cm{#if prostateLenght && prostateWidth}<NormShow
					dog=" (n< {prostateLenght.toFixed(2)}x{prostateWidth.toFixed(2)}cm)"
				/>{/if}.</span
		>
	{:else if $prostate.length}
		<span>Prostatos ilgis {$prostate.length}cm.</span>
	{:else if $prostate.width}
		<span>Prostatos plotis {$prostate.width}cm.</span>
	{/if}

	{#if $prostate.otherChanges}
		<span>{$prostate.otherChanges}.</span>
	{/if}
</div>

<div class="mb-2">
	{#if JSON.stringify($maleTractL) !== '{}'}
		<span>Kairė sėklidė-</span>
	{/if}

	{#if $maleTractL.length && $maleTractL.width}
		<span>sėklidės ilgis ir plotis {$maleTractL.length}x{$maleTractL.width}cm.</span>
	{:else if $maleTractL.length}
		<span>sėklidės ilgis {$maleTractL.length}cm.</span>
	{:else if $maleTractL.width}
		<span>sėklidės plotis {$maleTractL.width}cm.</span>
	{/if}

	{#if $maleTractL.otherChanges}
		<span>{$maleTractL.otherChanges}.</span>
	{/if}
</div>

<div class="mb-2">
	{#if JSON.stringify($maleTractR) !== '{}'}
		<span>Dešinė sėklidė-</span>
	{/if}

	{#if $maleTractR.length && $maleTractR.width}
		<span>sėklidės ilgis ir plotis {$maleTractR.length}x{$maleTractR.width}cm.</span>
	{:else if $maleTractR.length}
		<span>sėklidės ilgis {$maleTractR.length}cm.</span>
	{:else if $maleTractR.width}
		<span>sėklidės plotis {$maleTractR.width}cm.</span>
	{/if}

	{#if $maleTractR.otherChanges}
		<span>{$maleTractR.otherChanges}.</span>
	{/if}
</div>
