<script>
	import { adrenalsL, adrenalsR } from '../../stores/description';
	import * as TXT from '../../texts/adrenals';
	import NormShow from '../NormShow.svelte';
</script>

<div class="mb-2">
	{#if JSON.stringify($adrenalsL) !== '{}'}
		<span>Kairys prieinkstis-</span>
	{/if}
	{#if $adrenalsL.echogen}
		<span>Prieinksčio žievė aplinkui esantiems riebalams yra {$adrenalsL.echogen}.</span>
	{/if}

	{#if $adrenalsL.length}
		<span
			>Prienksčio ilgis {$adrenalsL.length}cm<NormShow
				cat={TXT.LENGHT_CAT}
				dog={TXT.LENGHT_DOG}
			/>.</span
		>
	{/if}

	{#if $adrenalsL.widthFront && $adrenalsL.widthBack}
		<span
			>Priekinio poliaus plotis {$adrenalsL.widthFront}cm, galinio poliaus plotis {$adrenalsL.widthBack}cm<NormShow
				cat={TXT.WIDTH_CAT}
				dog={TXT.WIDTH_DOG}
			/>.</span
		>
	{:else if $adrenalsL.widthFront}
		<span
			>Priekinio poliaus plotis {$adrenalsL.widthFront}cm<NormShow
				cat={TXT.WIDTH_CAT}
				dog={TXT.WIDTH_DOG}
			/>.</span
		>
	{:else if $adrenalsL.widthBack}
		<span
			>Galinio poliaus plotis {$adrenalsL.widthBack}cm<NormShow
				cat={TXT.WIDTH_CAT}
				dog={TXT.WIDTH_DOG}
			/>.</span
		>
	{/if}

	{#if $adrenalsL.otherChanges}
		<span>{$adrenalsL.otherChanges}.</span>
	{/if}
</div>

<div class="mb-2">
	{#if JSON.stringify($adrenalsR) !== '{}'}
		<span>Dešinys prieinkstis-</span>
	{/if}
	{#if $adrenalsR.echogen}
		<span>Prieinksčio žievė aplinkui esantiems riebalams yra {$adrenalsR.echogen}.</span>
	{/if}

	{#if $adrenalsR.length}
		<span
			>Prienksčio ilgis {$adrenalsR.length}cm <NormShow
				cat={TXT.LENGHT_CAT}
				dog={TXT.LENGHT_DOG}
			/>.</span
		>
	{/if}

	{#if $adrenalsR.widthFront && $adrenalsR.widthBack}
		<span
			>Priekinio poliaus plotis {$adrenalsR.widthFront}cm, galinio poliaus plotis {$adrenalsR.widthBack}cm
			<NormShow cat={TXT.WIDTH_CAT} dog={TXT.WIDTH_DOG} />.</span
		>
	{:else if $adrenalsR.widthFront}
		<span
			>Priekinio poliaus plotis {$adrenalsR.widthFront}cm <NormShow
				cat={TXT.WIDTH_CAT}
				dog={TXT.WIDTH_DOG}
			/>.</span
		>
	{:else if $adrenalsR.widthBack}
		<span
			>Galinio poliaus plotis {$adrenalsR.widthBack}cm <NormShow
				cat={TXT.WIDTH_CAT}
				dog={TXT.WIDTH_DOG}
			/>.</span
		>
	{/if}

	{#if $adrenalsR.otherChanges}
		<span>{$adrenalsR.otherChanges}.</span>
	{/if}
</div>
