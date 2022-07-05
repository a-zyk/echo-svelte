<script>
	import { pancreas, lymphnodes } from '../../stores/description';
	import * as TXT from '../../texts/pancreas';
	import NormShow from '../NormShow.svelte';
	
	$: sizes = $lymphnodes.pancrDuo
		.map((pancrDuo) => {
			if (pancrDuo.length && pancrDuo.width) {
				return `${pancrDuo.length}x${pancrDuo.width}cm.`;
			}
		})
		.filter((size) => size)
		.join(', ');
</script>

<div class="mb-2">
{#if $pancreas.echogen}
	<span>Kasa yra {$pancreas.echogen} aplink esantiems riebalams.</span>
{/if}

{#if $pancreas.width}
	<span>Kasos latako plotis {$pancreas.width}cm<NormShow cat={TXT.DUCTUS_CAT} dog={TXT.DUCTUS_DOG}/>.</span>
{/if}

{#if $pancreas.otherChanges}
	<span>{$pancreas.otherChanges}.</span>
{/if}

<!-- limfmazgis -->
{#if $lymphnodes.numberPancrDuo === 1 && $lymphnodes.sizePancrDuo}
<span>Stebimas 1 {$lymphnodes.sizePancrDuo}s kasos ir dvylikapirštės žarnos limfinis mazgas.</span>
{:else if $lymphnodes.numberPancrDuo && $lymphnodes.sizePancrDuo}
<span
	>Stebimi {$lymphnodes.numberPancrDuo}
	{$lymphnodes.sizePancrDuo} kasos ir dvylikapirštės žarnos limfiniai mazgai.</span
>
{:else if $lymphnodes.numberPancrDuo === 1}
<span>Stebimas 1 kasos ir dvylikapirštės žarnos limfinis mazgas.</span>
{:else if $lymphnodes.numberPancrDuo}
<span>Stebimi {$lymphnodes.numberPancrDuo} kasos ir dvylikapirštės žarnos limfiniai mazgai.</span>
{/if}

{#if $lymphnodes.echogenPancrDuo && $lymphnodes.numberPancrDuo > 1}
<span>Kasos ir dvylikapirštės žarnos lm. parenchima yra {$lymphnodes.echogenPancrDuo} juos supantiems riebalams.</span
>
{:else if $lymphnodes.echogenPancrDuo}
<span
	>Kasos ir dvylikapirštės žarnos limfinio mazgo parenchima yra {$lymphnodes.echogenPancrDuo} ją supantiems riebalams.</span
>
{/if}

{#if sizes}
<span>Ilgis ir plotis {sizes}</span>
{/if}

{#if $lymphnodes.otherChangesPancrDuo}
<span>{$lymphnodes.otherChangesPancrDuo}</span>
{/if}
<!-- limfmazgis -->
</div>