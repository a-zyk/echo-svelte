<script>
	import { spleen, lymphnodes } from '../../stores/description';

	$: sizes = $lymphnodes.splenic.map(splenic => {
		if (splenic.length && splenic.width) {
			return `${splenic.length}x${splenic.width}cm.`
		}
	}).filter(size => size).join(', ')
</script>

<div class="mb-2">
	{#if $spleen.echogen}
		<span>Blužnies parenchima yra {$spleen.echogen}.</span>
	{/if}

	{#if $spleen.comToLiver}
		<span>Lyginant su kepenų parenchima, blužnies parenchima yra {$spleen.comToLiver}.</span>
	{/if}

	{#if $spleen.margins}
		<span>Kraštai {$spleen.margins}.</span>
	{/if}

	<!-- limfmazgis -->
	{#if $lymphnodes.numberSplenic === 1 && $lymphnodes.sizeSplenic}
		<span>Stebimas 1 {$lymphnodes.sizeSplenic}s blužninis limfinis mazgas.</span>
	{:else if $lymphnodes.numberSplenic && $lymphnodes.sizeSplenic}
		<span
			>Stebimi {$lymphnodes.numberSplenic}
			{$lymphnodes.sizeSplenic} blužniniai limfiniai mazgai.</span
		>
	{:else if $lymphnodes.numberSplenic === 1}
		<span>Stebimas 1 blužninis limfinis mazgas.</span>
	{:else if $lymphnodes.numberSplenic}
		<span>Stebimi {$lymphnodes.numberSplenic} blužniniai limfiniai mazgai.</span>
	{/if}

	{#if $lymphnodes.echogenSplenic && $lymphnodes.numberSplenic > 1}
		<span>Blužninių lm. parenchima yra {$lymphnodes.echogenSplenic} juos supantiems riebalams.</span
		>
	{:else if $lymphnodes.echogenSplenic}
		<span
			>Blužninio limfinio mazgo parenchima yra {$lymphnodes.echogenSplenic} jį supantiems riebalams.</span
		>
	{/if}

	{#if sizes}
		<span>Ilgis ir plotis {sizes}</span>
	{/if}
	

	{#if $lymphnodes.otherChangesSplenic}
		<span>{$lymphnodes.otherChangesSplenic}</span>
	{/if}
	<!-- limfmazgis -->

	{#if $spleen.otherChanges}
		<span>{$spleen.otherChanges}.</span>
	{/if}
</div>
