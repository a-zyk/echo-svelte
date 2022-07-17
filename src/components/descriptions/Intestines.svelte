<script>
	import { intestines, lymphnodes } from '../../stores/description';
	import * as TXT from '../../texts/intestines';
	import NormShow from '../NormShow.svelte';

	$: sizesJejunal = $lymphnodes.jejunal
		.map((jejunal) => {
			if (jejunal.length && jejunal.width) {
				return `${jejunal.length}x${jejunal.width}cm.`;
			}
		})
		.filter((size) => size)
		.join(', ');

	$: sizesColic = $lymphnodes.colic
		.map((colic) => {
			if (colic.length && colic.width) {
				return `${colic.length}x${colic.width}cm.`;
			}
		})
		.filter((size) => size)
		.join(', ');
</script>

<div class="mb-2">
	{#if $intestines.thicknessDuo}
		<span
			>Dvylikapirštės žarnos sienelės storis yra {$intestines.thicknessDuo}cm<NormShow
				cat={TXT.DUO_CAT}
				dogSmall={TXT.DUO_DOG_SM}
				dogMedium={TXT.DUO_DOG_MD}
				dogLarge={TXT.DUO_DOG_LG}
			/>.</span
		>
	{/if}

	{#if $intestines.otherChangesDuo}
		<span>{$intestines.otherChangesDuo}.</span>
	{/if}

	{#if $intestines.thicknessJeju}
		<span
			>Tuščiosios žarnos sienelės storis yra {$intestines.thicknessJeju}cm<NormShow
				cat={TXT.JEJU_CAT}
				dogSmall={TXT.JEJU_DOG_SM}
				dogMedium={TXT.JEJU_DOG_MD}
				dogLarge={TXT.JEJU_DOG_LG}
			/>.</span
		>
	{/if}

	{#if $intestines.otherChangesJeju}
		<span>{$intestines.otherChangesJeju}.</span>
	{/if}

	{#if $intestines.thicknessCec}
		<span
			>Klubinės žarnos sienelės storis ties ileocekaline jungtimi yra {$intestines.thicknessCec}cm<NormShow
				cat={TXT.CEC_CAT}
				dogSmall={TXT.CEC_DOG_SM}
				dogMedium={TXT.CEC_DOG_MD}
				dogLarge={TXT.CEC_DOG_LG}
			/>.</span
		>
	{/if}

	{#if $intestines.otherChangesCec}
		<span>{$intestines.otherChangesCec}.</span>
	{/if}

	{#if $intestines.thicknessCol}
		<span
			>Storosios žarnos sienelės storis yra {$intestines.thicknessCol}cm<NormShow
				dog={TXT.COL_DOG}
				cat={TXT.COL_CAT}
			/>.</span
		>
	{/if}

	{#if $intestines.otherChangesCol}
		<span>{$intestines.otherChangesCol}.</span>
	{/if}

	<!-- limfmazgis -->
	{#if $lymphnodes.numberJejunal === 1 && $lymphnodes.sizeJejunal}
		<span
			>Stebimas 1 {$lymphnodes.sizeJejunal}s tuščiosios žarnos (mezenterinis) limfinis mazgas.</span
		>
	{:else if $lymphnodes.numberJejunal && $lymphnodes.sizeJejunal}
		<span
			>Stebimi {$lymphnodes.numberJejunal}
			{$lymphnodes.sizeJejunal} tuščiosios žarnos (mezenteriniai) limfiniai mazgai.</span
		>
	{:else if $lymphnodes.numberJejunal === 1}
		<span>Stebimas 1 tuščiosios žarnos (mezenterinis) limfinis mazgas.</span>
	{:else if $lymphnodes.numberJejunal}
		<span
			>Stebimi {$lymphnodes.numberJejunal} tuščiosios žarnos (mezenteriniai) limfiniai mazgai.</span
		>
	{/if}

	{#if $lymphnodes.echogenJejunal && $lymphnodes.numberJejunal > 1}
		<span
			>Tuščiosios žarnos (mezenterinių) lm. parenchima yra {$lymphnodes.echogenJejunal} juos supantiems
			riebalams.</span
		>
	{:else if $lymphnodes.echogenJejunal}
		<span
			>Tuščiosios žarnos (mezenterinio) lm. parenchima yra {$lymphnodes.echogenJejunal} ją supantiems
			riebalams.</span
		>
	{/if}

	{#if sizesJejunal}
		<span>Ilgis ir plotis {sizesJejunal}</span>
	{/if}

	{#if $lymphnodes.otherChangesJejunal}
		<span>{$lymphnodes.otherChangesJejunal}</span>
	{/if}
	<!-- limfmazgis -->

	<!-- limfmazgis -->
	{#if $lymphnodes.numberColic === 1 && $lymphnodes.sizeColic}
		<span>Stebimas 1 {$lymphnodes.sizeColic}s gaubtinės žarnos limfinis mazgas.</span>
	{:else if $lymphnodes.numberColic && $lymphnodes.sizeColic}
		<span
			>Stebimi {$lymphnodes.numberColic}
			{$lymphnodes.sizeColic} gaubtinės žarnos limfiniai mazgai.</span
		>
	{:else if $lymphnodes.numberColic === 1}
		<span>Stebimas 1 gaubtinės žarnos limfinis mazgas.</span>
	{:else if $lymphnodes.numberColic}
		<span>Stebimi {$lymphnodes.numberColic} gaubtinės žarnos limfiniai mazgai.</span>
	{/if}

	{#if $lymphnodes.echogenColic && $lymphnodes.numberColic > 1}
		<span
			>Gaubtinės žarnos lm. parenchima yra {$lymphnodes.echogenColic} juos supantiems riebalams.</span
		>
	{:else if $lymphnodes.echogenColic}
		<span
			>Gaubtinės žarnos lm. parenchima yra {$lymphnodes.echogenColic} ją supantiems riebalams.</span
		>
	{/if}

	{#if sizesColic}
		<span>Ilgis ir plotis {sizesColic}</span>
	{/if}

	{#if $lymphnodes.otherChangesColic}
		<span>{$lymphnodes.otherChangesColic}</span>
	{/if}
	<!-- limfmazgis -->
</div>
