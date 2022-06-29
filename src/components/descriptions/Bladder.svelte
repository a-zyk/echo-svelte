<script>
	import { bladder } from '../../stores/description';
	import * as TXT from '../../texts/bladder';
	import NormShow from '../NormShow.svelte';
</script>

<div class="mb-2">
	{#if $bladder.wallThickness}
		<span> Šlapimo pūslės sienelė {$bladder.wallThickness}.</span>
	{/if}

	{#if $bladder.thickness}
		<span>Sienelės storis yra {$bladder.thickness}cm<NormShow dog={TXT.THICKNESS_DOG} cat={TXT.THICKNESS_CAT}/>.</span>
	{/if}

	{#if $bladder.otherChanges}
		<span>{$bladder.otherChanges}.</span>
	{/if}
</div>
