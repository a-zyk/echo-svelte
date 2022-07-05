<script>
	import { stomach,lymphnodes } from '../../stores/description';
	import * as TXT from '../../texts/stomach';
	import NormShow from '../NormShow.svelte';

	$: sizes = $lymphnodes.stomach
		.map((stomach) => {
			if (stomach.length && stomach.width) {
				return `${stomach.length}x${stomach.width}cm.`;
			}
		})
		.filter((size) => size)
		.join(', ');
</script>

<div class="mb-2">
	{#if $stomach.content === 'tusčias'}
		<span>Skrandyje turinio nėra.</span>
	{:else if $stomach.content === 'vidutiniškai prisipildęs'}
		<span>Skrandis yra prisipildęs vidutiniškai.</span>
	{:else if $stomach.content === 'perpildytas'}
		<span>Skrandis yra perpildytas.</span>
	{/if}

	{#if $stomach.thickness}
		<span>Sienelės storis {$stomach.thickness}cm<NormShow cat={TXT.WALL_WIDTH_CAT} dog={TXT.WALL_WIDTH_DOG}/>.</span>
	{/if}

	{#if $stomach.peristalsis}
		<span>Skrandžio peristaltika {$stomach.peristalsis}k/min.</span>
	{/if}
	{#if $stomach.otherChanges}
		<span>{$stomach.otherChanges}.</span>
	{/if}

	<!-- limfmazgis -->
	{#if $lymphnodes.numberStomach === 1 && $lymphnodes.sizeStomach}
		<span>Stebimas 1 {$lymphnodes.sizeStomach}s skrandžio limfinis mazgas.</span>
	{:else if $lymphnodes.numberStomach && $lymphnodes.sizeStomach}
		<span
			>Stebimi {$lymphnodes.numberStomach}
			{$lymphnodes.sizeStomach} skrandžio limfiniai mazgai.</span
		>
	{:else if $lymphnodes.numberStomach === 1}
		<span>Stebimas 1 skrandžio limfinis mazgas.</span>
	{:else if $lymphnodes.numberStomach}
		<span>Stebimi {$lymphnodes.numberStomach} skrandžio limfiniai mazgai.</span>
	{/if}

	{#if $lymphnodes.echogenStomach && $lymphnodes.numberStomach > 1}
		<span>Skrandžio lm. parenchima yra {$lymphnodes.echogenStomach} juos supantiems riebalams.</span
		>
	{:else if $lymphnodes.echogenStomach}
		<span
			>Skrandžio limfinio mazgo parenchima yra {$lymphnodes.echogenStomach} ją supantiems riebalams.</span
		>
	{/if}

	{#if sizes}
		<span>Ilgis ir plotis {sizes}</span>
	{/if}

	{#if $lymphnodes.otherChangesStomach}
		<span>{$lymphnodes.otherChangesStomach}</span>
	{/if}
	<!-- limfmazgis -->
</div>
