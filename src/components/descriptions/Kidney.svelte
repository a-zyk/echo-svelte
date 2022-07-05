<script>
	import { kidneyL, kidneyR, lymphnodes} from '../../stores/description';
	import * as TXT from '../../texts/kidney';
	import NormShow from '../NormShow.svelte';
	$: sizes = $lymphnodes.lumbarRen
		.map((lumbarRen) => {
			if (lumbarRen.length && lumbarRen.width) {
				return `${lumbarRen.length}x${lumbarRen.width}cm.`;
			}
		})
		.filter((size) => size)
		.join(', ');
</script>

<div class="mb-2">
	<div>
		{#if JSON.stringify($kidneyL) !== "{}"}
			<span>Kairys inkstas-</span>
		{/if}
		{#if $kidneyL.echogenL}
			<span> Inksto žievė blužniai yra {$kidneyL.echogenL}.</span>
		{/if}

		{#if $kidneyL.lngL && $kidneyL.widthL}
			<span>Inksto ilgis ir plotis {$kidneyL.lngL}x{$kidneyL.widthL}cm<NormShow cat={TXT.LENGTH_WIDTH_CAT}/>.</span>
		{:else if $kidneyL.lngL}
			<span>Inksto ilgis {$kidneyL.lngL}cm<NormShow cat={TXT.LENGTH_CAT}/>.</span>
		{:else if $kidneyL.widthL}
			<span>Inksto plotis {$kidneyL.widthL}cm<NormShow cat={TXT.WIDTH_CAT}/>.</span>
		{/if}

		{#if $kidneyL.pelvicWidthL}
			<span>Geldelė {$kidneyL.pelvicWidthL}.</span>
		{/if}

		{#if $kidneyL.pelvisCmL}
			<span>Geldelės plotis skersiniame pjūvyje {$kidneyL.pelvisCmL}cm<NormShow cat={TXT.PELVIS_CAT} dog={TXT.PELVIS_DOG}/>.</span>
		{/if}

		{#if $kidneyL.otherChangesL}
			<span>{$kidneyL.otherChangesL}.</span>
		{/if}
	</div>

	<div>
		{#if JSON.stringify($kidneyR) !== "{}"}
			<span>Dešinys inkstas-</span>
		{/if}
		{#if $kidneyR.echogenR}
			<span> Inksto žievė kepenims yra {$kidneyR.echogenR}.</span>
		{/if}

		{#if $kidneyR.lngR && $kidneyR.widthR}
			<span>Inksto ilgis ir plotis {$kidneyR.lngR}x{$kidneyR.widthR}cm<NormShow cat={TXT.LENGTH_WIDTH_CAT}/>.</span>
		{:else if $kidneyR.lngR}
			<span>Inksto ilgis {$kidneyR.lngR}cm<NormShow cat={TXT.LENGTH_CAT}/>.</span>
		{:else if $kidneyR.widthR}
			<span>Inksto plotis {$kidneyR.widthR}cm<NormShow cat={TXT.WIDTH_CAT}/>.</span>
		{/if}

		{#if $kidneyR.pelvicWidthR}
			<span>Geldelė {$kidneyR.pelvicWidthR}.</span>
		{/if}

		{#if $kidneyR.pelvisCmR}
			<span>Geldelės plotis skersiniame pjūvyje {$kidneyR.pelvisCmR}cm <NormShow cat={TXT.PELVIS_CAT} dog={TXT.PELVIS_DOG}/>.</span>
		{/if}

		{#if $kidneyR.otherChangesR}
			<span>{$kidneyR.otherChangesR}.</span>
		{/if}
	</div>
		<!-- limfmazgis -->
		{#if $lymphnodes.numberLumbarRenal === 1 && $lymphnodes.sizeLumbarRenal}
		<span>Stebimas 1 {$lymphnodes.sizeLumbarRenal}s juosmeninės aortos/inkstinis limfinis mazgas.</span>
	{:else if $lymphnodes.numberLumbarRenal && $lymphnodes.sizeLumbarRenal}
		<span
			>Stebimi {$lymphnodes.numberLumbarRenal}
			{$lymphnodes.sizeLumbarRenal} juosmeninės aortos/inkstiniai limfiniai mazgai.</span
		>
	{:else if $lymphnodes.numberLumbarRenal === 1}
		<span>Stebimas 1 juosmeninės aortos/inkstinis limfinis mazgas.</span>
	{:else if $lymphnodes.numberLumbarRenal}
		<span>Stebimi {$lymphnodes.numberLumbarRenal} juosmeninės aortos/inkstiniai limfiniai mazgai.</span>
	{/if}

	{#if $lymphnodes.echogenLumbarRenal && $lymphnodes.numberLumbarRenal > 1}
		<span>Juosmeninės aortos/inkstinių lm. parenchima yra {$lymphnodes.echogenLumbarRenal} juos supantiems riebalams.</span
		>
	{:else if $lymphnodes.echogenLumbarRenal}
		<span
			>Juosmeninės aortos/inkstinio lm. parenchima yra {$lymphnodes.echogenLumbarRenal} ją supantiems riebalams.</span
		>
	{/if}

	{#if sizes}
		<span>Ilgis ir plotis {sizes}</span>
	{/if}

	{#if $lymphnodes.otherChangesLumbarRenal}
		<span>{$lymphnodes.otherChangesLumbarRenal}</span>
	{/if}
	<!-- limfmazgis -->
</div>
