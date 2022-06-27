<script>
	import { kidney } from '../../stores/description';
</script>

<div>
	{#if $kidney.echogen}
		<span> Inksto žievė kepenims yra {$kidney.echogen}.</span>
	{/if}

	{#if $kidney.lng && $kidney.width}
		<span>Inksto dydis {$kidney.lng}x{$kidney.width} cm.</span>
	{:else if $kidney.lng}
		<span>Inksto ilgis {$kidney.lng} cm.</span>
	{:else if $kidney.width}
		<span>Inksto plotis {$kidney.width} cm.</span>
	{/if}

	{#if $kidney.pelvicWidth}
		<span>Geldelė {$kidney.pelvicWidth}.</span>
	{/if}

	{#if $kidney.pelvisCm}
		<span>Geldelės plotis skersiniame pjūvyje {$kidney.pelvisCm} cm.</span>
	{/if}

	{#if $kidney.otherChanges}
		<span>{$kidney.otherChanges}.</span>
	{/if}
</div>
