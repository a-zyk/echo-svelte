<script>
	import { stomach } from '../../stores/description';
</script>

<div class="mb-2">
	{#if $stomach.content === 'tusčias'}
		<span>Skrandyje turinio nėra</span>
	{:else if $stomach.content === 'vidutiniškai prisipildęs'}
		<span>Skrandis yra prisipildęs vidutiniškai</span>
	{:else if $stomach.content === 'perpildytas'}
		<span>Skrandis yra perpildytas</span>
	{/if}

	{#if $stomach.thickness}
		<span>Sienelės storis {$stomach.thickness} cm.</span>
	{/if}

	{#if $stomach.otherChanges}
		<span>{$stomach.otherChanges}.</span>
	{/if}
</div>
