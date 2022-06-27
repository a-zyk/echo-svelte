<script>
	import { bladder } from '../../stores/description';
</script>

<div>
	{#if $bladder.wallThickness}
		<span> Šlapimo pūslės sienelė {$bladder.wallThickness}.</span>
	{/if}

	{#if $bladder.thickness}
		<span>Sienelės storis yra {$bladder.thickness} cm.</span>
	{/if}

	{#if $bladder.otherChanges}
		<span>{$bladder.otherChanges}.</span>
	{/if}
</div>
