<script>
	import { adrenalsL, adrenalsR } from '../../stores/description';
</script>
<div class="mb-2">
<div >
	{#if JSON.stringify($adrenalsL) !== '{}'}
		<span>Kairys prieinkstis-</span>
	{/if}
	{#if $adrenalsL.echogen}
		<span>Prieinksčio žievė aplinkui esantiems riebalams yra {$adrenalsL.echogen}.</span>
	{/if}

	{#if $adrenalsL.length}
		<span>Prienksčio ilgis {$adrenalsL.length} cm.</span>
	{/if}

	{#if $adrenalsL.widthFront && $adrenalsL.widthBack}
		<span
			>Priekinio poliaus plotis {$adrenalsL.widthFront} cm., galinio poliaus plotis {$adrenalsL.widthBack}
			cm.</span
		>
	{:else if $adrenalsL.widthFront}
		<span>Priekinio poliaus plotis {$adrenalsL.widthFront} cm.</span>
	{:else if $adrenalsL.widthBack}
		<span>Galinio poliaus plotis {$adrenalsL.widthBack} cm.</span>
	{/if}

	{#if $adrenalsL.otherChanges}
		<span>{$adrenalsL.otherChanges}.</span>
	{/if}
</div>

<div>
	{#if JSON.stringify($adrenalsR) !== '{}'}
		<span>Dešinys prieinkstis-</span>
	{/if}
	{#if $adrenalsR.echogen}
		<span>Prieinksčio žievė aplinkui esantiems riebalams yra {$adrenalsR.echogen}.</span>
	{/if}

	{#if $adrenalsR.length}
		<span>Prienksčio ilgis {$adrenalsR.length} cm.</span>
	{/if}

	{#if $adrenalsR.widthFront && $adrenalsR.widthBack}
		<span
			>Priekinio poliaus plotis {$adrenalsR.widthFront} cm., galinio poliaus plotis {$adrenalsR.widthBack}
			cm.</span
		>
	{:else if $adrenalsR.widthFront}
		<span>Priekinio poliaus plotis {$adrenalsR.widthFront} cm.</span>
	{:else if $adrenalsR.widthBack}
		<span>Galinio poliaus plotis {$adrenalsR.widthBack} cm.</span>
	{/if}

	{#if $adrenalsR.otherChanges}
		<span>{$adrenalsR.otherChanges}.</span>
	{/if}
</div>
</div>
