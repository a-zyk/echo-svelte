<script>
	import { intestines } from '../../stores/description';
	import * as TXT from '../../texts/intestines';
	import NormShow from '../NormShow.svelte';
</script>

<div class="mb-2">
	{#if $intestines.thicknessDuo}
		<span>Dvylikapirštės žarnos sienelės storis yra {$intestines.thicknessDuo}cm<NormShow cat={TXT.DUO_CAT} dogSmall={TXT.DUO_DOG_SM} dogMedium={TXT.DUO_DOG_MD} dogLarge={TXT.DUO_DOG_LG}/>.</span>
	{/if}

	{#if $intestines.otherChangesDuo}
		<span>{$intestines.otherChangesDuo}.</span>
	{/if}

	{#if $intestines.thicknessJeju}
		<span>Tusčiosios žarnos sienelės storis yra {$intestines.thicknessJeju}cm<NormShow cat={TXT.JEJU_CAT} dogSmall={TXT.JEJU_DOG_SM} dogMedium={TXT.JEJU_DOG_MD} dogLarge={TXT.JEJU_DOG_LG}/>.</span>
	{/if}

	{#if $intestines.otherChangesJeju}
		<span>{$intestines.otherChangesJeju}.</span>
	{/if}

	{#if $intestines.thicknessCec}
		<span
			>Aklosios žarnos sienelės storis ties ileocekaline jungtimi yra {$intestines.thicknessCec}cm<NormShow cat={TXT.CEC_CAT} dogSmall={TXT.CEC_DOG_SM} dogMedium={TXT.CEC_DOG_MD} dogLarge={TXT.CEC_DOG_LG}/>.</span
		>
	{/if}

	{#if $intestines.otherChangesCec}
		<span>{$intestines.otherChangesCec}.</span>
	{/if}

	{#if $intestines.thicknessCol}
		<span>Storosios žarnos sienelės storis yra {$intestines.thicknessCol}cm<NormShow dog={TXT.COL_DOG} cat={TXT.COL_CAT}/>.</span>
	{/if}

	{#if $intestines.otherChangesCol}
		<span>{$intestines.otherChangesCol}.</span>
	{/if}
</div>
