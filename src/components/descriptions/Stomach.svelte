<script>
	import { stomach } from '../../stores/description';
	import * as TXT from '../../texts/stomach';
	import NormShow from '../NormShow.svelte';
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
</div>
