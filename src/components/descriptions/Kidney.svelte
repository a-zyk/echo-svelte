<script>
	import { kidneyL, kidneyR } from '../../stores/description';
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
			<span>Inksto dydis {$kidneyL.lngL}x{$kidneyL.widthL} cm.</span>
		{:else if $kidneyL.lngL}
			<span>Inksto ilgis {$kidneyL.lngL} cm.</span>
		{:else if $kidneyL.widthL}
			<span>Inksto plotis {$kidneyL.widthL} cm.</span>
		{/if}

		{#if $kidneyL.pelvicWidthL}
			<span>Geldelė {$kidneyL.pelvicWidthL}.</span>
		{/if}

		{#if $kidneyL.pelvisCmL}
			<span>Geldelės plotis skersiniame pjūvyje {$kidneyL.pelvisCmL} cm.</span>
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
			<span>Inksto dydis {$kidneyR.lngR}x{$kidneyR.widthR} cm.</span>
		{:else if $kidneyR.lngR}
			<span>Inksto ilgis {$kidneyR.lngR} cm.</span>
		{:else if $kidneyR.widthR}
			<span>Inksto plotis {$kidneyR.widthR} cm.</span>
		{/if}

		{#if $kidneyR.pelvicWidthR}
			<span>Geldelė {$kidneyR.pelvicWidthR}.</span>
		{/if}

		{#if $kidneyR.pelvisCmR}
			<span>Geldelės plotis skersiniame pjūvyje {$kidneyR.pelvisCmR} cm.</span>
		{/if}

		{#if $kidneyR.otherChangesR}
			<span>{$kidneyR.otherChangesR}.</span>
		{/if}
	</div>
</div>
