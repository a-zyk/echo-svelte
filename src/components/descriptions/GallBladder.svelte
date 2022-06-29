<script>
	import { gallB } from '../../stores/description';
	import * as TXT from '../../texts/gallBladder';
	import NormShow from '../NormShow.svelte';
</script>

<div class="mb-2">
	{#if $gallB.wallThickness}
		<span> Tulžies pūslės sienelė yra {$gallB.wallThickness}.</span>
	{/if}

	{#if $gallB.thickness}
		<span>Sienelės storis yra {$gallB.thickness}cm<NormShow dog={TXT.WALL_DOG} cat={TXT.WALL_CAT}/>.</span>
	{/if}

	{#if $gallB.ductus}
		<span> Bendrasis tulžies pūslės latakas yra {$gallB.ductus}.</span>
	{/if}

	{#if $gallB.ductusCm}
		<span>Bendrojo tulžies pūslės latako plotis skersiniame pjūvyje yra {$gallB.ductusCm}cm<NormShow dog={TXT.DUCTUS_DOG} cat={TXT.DUCTUS_CAT}/>.</span>
	{/if}

	{#if $gallB.otherChanges}
		<span>{$gallB.otherChanges}.</span>
	{/if}
</div>
