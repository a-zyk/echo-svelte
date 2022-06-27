<script>
	import { gallB } from '../../stores/description';
</script>

<div>
	{#if $gallB.wallThickness}
		<span> Tulžies pūslės sienelė yra {$gallB.wallThickness}.</span>
	{/if}

	{#if $gallB.thickness}
		<span>Sienelės storis yra {$gallB.thickness} cm.</span>
	{/if}

	{#if $gallB.ductus}
		<span> Bendrasis tulžies pūslės latakas yra {$gallB.ductus}.</span>
	{/if}

	{#if $gallB.ductusCm}
		<span>Bendrojo tulžies pūslės latako plotis skersiniame pjūvyje yra {$gallB.ductusCm} cm.</span>
	{/if}

	{#if $gallB.otherChanges}
		<span>{$gallB.otherChanges}.</span>
	{/if}
</div>
