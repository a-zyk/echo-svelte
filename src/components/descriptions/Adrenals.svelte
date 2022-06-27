<script>
	import { adrenals } from '../../stores/description';
</script>

{#if $adrenals.echogen}
	<span>Prieinksčio žievė aplinkui esantiems riebalams yra {$adrenals.echogen}.</span>
{/if}

{#if $adrenals.length}
	<span>Prienksčio ilgis {$adrenals.length} cm.</span>
{/if}

{#if $adrenals.widthFront && $adrenals.widthBack}
<span>Priekinio poliaus plotis {$adrenals.widthFront} cm., galinio poliaus plotis {$adrenals.widthBack} cm.</span>
{:else if $adrenals.widthFront}
<span>Priekinio poliaus plotis {$adrenals.widthFront} cm.</span>
{:else if $adrenals.widthBack}
<span>Galinio poliaus plotis {$adrenals.widthBack} cm.</span>
{/if}


{#if $adrenals.otherChanges}
	<span>{$adrenals.otherChanges}.</span>
{/if}