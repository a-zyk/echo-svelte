<script>
	import { bladder, lymphnodes } from '../../stores/description';
	import * as TXT from '../../texts/bladder';
	import NormShow from '../NormShow.svelte';
	$: sizesInt = $lymphnodes.iliacInt
		.map((iliacInt) => {
			if (iliacInt.length && iliacInt.width) {
				return `${iliacInt.length}x${iliacInt.width}cm.`;
			}
		})
		.filter((size) => size)
		.join(', ');

	$: sizesMed = $lymphnodes.iliacMed
		.map((iliacMed) => {
			if (iliacMed.length && iliacMed.width) {
				return `${iliacMed.length}x${iliacMed.width}cm.`;
			}
		})
		.filter((size) => size)
		.join(', ');

	$: sizesSac = $lymphnodes.sacral
		.map((sacral) => {
			if (sacral.length && sacral.width) {
				return `${sacral.length}x${sacral.width}cm.`;
			}
		})
		.filter((size) => size)
		.join(', ');
</script>

<div class="mb-2">
	{#if $bladder.wallThickness}
		<span> Šlapimo pūslės sienelė {$bladder.wallThickness}.</span>
	{/if}

	{#if $bladder.thickness}
		<span>Sienelės storis yra {$bladder.thickness}cm<NormShow cat={TXT.THICKNESS_CAT} />.</span>
	{/if}

	{#if $bladder.otherChanges}
		<span>{$bladder.otherChanges}.</span>
	{/if}
</div>

<div>
	<!-- limfmazgis -->
	{#if $lymphnodes.numberInternalIliac === 1 && $lymphnodes.sizeInternalIliac}
		<span>Stebimas 1 {$lymphnodes.sizeInternalIliac}s vidinis iliakinis limfinis mazgas.</span>
	{:else if $lymphnodes.numberInternalIliac && $lymphnodes.sizeInternalIliac}
		<span
			>Stebimi {$lymphnodes.numberInternalIliac}
			{$lymphnodes.sizeInternalIliac} vidiniai iliakiniai limfiniai mazgai.</span
		>
	{:else if $lymphnodes.numberInternalIliac === 1}
		<span>Stebimas 1 vidinis iliakinis limfinis mazgas.</span>
	{:else if $lymphnodes.numberInternalIliac}
		<span>Stebimi {$lymphnodes.numberInternalIliac} vidiniai iliakiniai limfiniai mazgai.</span>
	{/if}

	{#if $lymphnodes.echogenInternalIliac && $lymphnodes.numberInternalIliac > 1}
		<span
			>Vidinių iliakinių lm. parenchima yra {$lymphnodes.echogenInternalIliac} juos supantiems riebalams.</span
		>
	{:else if $lymphnodes.echogenInternalIliac}
		<span
			>Vidinio iliakinio lm. parenchima yra {$lymphnodes.echogenInternalIliac} ją supantiems riebalams.</span
		>
	{/if}

	{#if sizesInt}
		<span>Ilgis ir plotis {sizesInt}</span>
	{/if}

	{#if $lymphnodes.otherChangesInternalIliac}
		<span>{$lymphnodes.otherChangesInternalIliac}</span>
	{/if}
	<!-- limfmazgis -->
</div>

<div>
	<!-- limfmazgis -->
	{#if $lymphnodes.numberMedIliac === 1 && $lymphnodes.sizeMedIliac}
		<span>Stebimas 1 {$lymphnodes.sizeMedIliac}s medialinis iliakinis limfinis mazgas.</span>
	{:else if $lymphnodes.numberMedIliac && $lymphnodes.sizeMedIliac}
		<span
			>Stebimi {$lymphnodes.numberMedIliac}
			{$lymphnodes.sizeMedIliac} medialiniai iliakiniai limfiniai mazgai.</span
		>
	{:else if $lymphnodes.numberMedIliac === 1}
		<span>Stebimas 1 medialinis iliakinis limfinis mazgas.</span>
	{:else if $lymphnodes.numberMedIliac}
		<span>Stebimi {$lymphnodes.numberMedIliac} medialiniai iliakiniai limfiniai mazgai.</span>
	{/if}

	{#if $lymphnodes.echogenMedIliac && $lymphnodes.numberMedIliac > 1}
		<span
			>Medialinių iliakinių lm. parenchima yra {$lymphnodes.echogenMedIliac} juos supantiems riebalams.</span
		>
	{:else if $lymphnodes.echogenMedIliac}
		<span
			>Medialinio iliakinio lm. parenchima yra {$lymphnodes.echogenMedIliac} ją supantiems riebalams.</span
		>
	{/if}

	{#if sizesMed}
		<span>Ilgis ir plotis {sizesMed}</span>
	{/if}

	{#if $lymphnodes.otherChangesMedIliac}
		<span>{$lymphnodes.otherChangesMedIliac}</span>
	{/if}
	<!-- limfmazgis -->
</div>

<div>
	<!-- limfmazgis -->
	{#if $lymphnodes.numberSacral === 1 && $lymphnodes.sizeSacral}
		<span>Stebimas 1 {$lymphnodes.sizeSacral}s sakralinis limfinis mazgas.</span>
	{:else if $lymphnodes.numberSacral && $lymphnodes.sizeSacral}
		<span
			>Stebimi {$lymphnodes.numberSacral}
			{$lymphnodes.sizeSacral} sakraliniai limfiniai mazgai.</span
		>
	{:else if $lymphnodes.numberSacral === 1}
		<span>Stebimas 1 sakralinis limfinis mazgas.</span>
	{:else if $lymphnodes.numberSacral}
		<span>Stebimi {$lymphnodes.numberSacral} sakraliniai limfiniai mazgai.</span>
	{/if}

	{#if $lymphnodes.echogenSacral && $lymphnodes.numberSacral > 1}
		<span
			>Sakralinių lm. parenchima yra {$lymphnodes.echogenSacral} juos supantiems riebalams.</span
		>
	{:else if $lymphnodes.echogenSacral}
		<span
			>Sakralinio lm. parenchima yra {$lymphnodes.echogenSacral} ją supantiems riebalams.</span
		>
	{/if}

	{#if sizesSac}
		<span>Ilgis ir plotis {sizesSac}</span>
	{/if}

	{#if $lymphnodes.otherChangesSacral}
		<span>{$lymphnodes.otherChangesSacral}</span>
	{/if}
	<!-- limfmazgis -->
</div>
